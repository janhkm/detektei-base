/**
 * Duplicate Content Checker für SEO
 * 
 * Dieses Script analysiert alle Seiten auf potenzielle Duplicate Content Probleme:
 * - Meta-Descriptions
 * - H1-Überschriften
 * - FAQ-Antworten
 * - Fließtexte
 * 
 * Ausführen mit: npx tsx scripts/check-duplicate-content.ts
 */

import * as fs from "fs";
import * as path from "path";

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  // Schwellenwerte für Ähnlichkeit (0-1, wobei 1 = identisch)
  thresholds: {
    metaDescription: 0.85, // 85% Ähnlichkeit = Warnung
    h1: 0.90,
    faqAnswer: 0.90,
    bodyText: 0.80,
  },
  // Mindestlänge für Textvergleich
  minTextLength: 50,
  // Maximale Anzahl an Warnings pro Kategorie
  maxWarningsPerCategory: 20,
  // Ortsnamen die beim Vergleich ignoriert werden
  locationPlaceholder: "{{LOCATION}}",
};

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Berechnet die Levenshtein-Distanz zwischen zwei Strings
 */
function levenshteinDistance(str1: string, str2: string): number {
  const m = str1.length;
  const n = str2.length;

  if (m === 0) return n;
  if (n === 0) return m;

  const dp: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[m][n];
}

/**
 * Berechnet die Ähnlichkeit zwischen zwei Strings (0-1)
 */
function calculateSimilarity(str1: string, str2: string): number {
  if (!str1 || !str2) return 0;
  if (str1 === str2) return 1;

  const maxLen = Math.max(str1.length, str2.length);
  if (maxLen === 0) return 1;

  const distance = levenshteinDistance(str1, str2);
  return 1 - distance / maxLen;
}

/**
 * Normalisiert Text für Vergleich (Kleinbuchstaben, keine Sonderzeichen)
 */
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/[^\w\säöüß]/g, "")
    .trim();
}

/**
 * Ersetzt bekannte Ortsnamen durch Platzhalter
 */
function replaceLocationNames(text: string, locations: string[]): string {
  let result = text;
  for (const location of locations) {
    const regex = new RegExp(location, "gi");
    result = result.replace(regex, CONFIG.locationPlaceholder);
  }
  return result;
}

/**
 * Extrahiert Ortsnamen aus dem Datensatz
 */
function getLocationNames(): string[] {
  const locations: string[] = [];

  // Bundesländer
  const bundeslaenderPath = path.join(
    process.cwd(),
    "src/data/bundeslaender.ts"
  );
  if (fs.existsSync(bundeslaenderPath)) {
    const content = fs.readFileSync(bundeslaenderPath, "utf-8");
    const nameMatches = content.matchAll(/name:\s*["']([^"']+)["']/g);
    for (const match of nameMatches) {
      locations.push(match[1]);
    }
  }

  // Landkreise
  const landkreiseDir = path.join(process.cwd(), "src/data/landkreise");
  if (fs.existsSync(landkreiseDir)) {
    const files = fs.readdirSync(landkreiseDir);
    for (const file of files) {
      if (file.endsWith(".ts")) {
        const content = fs.readFileSync(
          path.join(landkreiseDir, file),
          "utf-8"
        );
        const nameMatches = content.matchAll(/name:\s*["']([^"']+)["']/g);
        for (const match of nameMatches) {
          locations.push(match[1]);
        }
      }
    }
  }

  // Städte
  const staedteDir = path.join(process.cwd(), "src/data/staedte");
  if (fs.existsSync(staedteDir)) {
    const files = fs.readdirSync(staedteDir);
    for (const file of files) {
      if (file.endsWith(".ts")) {
        const content = fs.readFileSync(path.join(staedteDir, file), "utf-8");
        const nameMatches = content.matchAll(/name:\s*["']([^"']+)["']/g);
        for (const match of nameMatches) {
          locations.push(match[1]);
        }
      }
    }
  }

  // Sortieren nach Länge (längste zuerst) für besseres Matching
  return [...new Set(locations)].sort((a, b) => b.length - a.length);
}

// ============================================================================
// PAGE CONTENT EXTRACTION
// ============================================================================

