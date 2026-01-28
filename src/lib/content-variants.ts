/**
 * Content-Varianten für SEO-optimierte, duplicate-freie Inhalte
 * 
 * Dieses Modul generiert automatisch variierende Inhalte basierend auf:
 * - Stadtgröße (Einwohnerzahl)
 * - Seitentyp (Stadt, Landkreis, Bundesland)
 * - Deterministischer Hash (konsistent bei Rebuilds)
 */

import { Stadt, Bundesland, Landkreis } from "@/data/types";

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generiert einen deterministischen Index basierend auf einem String
 * Verwendet für konsistente Varianten-Auswahl
 */
export function getVariantIndex(seed: string, variantCount: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash) % variantCount;
}

/**
 * Formatiert Einwohnerzahl für Anzeige
 */
export function formatPopulation(pop: number): string {
  if (pop >= 1000000) {
    return `${(pop / 1000000).toFixed(1)} Mio.`;
  }
  if (pop >= 100000) {
    return `${Math.round(pop / 1000)}k`;
  }
  return pop.toLocaleString("de-DE");
}

/**
 * Gibt Größenkategorie einer Stadt zurück
 */
export function getCitySize(population: number): "metropole" | "grossstadt" | "mittelstadt" | "kleinstadt" {
  if (population >= 500000) return "metropole";
  if (population >= 100000) return "grossstadt";
  if (population >= 50000) return "mittelstadt";
  return "kleinstadt";
}

// ============================================================================
// H1 VARIANTEN
// ============================================================================

type H1Generator = (name: string, bundesland?: string) => string;

const H1_STADT_VARIANTEN: H1Generator[] = [
  (name) => `Detektei ${name} – Diskrete Ermittlungen vor Ort`,
  (name) => `Privatdetektiv ${name} – Professionelle Ermittlungen`,
  (name) => `Detektei ${name} – Vertraulich & effektiv`,
  (name, bl) => `Detektei ${name} (${bl}) – Professionelle Aufklärung`,
  (name) => `Ermittlungen in ${name} – Ihre Detektei vor Ort`,
  (name) => `Detektiv in ${name} – Diskret. Professionell. Erfolgreich.`,
];

const H1_GROSSSTADT_VARIANTEN: H1Generator[] = [
  (name) => `Detektei ${name} – Professionelle Ermittlungen in der Großstadt`,
  (name) => `Privatdetektiv in ${name} – Diskrete Aufklärung`,
  (name) => `${name}: Ihre Detektei vor Ort`,
  (name, bl) => `Detektei ${name}, ${bl} – Ermittlungen auf höchstem Niveau`,
  (name) => `Detektei ${name} – Professionelle Ermittlungen`,
];

const H1_METROPOLE_VARIANTEN: H1Generator[] = [
  (name) => `Detektei ${name} – Ermittlungen in der Metropole`,
  (name) => `Privatdetektiv in ${name} – Professionell & diskret`,
  (name) => `${name}: Ihre Detektei für anspruchsvolle Ermittlungen`,
  (name) => `Detektei ${name} – Erfahrene Ermittler vor Ort`,
];

const H1_LANDKREIS_VARIANTEN: H1Generator[] = [
  (name) => `Detektei im ${name} – Ermittlungen im gesamten Landkreis`,
  (name) => `Privatdetektiv für den ${name} – Diskret vor Ort`,
  (name) => `Detektei im ${name} – Professionelle Aufklärung`,
  (name, bl) => `Ermittlungen im ${name} (${bl}) – Ihre Detektei`,
  (name) => `${name}: Detektei für den gesamten Landkreis`,
];

const H1_BUNDESLAND_VARIANTEN: H1Generator[] = [
  (name) => `Detektei ${name} – Landesweite Ermittlungen`,
  (name) => `Privatdetektiv ${name} – In allen Regionen tätig`,
  (name) => `Detektei für ${name} – Professionell & diskret`,
  (name) => `Ermittlungen in ${name} – Ihre Detektei`,
  (name) => `${name}: Professionelle Detektei – landesweit`,
];

