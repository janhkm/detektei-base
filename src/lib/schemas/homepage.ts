// ============================================
// HOMEPAGE SCHEMA - Optimiert für SEO
// Vermittlungsplattform für Detekteien
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
      "Detektei Base vermittelt Sie an geprüfte Partner-Detekteien in ganz Deutschland. Unser Netzwerk aus IHK-zugelassenen Ermittlern garantiert Qualität und Diskretion.",
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
    alternateName: ["Detektei Vermittlung", "Detektiv finden"],
    description:
      "Detektei Base ist eine Vermittlungsplattform für professionelle Ermittlungen. Wir vermitteln Sie an geprüfte Partner-Detekteien mit IHK-Zulassung – schnell, diskret und deutschlandweit.",
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "Kostenlose Vermittlung",
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
      name: "Vermittlung von Detektiv-Dienstleistungen",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vermittlung Privatdetektei",
            description:
              "Vermittlung an geprüfte Privatdetekteien für Untreue-Ermittlungen, Personensuche, Sorgerecht",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vermittlung Wirtschaftsdetektei",
            description:
              "Vermittlung an spezialisierte Wirtschaftsdetekteien für Mitarbeiterüberprüfung, Betrugsaufklärung",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deutschlandweites Netzwerk",
            description:
              "Zugang zu geprüften Partner-Detekteien in allen Bundesländern",
          },
        },
      ],
    },
    knowsAbout: [
      "Detektei Vermittlung",
      "Privatdetektiv finden",
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
    alternateName: "Detektei finden",
    description:
      "Vermittlungsplattform für geprüfte Detekteien in Deutschland",
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
    name: "Detektei finden | Geprüfte Privatdetektive deutschlandweit | Detektei Base",
    description:
      "Finden Sie sofort die richtige Detektei für Ihren Fall. Unser Netzwerk aus geprüften Partner-Detekteien vermittelt Sie diskret und schnell an zertifizierte Ermittler in Ihrer Region.",
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
      question: "Was kostet die Vermittlung einer Detektei?",
      answer:
        "Die Vermittlung über Detektei Base ist für Sie komplett kostenfrei. Wir finanzieren uns über Vermittlungsprovisionen der Partner-Detekteien. Die Kosten für die eigentliche Detektiv-Dienstleistung werden direkt mit der vermittelten Detektei vereinbart.",
    },
    {
      question: "Wie finde ich eine seriöse Detektei?",
      answer:
        "Über Detektei Base werden Sie nur an geprüfte Partner-Detekteien vermittelt. Alle Partner sind IHK-zugelassen nach §34a GewO, haben eine Berufshaftpflichtversicherung und sind zur Einhaltung der DSGVO verpflichtet. So sparen Sie sich die aufwendige Recherche.",
    },
    {
      question: "Wie schnell werde ich an eine Detektei vermittelt?",
      answer:
        "In der Regel erhalten Sie innerhalb von 24 Stunden (an Werktagen) einen Rückruf von einer passenden Partner-Detektei. In dringenden Fällen ist oft eine noch schnellere Vermittlung möglich.",
    },
    {
      question: "Werden meine Daten vertraulich behandelt?",
      answer:
        "Ja, absolut. Wir behandeln alle Anfragen streng vertraulich. Ihre Daten werden nur an die eine ausgewählte Partner-Detektei weitergegeben, nicht an mehrere. Details finden Sie in unserer Datenschutzerklärung.",
    },
    {
      question: "In welchen Regionen vermitteln Sie Detekteien?",
      answer:
        "Unser Netzwerk umfasst geprüfte Partner-Detekteien in ganz Deutschland. Egal ob in München, Berlin, Hamburg oder ländlichen Regionen – wir finden eine geeignete Detektei in Ihrer Nähe.",
    },
    {
      question: "Kann ich auch direkt eine Detektei kontaktieren?",
      answer:
        "Natürlich. Detektei Base ist ein freiwilliges Angebot. Der Vorteil unserer Vermittlung: Sie sparen Zeit bei der Suche und können sicher sein, dass unsere Partner geprüft und qualifiziert sind.",
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
