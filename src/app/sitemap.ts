/**
 * Sitemap für Detektei Base
 * 
 * Generiert eine vollständige Sitemap mit:
 * - Statischen Seiten (Homepage, Services, Rechtliches)
 * - Blog-Artikeln
 * - Einsatzgebieten (Bundesländer, Landkreise, Städte)
 * 
 * WICHTIG: Einsatzgebiete erhalten deterministisch generierte lastmod-Daten,
 * damit nicht alle Seiten das gleiche Datum haben (SEO Best Practice).
 */

import { MetadataRoute } from "next";
import {
  bundeslaender,
  getLandkreiseByBundesland,
  getKreisfreieStaedte,
  getPublishableStaedteByLandkreis,
} from "@/data";
import { getAllPosts } from "@/lib/blog";

const baseUrl = "https://detektei-base.de";

// Fester Startpunkt für Einsatzgebiete-Seiten
// So gewählt, dass mit 60 Tagen Spread alle Daten VOR heute (24.01.2026) liegen
const EINSATZGEBIETE_LAUNCH = new Date("2025-11-15");

// Festes Datum für statische Seiten (letztes größeres Update)
const STATIC_PAGES_DATE = new Date("2026-01-20");

/**
 * Generiert ein deterministisches, einzigartiges Datum basierend auf einem Seed.
 * Das Datum bleibt bei jedem Build gleich, ist aber für jeden Seed unterschiedlich.
 * 
 * @param seed - Ein eindeutiger String (z.B. URL-Slug)
 * @param baseDate - Das Basisdatum von dem aus gerechnet wird
 * @param spreadDays - Über wie viele Tage die Daten verteilt werden sollen
 */
function getUniqueDateFromSeed(seed: string, baseDate: Date, spreadDays: number = 60): Date {
  // Einfacher deterministischer Hash aus dem Seed
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
  }
  
  // Positiver Offset in Tagen (0 bis spreadDays)
  const daysOffset = Math.abs(hash) % spreadDays;
  
  const date = new Date(baseDate);
  date.setDate(date.getDate() + daysOffset);
  return date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  // ============================================================================
  // STATISCHE SEITEN
  // ============================================================================

  // Core Pages - festes Datum für Stabilität
  pages.push(
    { url: baseUrl, lastModified: STATIC_PAGES_DATE, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/kontakt`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ueber-uns`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kosten`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ablauf`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.7 },
  );

  // Privatdetektei
  pages.push(
    { url: `${baseUrl}/privatdetektei`, lastModified: STATIC_PAGES_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/privatdetektei/untreue`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/personensuche`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/sorgerecht`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/stalking`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/observation`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/betrug`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
  );

  // Wirtschaftsdetektei
  pages.push(
    { url: `${baseUrl}/wirtschaftsdetektei`, lastModified: STATIC_PAGES_DATE, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/wirtschaftsdetektei/betrug`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/krankfeier`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/wettbewerb`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/versicherungsbetrug`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/mitarbeiterpruefung`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/industriespionage`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.8 },
  );

  // Einsatzgebiete Übersicht
  pages.push(
    { url: `${baseUrl}/einsatzgebiete`, lastModified: STATIC_PAGES_DATE, changeFrequency: "weekly", priority: 0.9 },
  );

  // Rechtliches (nur die indexierbaren Seiten)
  pages.push(
    { url: `${baseUrl}/rechtliches`, lastModified: STATIC_PAGES_DATE, changeFrequency: "monthly", priority: 0.6 },
    // Impressum, Datenschutz und AGB werden nicht indexiert (siehe robots.ts)
  );

  // Blog Index
  pages.push(
    { url: `${baseUrl}/blog`, lastModified: STATIC_PAGES_DATE, changeFrequency: "weekly", priority: 0.8 },
  );

  // ============================================================================
  // BLOG-ARTIKEL
  // ============================================================================

  try {
    const blogPosts = getAllPosts();
    for (const post of blogPosts) {
      pages.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  } catch (error) {
    console.error("Error loading blog posts for sitemap:", error);
  }

  // ============================================================================
  // EINSATZGEBIETE
  // Jede Seite erhält ein einzigartiges, deterministisches lastmod-Datum
  // ============================================================================

  try {
    for (const bundesland of bundeslaender) {
      // Bundesland-Seite (verteilt über 30 Tage)
      pages.push({
        url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}`,
        lastModified: getUniqueDateFromSeed(bundesland.slug, EINSATZGEBIETE_LAUNCH, 30),
        changeFrequency: "monthly",
        priority: 0.7,
      });

      // Kreisfreie Städte (verteilt über 45 Tage)
      const kreisfreieStaedte = getKreisfreieStaedte(bundesland.id);
      for (const stadt of kreisfreieStaedte) {
        const seed = `${bundesland.slug}-${stadt.slug}`;
        pages.push({
          url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}/${stadt.slug}`,
          lastModified: getUniqueDateFromSeed(seed, EINSATZGEBIETE_LAUNCH, 45),
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }

      // Landkreise und deren Städte
      const landkreise = getLandkreiseByBundesland(bundesland.id);
      for (const landkreis of landkreise) {
        // Landkreis-Seite (verteilt über 45 Tage)
        const landkreisSeed = `${bundesland.slug}-${landkreis.slug}`;
        pages.push({
          url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}`,
          lastModified: getUniqueDateFromSeed(landkreisSeed, EINSATZGEBIETE_LAUNCH, 45),
          changeFrequency: "monthly",
          priority: 0.6,
        });

        // Städte im Landkreis (verteilt über 60 Tage)
        const staedte = getPublishableStaedteByLandkreis(landkreis.id);
        for (const stadt of staedte) {
          const stadtSeed = `${bundesland.slug}-${landkreis.slug}-${stadt.slug}`;
          pages.push({
            url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}/${stadt.slug}`,
            lastModified: getUniqueDateFromSeed(stadtSeed, EINSATZGEBIETE_LAUNCH, 60),
            changeFrequency: "monthly",
            priority: 0.5,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error loading Einsatzgebiete for sitemap:", error);
  }

  return pages;
}
