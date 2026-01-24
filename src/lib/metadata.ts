/**
 * Zentralisierte Metadata-Factory für pSEO
 * 
 * Generiert konsistente Metadata für alle Seitentypen.
 * Unterstützt:
 * - Title-Tags mit Keyword-Optimierung
 * - Meta-Descriptions
 * - Canonical URLs
 * - Open Graph
 * - Twitter Cards
 * - Strukturierte Daten Vorbereitung
 */

import type { Metadata } from "next";
import { PageEntity, EinsatzgebietPageEntity, BlogPageEntity } from "@/data/types";

// ============================================================================
// KONFIGURATION
// ============================================================================

export const SEO_CONFIG = {
  siteName: "Detektei Base",
  siteUrl: "https://detektei-base.de",
  defaultImage: "/images/og-homepage.jpg",
  twitterHandle: "@detekteibase",
  locale: "de_DE",
  
  // Title-Suffixe
  titleSuffix: " | Detektei Base",
  titleSuffixShort: " | Detektei",
  
  // Maximale Längen
  maxTitleLength: 60,
  maxDescriptionLength: 160,
} as const;

// ============================================================================
// METADATA GENERATOR
// ============================================================================

/**
 * Generiert vollständige Metadata für eine Seite
 */
export function generateMetadata(options: {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}): Metadata {
  const {
    title,
    description,
    url,
    type = "website",
    image = SEO_CONFIG.defaultImage,
    publishedTime,
    modifiedTime,
    noIndex = false,
  } = options;

  const fullUrl = url.startsWith("http") ? url : `${SEO_CONFIG.siteUrl}${url}`;
  const fullImageUrl = image.startsWith("http") ? image : `${SEO_CONFIG.siteUrl}${image}`;

  // Title mit Suffix (wenn nicht zu lang)
  const fullTitle = title.length + SEO_CONFIG.titleSuffix.length <= SEO_CONFIG.maxTitleLength
    ? `${title}${SEO_CONFIG.titleSuffix}`
    : title.length + SEO_CONFIG.titleSuffixShort.length <= SEO_CONFIG.maxTitleLength
      ? `${title}${SEO_CONFIG.titleSuffixShort}`
      : title;

  // Description kürzen wenn nötig
  const safeDescription = description.length > SEO_CONFIG.maxDescriptionLength
    ? description.slice(0, SEO_CONFIG.maxDescriptionLength - 3) + "..."
    : description;

  const metadata: Metadata = {
    title: fullTitle,
    description: safeDescription,
    
    alternates: {
      canonical: fullUrl,
    },
    
    openGraph: {
      title: fullTitle,
      description: safeDescription,
      url: fullUrl,
      siteName: SEO_CONFIG.siteName,
      locale: SEO_CONFIG.locale,
      type,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: safeDescription,
      images: [fullImageUrl],
    },
  };

  // Artikel-spezifische Felder
  if (type === "article" && metadata.openGraph) {
    Object.assign(metadata.openGraph, {
      type: "article",
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
    });
  }

  // No-Index wenn gewünscht
  if (noIndex) {
    metadata.robots = {
      index: false,
      follow: true,
    };
  }

  return metadata;
}

// ============================================================================
// SPEZIALISIERTE GENERATOREN
// ============================================================================

/**
 * Metadata für Einsatzgebiete-Seiten
 */
export function generateEinsatzgebietMetadata(
  entity: Partial<EinsatzgebietPageEntity> & {
    title: string;
    description: string;
    url: string;
  }
): Metadata {
  return generateMetadata({
    title: entity.title,
    description: entity.description,
    url: entity.url,
    type: "website",
  });
}

/**
 * Metadata für Blog-Artikel
 */
export function generateBlogMetadata(
  entity: Partial<BlogPageEntity> & {
    title: string;
    description: string;
    url: string;
    publishDate: string;
    updatedAt?: string;
    image?: string;
  }
): Metadata {
  return generateMetadata({
    title: entity.title,
    description: entity.description,
    url: entity.url,
    type: "article",
    image: entity.image,
    publishedTime: entity.publishDate,
    modifiedTime: entity.updatedAt,
  });
}

/**
 * Metadata für Service-Seiten (Privatdetektei, Wirtschaftsdetektei)
 */
export function generateServiceMetadata(options: {
  title: string;
  description: string;
  url: string;
}): Metadata {
  return generateMetadata({
    ...options,
    type: "website",
  });
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Generiert einen SEO-optimierten Title mit Keyword am Anfang
 */
export function buildTitle(keyword: string, suffix?: string): string {
  if (!suffix) return keyword;
  
  const full = `${keyword} – ${suffix}`;
  if (full.length <= SEO_CONFIG.maxTitleLength - SEO_CONFIG.titleSuffix.length) {
    return full;
  }
  return keyword;
}

/**
 * Generiert einen SEO-optimierten Description mit Keyword am Anfang
 */
export function buildDescription(
  template: string,
  replacements: Record<string, string>
): string {
  let result = template;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, "g"), value);
  }
  
  if (result.length > SEO_CONFIG.maxDescriptionLength) {
    return result.slice(0, SEO_CONFIG.maxDescriptionLength - 3) + "...";
  }
  return result;
}

/**
 * Generiert die vollständige URL für eine Seite
 */
export function buildCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${cleanPath}`;
}

/**
 * Prüft ob ein Title die SEO-Anforderungen erfüllt
 */
export function validateTitle(title: string): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  if (title.length < 30) {
    issues.push("Title zu kurz (< 30 Zeichen)");
  }
  if (title.length > 60) {
    issues.push("Title zu lang (> 60 Zeichen)");
  }
  
  return {
    valid: issues.length === 0,
    issues,
  };
}

/**
 * Prüft ob eine Description die SEO-Anforderungen erfüllt
 */
export function validateDescription(description: string): {
  valid: boolean;
  issues: string[];
} {
  const issues: string[] = [];
  
  if (description.length < 100) {
    issues.push("Description zu kurz (< 100 Zeichen)");
  }
  if (description.length > 160) {
    issues.push("Description zu lang (> 160 Zeichen)");
  }
  
  return {
    valid: issues.length === 0,
    issues,
  };
}