interface PageContent {
  path: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
  faqAnswers: string[];
  bodyText: string;
}

/**
 * Prüft ob ein String eine JSX-Variable ist (z.B. {h1}, {introText})
 */
function isDynamicVariable(text: string): boolean {
  // Erkennt: {h1}, {variableName}, etc.
  const trimmed = text.trim();
  return /^\{[a-zA-Z_][a-zA-Z0-9_]*\}$/.test(trimmed);
}

/**
 * Extrahiert Seiteninhalte aus einer TSX-Datei
 */
function extractPageContent(filePath: string): PageContent | null {
  try {
    const content = fs.readFileSync(filePath, "utf-8");

    // Meta-Title
    const titleMatch = content.match(
      /title:\s*[`"']([^`"']+)[`"']|title:\s*`([^`]+)`/
    );
    let metaTitle = titleMatch ? titleMatch[1] || titleMatch[2] : undefined;
    
    // Ignoriere wenn es eine Funktion ist (z.B. getStadtTitle(...))
    if (metaTitle && metaTitle.includes("(")) {
      metaTitle = undefined; // Dynamisch generiert
    }

    // Meta-Description
    const descMatch = content.match(
      /description:\s*[`"']([^`"']+)[`"']|description:\s*`([^`]+)`/
    );
    let metaDescription = descMatch
      ? descMatch[1] || descMatch[2]
      : undefined;
    
    // Ignoriere wenn es eine Funktion ist
    if (metaDescription && metaDescription.includes("(")) {
      metaDescription = undefined; // Dynamisch generiert
    }

    // H1 (verschiedene Patterns)
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/i);
    let h1 = h1Match ? h1Match[1].trim() : undefined;
    
    // Ignoriere wenn H1 eine dynamische Variable ist
    if (h1 && isDynamicVariable(h1)) {
      h1 = undefined; // Dynamisch generiert - kein Problem
    }

    // FAQ Antworten
    const faqAnswers: string[] = [];
    const answerMatches = content.matchAll(/answer:\s*[`"']([^`"']+)[`"']/g);
    for (const match of answerMatches) {
      faqAnswers.push(match[1]);
    }

    // Body Text (alle String-Literale im JSX)
    const bodyTextMatches = content.matchAll(/>([^<>{]+)</g);
    let bodyText = "";
    for (const match of bodyTextMatches) {
      const text = match[1].trim();
      if (text.length > 20 && !text.includes("className")) {
        bodyText += " " + text;
      }
    }

    return {
      path: filePath,
      metaTitle,
      metaDescription,
      h1,
      faqAnswers,
      bodyText: bodyText.trim(),
    };
  } catch (error) {
    return null;
  }
}

/**
 * Findet alle Page-Dateien rekursiv
 */
function findPageFiles(dir: string): string[] {
  const results: string[] = [];

  if (!fs.existsSync(dir)) return results;

  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results.push(...findPageFiles(fullPath));
    } else if (item === "page.tsx") {
      results.push(fullPath);
    }
  }

  return results;
}

// ============================================================================
// DUPLICATE DETECTION
// ============================================================================

interface DuplicateWarning {
  type: "meta-description" | "h1" | "faq-answer" | "body-text";
  severity: "high" | "medium" | "low";
  similarity: number;
  page1: string;
  page2: string;
  text1: string;
  text2: string;
  normalizedText?: string;
}

function detectDuplicates(
  pages: PageContent[],
  locations: string[]
): DuplicateWarning[] {
  const warnings: DuplicateWarning[] = [];

  console.log("\n🔍 Analysiere Seiten auf Duplicate Content...\n");

  // 1. Meta-Descriptions prüfen
  console.log("  📝 Prüfe Meta-Descriptions...");
  const metaDescWarnings = checkMetaDescriptions(pages, locations);
  warnings.push(...metaDescWarnings);
  console.log(`     → ${metaDescWarnings.length} potenzielle Duplicates gefunden`);

  // 2. H1-Überschriften prüfen
  console.log("  📌 Prüfe H1-Überschriften...");
  const h1Warnings = checkH1s(pages, locations);
  warnings.push(...h1Warnings);
  console.log(`     → ${h1Warnings.length} potenzielle Duplicates gefunden`);

  // 3. FAQ-Antworten prüfen
  console.log("  ❓ Prüfe FAQ-Antworten...");
  const faqWarnings = checkFAQAnswers(pages, locations);
  warnings.push(...faqWarnings);
  console.log(`     → ${faqWarnings.length} potenzielle Duplicates gefunden`);

  // 4. Template-Patterns erkennen
  console.log("  📄 Prüfe auf identische Templates...");
  const templateWarnings = checkTemplatePatterns(pages, locations);
  warnings.push(...templateWarnings);
  console.log(`     → ${templateWarnings.length} Template-Patterns gefunden`);

  return warnings;
}

function checkMetaDescriptions(
  pages: PageContent[],
  locations: string[]
): DuplicateWarning[] {
  const warnings: DuplicateWarning[] = [];
  const checked = new Set<string>();

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const p1 = pages[i];
      const p2 = pages[j];

      if (!p1.metaDescription || !p2.metaDescription) continue;

      const key = `${i}-${j}`;
      if (checked.has(key)) continue;
      checked.add(key);

      // Ortsnamen ersetzen für fairen Vergleich
      const norm1 = normalizeText(
        replaceLocationNames(p1.metaDescription, locations)
      );
      const norm2 = normalizeText(
        replaceLocationNames(p2.metaDescription, locations)
      );

      const similarity = calculateSimilarity(norm1, norm2);

      if (similarity >= CONFIG.thresholds.metaDescription) {
        warnings.push({
          type: "meta-description",
          severity: similarity >= 0.95 ? "high" : similarity >= 0.9 ? "medium" : "low",
          similarity,
          page1: p1.path,
          page2: p2.path,
          text1: p1.metaDescription,
          text2: p2.metaDescription,
          normalizedText: norm1,
        });

        if (warnings.length >= CONFIG.maxWarningsPerCategory) break;
      }
    }
    if (warnings.length >= CONFIG.maxWarningsPerCategory) break;
  }

  return warnings;
}

