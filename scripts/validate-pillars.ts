/**
 * Pillar-Cluster Map Validator
 * 
 * Prüft die Integrität der pillar-cluster-map.json:
 * - Existieren alle referenzierten Artikel?
 * - Sind alle Slugs korrekt formatiert?
 * - Gibt es verwaiste Cluster ohne Pillar?
 * - Sind alle internen Links gültig?
 * 
 * Ausführen mit: npx tsx scripts/validate-pillars.ts
 */

import * as fs from "fs";
import * as path from "path";

// ============================================================================
// CONFIGURATION
// ============================================================================

const POSTS_DIR = path.join(process.cwd(), "content/posts");
const PILLAR_MAP_PATH = path.join(process.cwd(), "content/topics/pillar-cluster-map.json");

// ============================================================================
// TYPES
// ============================================================================

interface ClusterArticle {
  id: number;
  slug: string;
  linkText: string[];
}

interface PillarArticle {
  pillarId: number;
  pillarTitle: string;
  pillarSlug: string;
  pillarUrl: string;
  category: string;
  clusters: ClusterArticle[];
  alsoLinkTo: string[];
  status?: string;
  notes?: string;
}

interface PillarClusterMap {
  meta: {
    description: string;
    lastUpdated: string;
    instructions: string;
    activePillars: number;
    deferredPillars: number;
    notes?: string;
  };
  pillars: PillarArticle[];
  servicePageLinks: {
    description: string;
    pages: { url: string; linkFrom: string[] }[];
  };
}

interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    totalPillars: number;
    activePillars: number;
    deferredPillars: number;
    totalClusters: number;
    existingPillars: number;
    existingClusters: number;
    missingPillars: number;
    missingClusters: number;
  };
}

// ============================================================================
// HELPERS
// ============================================================================

function getExistingBlogSlugs(): Set<string> {
  const slugs = new Set<string>();
  
  if (!fs.existsSync(POSTS_DIR)) {
    return slugs;
  }
  
  const files = fs.readdirSync(POSTS_DIR);
  for (const file of files) {
    if (file.endsWith(".mdx")) {
      slugs.add(file.replace(/\.mdx$/, ""));
    }
  }
  
  return slugs;
}

function loadPillarMap(): PillarClusterMap | null {
  try {
    const content = fs.readFileSync(PILLAR_MAP_PATH, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
}

// ============================================================================
// VALIDATION
// ============================================================================

function validatePillarClusterMap(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Load data
  const pillarMap = loadPillarMap();
  if (!pillarMap) {
    return {
      valid: false,
      errors: ["Konnte pillar-cluster-map.json nicht laden"],
      warnings: [],
      stats: {
        totalPillars: 0,
        activePillars: 0,
        deferredPillars: 0,
        totalClusters: 0,
        existingPillars: 0,
        existingClusters: 0,
        missingPillars: 0,
        missingClusters: 0,
      },
    };
  }
  
  const existingSlugs = getExistingBlogSlugs();
  
  // Stats tracking
  let existingPillars = 0;
  let existingClusters = 0;
  let missingPillars = 0;
  let missingClusters = 0;
  const allClusterIds = new Set<number>();
  const allPillarIds = new Set<number>();
  
  // Validate each pillar
  for (const pillar of pillarMap.pillars) {
    // Check for duplicate pillar IDs
    if (allPillarIds.has(pillar.pillarId)) {
      errors.push(`Doppelte Pillar-ID: ${pillar.pillarId}`);
    }
    allPillarIds.add(pillar.pillarId);
    
    // Check pillar article exists (unless deferred)
    if (existingSlugs.has(pillar.pillarSlug)) {
      existingPillars++;
    } else if (pillar.status === "deferred") {
      warnings.push(`Pillar "${pillar.pillarSlug}" ist deferred`);
    } else {
      errors.push(`Pillar-Artikel fehlt: ${pillar.pillarSlug} (ID: ${pillar.pillarId})`);
      missingPillars++;
    }
    
    // Validate slug format
    if (!isValidSlug(pillar.pillarSlug)) {
      errors.push(`Ungültiger Pillar-Slug: ${pillar.pillarSlug}`);
    }
    
    // Validate URL format
    if (!pillar.pillarUrl.startsWith("/blog/")) {
      errors.push(`Pillar-URL muss mit /blog/ beginnen: ${pillar.pillarUrl}`);
    }
    
    // Check each cluster
    for (const cluster of pillar.clusters) {
      // Check for duplicate cluster IDs
      if (allClusterIds.has(cluster.id)) {
        errors.push(`Doppelte Cluster-ID: ${cluster.id} (in Pillar ${pillar.pillarSlug})`);
      }
      allClusterIds.add(cluster.id);
      
      // Check cluster article exists
      if (existingSlugs.has(cluster.slug)) {
        existingClusters++;
      } else {
        warnings.push(`Cluster-Artikel fehlt: ${cluster.slug} (Pillar: ${pillar.pillarSlug})`);
        missingClusters++;
      }
      
      // Validate slug format
      if (!isValidSlug(cluster.slug)) {
        errors.push(`Ungültiger Cluster-Slug: ${cluster.slug}`);
      }
      
      // Check linkText array
      if (!cluster.linkText || cluster.linkText.length === 0) {
        errors.push(`Cluster ${cluster.slug} hat keine linkText-Einträge`);
      }
    }
    
    // Check alsoLinkTo URLs
    for (const url of pillar.alsoLinkTo) {
      if (!isValidInternalUrl(url)) {
        warnings.push(`Möglicherweise ungültige URL in alsoLinkTo: ${url} (Pillar: ${pillar.pillarSlug})`);
      }
    }
  }
  
  // Check for orphan articles (in blog but not in map)
  const mappedSlugs = new Set<string>();
  for (const pillar of pillarMap.pillars) {
    mappedSlugs.add(pillar.pillarSlug);
    for (const cluster of pillar.clusters) {
      mappedSlugs.add(cluster.slug);
    }
  }
  
  for (const slug of existingSlugs) {
    if (!mappedSlugs.has(slug)) {
      warnings.push(`Blog-Artikel "${slug}" ist keinem Pillar zugeordnet`);
    }
  }
  
  // Check meta consistency
  const activePillars = pillarMap.pillars.filter(p => p.status !== "deferred").length;
  const deferredPillars = pillarMap.pillars.filter(p => p.status === "deferred").length;
  
  if (pillarMap.meta.activePillars !== activePillars) {
    warnings.push(`Meta.activePillars (${pillarMap.meta.activePillars}) stimmt nicht mit tatsächlicher Anzahl (${activePillars}) überein`);
  }
  
  if (pillarMap.meta.deferredPillars !== deferredPillars) {
    warnings.push(`Meta.deferredPillars (${pillarMap.meta.deferredPillars}) stimmt nicht mit tatsächlicher Anzahl (${deferredPillars}) überein`);
  }
  
  const totalClusters = pillarMap.pillars.reduce((sum, p) => sum + p.clusters.length, 0);
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalPillars: pillarMap.pillars.length,
      activePillars,
      deferredPillars,
      totalClusters,
      existingPillars,
      existingClusters,
      missingPillars,
      missingClusters,
    },
  };
}

