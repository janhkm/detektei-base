// Zentrale Daten-API für Einsatzgebiete
import { bundeslaender, getBundeslandBySlug, getBundeslandById } from "./bundeslaender";
import { landkreiseBayern } from "./landkreise/bayern";
import { landkreiseNRW } from "./landkreise/nordrhein-westfalen";
import { landkreiseBaWue } from "./landkreise/baden-wuerttemberg";
import { landkreiseHessen } from "./landkreise/hessen";
import { staedteBayern, kleineGemeindenBayern } from "./staedte/bayern";
import { staedteNRW, kleineGemeindenNRW } from "./staedte/nordrhein-westfalen";
import { staedteBaWue, kleineGemeindenBaWue } from "./staedte/baden-wuerttemberg";
import { staedteHessen, kleineGemeindenHessen } from "./staedte/hessen";
import { staedteBerlin } from "./staedte/berlin";
import { staedteHamburg } from "./staedte/hamburg";
import {
  Bundesland,
  Landkreis,
  Stadt,
  BundeslandPageData,
  LandkreisPageData,
  StadtPageData,
  MIN_POPULATION_FOR_PAGE,
} from "./types";

// Alle Landkreise zusammengeführt
const alleLandkreise: Landkreis[] = [
  ...landkreiseBayern,
  ...landkreiseNRW,
  ...landkreiseBaWue,
  ...landkreiseHessen,
];

// Alle Städte zusammengeführt
const alleStaedte: Stadt[] = [
  ...staedteBayern,
  ...staedteNRW,
  ...staedteBaWue,
  ...staedteHessen,
  ...staedteBerlin,
  ...staedteHamburg,
];

// Alle kleinen Gemeinden
const alleKleinenGemeinden: Record<string, string[]> = {
  ...kleineGemeindenBayern,
  ...kleineGemeindenNRW,
  ...kleineGemeindenBaWue,
  ...kleineGemeindenHessen,
};

// ============================================
// GETTER FUNKTIONEN
// ============================================

export { bundeslaender, getBundeslandBySlug, getBundeslandById };

export function getAllLandkreise(): Landkreis[] {
  return alleLandkreise;
}

export function getLandkreiseByBundesland(bundeslandId: string): Landkreis[] {
  return alleLandkreise.filter((lk) => lk.bundesland_id === bundeslandId);
}

export function getLandkreisBySlug(
  bundeslandSlug: string,
  landkreisSlug: string
): Landkreis | undefined {
  const bundesland = getBundeslandBySlug(bundeslandSlug);
  if (!bundesland) return undefined;

  return alleLandkreise.find(
    (lk) => lk.bundesland_id === bundesland.id && lk.slug === landkreisSlug
  );
}

export function getLandkreisById(id: string): Landkreis | undefined {
  return alleLandkreise.find((lk) => lk.id === id);
}

export function getAllStaedte(): Stadt[] {
  return alleStaedte;
}

export function getStaedteByBundesland(bundeslandId: string): Stadt[] {
  return alleStaedte.filter((s) => s.bundesland_id === bundeslandId);
}

export function getStaedteByLandkreis(landkreisId: string): Stadt[] {
  return alleStaedte.filter((s) => s.landkreis_id === landkreisId);
}

export function getKreisfreieStaedte(bundeslandId: string): Stadt[] {
  return alleStaedte.filter(
    (s) => s.bundesland_id === bundeslandId && s.is_kreisfrei
  );
}

export function getStadtBySlug(slug: string): Stadt | undefined {
  return alleStaedte.find((s) => s.slug === slug);
}

export function getStadtById(id: string): Stadt | undefined {
  return alleStaedte.find((s) => s.id === id);
}

// Nur Städte >10.000 Einwohner (für Seiten-Generierung)
export function getPublishableStaedte(): Stadt[] {
  return alleStaedte.filter((s) => s.population > MIN_POPULATION_FOR_PAGE);
}

export function getPublishableStaedteByLandkreis(landkreisId: string): Stadt[] {
  return alleStaedte.filter(
    (s) => s.landkreis_id === landkreisId && s.population > MIN_POPULATION_FOR_PAGE
  );
}

export function getKleineGemeinden(landkreisId: string): string[] {
  return alleKleinenGemeinden[landkreisId] || [];
}

