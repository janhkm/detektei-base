// ============================================
// HOMEPAGE SCHEMA - Optimiert für SEO
// Professionelle Ermittlungen – Privatdetektei & Wirtschaftsdetektei
// ============================================

const SITE_URL = "https://detektei-base.de";
const COMPANY_NAME = "Detektei Base";
const PHONE = "+49 176 66918653";
const EMAIL = "kontakt@detektei-base.de";

// ============================================
// ORGANIZATION SCHEMA
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
    description:
      "Detektei Base – Professionelle Ermittlungen. Privatdetektei und Wirtschaftsdetektei deutschlandweit, zusätzlich mit geprüften Partnern.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        email: EMAIL,
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: ["German", "English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "20:00",
        },
      },
    ],
    sameAs: [
      // Social Media Profile hier einfügen wenn vorhanden
    ],
  };
}

// ============================================
// LOCAL BUSINESS SCHEMA
// ============================================

export function generateLocalBusinessSchema() {
  return {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    alternateName: ["Privatdetektei", "Wirtschaftsdetektei"],
    description:
      "Detektei Base – Professionelle Ermittlungen. Privatdetektei und Wirtschaftsdetektei deutschlandweit.",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "Auf Anfrage",
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 51.1657,
        longitude: 10.4515,
      },
      geoRadius: "500 km",
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
      name: "Detektiv-Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Privatdetektei",
            description:
              "Professionelle Ermittlungen: Untreue, Personensuche, Sorgerecht, Stalking",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wirtschaftsdetektei",
            description:
              "Professionelle Ermittlungen: Mitarbeiterüberprüfung, Krankfeierkontrolle, Betrugsaufklärung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deutschlandweite Ermittlungen",
            description:
              "Professionelle Ermittlungen in allen Bundesländern, zusätzlich mit geprüften Partnern",
          },
        },
      ],
    },
    knowsAbout: [
      "Detektei",
      "Privatdetektiv",
      "Wirtschaftsdetektei",
      "Observation",
      "Personensuche",
      "Beweissicherung",
    ],
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

// ============================================
// WEBSITE SCHEMA mit SearchAction
// ============================================

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: COMPANY_NAME,
    alternateName: "Detektei",
    description:
      "Professionelle Ermittlungen – Privatdetektei und Wirtschaftsdetektei deutschlandweit",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "de-DE",
    // SearchAction entfernt - keine Suchseite vorhanden
  };
}

// ============================================
// WEBPAGE SCHEMA für Startseite
// ============================================

export function generateWebPageSchema() {
  const today = new Date().toISOString().split("T")[0];

  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Detektei Base | Professionelle Ermittlungen deutschlandweit",
    description:
      "Detektei Base – Professionelle Ermittlungen. Privatdetektei und Wirtschaftsdetektei deutschlandweit, zusätzlich mit geprüften Partnern.",
    inLanguage: "de-DE",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    datePublished: "2024-01-01",
    dateModified: today,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".hero-description", ".key-takeaways"],
    },
  };
}

// ============================================
// FAQ SCHEMA für Startseite
// ============================================

export function generateHomepageFAQSchema() {
  const faqs = [
    {
      question: "Ist die Erstberatung wirklich kostenlos?",
      answer:
        "Ja, die Erstberatung bei Detektei Base ist für Sie komplett kostenfrei und unverbindlich. Die Kosten für die Ermittlung werden individuell nach Fall und Aufwand berechnet.",
    },
    {
      question: "Welche Leistungen bietet Detektei Base?",
      answer:
        "Detektei Base bietet professionelle Privatdetektei (Untreue, Personensuche, Sorgerecht) und Wirtschaftsdetektei (Mitarbeiterüberprüfung, Krankfeierkontrolle, Betrugsermittlung). Zusätzlich arbeiten wir mit geprüften Partnern deutschlandweit.",
    },
    {
      question: "Wie schnell können Ermittlungen beginnen?",
      answer:
        "In der Regel können wir innerhalb von 24 Stunden mit den Ermittlungen beginnen. In dringenden Fällen ist oft ein noch schnellerer Einsatz möglich.",
    },
    {
      question: "Werden meine Daten vertraulich behandelt?",
      answer:
        "Ja, absolut. Wir behandeln alle Anfragen streng vertraulich. Diskretion ist bei uns oberstes Gebot. Details finden Sie in unserer Datenschutzerklärung.",
    },
    {
      question: "In welchen Regionen ist Detektei Base tätig?",
      answer:
        "Detektei Base ist deutschlandweit tätig. Zusätzlich arbeiten wir mit geprüften Partnern in allen Bundesländern zusammen – von Großstädten bis ländliche Regionen.",
    },
    {
      question: "Sind die Beweise vor Gericht verwertbar?",
      answer:
        "Ja, professionell gesicherte Beweise sind vor Gericht verwertbar, sofern sie legal beschafft wurden. Wir sind darauf spezialisiert, gerichtsfeste Dokumentationen zu erstellen.",
    },
  ];

  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faqpage`,
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
// COMPLETE HOMEPAGE GRAPH SCHEMA
// ============================================

export function generateHomepageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebSiteSchema(),
      generateWebPageSchema(),
      generateLocalBusinessSchema(),
      generateHomepageFAQSchema(),
    ],
  };
}
