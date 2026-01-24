/**
 * Content Metrics Dashboard
 * 
 * Analysiert die Content-Qualität über alle Seiten hinweg:
 * - Wortanzahl pro Seitentyp
 * - FAQ-Abdeckung
 * - Interne Verlinkung
 * - Varianten-Nutzung
 * - Content-Gaps identifizieren
 * 
 * Ausführen mit: npx tsx scripts/content-metrics.ts
 */

import * as fs from "fs";
import * as path from "path";
import matter from "gray-matter";

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONTENT_DIR = path.join(process.cwd(), "content/posts");
const APP_DIR = path.join(process.cwd(), "src/app");

interface BlogMetrics {
  slug: string;
  title: string;
  category: string;
  wordCount: number;
  faqCount: number;
  hasKeyTakeaways: boolean;
  internalLinks: number;
  externalLinks: number;
  h2Count: number;
  h3Count: number;
  hasSources: boolean;
  date: string;
}

interface CategoryStats {
  category: string;
  articleCount: number;
  avgWordCount: number;
  avgFaqCount: number;
  avgInternalLinks: number;
  minWordCount: number;
  maxWordCount: number;
}

interface ContentReport {
  totalArticles: number;
  publishedArticles: number;
  totalWordCount: number;
  avgWordCount: number;
  categoryStats: CategoryStats[];
  articlesBelowMinimum: BlogMetrics[];
  articlesWithoutFaqs: BlogMetrics[];
  articlesWithFewLinks: BlogMetrics[];
  topArticles: BlogMetrics[];
  bottomArticles: BlogMetrics[];
}

// Mindestanforderungen (aus detektei-base-artikel.mdc)
const MINIMUM_REQUIREMENTS = {
  wordCount: 2000,
  faqCount: 8,
  h2Count: 10,
  internalLinks: 3,
  externalLinks: 5,
};

// ============================================================================
// HELPERS
// ============================================================================

function countWords(text: string): number {
  // Entferne MDX/JSX-Tags
  const cleanText = text
    .replace(/<[^>]+>/g, " ")
    .replace(/\{[^}]+\}/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/#+\s/g, " ")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1");
  
  const words = cleanText.split(/\s+/).filter(w => w.length > 0);
  return words.length;
}

function countHeadings(text: string, level: number): number {
  const regex = new RegExp(`^#{${level}}\\s`, "gm");
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

function countInternalLinks(text: string): number {
  // Markdown links zu internen URLs
  const mdLinks = (text.match(/\]\(\/[^)]+\)/g) || []).length;
  // MDX Links wie <Link href="/">
  const jsxLinks = (text.match(/<Link[^>]+href=["']\/[^"']+["']/g) || []).length;
  return mdLinks + jsxLinks;
}

function countExternalLinks(text: string): number {
  const mdLinks = (text.match(/\]\(https?:\/\/[^)]+\)/g) || []).length;
  const jsxLinks = (text.match(/href=["']https?:\/\/[^"']+["']/g) || []).length;
  return mdLinks + jsxLinks;
}

function hasKeyTakeaways(text: string): boolean {
  return text.includes("<KeyTakeaways") || text.includes("key-takeaways");
}

// ============================================================================
// ANALYSIS
// ============================================================================

function analyzeArticle(filePath: string): BlogMetrics | null {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const { data: frontmatter, content: body } = matter(content);
    
    const slug = path.basename(filePath, ".mdx");
    
    return {
      slug,
      title: frontmatter.title || slug,
      category: frontmatter.category || "uncategorized",
      wordCount: countWords(body),
      faqCount: Array.isArray(frontmatter.faqs) ? frontmatter.faqs.length : 0,
      hasKeyTakeaways: hasKeyTakeaways(body),
      internalLinks: countInternalLinks(body),
      externalLinks: countExternalLinks(body),
      h2Count: countHeadings(body, 2),
      h3Count: countHeadings(body, 3),
      hasSources: Array.isArray(frontmatter.sources) && frontmatter.sources.length > 0,
      date: frontmatter.date || "",
    };
  } catch (error) {
    console.error(`Fehler beim Analysieren von ${filePath}:`, error);
    return null;
  }
}

function analyzeAllArticles(): BlogMetrics[] {
  const metrics: BlogMetrics[] = [];
  
  if (!fs.existsSync(CONTENT_DIR)) {
    return metrics;
  }
  
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".mdx"));
  
  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    const articleMetrics = analyzeArticle(filePath);
    if (articleMetrics) {
      metrics.push(articleMetrics);
    }
  }
  
  return metrics;
}

