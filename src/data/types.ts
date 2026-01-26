// Einsatzgebiete Datenmodell
// Basierend auf PRD v1.1 und SEO-Masterplan
// Erweitert für pSEO-Skalierung (Phase 2)

// ============================================================================
// SEO PAGE ENTITY SYSTEM
// ============================================================================

/**
 * Intent-Klassifikation für SEO-Optimierung
 * - transactional: Seiten mit hoher Kaufabsicht (Stadt-Seiten, Kontakt)
 * - navigational: Übersichtsseiten (Bundesland, Landkreis)
 * - informational: Blog-Artikel, Ratgeber
 */
export type PageIntent = "transactional" | "navigational" | "informational";

/**
 * Schema-Typen für strukturierte Daten
 */
export type SchemaType = 
  | "LocalBusiness" 
  | "Service" 
  | "Article" 
  | "FAQPage" 
  | "BreadcrumbList"
  | "WebPage";

/**
 * Base Page Entity - gemeinsame Felder für alle pSEO-Seiten
 */
export interface PageEntity {
  // Identifikation
  url: string;
  slug: string;
  
  // SEO-Klassifikation
  intent: PageIntent;
  primaryKeyword: string;
  supportingKeywords: string[];
  
  // Hub-Spoke-Beziehungen
  parentHub: string | null;      // URL der übergeordneten Hub-Seite
  relatedPages: string[];        // URLs verwandter Seiten
  
  // Schema-Konfiguration
  schemaTypes: SchemaType[];
  
  // Zeitstempel
  lastModified: string;          // ISO-Datum für Sitemap
  
  // Content-Metriken (für Validierung)
  contentMetrics?: {
    wordCount: number;
    faqCount: number;
    hasKeyTakeaways: boolean;
    internalLinkCount: number;
  };
}

/**
 * Einsatzgebiete Page Entity - erweitert für lokale Seiten
 */
export interface EinsatzgebietPageEntity extends PageEntity {
  pageType: "bundesland" | "landkreis" | "stadt";
  bundeslandId: string;
  landkreisId?: string;
  stadtId?: string;
  
  // Geo-Daten
  coordinates?: { lat: number; lng: number };
  population?: number;
  
  // Lokale SEO-Daten
  areaServed: string;
  nearbyLocations: string[];     // Slugs naheliegender Orte
}

/**
 * Blog Page Entity - erweitert für Artikel
 */
export interface BlogPageEntity extends PageEntity {
  pageType: "article";
  category: string;
  tags: string[];
  
  // Pillar-Cluster-Beziehung
  pillarId?: number;
  clusterId?: number;
  isPublished: boolean;
  
  // Content
  title: string;
  description: string;
  publishDate: string;
  updatedAt?: string;
}

// ============================================================================
// ORIGINAL GEOGRAPHIC DATA TYPES
// ============================================================================

export interface Bundesland {
  id: string;
  name: string;
  slug: string;
  capital: string;
  population: number;
  area_km2: number;
}

export interface Landkreis {
  id: string;
  name: string;
  slug: string;
  bundesland_id: string;
  kreisstadt: string;
  population: number;
  area_km2: number;
}

export interface Stadt {
  id: string;
  name: string;
  slug: string;
  population: number;
  plz: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  landkreis_id: string | null; // null für kreisfreie Städte
  bundesland_id: string;
  is_kreisfrei: boolean;
}

// Hilfsfunktionen für Slugs
export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Build-Regel: Nur Städte >10.000 Einwohner bekommen eigene Seiten
export const MIN_POPULATION_FOR_PAGE = 10000;

export function shouldHavePage(stadt: Stadt): boolean {
  return stadt.population > MIN_POPULATION_FOR_PAGE;
}

// Typen für Seiten-Props
export interface BundeslandPageData {
  bundesland: Bundesland;
  landkreise: Landkreis[];
  kreisfreieStaedte: Stadt[];
}

export interface LandkreisPageData {
  bundesland: Bundesland;
  landkreis: Landkreis;
  staedte: Stadt[];
  kleineGemeinden: string[]; // Namen der Gemeinden <10k (nur Erwähnung)
}

export interface StadtPageData {
  bundesland: Bundesland;
  landkreis: Landkreis | null;
  stadt: Stadt;
  nahegelegeneStaedte: Array<Stadt & { distance_km: number }>;
}

// Service-Kategorien
export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const PRIVAT_SERVICES: ServiceCategory[] = [
  {
    id: "untreue",
    name: "Untreue aufdecken",
    description: "Diskrete Observation bei Verdacht auf Fremdgehen",
    icon: "Heart",
  },
  {
    id: "unterhalt",
    name: "Unterhaltsermittlungen",
    description: "Überprüfung von Einkommens- und Vermögensverhältnissen",
    icon: "Wallet",
  },
  {
    id: "personensuche",
    name: "Personensuche",
    description: "Ermittlung von Aufenthaltsorten und Adressen",
    icon: "Search",
  },
  {
    id: "sorgerecht",
    name: "Sorgerecht & Umgang",
    description: "Beweissicherung bei Verletzung von Sorgerechtspflichten",
    icon: "Users",
  },
  {
    id: "stalking",
    name: "Stalking-Fälle",
    description: "Dokumentation und Beweissicherung bei Stalking",
    icon: "ShieldAlert",
  },
];

export const WIRTSCHAFT_SERVICES: ServiceCategory[] = [
  {
    id: "mitarbeiter",
    name: "Mitarbeiterüberprüfung",
    description: "Background-Checks und Referenzprüfungen",
    icon: "UserCheck",
  },
  {
    id: "krankfeier",
    name: "Krankfeierkontrolle",
    description: "Überprüfung bei Verdacht auf Lohnfortzahlungsbetrug",
    icon: "Thermometer",
  },
  {
    id: "diebstahl",
    name: "Diebstahlermittlung",
    description: "Aufklärung von Diebstahl im Unternehmen",
    icon: "PackageX",
  },
  {
    id: "wettbewerb",
    name: "Wettbewerbsverstöße",
    description: "Ermittlung bei unlauterem Wettbewerb",
    icon: "Scale",
  },
  {
    id: "betrug",
    name: "Betrugsermittlung",
    description: "Aufklärung von Betrug und Unterschlagung",
    icon: "AlertTriangle",
  },
];

// FAQ-Typ für strukturierte Daten
export interface FAQ {
  question: string;
  answer: string;
}

// Preis-Typ für Tabellen (falls benötigt)
export interface PriceItem {
  service: string;
  priceRange: string;
  duration: string;
}

// Hinweis: Konkrete Preise werden nicht mehr angezeigt
// Alle Kosten werden individuell nach Fall und Aufwand berechnet
export const STANDARD_PRICES: PriceItem[] = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "ca. 30 min" },
  { service: "Observation", priceRange: "Individuell", duration: "nach Aufwand" },
  { service: "Personensuche", priceRange: "Individuell", duration: "nach Fall" },
  { service: "Wirtschaftsermittlung", priceRange: "Individuell", duration: "nach Umfang" },
];