function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug);
}

function isValidInternalUrl(url: string): boolean {
  // Muss mit / beginnen und keine externen URLs sein
  if (!url.startsWith("/")) return false;
  if (url.includes("://")) return false;
  return true;
}

// ============================================================================
// REPORT
// ============================================================================

function printReport(result: ValidationResult): void {
  console.log("\n" + "=".repeat(80));
  console.log("📋 PILLAR-CLUSTER MAP VALIDATION REPORT");
  console.log("=".repeat(80) + "\n");
  
  // Stats
  console.log("📊 STATISTIKEN:");
  console.log(`   Pillars gesamt:       ${result.stats.totalPillars}`);
  console.log(`   - Aktiv:              ${result.stats.activePillars}`);
  console.log(`   - Deferred:           ${result.stats.deferredPillars}`);
  console.log(`   Clusters gesamt:      ${result.stats.totalClusters}`);
  console.log("");
  console.log(`   Pillars existierend:  ${result.stats.existingPillars}/${result.stats.activePillars}`);
  console.log(`   Clusters existierend: ${result.stats.existingClusters}/${result.stats.totalClusters}`);
  console.log("");
  
  // Errors
  if (result.errors.length > 0) {
    console.log("-".repeat(80));
    console.log(`\n🔴 FEHLER (${result.errors.length}):\n`);
    for (const error of result.errors) {
      console.log(`   ❌ ${error}`);
    }
    console.log("");
  }
  
  // Warnings
  if (result.warnings.length > 0) {
    console.log("-".repeat(80));
    console.log(`\n🟡 WARNUNGEN (${result.warnings.length}):\n`);
    for (const warning of result.warnings.slice(0, 20)) {
      console.log(`   ⚠️  ${warning}`);
    }
    if (result.warnings.length > 20) {
      console.log(`   ... und ${result.warnings.length - 20} weitere`);
    }
    console.log("");
  }
  
  // Summary
  console.log("=".repeat(80));
  if (result.valid) {
    console.log("\n✅ Pillar-Cluster-Map ist valide!\n");
  } else {
    console.log("\n❌ Validierung fehlgeschlagen. Bitte Fehler beheben.\n");
  }
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  console.log("\n🔍 Validiere Pillar-Cluster-Map...\n");
  
  const result = validatePillarClusterMap();
  printReport(result);
  
  // Exit code
  if (!result.valid) {
    process.exit(1);
  }
  
  // Auch bei vielen Warnungen warnen, aber nicht abbrechen
  if (result.warnings.length > 10) {
    console.log("⚠️  Viele Warnungen gefunden. Bitte überprüfen.\n");
  }
  
  process.exit(0);
}

main().catch((error) => {
  console.error("Validierung fehlgeschlagen:", error);
  process.exit(1);
});
