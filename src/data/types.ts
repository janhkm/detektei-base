// Einsatzgebiete Datenmodell
// Basierend auf PRD v1.1 und SEO-Masterplan

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

// Preis-Typ für Tabellen
export interface PriceItem {
  service: string;
  priceRange: string;
  duration: string;
}

export const STANDARD_PRICES: PriceItem[] = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Observation (Stunde)", priceRange: "60-150€", duration: "-" },
  { service: "Observation (Tag)", priceRange: "800-1.500€", duration: "8-12h" },
  { service: "Personensuche", priceRange: "ab 500€", duration: "3-10 Tage" },
  {
    service: "Wirtschaftsermittlung",
    priceRange: "ab 1.000€",
    duration: "individuell",
  },
];
