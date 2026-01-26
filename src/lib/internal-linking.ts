/**
 * Internal Linking Engine für pSEO
 * 
 * Automatisiert die interne Verlinkung basierend auf:
 * - Pillar-Cluster-Beziehungen
 * - Service-Seiten-Zuordnungen
 * - Kontextuelle Keyword-Matches
 * 
 * Features:
 * - Auto-Injektion von Links in Text
 * - "Weiterlesen" Sektion generieren
 * - Breadcrumb-Logik
 * - Link-Validierung
 */

import {
  getInternalLinksForArticle,
  getPillarForCluster,
  getClustersForPillar,
  isPillar,
  isCluster,
  getServicePagesForCategory,
  getLinkTextForArticle,
  RelatedLink,
} from "./pillar-cluster";

// ============================================================================
// TYPES
// ============================================================================

export interface InternalLink {
  url: string;
  text: string;
  title?: string;
  type: "pillar" | "cluster" | "service" | "contextual" | "nearby";
  priority: number; // 1-10, höher = wichtiger
}

export interface LinkInjectionResult {
  text: string;
  linksInjected: number;
  links: InternalLink[];
}

export interface RelatedContentSection {
  title: string;
  links: InternalLink[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

// ============================================================================
// KEYWORD-LINK MAPPING
// ============================================================================

/**
 * Mapping von Keywords zu internen URLs
 * Wird für kontextuelle Link-Injektion verwendet
 */
const KEYWORD_LINKS: Record<string, { url: string; priority: number }> = {
  // Kosten-Keywords (verweisen auf Kosten-Seite)
  "detektiv kosten": { url: "/kosten", priority: 8 },
  "privatdetektiv kosten": { url: "/kosten", priority: 9 },
  "was kostet ein detektiv": { url: "/kosten", priority: 9 },
  "detektei preise": { url: "/kosten", priority: 7 },
  "kosten detektei": { url: "/kosten", priority: 8 },
  
  // Grundlagen-Keywords
  "was macht ein detektiv": { url: "/blog/privatdetektiv-aufgaben-erklaerung", priority: 8 },
  "was darf ein detektiv": { url: "/blog/was-darf-ein-detektiv", priority: 9 },
  "detektiv befugnisse": { url: "/blog/was-darf-ein-detektiv", priority: 8 },
  "jedermannsrechte": { url: "/rechtliches", priority: 7 },
  
  // Untreue-Keywords
  "fremdgehen beweisen": { url: "/blog/fremdgehen-beweisen-erlaubt", priority: 9 },
  "untreue aufdecken": { url: "/privatdetektei/untreue", priority: 8 },
  "partner überwachen": { url: "/blog/partner-ueberwachen-legal", priority: 8 },
  "ehebruch": { url: "/privatdetektei/untreue", priority: 7 },
  
  // Wirtschaft-Keywords
  "mitarbeiter überwachen": { url: "/blog/mitarbeiter-ueberwachen-erlaubt", priority: 9 },
  "krankfeier": { url: "/wirtschaftsdetektei/krankfeier", priority: 8 },
  "arbeitszeitbetrug": { url: "/wirtschaftsdetektei/krankfeier", priority: 8 },
  "diebstahl betrieb": { url: "/blog/betrieblicher-diebstahl-detektei", priority: 8 },
  
  // Service-Keywords
  "observation": { url: "/privatdetektei/observation", priority: 7 },
  "personensuche": { url: "/privatdetektei/personensuche", priority: 7 },
  "sorgerecht": { url: "/privatdetektei/sorgerecht", priority: 7 },
  "stalking": { url: "/privatdetektei/stalking", priority: 7 },
  
  // Allgemeine Keywords
  "seriöse detektei": { url: "/blog/serioese-detektei-erkennen", priority: 8 },
  "detektei beauftragen": { url: "/blog/detektei-beauftragen-ablauf", priority: 8 },
  "beweise gericht": { url: "/blog/detektiv-beweissicherung-gericht", priority: 8 },
  "gerichtsverwertbar": { url: "/blog/detektiv-beweissicherung-gericht", priority: 7 },
};

// ============================================================================
// LINK GENERATION
// ============================================================================

/**
 * Generiert alle relevanten internen Links für eine Seite
 */
export function getLinksForPage(
  slug: string,
  category?: string,
  excludeUrls: string[] = []
): InternalLink[] {
  const links: InternalLink[] = [];
  const excludeSet = new Set(excludeUrls);
  
  // 1. Pillar-Cluster-Links
  const pillarClusterLinks = getInternalLinksForArticle(slug);
  for (const link of pillarClusterLinks) {
    if (!excludeSet.has(link.url)) {
      links.push({
        url: link.url,
        text: link.text,
        type: link.type,
        priority: link.type === "pillar" ? 10 : link.type === "cluster" ? 8 : 6,
      });
    }
  }
  
  // 2. Service-Seiten für Kategorie
  if (category) {
    const servicePages = getServicePagesForCategory(category);
    for (const page of servicePages.slice(0, 3)) {
      if (!excludeSet.has(page.url)) {
        links.push({
          url: page.url,
          text: getServicePageName(page.url),
          type: "service",
          priority: 5,
        });
      }
    }
  }
  
  // Sortieren nach Priorität
  return links.sort((a, b) => b.priority - a.priority);
}

/**
 * Generiert "Weiterlesen" oder "Verwandte Artikel" Sektion
 */
export function getRelatedContent(
  slug: string,
  options: {
    maxLinks?: number;
    category?: string;
    excludeUrls?: string[];
  } = {}
): RelatedContentSection {
  const { maxLinks = 5, category, excludeUrls = [] } = options;
  
  const allLinks = getLinksForPage(slug, category, excludeUrls);
  const topLinks = allLinks.slice(0, maxLinks);
  
  // Title basierend auf Artikeltyp
  let title = "Weiterlesen";
  if (isPillar(slug)) {
    title = "Vertiefende Artikel";
  } else if (isCluster(slug)) {
    title = "Das könnte Sie auch interessieren";
  }
  
  return {
    title,
    links: topLinks,
  };
}

// ============================================================================
// LINK INJECTION
// ============================================================================

/**
 * Injiziert kontextuelle Links in einen Text
 * Ersetzt Keywords durch Links (max 1x pro Keyword)
 */
export function injectContextualLinks(
  text: string,
  currentPageUrl: string,
  options: {
    maxLinks?: number;
    excludeUrls?: string[];
  } = {}
): LinkInjectionResult {
  const { maxLinks = 3, excludeUrls = [] } = options;
  const excludeSet = new Set([currentPageUrl, ...excludeUrls]);
  
  let result = text;
  const injectedLinks: InternalLink[] = [];
  const usedUrls = new Set<string>();
  
  // Sortiere Keywords nach Länge (längere zuerst für besseres Matching)
  const sortedKeywords = Object.entries(KEYWORD_LINKS)
    .sort((a, b) => b[0].length - a[0].length);
  
  for (const [keyword, linkInfo] of sortedKeywords) {
    // Stoppe wenn max Links erreicht
    if (injectedLinks.length >= maxLinks) break;
    
    // Überspringe wenn URL schon verwendet oder ausgeschlossen
    if (usedUrls.has(linkInfo.url) || excludeSet.has(linkInfo.url)) continue;
    
    // Case-insensitive Suche nach Keyword (nur Wortgrenzen)
    const regex = new RegExp(`\\b(${escapeRegex(keyword)})\\b`, "gi");
    const match = result.match(regex);
    
    if (match) {
      // Nur ersten Match ersetzen
      const originalText = match[0];
      const link = `<a href="${linkInfo.url}" class="internal-link">${originalText}</a>`;
      result = result.replace(regex, link);
      
      usedUrls.add(linkInfo.url);
      injectedLinks.push({
        url: linkInfo.url,
        text: originalText,
        type: "contextual",
        priority: linkInfo.priority,
      });
      
      // Nur einmal pro Keyword ersetzen (nicht global)
      break;
    }
  }
  
  return {
    text: result,
    linksInjected: injectedLinks.length,
    links: injectedLinks,
  };
}

/**
 * Generiert einen formatierten Link-Block für Markdown/MDX
 */
export function generateLinkBlock(links: InternalLink[]): string {
  if (links.length === 0) return "";
  
  const linkLines = links.map(link => 
    `- [${link.text}](${link.url})`
  );
  
  return linkLines.join("\n");
}

// ============================================================================
// BREADCRUMBS
// ============================================================================

/**
 * Generiert Breadcrumbs für Blog-Artikel basierend auf Pillar-Cluster
 */
export function getBlogBreadcrumbs(slug: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Blog", href: "/blog" },
  ];
  
  // Wenn Cluster: Füge Pillar als Zwischenstufe hinzu
  const parentPillar = getPillarForCluster(slug);
  if (parentPillar) {
    breadcrumbs.push({
      label: shortenTitle(parentPillar.pillarTitle, 40),
      href: parentPillar.pillarUrl,
    });
  }
  
  return breadcrumbs;
}

/**
 * Generiert Breadcrumbs für Einsatzgebiete-Seiten
 */
export function getEinsatzgebietBreadcrumbs(
  type: "bundesland" | "landkreis" | "stadt",
  names: {
    bundesland: string;
    bundeslandSlug: string;
    landkreis?: string;
    landkreisSlug?: string;
    stadt?: string;
    stadtSlug?: string;
  }
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Einsatzgebiete", href: "/einsatzgebiete" },
  ];
  