function checkH1s(
  pages: PageContent[],
  locations: string[]
): DuplicateWarning[] {
  const warnings: DuplicateWarning[] = [];

  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const p1 = pages[i];
      const p2 = pages[j];

      if (!p1.h1 || !p2.h1) continue;

      const norm1 = normalizeText(replaceLocationNames(p1.h1, locations));
      const norm2 = normalizeText(replaceLocationNames(p2.h1, locations));

      const similarity = calculateSimilarity(norm1, norm2);

      if (similarity >= CONFIG.thresholds.h1) {
        warnings.push({
          type: "h1",
          severity: similarity >= 0.95 ? "high" : "medium",
          similarity,
          page1: p1.path,
          page2: p2.path,
          text1: p1.h1,
          text2: p2.h1,
          normalizedText: norm1,
        });

        if (warnings.length >= CONFIG.maxWarningsPerCategory) break;
      }
    }
    if (warnings.length >= CONFIG.maxWarningsPerCategory) break;
  }

  return warnings;
}

function checkFAQAnswers(
  pages: PageContent[],
  locations: string[]
): DuplicateWarning[] {
  const warnings: DuplicateWarning[] = [];
  const answerHashes = new Map<string, { page: string; original: string }[]>();

  // Alle FAQ-Antworten sammeln und normalisieren
  for (const page of pages) {
    for (const answer of page.faqAnswers) {
      const normalized = normalizeText(replaceLocationNames(answer, locations));

      if (normalized.length < CONFIG.minTextLength) continue;

      if (!answerHashes.has(normalized)) {
        answerHashes.set(normalized, []);
      }
      answerHashes.get(normalized)!.push({ page: page.path, original: answer });
    }
  }

  // Identische Antworten finden
  for (const [normalized, occurrences] of answerHashes.entries()) {
    if (occurrences.length > 1) {
      // Nur verschiedene Seiten zählen
      const uniquePages = new Set(occurrences.map((o) => o.page));
      if (uniquePages.size > 1) {
        warnings.push({
          type: "faq-answer",
          severity: "high",
          similarity: 1.0,
          page1: occurrences[0].page,
          page2: `${uniquePages.size} Seiten`,
          text1: occurrences[0].original,
          text2: `Identisch auf ${uniquePages.size} Seiten`,
          normalizedText: normalized.substring(0, 100) + "...",
        });
      }
    }
  }

  return warnings.slice(0, CONFIG.maxWarningsPerCategory);
}