export function getStadtH1(stadt: Stadt, bundesland: Bundesland): string {
  const size = getCitySize(stadt.population);
  let varianten: H1Generator[];
  
  switch (size) {
    case "metropole":
      varianten = H1_METROPOLE_VARIANTEN;
      break;
    case "grossstadt":
      varianten = H1_GROSSSTADT_VARIANTEN;
      break;
    default:
      varianten = H1_STADT_VARIANTEN;
  }
  
  const index = getVariantIndex(stadt.name + stadt.id, varianten.length);
  return varianten[index](stadt.name, bundesland.name);
}

export function getLandkreisH1(landkreis: Landkreis, bundesland: Bundesland): string {
  const index = getVariantIndex(landkreis.name + landkreis.id, H1_LANDKREIS_VARIANTEN.length);
  return H1_LANDKREIS_VARIANTEN[index](landkreis.name, bundesland.name);
}

export function getBundeslandH1(bundesland: Bundesland): string {
  const index = getVariantIndex(bundesland.name + bundesland.id, H1_BUNDESLAND_VARIANTEN.length);
  return H1_BUNDESLAND_VARIANTEN[index](bundesland.name);
}

// ============================================================================
// META DESCRIPTION VARIANTEN
// ============================================================================

type MetaGenerator = (name: string, extra?: string) => string;

const META_STADT_VARIANTEN: MetaGenerator[] = [
  (name) => `Detektei Base in ${name}. ✓ Privatdetektei ✓ Wirtschaftsdetektei ✓ Beweissicherung. Jetzt anrufen!`,
  (name, bl) => `Ihr Privatdetektiv in ${name} (${bl}): Diskrete Ermittlungen, gerichtsverwertbare Beweise. Jetzt anfragen!`,
  (name) => `Detektei ${name}: Professionelle Ermittler für Privat- & Wirtschaftsfälle. ✓ Diskret ✓ Professionell. Beratung gratis.`,
  (name, bl) => `Ermittlungen in ${name}, ${bl}. Privatdetektei & Wirtschaftsdetektei. Vertraulich & effektiv.`,
  (name) => `Privatdetektiv ${name} – Professionelle Aufklärung bei Untreue, Betrug & mehr. Jetzt anrufen.`,
  (name) => `${name}: Detektei Base vor Ort. Diskrete Ermittlungen mit gerichtsfester Dokumentation. Jetzt beraten lassen!`,
];

const META_GROSSSTADT_VARIANTEN: MetaGenerator[] = [
  (name, pop) => `Detektei ${name} (${pop} Einwohner): Professionelle Ermittlungen in der Großstadt. Erfahrene Ermittler vor Ort.`,
  (name) => `Ihr Privatdetektiv in ${name}. ✓ Observation ✓ Wirtschaftsermittlung ✓ Beweissicherung. Jetzt anfragen!`,
  (name, bl) => `${name}, ${bl}: Detektei Base für diskrete Ermittlungen. Gerichtsverwertbare Beweise. Kostenlose Beratung.`,
  (name) => `Großstadt-Ermittlungen in ${name}: Erfahrene Detektive für komplexe Fälle. Schnelle Einsatzbereitschaft.`,
  (name) => `Detektei ${name} – Diskretion auf höchstem Niveau. Privat- & Wirtschaftsermittlungen. Jetzt anrufen.`,
];

const META_LANDKREIS_VARIANTEN: MetaGenerator[] = [
  (name, bl) => `Detektei im ${name} (${bl}): Ermittlungen im gesamten Landkreis. ✓ Diskret ✓ Professionell. Jetzt anfragen!`,
  (name, count) => `Privatdetektiv für den ${name} – Einsätze in ${count} Städten. Privatdetektei & Wirtschaftsdetektei.`,
  (name) => `Detektei Base im ${name}: Erfahrene Ermittler vor Ort. Gerichtsverwertbare Beweise. Jetzt anrufen.`,
  (name, bl) => `${name}, ${bl}: Professionelle Detektei für den gesamten Landkreis. Diskrete Ermittlungen. Jetzt beraten lassen!`,
  (name) => `Ermittlungen im ${name} – Von Observation bis Wirtschaftsermittlung. Detektei Base vor Ort.`,
];

