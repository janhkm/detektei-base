/**
 * Pillar-Cluster-Map Integration für interne Verlinkung
 * 
 * Typisierte Utilities zum Arbeiten mit der pillar-cluster-map.json.
 * Ermöglicht:
 * - Abrufen des Pillars zu einem Cluster-Artikel
 * - Abrufen aller Cluster zu einem Pillar
 * - Bidirektionale Lookups für interne Verlinkung
 * - Validierung der Map-Integrität
 */

// JSON Import mit relativer Pfad-Auflösung
import pillarClusterData from "../../content/topics/pillar-cluster-map.json";

// ============================================================================
// TYPES
// ============================================================================

export interface ClusterArticle {
  id: number;
  slug: string;
  linkText: string[];
}

export interface PillarArticle {
  pillarId: number;
  pillarTitle: string;
  pillarSlug: string;
  pillarUrl: string;
  category: string;
  clusters: ClusterArticle[];
  alsoLinkTo: string[];
  status?: "deferred" | "active";
  notes?: string;
}

export interface ServicePageLink {
  url: string;
  linkFrom: string[];
}

export interface PillarClusterMap {
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
    pages: ServicePageLink[];
  };
}

export interface RelatedLink {
  url: string;
  text: string;
  type: "pillar" | "cluster" | "service";
  category?: string;
}

// ============================================================================
// DATA ACCESS
// ============================================================================

// Type assertion für das importierte JSON
const data = pillarClusterData as PillarClusterMap;

/**
 * Gibt alle aktiven Pillars zurück (ohne deferred)
 */
export function getActivePillars(): PillarArticle[] {
  return data.pillars.filter(p => p.status !== "deferred");
}

/**
 * Gibt alle Pillars zurück (inkl. deferred)
 */
export function getAllPillars(): PillarArticle[] {
  return data.pillars;
}

/**
 * Findet einen Pillar anhand seines Slugs
 */
export function getPillarBySlug(slug: string): PillarArticle | undefined {
  return data.pillars.find(p => p.pillarSlug === slug);
}

/**
 * Findet einen Pillar anhand seiner ID
 */
export function getPillarById(id: number): PillarArticle | undefined {
  return data.pillars.find(p => p.pillarId === id);
}

/**
 * Findet den Pillar zu einem Cluster-Artikel (anhand des Cluster-Slugs)
 */
export function getPillarForCluster(clusterSlug: string): PillarArticle | undefined {
  return data.pillars.find(p => 
    p.clusters.some(c => c.slug === clusterSlug)
  );
}

/**
 * Gibt alle Cluster eines Pillars zurück
 */
export function getClustersForPillar(pillarSlug: string): ClusterArticle[] {
  const pillar = getPillarBySlug(pillarSlug);
  return pillar?.clusters || [];
}

/**
 * Prüft ob ein Slug ein Pillar ist
 */
export function isPillar(slug: string): boolean {
  return data.pillars.some(p => p.pillarSlug === slug);
}

/**
 * Prüft ob ein Slug ein Cluster ist
 */
export function isCluster(slug: string): boolean {
  return data.pillars.some(p => 
    p.clusters.some(c => c.slug === slug)
  );
}

/**
 * Gibt die Cluster-Info für einen Cluster-Slug zurück
 */
export function getClusterInfo(clusterSlug: string): ClusterArticle | undefined {
  for (const pillar of data.pillars) {
    const cluster = pillar.clusters.find(c => c.slug === clusterSlug);
    if (cluster) return cluster;
  }
  return undefined;
}

// ============================================================================
// INTERNAL LINKING HELPERS
// ============================================================================

/**
 * Generiert alle relevanten internen Links für einen Artikel
 */
export function getInternalLinksForArticle(slug: string): RelatedLink[] {
  const links: RelatedLink[] = [];
  
  // Prüfe ob es ein Pillar ist
  const pillar = getPillarBySlug(slug);
  if (pillar) {
    // Pillar: Verlinke zu allen Clusters
    for (const cluster of pillar.clusters) {
      links.push({
        url: `/blog/${cluster.slug}`,
        text: cluster.linkText[0] || cluster.slug,
        type: "cluster",
        category: pillar.category,
      });
    }
    
    // Zusätzliche Service-Seiten
    for (const serviceUrl of pillar.alsoLinkTo) {
      links.push({
        url: serviceUrl,
        text: getServicePageTitle(serviceUrl),
        type: "service",
      });
    }
    
    return links;
  }
  
  // Prüfe ob es ein Cluster ist
  const parentPillar = getPillarForCluster(slug);
  if (parentPillar) {
    // Cluster: Verlinke zum Pillar
    links.push({
      url: parentPillar.pillarUrl,
      text: parentPillar.pillarTitle,
      type: "pillar",
      category: parentPillar.category,
    });
    
    // Sibling-Clusters (max 3)
    const siblings = parentPillar.clusters
      .filter(c => c.slug !== slug)
      .slice(0, 3);
    
    for (const sibling of siblings) {
      links.push({
        url: `/blog/${sibling.slug}`,
        text: sibling.linkText[0] || sibling.slug,
        type: "cluster",
        category: parentPillar.category,
      });
    }
    
    // Service-Seiten des Pillars
    for (const serviceUrl of parentPillar.alsoLinkTo.slice(0, 2)) {
      links.push({
        url: serviceUrl,
        text: getServicePageTitle(serviceUrl),
        type: "service",
      });
    }
    
    return links;
  }
  
  // Kein Pillar oder Cluster gefunden
  return [];
}

