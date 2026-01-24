import { Bundesland, Landkreis, Stadt, FAQ } from "@/data/types";
import { BreadcrumbItem } from "@/components/ui/Breadcrumbs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://detektei-base.de";
const COMPANY_NAME = "Detektei Base";
const PHONE = "+49 176 66918653";
const EMAIL = "kontakt@detektei-base.de";

// ============================================
// BREADCRUMB SCHEMA
// ============================================

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: SITE_URL,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };
}

// ============================================
// ORGANIZATION SCHEMA (einmal global)
// ============================================

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/favicon.svg`,
      width: 512,
      height: 512,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: ["German", "English"],
      },
    ],
  };
}

// ============================================
// LOCAL BUSINESS SCHEMA
// ============================================

interface LocalBusinessOptions {
  name: string;
  description: string;
  url: string;
  areaServed: string;
  geo?: { lat: number; lng: number };
  addressLocality?: string;
  addressRegion?: string;
}

export function generateLocalBusinessSchema(options: LocalBusinessOptions) {
  const schema: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}${options.url}/#localbusiness`,
    name: `${COMPANY_NAME} – Detektei in ${options.name}`,
    description: options.description,
    url: `${SITE_URL}${options.url}`,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "Kostenlose Vermittlung",
    image: `${SITE_URL}/images/og/detektei.jpg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: options.addressLocality || options.areaServed,
      addressRegion: options.addressRegion || "Deutschland",
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: options.areaServed,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vermittlung von Detektiv-Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vermittlung Observation",
            description: "Vermittlung an Detekteien für professionelle Observationen",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vermittlung Personensuche",
            description: "Vermittlung an Detekteien für Adressermittlung und Personensuche",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vermittlung Wirtschaftsermittlungen",
            description: "Vermittlung an Wirtschaftsdetekteien",
          },
        },
      ],
    },
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };

  if (options.geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: options.geo.lat,
      longitude: options.geo.lng,
    };
  }

  return schema;
}

// ============================================
// FAQ PAGE SCHEMA
// ============================================

export function generateFAQSchema(faqs: FAQ[]) {
  if (faqs.length === 0) return null;

  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ============================================
// WEB PAGE SCHEMA mit Speakable
// ============================================

interface WebPageOptions {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateWebPageSchema(options: WebPageOptions) {
  const today = new Date().toISOString().split("T")[0];

  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}${options.url}/#webpage`,
    url: `${SITE_URL}${options.url}`,
    name: options.name,
    description: options.description,
    inLanguage: "de-DE",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    datePublished: options.datePublished || today,
    dateModified: options.dateModified || today,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".key-takeaways", ".faq-answer", "h1", ".intro-text"],
    },
  };
}

// ============================================
// SERVICE SCHEMA (für Stadt-Seiten)
// ============================================

export function generateServiceSchema(stadtName: string, bundeslandName: string) {
  return {
    "@type": "Service",
    serviceType: "Vermittlung von Detektei-Dienstleistungen",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: stadtName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: bundeslandName,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Detektei-Vermittlung in ${stadtName}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Detektei finden in ${stadtName}`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Privatdetektiv in ${stadtName}`,
          },
        },
      ],
    },
  };
}

// ============================================
// COMPLETE GRAPH SCHEMA
// ============================================

interface GraphSchemaOptions {
  pageType: "bundesland" | "landkreis" | "stadt";
  breadcrumbs: BreadcrumbItem[];
  bundesland: Bundesland;
  landkreis?: Landkreis | null;
  stadt?: Stadt;
  faqs: FAQ[];
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
}

export function generateGraphSchema(options: GraphSchemaOptions) {
  const schemas: unknown[] = [
    generateOrganizationSchema(),
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: COMPANY_NAME,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "de-DE",
    },
    generateWebPageSchema({
      name: options.pageTitle,
      description: options.pageDescription,
      url: options.pageUrl,
    }),
    generateBreadcrumbSchema(options.breadcrumbs),
  ];

  // LocalBusiness für alle Seiten
  const areaServed =
    options.pageType === "stadt" && options.stadt
      ? options.stadt.name
      : options.pageType === "landkreis" && options.landkreis
        ? options.landkreis.name
        : options.bundesland.name;

  schemas.push(
    generateLocalBusinessSchema({
      name: areaServed,
      description: options.pageDescription,
      url: options.pageUrl,
      areaServed,
      addressRegion: options.bundesland.name,
      geo:
        options.pageType === "stadt" && options.stadt
          ? options.stadt.coordinates
          : undefined,
    })
  );

  // FAQ Schema
  const faqSchema = generateFAQSchema(options.faqs);
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  // Service Schema nur für Stadt-Seiten
  if (options.pageType === "stadt" && options.stadt) {
    schemas.push(generateServiceSchema(options.stadt.name, options.bundesland.name));
  }

  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}