const META_BUNDESLAND_VARIANTEN: MetaGenerator[] = [
  (name) => `Detektei ${name}: Landesweite Ermittlungen von Detektei Base. ✓ Diskret ✓ Professionell. Jetzt anfragen!`,
  (name, cap) => `Ihr Privatdetektiv in ${name} – Von ${cap} bis in ländliche Regionen. Jetzt anrufen.`,
  (name) => `${name}: Detektei Base – landesweit tätig. Privatdetektei & Wirtschaftsdetektei.`,
  (name) => `Ermittlungen in ganz ${name}: Detektei Base vor Ort. Gerichtsverwertbare Beweise. Diskret & effektiv.`,
  (name, cap) => `Detektei ${name} (Sitz: ${cap}): Landesweite Ermittlungen. ✓ Schnelle Einsatzbereitschaft. Beratung gratis.`,
];

export function getStadtMetaDescription(stadt: Stadt, bundesland: Bundesland): string {
  const size = getCitySize(stadt.population);
  
  if (size === "grossstadt" || size === "metropole") {
    const index = getVariantIndex(stadt.slug + "meta", META_GROSSSTADT_VARIANTEN.length);
    const popStr = formatPopulation(stadt.population);
    return META_GROSSSTADT_VARIANTEN[index](stadt.name, popStr);
  }
  
  const index = getVariantIndex(stadt.slug + "meta", META_STADT_VARIANTEN.length);
  return META_STADT_VARIANTEN[index](stadt.name, bundesland.name);
}

export function getLandkreisMetaDescription(
  landkreis: Landkreis, 
  bundesland: Bundesland,
  staedteCount: number
): string {
  const index = getVariantIndex(landkreis.slug + "meta", META_LANDKREIS_VARIANTEN.length);
  const extra = index === 1 ? `${staedteCount}` : bundesland.name;
  return META_LANDKREIS_VARIANTEN[index](landkreis.name, extra);
}

export function getBundeslandMetaDescription(bundesland: Bundesland): string {
  const index = getVariantIndex(bundesland.slug + "meta", META_BUNDESLAND_VARIANTEN.length);
  return META_BUNDESLAND_VARIANTEN[index](bundesland.name, bundesland.capital);
}

// ============================================================================
// TITLE TAG VARIANTEN
// ============================================================================

export function getStadtTitle(stadt: Stadt, bundesland: Bundesland): string {
  const size = getCitySize(stadt.population);
  
  const varianten = [
    `Detektei ${stadt.name} | Privatdetektiv vor Ort`,
    `Privatdetektiv in ${stadt.name} | Diskrete Ermittlungen`,
    `Detektei in ${stadt.name}, ${bundesland.name} | Ermittlungen`,
    `${stadt.name}: Ihre Detektei | Professionelle Aufklärung`,
    `Ermittlungen ${stadt.name} | Detektei & Privatdetektiv`,
  ];
  
  // Großstädte bekommen kürzere, prägnantere Titles
  if (size === "metropole" || size === "grossstadt") {
    const grossVarianten = [
      `Detektei ${stadt.name} | Professionelle Ermittlungen`,
      `Privatdetektiv ${stadt.name} | Ihr Experte vor Ort`,
      `${stadt.name} Detektei | Diskret & Erfolgreich`,
    ];
    const index = getVariantIndex(stadt.name + "title", grossVarianten.length);
    return grossVarianten[index];
  }
  
  const index = getVariantIndex(stadt.name + "title", varianten.length);
  return varianten[index];
}

export function getLandkreisTitle(landkreis: Landkreis, bundesland: Bundesland): string {
  const varianten = [
    `Detektei ${landkreis.name} | Ermittlungen im Landkreis`,
    `Privatdetektiv im ${landkreis.name} | Diskret vor Ort`,
    `${landkreis.name}: Ihre Detektei | ${bundesland.name}`,
    `Ermittlungen ${landkreis.name} | Professionelle Detektei`,
  ];
  
  const index = getVariantIndex(landkreis.name + "title", varianten.length);
  return varianten[index];
}