// ============================================
// DISTANZ-BERECHNUNG (Haversine)
// ============================================

function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Erdradius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

export function getNahegelegeneStaedte(
  stadt: Stadt,
  limit: number = 8
): Array<Stadt & { distance_km: number }> {
  const publishable = getPublishableStaedte().filter((s) => s.id !== stadt.id);

  return publishable
    .map((s) => ({
      ...s,
      distance_km: calculateDistance(
        stadt.coordinates.lat,
        stadt.coordinates.lng,
        s.coordinates.lat,
        s.coordinates.lng
      ),
    }))
    .sort((a, b) => a.distance_km - b.distance_km)
    .slice(0, limit);
}

// ============================================
// PAGE DATA BUILDER
// ============================================

export function getBundeslandPageData(slug: string): BundeslandPageData | null {
  const bundesland = getBundeslandBySlug(slug);
  if (!bundesland) return null;

  return {
    bundesland,
    landkreise: getLandkreiseByBundesland(bundesland.id),
    kreisfreieStaedte: getKreisfreieStaedte(bundesland.id),
  };
}

export function getLandkreisPageData(
  bundeslandSlug: string,
  landkreisSlug: string
): LandkreisPageData | null {
  const bundesland = getBundeslandBySlug(bundeslandSlug);
  if (!bundesland) return null;

  const landkreis = getLandkreisBySlug(bundeslandSlug, landkreisSlug);
  if (!landkreis) return null;

  return {
    bundesland,
    landkreis,
    staedte: getPublishableStaedteByLandkreis(landkreis.id),
    kleineGemeinden: getKleineGemeinden(landkreis.id),
  };
}

export function getStadtPageData(
  bundeslandSlug: string,
  stadtSlug: string,
  landkreisSlug?: string
): StadtPageData | null {
  const bundesland = getBundeslandBySlug(bundeslandSlug);
  if (!bundesland) return null;

  const stadt = getStadtBySlug(stadtSlug);
  if (!stadt || stadt.bundesland_id !== bundesland.id) return null;

  // Prüfe ob Stadt veröffentlicht werden soll
  if (stadt.population <= MIN_POPULATION_FOR_PAGE) return null;

  let landkreis: Landkreis | null = null;
  if (stadt.landkreis_id) {
    landkreis = getLandkreisById(stadt.landkreis_id) || null;
  }

  // Validiere Landkreis-Slug wenn angegeben
  if (landkreisSlug && landkreis && landkreis.slug !== landkreisSlug) {
    return null;
  }

  return {
    bundesland,
    landkreis,
    stadt,
    nahegelegeneStaedte: getNahegelegeneStaedte(stadt),
  };
}

// ============================================
// STATIC PARAMS für Next.js
// ============================================

export function getAllBundeslandParams(): Array<{ bundesland: string }> {
  return bundeslaender.map((b) => ({ bundesland: b.slug }));
}

export function getAllLandkreisParams(): Array<{
  bundesland: string;
  landkreisOderStadt: string;
}> {
  return alleLandkreise.map((lk) => {
    const bundesland = getBundeslandById(lk.bundesland_id);
    return {
      bundesland: bundesland?.slug || "",
      landkreisOderStadt: lk.slug,
    };
  });
}

export function getAllKreisfreieStadtParams(): Array<{
  bundesland: string;
  landkreisOderStadt: string;
}> {
  return alleStaedte
    .filter((s) => s.is_kreisfrei && s.population > MIN_POPULATION_FOR_PAGE)
    .map((s) => {
      const bundesland = getBundeslandById(s.bundesland_id);
      return {
        bundesland: bundesland?.slug || "",
        landkreisOderStadt: s.slug,
      };
    });
}

export function getAllStadtParams(): Array<{
  bundesland: string;
  landkreisOderStadt: string;
  stadt: string;
}> {
  return alleStaedte
    .filter((s) => !s.is_kreisfrei && s.population > MIN_POPULATION_FOR_PAGE)
    .map((s) => {
      const bundesland = getBundeslandById(s.bundesland_id);
      const landkreis = s.landkreis_id ? getLandkreisById(s.landkreis_id) : null;
      return {
        bundesland: bundesland?.slug || "",
        landkreisOderStadt: landkreis?.slug || "",
        stadt: s.slug,
      };
    });
}
