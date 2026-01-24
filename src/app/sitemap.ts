/**
 * Sitemap für Detektei Base
 * 
 * Generiert eine vollständige Sitemap mit:
 * - Statischen Seiten (Homepage, Services, Rechtliches)
 * - Blog-Artikeln
 * - Einsatzgebieten (Bundesländer, Landkreise, Städte)
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [];

  // ============================================================================
  // STATISCHE SEITEN
  // ============================================================================

  // Core Pages
  pages.push(
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ueber-uns`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/kosten`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ablauf`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  );

  // Privatdetektei
  pages.push(
    { url: `${baseUrl}/privatdetektei`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/privatdetektei/untreue`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/personensuche`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/sorgerecht`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/stalking`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/observation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privatdetektei/betrug`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  );

  // Wirtschaftsdetektei
  pages.push(
    { url: `${baseUrl}/wirtschaftsdetektei`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/wirtschaftsdetektei/betrug`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/krankfeier`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/wettbewerb`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/versicherungsbetrug`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/mitarbeiterpruefung`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/wirtschaftsdetektei/industriespionage`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  );

  // Einsatzgebiete Übersicht
  pages.push(
    { url: `${baseUrl}/einsatzgebiete`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  );

  // Rechtliches
  pages.push(
    { url: `${baseUrl}/rechtliches`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  );

  // Blog Index
  pages.push(
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
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
  // ============================================================================

  try {
    for (const bundesland of bundeslaender) {
      // Bundesland-Seite
      pages.push({
        url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });

      // Kreisfreie Städte
      const kreisfreieStaedte = getKreisfreieStaedte(bundesland.id);
      for (const stadt of kreisfreieStaedte) {
        pages.push({
          url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}/${stadt.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }

      // Landkreise und deren Städte
      const landkreise = getLandkreiseByBundesland(bundesland.id);
      for (const landkreis of landkreise) {
        // Landkreis-Seite
        pages.push({
          url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.6,
        });

        // Städte im Landkreis
        const staedte = getPublishableStaedteByLandkreis(landkreis.id);
        for (const stadt of staedte) {
          pages.push({
            url: `${baseUrl}/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}/${stadt.slug}`,
            lastModified: now,
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