export function getBundeslandTitle(bundesland: Bundesland): string {
  const varianten = [
    `Detektei ${bundesland.name} | Landesweite Ermittlungen`,
    `Privatdetektiv in ${bundesland.name} | Ihr Ermittler`,
    `${bundesland.name}: Professionelle Detektei`,
    `Ermittlungen in ${bundesland.name} | Detektei`,
  ];
  
  const index = getVariantIndex(bundesland.name + "title", varianten.length);
  return varianten[index];
}

// ============================================================================
// INTRO TEXT VARIANTEN
// ============================================================================

export function getStadtIntroText(stadt: Stadt, bundesland: Bundesland): string {
  const size = getCitySize(stadt.population);
  const popStr = formatPopulation(stadt.population);
  
  const varianten = [
    `Sie suchen einen erfahrenen Privatdetektiv in ${stadt.name}? Detektei Base führt professionelle Ermittlungen durch – Privatdetektei und Wirtschaftsdetektei mit gerichtsfester Beweissicherung.`,
    
    `In ${stadt.name} und Umgebung ist Detektei Base für Sie da. Ob Untreue, Unterhaltsermittlung oder Wirtschaftsdelikte – professionelle Ermittlungen vor Ort.`,
    
    `Detektei Base ist in ${stadt.name} (${bundesland.name}) für das komplette Spektrum an Ermittlungsleistungen tätig. Erfahrene Ermittler vor Ort.`,
    
    `Für Ermittlungen in ${stadt.name} ist Detektei Base Ihr Ansprechpartner. Alle Beweise werden gerichtsfest dokumentiert.`,
    
    `${stadt.name}: Hier ist Detektei Base für Sie vor Ort. Professionelle Ermittlungen mit modernsten Methoden und absoluter Vertraulichkeit.`,
    
    `Sie benötigen einen Detektiv in ${stadt.name}? Detektei Base führt diskrete Ermittlungen durch und liefert gerichtsverwertbare Ergebnisse.`,
  ];
  
  // Großstädte bekommen Zusatz mit Einwohnerzahl
  if (size === "grossstadt" || size === "metropole") {
    const grossVarianten = [
      `${stadt.name} mit seinen ${popStr} Einwohnern stellt besondere Anforderungen an Ermittlungen. Detektei Base ist mit erfahrenen Ermittlern vor Ort, die die Stadt kennen und diskret arbeiten.`,
      
      `Für Ermittlungen in ${stadt.name} ist Detektei Base mit eingespielten Teams vor Ort. In der ${popStr}-Einwohner-Stadt sind wir schnell einsatzbereit.`,
      
      `Professionelle Ermittlungen in ${stadt.name}: Detektei Base ist auf komplexe Fälle in der Großstadt spezialisiert.`,
    ];
    const index = getVariantIndex(stadt.slug + "intro", grossVarianten.length);
    return grossVarianten[index];
  }
  
  const index = getVariantIndex(stadt.slug + "intro", varianten.length);
  return varianten[index];
}

export function getLandkreisIntroText(landkreis: Landkreis, bundesland: Bundesland): string {
  const varianten = [
    `Sie suchen eine Detektei im ${landkreis.name}? Detektei Base ist im gesamten Landkreis tätig – diskret, professionell und mit gerichtsverwertbarer Beweissicherung.`,
    
    `Im ${landkreis.name} (${bundesland.name}) führt Detektei Base Ermittlungen aller Art durch. Von der Personensuche bis zur Wirtschaftsdetektei – erfahrene Ermittler vor Ort.`,
    
    `Professionelle Detektei-Leistungen im gesamten ${landkreis.name}: Detektei Base kennt die Region und arbeitet diskret in allen Städten und Gemeinden.`,
    
    `Ob in der Kreisstadt oder in kleineren Gemeinden – im ${landkreis.name} ist Detektei Base schnell verfügbar mit lokaler Präsenz.`,
    
    `Der ${landkreis.name} wird durch Detektei Base vollständig abgedeckt. Ortskenntnis, Diskretion und professionelle Dokumentation.`,
  ];
  
  const index = getVariantIndex(landkreis.slug + "intro", varianten.length);
  return varianten[index];
}