/**
 * Gibt den passenden Link-Text für einen Artikel zurück (variiert)
 */
export function getLinkTextForArticle(slug: string, variantIndex: number = 0): string {
  // Cluster?
  const cluster = getClusterInfo(slug);
  if (cluster) {
    const idx = variantIndex % cluster.linkText.length;
    return cluster.linkText[idx];
  }
  
  // Pillar?
  const pillar = getPillarBySlug(slug);
  if (pillar) {
    return pillar.pillarTitle;
  }
  
  // Fallback: Slug als Title
  return slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

/**
 * Gibt Service-Seiten zurück, die aus einer bestimmten Kategorie verlinkt werden sollten
 */
export function getServicePagesForCategory(category: string): ServicePageLink[] {
  return data.servicePageLinks.pages.filter(
    p => p.linkFrom.includes(category) || p.linkFrom.includes("ALL")
  );
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Generiert einen lesbaren Titel aus einer Service-URL
 */
function getServicePageTitle(url: string): string {
  const titles: Record<string, string> = {
    "/privatdetektei": "Privatdetektei",
    "/privatdetektei/untreue": "Untreue aufdecken",
    "/privatdetektei/observation": "Observation",
    "/privatdetektei/personensuche": "Personensuche",
    "/privatdetektei/stalking": "Stalking-Fälle",
    "/privatdetektei/sorgerecht": "Sorgerecht & Umgang",
    "/privatdetektei/betrug": "Betrugsermittlung",
    "/wirtschaftsdetektei": "Wirtschaftsdetektei",
    "/wirtschaftsdetektei/krankfeier": "Krankfeierkontrolle",
    "/wirtschaftsdetektei/betrug": "Betrugsermittlung",
    "/wirtschaftsdetektei/wettbewerb": "Wettbewerbsverstöße",
    "/wirtschaftsdetektei/mitarbeiterpruefung": "Mitarbeiterprüfung",
    "/kosten": "Kosten & Preise",
    "/ablauf": "Ablauf",
    "/kontakt": "Kontakt",
    "/rechtliches": "Rechtliches",
    "/ueber-uns": "Über uns",
    "/einsatzgebiete": "Einsatzgebiete",
    "/datenschutz": "Datenschutz",
  };
  
  return titles[url] || url.split("/").pop()?.replace(/-/g, " ") || url;
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Validiert die Integrität der Pillar-Cluster-Map
 * Gibt Warnungen für fehlende Slugs zurück
 */
export function validatePillarClusterMap(existingSlugs: string[]): {
  valid: boolean;
  warnings: string[];
  errors: string[];
} {
  const warnings: string[] = [];
  const errors: string[] = [];
  
  const slugSet = new Set(existingSlugs);
  
  for (const pillar of data.pillars) {
    // Prüfe Pillar-Slug
    if (!slugSet.has(pillar.pillarSlug)) {
      if (pillar.status === "deferred") {
        warnings.push(`Pillar "${pillar.pillarSlug}" ist deferred und existiert noch nicht`);
      } else {
        errors.push(`Pillar "${pillar.pillarSlug}" existiert nicht im Blog`);
      }
    }
    
    // Prüfe Cluster-Slugs
    for (const cluster of pillar.clusters) {
      if (!slugSet.has(cluster.slug)) {
        warnings.push(`Cluster "${cluster.slug}" (Pillar: ${pillar.pillarSlug}) existiert nicht`);
      }
    }
  }
  
  return {
    valid: errors.length === 0,
    warnings,
    errors,
  };
}

/**
 * Gibt eine Zusammenfassung der Pillar-Cluster-Map zurück
 */
export function getPillarClusterStats(): {
  totalPillars: number;
  activePillars: number;
  deferredPillars: number;
  totalClusters: number;
  categories: string[];
  avgClustersPerPillar: number;
} {
  const activePillars = getActivePillars();
  const allClusters = data.pillars.flatMap(p => p.clusters);
  const categories = [...new Set(data.pillars.map(p => p.category))];
  
  return {
    totalPillars: data.pillars.length,
    activePillars: activePillars.length,
    deferredPillars: data.pillars.length - activePillars.length,
    totalClusters: allClusters.length,
    categories,
    avgClustersPerPillar: Math.round(allClusters.length / data.pillars.length * 10) / 10,
  };
}
