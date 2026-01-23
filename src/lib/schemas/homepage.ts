// ============================================
// HOMEPAGE SCHEMA - Optimiert für SEO
// ============================================

const SITE_URL = "https://detektei-base.de";
const COMPANY_NAME = "Detektei Oliver Peth";
const OWNER_NAME = "Oliver Peth";
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
      url: `${SITE_URL}/images/logo.png`,
      width: 300,
      height: 60,
    },
    image: `${SITE_URL}/images/oliver-peth-detektiv.jpg`,
    founder: {
      "@type": "Person",
      name: OWNER_NAME,
      jobTitle: "Zertifizierter Ermittler, Kriminalist & Profiler",
    },
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
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    alternateName: ["Detektei Peth", "Privatdetektiv Oliver Peth"],
    description:
      "Oliver Peth – Zertifizierter Ermittler, Kriminalist und Profiler. Diskrete Privatdetektei und Wirtschaftsdetektei mit gerichtsverwertbarer Beweissicherung. Deutschlandweit im Einsatz.",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "€€-€€€",
    image: `${SITE_URL}/images/oliver-peth-detektiv.jpg`,
    founder: {
      "@type": "Person",
      name: OWNER_NAME,
      jobTitle: "Zertifizierter Ermittler, Kriminalist & Profiler",
    },
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
              "Untreue-Ermittlungen, Personensuche, Sorgerechtsstreitigkeiten",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wirtschaftsdetektei",
            description:
              "Mitarbeiterüberprüfung, Betrugsaufklärung, Krankfeiermissbrauch",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Observation",
            description: "Professionelle Observationen zur Beweissicherung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Beweissicherung",
            description: "Gerichtsverwertbare Dokumentation und Beweisführung",
          },
        },
      ],
    },
    knowsAbout: [
      "Observation",
      "Personensuche",
      "Beweissicherung",
      "Kriminalistik",
      "Profiling",
      "Wirtschaftsermittlungen",
      "Untreue-Ermittlungen",
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
    alternateName: "Detektei Peth",
    description:
      "Privatdetektiv und Wirtschaftsdetektei – Zertifizierter Ermittler Oliver Peth",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "de-DE",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/suche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
    name: "Privatdetektiv & Detektei Oliver Peth | Zertifizierter Ermittler Deutschland",
    description:
      "Oliver Peth – Zertifizierter Ermittler, Kriminalist und Profiler. Diskrete Privatdetektei und Wirtschaftsdetektei mit gerichtsverwertbarer Beweissicherung. Deutschlandweit.",
    inLanguage: "de-DE",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#localbusiness`,
    },
    datePublished: "2024-01-01",
    dateModified: today,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/oliver-peth-detektiv.jpg`,
    },
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
      question: "Was kostet eine Detektei?",
      answer:
        "Die Kosten für eine Detektei variieren je nach Auftragsart und -umfang. Stundensätze liegen typischerweise zwischen 50-150€. Bei Observationen sollten Sie mit Tageskosten von 800-1.500€ rechnen. Wir erstellen Ihnen vorab einen transparenten Kostenvoranschlag.",
    },
    {
      question: "Sind die Beweise einer Detektei vor Gericht verwertbar?",
      answer:
        "Ja, professionell gesicherte Beweise sind vor Gericht verwertbar, sofern sie legal beschafft wurden. Das gilt für Observationsberichte, Fotos aus dem öffentlichen Raum und Zeugenaussagen. Unsere Detektive sind geschult, Beweise gerichtsfest zu dokumentieren.",
    },
    {
      question: "Wie läuft eine Ermittlung ab?",
      answer:
        "Nach einer kostenlosen Erstberatung analysieren wir Ihren Fall und erstellen einen Ermittlungsplan. Nach Auftragserteilung beginnen unsere Detektive mit der Arbeit. Sie erhalten regelmäßige Updates und am Ende einen detaillierten Abschlussbericht.",
    },
    {
      question: "Wie diskret arbeitet eine Detektei?",
      answer:
        "Diskretion ist das Fundament unserer Arbeit. Alle Informationen werden streng vertraulich behandelt. Unsere Detektive arbeiten unauffällig und sind auf verdeckte Ermittlungen spezialisiert. Ihre Identität und der Auftrag bleiben stets geschützt.",
    },
    {
      question: "In welchen Regionen sind Sie tätig?",
      answer:
        "Wir sind deutschlandweit im Einsatz und können bei Bedarf auch internationale Ermittlungen durchführen. Durch unser Netzwerk aus erfahrenen Detektiven können wir schnell in jeder Region aktiv werden.",
    },
    {
      question: "Wie schnell kann eine Ermittlung beginnen?",
      answer:
        "In dringenden Fällen können wir innerhalb von 24 Stunden mit den Ermittlungen starten. In der Regel beginnen wir innerhalb weniger Tage nach Auftragserteilung. Kontaktieren Sie uns für eine schnelle Erstberatung.",
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
// PERSON SCHEMA für Oliver Peth
// ============================================

export function generatePersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: OWNER_NAME,
    jobTitle: "Zertifizierter Ermittler, Kriminalist & Profiler",
    description:
      "Oliver Peth ist zertifizierter Ermittler, Kriminalist und Profiler mit IHK-Zulassung nach §34a GewO. Er leitet die Detektei Peth und ist deutschlandweit im Einsatz.",
    image: `${SITE_URL}/images/oliver-peth-detektiv.jpg`,
    worksFor: {
      "@id": `${SITE_URL}/#organization`,
    },
    knowsAbout: [
      "Kriminalistik",
      "Profiling",
      "Observation",
      "Beweissicherung",
      "Ermittlungen",
    ],
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
      generatePersonSchema(),
    ],
  };
}
