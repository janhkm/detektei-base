import { MetadataRoute } from "next";
import {
  bundeslaender,
  getAllLandkreisParams,
  getAllKreisfreieStadtParams,
  getAllStadtParams,
} from "@/data";
import { getAllPosts } from "@/lib/blog";

const baseUrl = "https://detektei-base.de";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Statische Seiten
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kosten`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ablauf`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Privatdetektei
    {
      url: `${baseUrl}/privatdetektei`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privatdetektei/untreue`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privatdetektei/personensuche`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privatdetektei/sorgerecht`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privatdetektei/stalking`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privatdetektei/observation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privatdetektei/betrug`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Wirtschaftsdetektei
    {
      url: `${baseUrl}/wirtschaftsdetektei`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/wirtschaftsdetektei/betrug`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wirtschaftsdetektei/krankfeier`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wirtschaftsdetektei/wettbewerb`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wirtschaftsdetektei/versicherungsbetrug`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wirtschaftsdetektei/mitarbeiterpruefung`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wirtschaftsdetektei/industriespionage`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Einsatzgebiete Übersicht
    {
      url: `${baseUrl}/einsatzgebiete`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Rechtliches
    {
      url: `${baseUrl}/rechtliches`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/agb`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Blog
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Dynamische Blog-Artikel
  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamische Einsatzgebiete-Seiten

  // Alle Bundesländer
  const bundeslandPages: MetadataRoute.Sitemap = bundeslaender.map((bl) => ({
    url: `${baseUrl}/einsatzgebiete/bundesland/${bl.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Alle Landkreise
  const landkreisParams = getAllLandkreisParams();
  const landkreisPages: MetadataRoute.Sitemap = landkreisParams.map((params) => ({
    url: `${baseUrl}/einsatzgebiete/bundesland/${params.bundesland}/${params.landkreisOderStadt}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Alle kreisfreien Städte (als Landkreis-Ebene)
  const kreisfreieParams = getAllKreisfreieStadtParams();
  const kreisfreiePages: MetadataRoute.Sitemap = kreisfreieParams.map((params) => ({
    url: `${baseUrl}/einsatzgebiete/bundesland/${params.bundesland}/${params.landkreisOderStadt}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Alle Städte innerhalb von Landkreisen
  const stadtParams = getAllStadtParams();
  const stadtPages: MetadataRoute.Sitemap = stadtParams.map((params) => ({
    url: `${baseUrl}/einsatzgebiete/bundesland/${params.bundesland}/${params.landkreisOderStadt}/${params.stadt}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...blogPages,
    ...bundeslandPages,
    ...landkreisPages,
    ...kreisfreiePages,
    ...stadtPages,
  ];
}