// ============================================================================
// WARUM LOKALE DETEKTEI - VARIANTEN
// ============================================================================

export function getWarumLokalText(name: string, isLandkreis: boolean, seed: string): string {
  const stadtVarianten = [
    `Eine lokale Detektei in ${name} bietet entscheidende Vorteile: Wir kennen die Stadt, ihre Strukturen und können schnell vor Ort sein. Das spart Zeit und Kosten – und erhöht die Erfolgschancen erheblich.`,
    
    `Warum ein Detektiv aus ${name}? Ortskenntnis ist bei Ermittlungen Gold wert. Detektei Base kennt die Gegebenheiten, kann Zielpersonen unauffällig verfolgen und weiß, wo am effektivsten gearbeitet wird.`,
    
    `Lokale Präsenz macht den Unterschied: Detektei Base in ${name} ist in Minuten einsatzbereit – nicht in Stunden. Bei zeitkritischen Observationen kann das entscheidend sein.`,
    
    `Ein Privatdetektiv vor Ort in ${name} bedeutet: kürzere Anfahrtswege, niedrigere Spesen, schnellere Reaktionszeiten. Detektei Base ist in der Region präsent.`,
  ];
  
  const landkreisVarianten = [
    `Detektei Base im ${name} kennt die Region: Wir wissen, welche Routen Zielpersonen nutzen, wo sich Observation lohnt und wie in ländlichen wie städtischen Gebieten effektiv gearbeitet wird.`,
    
    `Warum Detektei Base im ${name}? Regionale Expertise spart Zeit und Geld. Wir sind mit den Gegebenheiten im gesamten Landkreis vertraut und schnell vor Ort.`,
    
    `Lokale Detektei-Präsenz im ${name}: Detektei Base ist in allen Städten und Gemeinden des Landkreises einsatzbereit. Kurze Wege, schnelle Reaktion, bessere Ergebnisse.`,
    
    `Der ${name} wird durch Detektei Base abgedeckt. Von der größten Stadt bis zur kleinsten Gemeinde – wir arbeiten seit Jahren erfolgreich und diskret.`,
  ];
  
  const varianten = isLandkreis ? landkreisVarianten : stadtVarianten;
  const index = getVariantIndex(seed + "warum", varianten.length);
  return varianten[index];
}

// ============================================================================
// TYPISCHE ERMITTLUNGSFÄLLE - VARIANTEN
// ============================================================================

