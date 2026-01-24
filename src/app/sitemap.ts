/**
 * Sitemap Index System für pSEO-Skalierung
 * 
 * Erzeugt einen Sitemap-Index mit segmentierten Child-Sitemaps:
 * - sitemap/0 → Statische Seiten + Blog
 * - sitemap/1 → Bayern Einsatzgebiete
 * - sitemap/2 → Baden-Württemberg Einsatzgebiete
 * - ... (pro Bundesland)
 * 
 * Skaliert auf 100k+ Seiten ohne 50k URL-Limit.
 */

import { MetadataRoute } from "next";
import {
  bundeslaender,
  getAllLandkreisParams,
  getAllKreisfreieStadtParams,
  getAllStadtParams,
  getLandkreiseByBundesland,
  getKreisfreieStaedte,
  getPublishableStaedteByLandkreis,
} from "@/data";
import { getAllPosts } from "@/lib/blog";

const baseUrl = "https://detektei-base.de";

// ============================================================================
// SITEMAP INDEX GENERATOR
// ============================================================================

/**
 * Generiert die IDs für alle Sitemaps (für Next.js generateSitemaps)
 * ID 0 = Statische Seiten + Blog
 * ID 1-16 = Bundesländer (nach Index)
 */
export async function generateSitemaps() {
  // ID 0 für statische Seiten + Blog
  // IDs 1-16 für die 16 Bundesländer
  return [
    { id: 0 },
    ...bundeslaender.map((_, index) => ({ id: index + 1 })),
  ];
}

// ============================================================================
// SITEMAP GENERATOR (pro ID)
// ============================================================================

export default async function sitemap({
  id,
}: {
  id: number;
}): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ID 0: Statische Seiten + Blog
  if (id === 0) {
    return generateStaticAndBlogSitemap(now);
  }

  // ID 1-16: Bundesland-spezifische Einsatzgebiete
  const bundeslandIndex = id - 1;
  if (bundeslandIndex >= 0 && bundeslandIndex < bundeslaender.length) {
    const bundesland = bundeslaender[bundeslandIndex];
    return generateBundeslandSitemap(bundesland.id, bundesland.slug, now);
  }

  return [];
}

// ============================================================================
// STATISCHE SEITEN + BLOG SITEMAP
// ============================================================================

function generateStaticAndBlogSitemap(now: Date): MetadataRoute.Sitemap {
  // Statische Seiten
  const staticPages: MetadataRoute.Sitemap = [
    // Core Pages
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kosten`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ablauf`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    
    // Privatdetektei
    { url: `${baseUrl}/privatdetektei`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/privatdetektei/untreue`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/personensuche`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/sorgerecht`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/stalking`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/observation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/betrug`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    
    // Wirtschaftsdetektei
    { url: `${baseUrl}/wirtschaftsdetektei`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/wirtschaftsdetektei/betrug`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/krankfeier`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/wettbewerb`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/versicherungsbetrug`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/mitarbeiterpruefung`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/industriespionage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    
    // Einsatzgebiete Übersicht
    { url: `${baseUrl}/einsatzgebiete`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    
    // Rechtliches
    { url: `${baseUrl}/rechtliches`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    
    // Blog Index
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Blog-Artikel
  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

// ============================================================================
// BUNDESLAND-SPEZIFISCHE SITEMAP
// ============================================================================

function generateBundeslandSitemap(
  bundeslandId: string,
  bundeslandSlug: string,
  now: Date
): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];

  // 1. Bundesland-Seite selbst
  pages.push({
    url: `${baseUrl}/einsatzgebiete/bundesland/${bundeslandSlug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  });

  // 2. Kreisfreie Städte
  const kreisfreieStaedte = getKreisfreieStaedte(bundeslandId);
  for (const stadt of kreisfreieStaedte) {
    pages.push({
      url: `${baseUrl}/einsatzgebiete/bundesland/${bundeslandSlug}/${stadt.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // 3. Landkreise und ihre Städte
  const landkreise = getLandkreiseByBundesland(bundeslandId);
  for (const landkreis of landkreise) {
    // Landkreis-Seite
    pages.push({
      url: `${baseUrl}/einsatzgebiete/bundesland/${bundeslandSlug}/${landkreis.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });

    // Städte im Landkreis
    const staedte = getPublishableStaedteByLandkreis(landkreis.id);
    for (const stadt of staedte) {
      pages.push({
        url: `${baseUrl}/einsatzgebiete/bundesland/${bundeslandSlug}/${landkreis.slug}/${stadt.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return pages;
}