function generateCategoryStats(articles: BlogMetrics[]): CategoryStats[] {
  const byCategory = new Map<string, BlogMetrics[]>();
  
  for (const article of articles) {
    const existing = byCategory.get(article.category) || [];
    existing.push(article);
    byCategory.set(article.category, existing);
  }
  
  const stats: CategoryStats[] = [];
  
  for (const [category, categoryArticles] of byCategory) {
    const wordCounts = categoryArticles.map(a => a.wordCount);
    const faqCounts = categoryArticles.map(a => a.faqCount);
    const linkCounts = categoryArticles.map(a => a.internalLinks);
    
    stats.push({
      category,
      articleCount: categoryArticles.length,
      avgWordCount: Math.round(sum(wordCounts) / categoryArticles.length),
      avgFaqCount: Math.round(sum(faqCounts) / categoryArticles.length * 10) / 10,
      avgInternalLinks: Math.round(sum(linkCounts) / categoryArticles.length * 10) / 10,
      minWordCount: Math.min(...wordCounts),
      maxWordCount: Math.max(...wordCounts),
    });
  }
  
  return stats.sort((a, b) => b.articleCount - a.articleCount);
}

function generateReport(articles: BlogMetrics[]): ContentReport {
  const categoryStats = generateCategoryStats(articles);
  
  const totalWordCount = sum(articles.map(a => a.wordCount));
  const avgWordCount = articles.length > 0 ? Math.round(totalWordCount / articles.length) : 0;
  
  // Problematische Artikel identifizieren
  const articlesBelowMinimum = articles.filter(a => a.wordCount < MINIMUM_REQUIREMENTS.wordCount);
  const articlesWithoutFaqs = articles.filter(a => a.faqCount < MINIMUM_REQUIREMENTS.faqCount);
  const articlesWithFewLinks = articles.filter(a => a.internalLinks < MINIMUM_REQUIREMENTS.internalLinks);
  
  // Top und Bottom Artikel
  const sortedByQuality = [...articles].sort((a, b) => {
    // Qualitätsscore: Wortanzahl + FAQs*100 + Links*50
    const scoreA = a.wordCount + a.faqCount * 100 + a.internalLinks * 50;
    const scoreB = b.wordCount + b.faqCount * 100 + b.internalLinks * 50;
    return scoreB - scoreA;
  });
  
  return {
    totalArticles: articles.length,
    publishedArticles: articles.filter(a => a.date).length,
    totalWordCount,
    avgWordCount,
    categoryStats,
    articlesBelowMinimum: articlesBelowMinimum.slice(0, 10),
    articlesWithoutFaqs: articlesWithoutFaqs.slice(0, 10),
    articlesWithFewLinks: articlesWithFewLinks.slice(0, 10),
    topArticles: sortedByQuality.slice(0, 5),
    bottomArticles: sortedByQuality.slice(-5).reverse(),
  };
}

function sum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}

// ============================================================================
// REPORT OUTPUT
// ============================================================================