export function getTypischeFaelleText(name: string, isLandkreis: boolean, seed: string): { title: string; cases: { title: string; description: string }[] } {
  const prefix = isLandkreis ? `im ${name}` : `in ${name}`;
  
  const caseSets = [
    {
      title: `Typische Ermittlungsfälle ${prefix}`,
      cases: [
        {
          title: "Untreue-Verdacht",
          description: `Ein Klient aus ${name.split(" ")[0]} beauftragte Detektei Base wegen Verdacht auf Fremdgehen. Durch diskrete Observation über mehrere Tage konnte der Verdacht bestätigt und gerichtsverwertbare Beweise gesichert werden.`
        },
        {
          title: "Unterhaltsermittlung", 
          description: `Nach der Scheidung verschwieg der Ex-Partner sein wahres Einkommen. Recherchen von Detektei Base ${prefix} deckten nicht angegebene Nebeneinkünfte und Vermögenswerte auf.`
        },
        {
          title: "Krankfeierkontrolle",
          description: `Ein Unternehmen ${prefix} hatte Zweifel an der Arbeitsunfähigkeit eines Mitarbeiters. Die Observation zeigte: Der "Kranke" arbeitete schwarz auf einer Baustelle.`
        },
        {
          title: "Personensuche",
          description: `Ein Mandant suchte einen verschollenen Verwandten. Durch systematische Recherchen und Befragungen ${prefix} konnte die Person innerhalb von zwei Wochen gefunden werden.`
        }
      ]
    },
    {
      title: `Fallbeispiele von Detektei Base ${prefix}`,
      cases: [
        {
          title: "Verdacht auf Fremdgehen",
          description: `Häufigster Auftrag ${prefix}: Partnerüberwachung bei Untreue-Verdacht. Wir beobachten diskret und dokumentieren Treffen, Kontakte und Verhaltensweisen – immer im Rahmen des Erlaubten.`
        },
        {
          title: "Mitarbeiter-Betrug",
          description: `Ein Unternehmer vermutete, dass sein Außendienstmitarbeiter Arbeitszeit erschwindelt. Die GPS-lose Observation bestätigte: Mehrere Stunden täglich wurden privat genutzt.`
        },
        {
          title: "Erbschaftsstreit",
          description: `Bei einer Erbschaft ${prefix} tauchten plötzlich unbekannte Anspruchsteller auf. Die Recherchen von Detektei Base klärten die tatsächlichen Familienverhältnisse und Berechtigungen.`
        },
        {
          title: "Stalking-Dokumentation",
          description: `Eine Mandantin wurde belästigt. Detektei Base dokumentierte die Vorfälle professionell und lieferte Beweise, die zur erfolgreichen Erwirkung einer einstweiligen Verfügung führten.`
        }
      ]
    },
    {
      title: `So hilft Detektei Base Klienten ${prefix}`,
      cases: [
        {
          title: "Eheliche Untreue",
          description: `Der klassische Fall: Verdacht auf Fremdgehen. ${prefix.charAt(0).toUpperCase() + prefix.slice(1)} führen wir regelmäßig diskrete Observationen durch – mit eindeutigen, gerichtsfesten Ergebnissen.`
        },
        {
          title: "Arbeitszeitbetrug",
          description: `Homeoffice-Kontrolle, Außendienst-Überwachung, Nebentätigkeiten während der Krankschreibung – Detektei Base deckt Arbeitszeitbetrug ${prefix} zuverlässig auf.`
        },
        {
          title: "Vermögensrecherche",
          description: `Bei Unterhaltsfragen oder Forderungen recherchieren wir Vermögenswerte, Immobilien und Einkünfte – diskret und gründlich.`
        },
        {
          title: "Adressermittlung",
          description: `Schuldner oder Zeugen verschwunden? ${prefix.charAt(0).toUpperCase() + prefix.slice(1)} und bundesweit ermitteln wir aktuelle Adressen schnell und zuverlässig.`
        }
      ]
    }
  ];
  
  const index = getVariantIndex(seed + "faelle", caseSets.length);
  return caseSets[index];
}

// ============================================================================
// RECHTLICHE HINWEISE - VARIANTEN
// ============================================================================

export function getRechtlicheHinweise(name: string, seed: string): { intro: string; erlaubt: string[]; verboten: string[] } {
  const introVarianten = [
    `Detektive arbeiten im Rahmen der sogenannten Jedermannsrechte. Das bedeutet: Alles, was jeder Bürger darf, dürfen auch Detektive – jedoch mit professioneller Ausrüstung und Erfahrung. In ${name} gelten dieselben rechtlichen Grundlagen wie überall in Deutschland.`,
    
    `In ${name} gilt wie überall: Detektive haben keine Sonderrechte. Detektei Base arbeitet auf Basis der Jedermannsrechte und der Rechtsprechung des Bundesgerichtshofs. Die Methoden sind legal, die Beweise gerichtsverwertbar.`,
    
    `Rechtssicherheit ist wichtig: Alle Ermittlungen in ${name} erfolgen im Einklang mit deutschem Recht. Detektei Base überschreitet keine Grenzen – das würde auch dem Auftraggeber schaden.`,
  ];
  
  const erlaubtItems = [
    "Observation im öffentlichen Raum",
    "Fotografieren von Personen in der Öffentlichkeit",
    "Recherchen in öffentlich zugänglichen Quellen",
    "Befragungen ohne Täuschung über Identität",
    "Dokumentation von Vorgängen im öffentlichen Raum",
    "GPS-Ortung von Firmenfahrzeugen (mit Einverständnis des Halters)",
  ];
  
  const verbotenItems = [
    "Betreten von Privatgrundstücken ohne Erlaubnis",
    "Abhören von Telefongesprächen",
    "Öffnen von Briefen oder Paketen",
    "Hacken von E-Mail-Konten oder Computern",
    "Bestechung zur Informationsbeschaffung",
    "Observation im nicht-öffentlichen Privatbereich",
  ];
  
  const index = getVariantIndex(seed + "recht", introVarianten.length);
  
  return {
    intro: introVarianten[index],
    erlaubt: erlaubtItems,
    verboten: verbotenItems,
  };
}