  // Bundesland
  breadcrumbs.push({
    label: names.bundesland,
    href: `/einsatzgebiete/bundesland/${names.bundeslandSlug}`,
  });
  
  // Landkreis (wenn vorhanden)
  if (type !== "bundesland" && names.landkreis && names.landkreisSlug) {
    breadcrumbs.push({
      label: names.landkreis,
      href: `/einsatzgebiete/bundesland/${names.bundeslandSlug}/${names.landkreisSlug}`,
    });
  }
  
  // Stadt (wenn vorhanden)
  if (type === "stadt" && names.stadt && names.stadtSlug && names.landkreisSlug) {
    breadcrumbs.push({
      label: names.stadt,
      href: `/einsatzgebiete/bundesland/${names.bundeslandSlug}/${names.landkreisSlug}/${names.stadtSlug}`,
    });
  }
  
  return breadcrumbs;
}

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Escaped Regex-Sonderzeichen
 */
function escapeRegex(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Kürzt einen Titel auf maxLength Zeichen
 */
function shortenTitle(title: string, maxLength: number): string {
  if (title.length <= maxLength) return title;
  return title.slice(0, maxLength - 3) + "...";
}

/**
 * Gibt einen lesbaren Namen für eine Service-Seite zurück
 */
function getServicePageName(url: string): string {
  const names: Record<string, string> = {
    "/privatdetektei": "Privatdetektei",
    "/privatdetektei/untreue": "Untreue aufdecken",
    "/privatdetektei/observation": "Observation",
    "/privatdetektei/personensuche": "Personensuche",
    "/privatdetektei/stalking": "Stalking-Fälle",
    "/privatdetektei/sorgerecht": "Sorgerecht",
    "/privatdetektei/betrug": "Betrugsermittlung",
    "/wirtschaftsdetektei": "Wirtschaftsdetektei",
    "/wirtschaftsdetektei/krankfeier": "Krankfeierkontrolle",
    "/wirtschaftsdetektei/betrug": "Betrugsermittlung",
    "/wirtschaftsdetektei/wettbewerb": "Wettbewerbsverstöße",
    "/wirtschaftsdetektei/mitarbeiterpruefung": "Mitarbeiterprüfung",
    "/kosten": "Kosten",
    "/ablauf": "Ablauf",
    "/kontakt": "Kontakt",
  };
  
  return names[url] || url.split("/").pop() || url;
}

// ============================================================================
// VALIDATION
// ============================================================================

/**
 * Prüft ob alle internen Links auf existierende Seiten zeigen
 */
export function validateInternalLinks(
  links: InternalLink[],
  existingUrls: Set<string>
): { valid: boolean; brokenLinks: string[] } {
  const brokenLinks: string[] = [];
  
  for (const link of links) {
    if (!existingUrls.has(link.url)) {
      brokenLinks.push(link.url);
    }
  }
  
  return {
    valid: brokenLinks.length === 0,
    brokenLinks,
  };
}

/**
 * Zählt die internen Links in einem HTML/Markdown-Text
 */
export function countInternalLinks(text: string): number {
  // Markdown-Links: [text](/url) oder [text](url)
  const markdownLinks = (text.match(/\[([^\]]+)\]\(\/[^)]+\)/g) || []).length;
  
  // HTML-Links: <a href="/url">
  const htmlLinks = (text.match(/<a[^>]+href=["']\/[^"']+["'][^>]*>/g) || []).length;
  
  return markdownLinks + htmlLinks;
}