function printReport(report: ContentReport): void {
  console.log("\n" + "=".repeat(80));
  console.log("📊 CONTENT METRICS DASHBOARD");
  console.log("=".repeat(80) + "\n");
  
  // Übersicht
  console.log("📈 ÜBERSICHT:");
  console.log(`   Artikel gesamt:       ${report.totalArticles}`);
  console.log(`   Wörter gesamt:        ${report.totalWordCount.toLocaleString("de-DE")}`);
  console.log(`   Ø Wörter/Artikel:     ${report.avgWordCount.toLocaleString("de-DE")}`);
  console.log("");
  
  // Kategorie-Stats
  console.log("-".repeat(80));
  console.log("\n📁 KATEGORIEN:\n");
  console.log("   Kategorie              | Artikel | Ø Wörter | Ø FAQs | Ø Links |");
  console.log("   " + "-".repeat(70));
  for (const stat of report.categoryStats) {
    const cat = stat.category.padEnd(22);
    const count = String(stat.articleCount).padStart(7);
    const words = String(stat.avgWordCount).padStart(8);
    const faqs = String(stat.avgFaqCount).padStart(6);
    const links = String(stat.avgInternalLinks).padStart(7);
    console.log(`   ${cat} | ${count} | ${words} | ${faqs} | ${links} |`);
  }
  console.log("");
  
  // Probleme
  if (report.articlesBelowMinimum.length > 0) {
    console.log("-".repeat(80));
    console.log(`\n🔴 ARTIKEL UNTER MINIMUM (< ${MINIMUM_REQUIREMENTS.wordCount} Wörter): ${report.articlesBelowMinimum.length}\n`);
    for (const article of report.articlesBelowMinimum.slice(0, 5)) {
      console.log(`   ❌ ${article.slug} (${article.wordCount} Wörter)`);
    }
    if (report.articlesBelowMinimum.length > 5) {
      console.log(`   ... und ${report.articlesBelowMinimum.length - 5} weitere`);
    }
    console.log("");
  }
  
  if (report.articlesWithoutFaqs.length > 0) {
    console.log("-".repeat(80));
    console.log(`\n🟡 ARTIKEL MIT WENIG FAQs (< ${MINIMUM_REQUIREMENTS.faqCount}): ${report.articlesWithoutFaqs.length}\n`);
    for (const article of report.articlesWithoutFaqs.slice(0, 5)) {
      console.log(`   ⚠️  ${article.slug} (${article.faqCount} FAQs)`);
    }
    if (report.articlesWithoutFaqs.length > 5) {
      console.log(`   ... und ${report.articlesWithoutFaqs.length - 5} weitere`);
    }
    console.log("");
  }
  
  if (report.articlesWithFewLinks.length > 0) {
    console.log("-".repeat(80));
    console.log(`\n🟡 ARTIKEL MIT WENIG INTERNEN LINKS (< ${MINIMUM_REQUIREMENTS.internalLinks}): ${report.articlesWithFewLinks.length}\n`);
    for (const article of report.articlesWithFewLinks.slice(0, 5)) {
      console.log(`   ⚠️  ${article.slug} (${article.internalLinks} Links)`);
    }
    if (report.articlesWithFewLinks.length > 5) {
      console.log(`   ... und ${report.articlesWithFewLinks.length - 5} weitere`);
    }
    console.log("");
  }
  
  // Top Artikel
  console.log("-".repeat(80));
  console.log("\n⭐ TOP 5 ARTIKEL (nach Qualitätsscore):\n");
  for (const article of report.topArticles) {
    console.log(`   🏆 ${article.slug}`);
    console.log(`      ${article.wordCount} Wörter | ${article.faqCount} FAQs | ${article.internalLinks} Links`);
  }
  console.log("");
  
  // Bottom Artikel (Verbesserungsbedarf)
  console.log("-".repeat(80));
  console.log("\n📝 VERBESSERUNGSBEDARF (Bottom 5):\n");
  for (const article of report.bottomArticles) {
    console.log(`   📌 ${article.slug}`);
    console.log(`      ${article.wordCount} Wörter | ${article.faqCount} FAQs | ${article.internalLinks} Links`);
  }
  console.log("");
  
  // Empfehlungen
  console.log("=".repeat(80));
  console.log("\n💡 EMPFEHLUNGEN:\n");
  
  if (report.avgWordCount < MINIMUM_REQUIREMENTS.wordCount) {
    console.log(`   • Durchschnittliche Wortanzahl (${report.avgWordCount}) unter Minimum (${MINIMUM_REQUIREMENTS.wordCount})`);
  }
  
  if (report.articlesBelowMinimum.length > 0) {
    console.log(`   • ${report.articlesBelowMinimum.length} Artikel auf Minimum-Wortanzahl erweitern`);
  }
  
  if (report.articlesWithFewLinks.length > 0) {
    console.log(`   • ${report.articlesWithFewLinks.length} Artikel mit mehr internen Links versehen`);
  }
  
  const withoutKeyTakeaways = report.topArticles.filter(a => !a.hasKeyTakeaways).length;
  if (withoutKeyTakeaways > 0) {
    console.log(`   • KeyTakeaways-Box zu Artikeln hinzufügen`);
  }
  
  console.log("\n" + "=".repeat(80) + "\n");
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  console.log("\n🔍 Analysiere Blog-Inhalte...\n");
  
  const articles = analyzeAllArticles();
  
  if (articles.length === 0) {
    console.log("Keine Artikel gefunden in", CONTENT_DIR);
    process.exit(0);
  }
  
  const report = generateReport(articles);
  printReport(report);
  
  // Export als JSON für weitere Verarbeitung
  const outputPath = path.join(process.cwd(), "content-metrics.json");
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`📄 Report exportiert nach: ${outputPath}\n`);
}

main().catch(console.error);