// ============================================================================
// ERWEITERTE SERVICE BESCHREIBUNGEN
// ============================================================================

export function getServiceBeschreibung(serviceType: "untreue" | "personensuche" | "wirtschaft" | "observation", name: string, seed: string): string {
  const beschreibungen: Record<string, string[]> = {
    untreue: [
      `Bei Untreue-Verdacht in ${name} geht Detektei Base methodisch vor: Zunächst werden Ihre Informationen analysiert, dann die Observation geplant. Wir dokumentieren diskret jeden relevanten Kontakt und jede Bewegung – mit Fotos, Zeiten und Orten.`,
      `Fremdgehen aufdecken in ${name}: Detektei Base beobachtet die Zielperson über den vereinbarten Zeitraum, dokumentiert Treffen und Aktivitäten. Am Ende erhalten Sie einen detaillierten Bericht mit allen Beweisen.`,
      `Untreue-Ermittlungen in ${name} führt Detektei Base mit größter Diskretion durch. Die Zielperson erfährt nichts von der Beobachtung. Sie erhalten aussagekräftige Beweise, die auch vor Gericht Bestand haben.`,
    ],
    personensuche: [
      `Personensuche in ${name} und darüber hinaus: Detektei Base findet vermisste Angehörige, untergetauchte Schuldner oder Zeugen. Die Methoden reichen von Datenbankrecherchen bis zu Vor-Ort-Ermittlungen.`,
      `Sie suchen jemanden in ${name}? Detektei Base ermittelt aktuelle Adressen, Arbeitgeber und Lebensumstände. Ob Erbfall, Unterhalt oder private Gründe – die Person wird gefunden.`,
      `Adressermittlung und Personensuche in ${name}: Mit legalen Recherchemethoden und lokaler Präsenz spürt Detektei Base Personen auf, die sich Ihren Ansprüchen entziehen wollen.`,
    ],
    wirtschaft: [
      `Wirtschaftsermittlungen in ${name}: Mitarbeiterüberprüfung, Krankfeierkontrolle, Diebstahlaufklärung – Detektei Base schützt Ihr Unternehmen vor internem Betrug und Missbrauch.`,
      `Für Unternehmen in ${name} bietet Detektei Base: Überprüfung von Bewerbern und Mitarbeitern, Kontrolle bei Verdacht auf Arbeitszeitbetrug, Aufklärung von Unterschlagung und Diebstahl.`,
      `Wirtschaftsdetektei in ${name}: Detektei Base ermittelt diskret bei Verdacht auf Mitarbeiterbetrug, überprüft Krankmeldungen und klärt interne Unregelmäßigkeiten auf.`,
    ],
    observation: [
      `Professionelle Observation in ${name}: Detektei Base überwacht Zielpersonen unauffällig – zu Fuß, per Fahrzeug oder stationär. Moderne Ausrüstung und Erfahrung garantieren lückenlose Dokumentation.`,
      `Observationen in ${name} führt Detektei Base mit mindestens zwei Ermittlern durch. So kann die Zielperson auch bei Ortswechseln zuverlässig verfolgt werden, ohne aufzufallen.`,
      `Diskrete Überwachung in ${name}: Detektei Base beobachtet Personen im öffentlichen Raum und dokumentiert ihre Aktivitäten. Die Berichte sind detailliert, die Fotos beweiskräftig.`,
    ],
  };
  
  const varianten = beschreibungen[serviceType];
  const index = getVariantIndex(seed + serviceType, varianten.length);
  return varianten[index];
}
