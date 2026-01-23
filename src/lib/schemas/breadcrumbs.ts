// ============================================
// BREADCRUMB SCHEMA - JSON-LD für bessere SERP-Darstellung
// ============================================

const SITE_URL = "https://detektei-base.de";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

/**
 * Generiert ein BreadcrumbList Schema für JSON-LD
 * @param items Array von Breadcrumb-Items (ohne Home, wird automatisch hinzugefügt)
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const breadcrumbs = [
    { name: "Startseite", href: "/" },
    ...items,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

/**
 * Generiert Breadcrumb Schema für Service-Seiten (Privatdetektei)
 */
export function generatePrivatdetekteiBreadcrumbSchema(serviceName: string, serviceSlug: string) {
  return generateBreadcrumbSchema([
    { name: "Privatdetektei", href: "/privatdetektei" },
    { name: serviceName, href: `/privatdetektei/${serviceSlug}` },
  ]);
}

/**
 * Generiert Breadcrumb Schema für Wirtschaftsdetektei-Seiten
 */
export function generateWirtschaftsdetekteiBreadcrumbSchema(serviceName: string, serviceSlug: string) {
  return generateBreadcrumbSchema([
    { name: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
    { name: serviceName, href: `/wirtschaftsdetektei/${serviceSlug}` },
  ]);
}

/**
 * Generiert Breadcrumb Schema für Blog-Artikel
 */
export function generateBlogBreadcrumbSchema(articleTitle: string, articleSlug: string) {
  return generateBreadcrumbSchema([
    { name: "Blog", href: "/blog" },
    { name: articleTitle, href: `/blog/${articleSlug}` },
  ]);
}

/**
 * Generiert Breadcrumb Schema für Einsatzgebiete (Bundesland)
 */
export function generateBundeslandBreadcrumbSchema(bundeslandName: string, bundeslandSlug: string) {
  return generateBreadcrumbSchema([
    { name: "Einsatzgebiete", href: "/einsatzgebiete" },
    { name: bundeslandName, href: `/einsatzgebiete/bundesland/${bundeslandSlug}` },
  ]);
}

/**
 * Generiert Breadcrumb Schema für Einsatzgebiete (Landkreis/Kreisfreie Stadt)
 */
export function generateLandkreisBreadcrumbSchema(
  bundeslandName: string,
  bundeslandSlug: string,
  landkreisName: string,
  landkreisSlug: string
) {
  return generateBreadcrumbSchema([
    { name: "Einsatzgebiete", href: "/einsatzgebiete" },
    { name: bundeslandName, href: `/einsatzgebiete/bundesland/${bundeslandSlug}` },
    { name: landkreisName, href: `/einsatzgebiete/bundesland/${bundeslandSlug}/${landkreisSlug}` },
  ]);
}

/**
 * Generiert Breadcrumb Schema für Einsatzgebiete (Stadt in Landkreis)
 */
export function generateStadtBreadcrumbSchema(
  bundeslandName: string,
  bundeslandSlug: string,
  landkreisName: string,
  landkreisSlug: string,
  stadtName: string,
  stadtSlug: string
) {
  return generateBreadcrumbSchema([
    { name: "Einsatzgebiete", href: "/einsatzgebiete" },
    { name: bundeslandName, href: `/einsatzgebiete/bundesland/${bundeslandSlug}` },
    { name: landkreisName, href: `/einsatzgebiete/bundesland/${bundeslandSlug}/${landkreisSlug}` },
    { name: stadtName, href: `/einsatzgebiete/bundesland/${bundeslandSlug}/${landkreisSlug}/${stadtSlug}` },
  ]);
}