function checkTemplatePatterns(
  pages: PageContent[],
  locations: string[]
): DuplicateWarning[] {
  const warnings: DuplicateWarning[] = [];
  const templatePatterns = new Map<string, string[]>();

  // Seiten nach Ordner gruppieren (z.B. alle Stadt-Seiten)
  for (const page of pages) {
    // Template-Pattern aus Pfad extrahieren
    const pattern = page.path
      .replace(/\[[\w]+\]/g, "[param]")
      .replace(/\/[\w-]+\/page\.tsx$/, "/[param]/page.tsx");

    if (!templatePatterns.has(pattern)) {
      templatePatterns.set(pattern, []);
    }
    templatePatterns.get(pattern)!.push(page.path);
  }

  // Warnung für große Template-Gruppen
  for (const [pattern, pagePaths] of templatePatterns.entries()) {
    if (pagePaths.length > 10) {
      warnings.push({
        type: "body-text",
        severity: "medium",
        similarity: 1.0,
        page1: pattern,
        page2: `${pagePaths.length} Seiten`,
        text1: `Template-Pattern: ${pattern}`,
        text2: `${pagePaths.length} Seiten nutzen das gleiche Template`,
        normalizedText: "Empfehlung: Einzigartige Inhalte pro Seite hinzufügen",
      });
    }
  }

  return warnings;
}

// ============================================================================
// REPORT GENERATION
// ============================================================================

function generateReport(warnings: DuplicateWarning[]): void {
  console.log("\n" + "=".repeat(80));
  console.log("📊 DUPLICATE CONTENT REPORT");
  console.log("=".repeat(80) + "\n");

  if (warnings.length === 0) {
    console.log("✅ Keine kritischen Duplicate Content Probleme gefunden!\n");
    return;
  }

  // Nach Severity gruppieren
  const highSeverity = warnings.filter((w) => w.severity === "high");
  const mediumSeverity = warnings.filter((w) => w.severity === "medium");
  const lowSeverity = warnings.filter((w) => w.severity === "low");

  // Zusammenfassung
  console.log("📈 ZUSAMMENFASSUNG:");
  console.log(`   🔴 Hoch:   ${highSeverity.length} Probleme`);
  console.log(`   🟡 Mittel: ${mediumSeverity.length} Probleme`);
  console.log(`   🟢 Niedrig: ${lowSeverity.length} Probleme`);
  console.log("");

  // Nach Typ gruppieren
  const byType = new Map<string, DuplicateWarning[]>();
  for (const w of warnings) {
    if (!byType.has(w.type)) byType.set(w.type, []);
    byType.get(w.type)!.push(w);
  }

  // Details pro Typ
  for (const [type, typeWarnings] of byType.entries()) {
    console.log("-".repeat(80));
    console.log(`\n📁 ${type.toUpperCase()} (${typeWarnings.length} Probleme)\n`);

    const sorted = typeWarnings.sort((a, b) => b.similarity - a.similarity);

    for (const w of sorted.slice(0, 5)) {
      const icon = w.severity === "high" ? "🔴" : w.severity === "medium" ? "🟡" : "🟢";
      console.log(`${icon} Ähnlichkeit: ${(w.similarity * 100).toFixed(1)}%`);
      console.log(`   Seite 1: ${w.page1.replace(process.cwd(), "")}`);
      console.log(`   Seite 2: ${w.page2.replace(process.cwd(), "")}`);
      if (w.normalizedText) {
        console.log(`   Pattern: "${w.normalizedText.substring(0, 60)}..."`);
      }
      console.log("");
    }

    if (sorted.length > 5) {
      console.log(`   ... und ${sorted.length - 5} weitere\n`);
    }
  }

  // Empfehlungen
  console.log("=".repeat(80));
  console.log("\n💡 EMPFEHLUNGEN:\n");

  if (byType.has("meta-description")) {
    console.log("📝 Meta-Descriptions:");
    console.log("   • Fügen Sie stadtspezifische Details hinzu (Einwohnerzahl, Besonderheiten)");
    console.log("   • Variieren Sie die Satzstruktur zwischen Städten");
    console.log("   • Nutzen Sie lokale Keywords unterschiedlich\n");
  }

  if (byType.has("faq-answer")) {
    console.log("❓ FAQ-Antworten:");
    console.log("   • Erstellen Sie Template-Varianten mit unterschiedlichen Formulierungen");
    console.log("   • Fügen Sie lokale Informationen hinzu (regionale Besonderheiten)");
    console.log("   • Verwenden Sie einen Pool verschiedener Antwort-Varianten\n");
  }

  if (byType.has("body-text")) {
    console.log("📄 Seiteninhalt:");
    console.log("   • Ergänzen Sie einzigartige lokale Inhalte pro Stadt");
    console.log("   • Erwägen Sie Canonical-Tags für sehr ähnliche Seiten");
    console.log("   • Fügen Sie stadtspezifische FAQs oder Informationen hinzu\n");
  }

  console.log("=".repeat(80) + "\n");
}

// ============================================================================
// FAQ TEMPLATE ANALYSIS
// ============================================================================

interface FAQTemplateWarning {
  templateFile: string;
  functionName: string;
  answerCount: number;
  uniquePatterns: number;
  duplicatePatterns: string[];
}

function analyzeFAQTemplates(): FAQTemplateWarning[] {
  const warnings: FAQTemplateWarning[] = [];
  const faqsPath = path.join(process.cwd(), "src/lib/faqs.ts");

  if (!fs.existsSync(faqsPath)) return warnings;

  const content = fs.readFileSync(faqsPath, "utf-8");

  // Finde alle FAQ-Funktionen
  const functionMatches = content.matchAll(
    /export function (\w+FAQs)\([^)]+\):\s*FAQ\[\]\s*\{([\s\S]*?)^\}/gm
  );

  for (const match of functionMatches) {
    const functionName = match[1];
    const functionBody = match[2];

    // Extrahiere alle answer-Werte
    const answerMatches = functionBody.matchAll(/answer:\s*`([^`]+)`/g);
    const answers: string[] = [];
    for (const answerMatch of answerMatches) {
      answers.push(answerMatch[1]);
    }

    // Normalisiere Antworten (entferne ${...} Interpolationen)
    const normalizedAnswers = answers.map((a) =>
      normalizeText(a.replace(/\$\{[^}]+\}/g, "PLACEHOLDER"))
    );

    // Finde Duplikate
    const seen = new Map<string, number>();
    const duplicates: string[] = [];

    for (const norm of normalizedAnswers) {
      const count = seen.get(norm) || 0;
      seen.set(norm, count + 1);
    }

    for (const [pattern, count] of seen.entries()) {
      if (count > 1) {
        duplicates.push(pattern.substring(0, 60) + "...");
      }
    }

    // Warnung wenn alle Antworten zu ähnlich strukturiert sind
    if (answers.length > 3) {
      // Prüfe ob die Antworten alle das gleiche Schema haben
      const structures = normalizedAnswers.map((a) => {
        // Extrahiere "Struktur" (Wortanzahl, Satzanzahl)
        const words = a.split(" ").length;
        const sentences = a.split(/[.!?]/).length;
        return `${Math.floor(words / 10) * 10}-${sentences}`;
      });

      const uniqueStructures = new Set(structures);

      warnings.push({
        templateFile: faqsPath,
        functionName,
        answerCount: answers.length,
        uniquePatterns: uniqueStructures.size,
        duplicatePatterns: duplicates,
      });
    }
  }

  return warnings;
}

function printFAQTemplateAnalysis(warnings: FAQTemplateWarning[]): void {
  if (warnings.length === 0) return;

  console.log("\n" + "-".repeat(80));
  console.log("\n📋 FAQ-TEMPLATE ANALYSE\n");

  for (const w of warnings) {
    const variationScore = ((w.uniquePatterns / w.answerCount) * 100).toFixed(0);
    const icon = parseInt(variationScore) < 50 ? "🔴" : parseInt(variationScore) < 70 ? "🟡" : "🟢";

    console.log(`${icon} ${w.functionName}:`);
    console.log(`   Antworten: ${w.answerCount}`);
    console.log(`   Struktur-Variation: ${variationScore}%`);

    if (w.duplicatePatterns.length > 0) {
      console.log(`   ⚠️  ${w.duplicatePatterns.length} identische Patterns gefunden`);
    }
    console.log("");
  }

  console.log("💡 Empfehlung für FAQ-Templates:");
  console.log("   • Erstellen Sie 2-3 Varianten pro Antwort-Typ");
  console.log("   • Variieren Sie Satzstruktur und Formulierungen");
  console.log("   • Fügen Sie regionale Besonderheiten ein wo möglich\n");
}

// ============================================================================
// META DESCRIPTION TEMPLATE ANALYSIS
// ============================================================================

function analyzeMetaTemplates(): void {
  console.log("\n" + "-".repeat(80));
  console.log("\n📝 META-DESCRIPTION TEMPLATE ANALYSE\n");

  const einsatzgebieteDir = path.join(process.cwd(), "src/app/einsatzgebiete");
  if (!fs.existsSync(einsatzgebieteDir)) return;

  const pageFiles = findPageFiles(einsatzgebieteDir);
  const templates: Map<string, string[]> = new Map();

  for (const file of pageFiles) {
    const content = fs.readFileSync(file, "utf-8");

    // Finde Meta-Description Template
    const descMatch = content.match(
      /description:\s*`([^`]+)`|description:\s*"([^"]+)"/
    );
    if (descMatch) {
      const desc = descMatch[1] || descMatch[2];
      // Normalisiere (entferne Variablen)
      const normalized = desc
        .replace(/\$\{[^}]+\}/g, "{{VAR}}")
        .replace(/\s+/g, " ")
        .trim();

      if (!templates.has(normalized)) {
        templates.set(normalized, []);
      }
      templates.get(normalized)!.push(file);
    }
  }

  for (const [template, files] of templates.entries()) {
    if (files.length > 1) {
      console.log(`🔸 Template wird ${files.length}x verwendet:`);
      console.log(`   "${template.substring(0, 70)}..."`);
      console.log(`   Seiten: ${files.map((f) => path.basename(path.dirname(f))).join(", ")}`);
      console.log("");
    }
  }

  if (templates.size < 3) {
    console.log("💡 Empfehlung:");
    console.log("   Erstellen Sie mehr Varianten für Meta-Descriptions:");
    console.log("   • Stadt-Seiten: Erwähnen Sie Einwohnerzahl oder Besonderheiten");
    console.log("   • Landkreis-Seiten: Nennen Sie die Anzahl der Städte");
    console.log("   • Bundesland-Seiten: Fügen Sie regionale Keywords ein\n");
  }
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  console.log("\n🚀 Duplicate Content Checker gestartet...\n");

  // Ortsnamen laden
  console.log("📍 Lade Ortsnamen...");
  const locations = getLocationNames();
  console.log(`   → ${locations.length} Ortsnamen geladen`);

  // Seiten finden
  const appDir = path.join(process.cwd(), "src/app");
  console.log("\n📂 Suche Seiten...");
  const pageFiles = findPageFiles(appDir);
  console.log(`   → ${pageFiles.length} Seiten gefunden`);

  // Inhalte extrahieren
  console.log("\n📖 Extrahiere Seiteninhalte...");
  const pages: PageContent[] = [];
  for (const file of pageFiles) {
    const content = extractPageContent(file);
    if (content) pages.push(content);
  }
  console.log(`   → ${pages.length} Seiten analysiert`);

  // Duplicates erkennen
  const warnings = detectDuplicates(pages, locations);

  // Report generieren
  generateReport(warnings);

  // FAQ Template Analyse
  const faqWarnings = analyzeFAQTemplates();
  printFAQTemplateAnalysis(faqWarnings);

  // Meta Template Analyse
  analyzeMetaTemplates();

  // Exit-Code basierend auf Severity
  const hasHighSeverity = warnings.some((w) => w.severity === "high");
  if (hasHighSeverity) {
    console.log("⚠️  High-Severity Probleme gefunden. Bitte überprüfen!\n");
    process.exit(1);
  } else {
    console.log("✅ Keine kritischen Probleme. Empfehlungen beachten.\n");
    process.exit(0);
  }
}

main().catch(console.error);
