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
  (name) => `Detektei in ${name} – Diskrete Ermittlungen vor Ort`,
  (name) => `Privatdetektiv ${name} – Professionelle Beweissicherung`,
  (name) => `Ihre Detektei in ${name} – Vertraulich & effektiv`,
  (name, bl) => `Detektei ${name} (${bl}) – Erfahrene Ermittler`,
  (name) => `Ermittlungen in ${name} – Ihr Detektiv vor Ort`,
  (name) => `Detektiv in ${name} – Diskret. Professionell. Erfolgreich.`,
];

const H1_GROSSSTADT_VARIANTEN: H1Generator[] = [
  (name) => `Detektei ${name} – Professionelle Ermittlungen in der Großstadt`,
  (name) => `Privatdetektiv in ${name} – Ihr Partner für diskrete Aufklärung`,
  (name) => `${name}: Ihre erfahrene Detektei vor Ort`,
  (name, bl) => `Detektei ${name}, ${bl} – Ermittlungen auf höchstem Niveau`,
  (name) => `Ermittlungsbüro ${name} – Diskretion ist unsere Stärke`,
];

const H1_METROPOLE_VARIANTEN: H1Generator[] = [
  (name) => `Detektei ${name} – Ermittlungen in der Metropole`,
  (name) => `Ihr Privatdetektiv in ${name} – Professionell & diskret`,
  (name) => `${name}: Führende Detektei für anspruchsvolle Ermittlungen`,
  (name) => `Detektei ${name} – Mit Erfahrung zum Ergebnis`,
];

const H1_LANDKREIS_VARIANTEN: H1Generator[] = [
  (name) => `Detektei im ${name} – Ermittlungen im gesamten Landkreis`,
  (name) => `Privatdetektiv für den ${name} – Diskret vor Ort`,
  (name) => `Ihre Detektei im ${name} – Professionelle Aufklärung`,
  (name, bl) => `Ermittlungen im ${name} (${bl}) – Erfahren & zuverlässig`,
  (name) => `${name}: Ihr Detektiv für den gesamten Landkreis`,
];

const H1_BUNDESLAND_VARIANTEN: H1Generator[] = [
  (name) => `Detektei in ${name} – Landesweite Ermittlungen`,
  (name) => `Privatdetektiv ${name} – In allen Regionen vor Ort`,
  (name) => `Ihre Detektei für ${name} – Professionell & diskret`,
  (name) => `Ermittlungen in ${name} – Erfahrene Detektive im Einsatz`,
  (name) => `${name}: Detektei mit landesweitem Netzwerk`,
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
  (name) => `Professionelle Detektei in ${name}. ✓ Privatdetektei ✓ Wirtschaftsdetektei ✓ Beweissicherung. Kostenlose Erstberatung!`,
  (name, bl) => `Ihr Privatdetektiv in ${name} (${bl}): Diskrete Ermittlungen, gerichtsverwertbare Beweise. Jetzt anfragen!`,
  (name) => `Detektei ${name}: Erfahrene Ermittler für Privat- & Wirtschaftsfälle. ✓ Diskret ✓ Professionell. Beratung gratis.`,
  (name, bl) => `Ermittlungen in ${name}, ${bl}. Privatdetektei & Wirtschaftsdetektei. Vertraulich & effektiv.`,
  (name) => `Privatdetektiv ${name} – Professionelle Aufklärung bei Untreue, Betrug & mehr. Kostenlose Erstberatung.`,
  (name) => `${name}: Ihre Detektei vor Ort. Diskrete Ermittlungen mit gerichtsfester Dokumentation. Jetzt beraten lassen!`,
];

const META_GROSSSTADT_VARIANTEN: MetaGenerator[] = [
  (name, pop) => `Detektei ${name} (${pop} Einwohner): Professionelle Ermittlungen in der Großstadt. Mehrere Ermittler vor Ort.`,
  (name) => `Ihr erfahrener Privatdetektiv in ${name}. ✓ Observation ✓ Wirtschaftsermittlung ✓ Beweissicherung. Jetzt anfragen!`,
  (name, bl) => `${name}, ${bl}: Führende Detektei für diskrete Ermittlungen. Gerichtsverwertbare Beweise. Kostenlose Beratung.`,
  (name) => `Großstadt-Ermittlungen in ${name}: Erfahrene Detektive für komplexe Fälle. Schnelle Einsatzbereitschaft.`,
  (name) => `Detektei ${name} – Diskretion auf höchstem Niveau. Privat- & Wirtschaftsermittlungen. Erstberatung gratis.`,
];

const META_LANDKREIS_VARIANTEN: MetaGenerator[] = [
  (name, bl) => `Detektei im ${name} (${bl}): Ermittlungen im gesamten Landkreis. ✓ Diskret ✓ Professionell. Jetzt anfragen!`,
  (name, count) => `Privatdetektiv für den ${name} – Einsätze in ${count} Städten. Privatdetektei & Wirtschaftsdetektei.`,
  (name) => `Ihre Detektei im ${name}: Erfahrene Ermittler vor Ort. Gerichtsverwertbare Beweise. Kostenlose Erstberatung.`,
  (name, bl) => `${name}, ${bl}: Professionelle Detektei für den gesamten Landkreis. Diskrete Ermittlungen. Jetzt beraten lassen!`,
  (name) => `Ermittlungen im ${name} – Von Observation bis Wirtschaftsermittlung. Ihr Detektiv im Landkreis.`,
];

const META_BUNDESLAND_VARIANTEN: MetaGenerator[] = [
  (name) => `Detektei ${name}: Landesweite Ermittlungen von erfahrenen Privatdetektiven. ✓ Diskret ✓ Professionell. Jetzt anfragen!`,
  (name, cap) => `Ihr Privatdetektiv in ${name} – Von ${cap} bis in ländliche Regionen. Kostenlose Erstberatung.`,
  (name) => `${name}: Professionelle Detektei mit landesweitem Netzwerk. Privatdetektei & Wirtschaftsdetektei.`,
  (name) => `Ermittlungen in ganz ${name}: Erfahrene Detektive vor Ort. Gerichtsverwertbare Beweise. Diskret & effektiv.`,
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
    `Sie suchen einen erfahrenen Privatdetektiv in ${stadt.name}? Unsere Detektei ist Ihr kompetenter Partner für diskrete Ermittlungen – Privatdetektei und Wirtschaftsdetektei mit gerichtsfester Beweissicherung.`,
    
    `In ${stadt.name} und Umgebung sind wir Ihr Ansprechpartner für professionelle Ermittlungsarbeit. Ob Untreue, Unterhaltsermittlung oder Wirtschaftsdelikte – wir klären Ihren Fall diskret auf.`,
    
    `Unsere Detektei bietet in ${stadt.name} (${bundesland.name}) das komplette Spektrum an Ermittlungsleistungen. Vertrauen Sie auf unsere Erfahrung und Diskretion.`,
    
    `Als Privatdetektiv in ${stadt.name} unterstützen wir Sie bei der Aufklärung sensibler Angelegenheiten. Alle Beweise werden gerichtsfest dokumentiert.`,
    
    `${stadt.name}: Hier sind wir für Sie im Einsatz. Professionelle Ermittlungen mit modernsten Methoden und absoluter Vertraulichkeit.`,
    
    `Sie benötigen einen Detektiv in ${stadt.name}? Wir bieten diskrete Ermittlungen, schnelle Einsatzbereitschaft und gerichtsverwertbare Ergebnisse.`,
  ];
  
  // Großstädte bekommen Zusatz mit Einwohnerzahl
  if (size === "grossstadt" || size === "metropole") {
    const grossVarianten = [
      `${stadt.name} mit seinen ${popStr} Einwohnern stellt besondere Anforderungen an Ermittlungen. Unsere erfahrenen Detektive kennen die Stadt und arbeiten diskret und effektiv.`,
      
      `Als führende Detektei in ${stadt.name} verfügen wir über ein eingespieltes Team vor Ort. In der ${popStr}-Einwohner-Stadt sind wir schnell einsatzbereit.`,
      
      `Professionelle Ermittlungen in ${stadt.name}: Mit mehreren Detektiven vor Ort können wir auch komplexe Fälle in der Großstadt zuverlässig bearbeiten.`,
    ];
    const index = getVariantIndex(stadt.slug + "intro", grossVarianten.length);
    return grossVarianten[index];
  }
  
  const index = getVariantIndex(stadt.slug + "intro", varianten.length);
  return varianten[index];
}

export function getLandkreisIntroText(landkreis: Landkreis, bundesland: Bundesland): string {
  const varianten = [
    `Sie suchen eine Detektei im ${landkreis.name}? Unsere erfahrenen Privatdetektive sind im gesamten Landkreis für Sie da – diskret, professionell und mit gerichtsverwertbarer Beweissicherung.`,
    
    `Im ${landkreis.name} (${bundesland.name}) sind wir Ihr zuverlässiger Partner für Ermittlungen aller Art. Von der Personensuche bis zur Wirtschaftsdetektei – wir sind vor Ort.`,
    
    `Professionelle Detektei-Leistungen im gesamten ${landkreis.name}: Unsere Ermittler kennen die Region und arbeiten diskret in allen Städten und Gemeinden.`,
    
    `Ob in der Kreisstadt oder in kleineren Gemeinden – im ${landkreis.name} sind wir schnell einsatzbereit. Vertrauen Sie auf unsere Erfahrung und lokale Präsenz.`,
    
    `Der ${landkreis.name} gehört zu unserem Kerngebiet. Hier ermitteln wir seit Jahren erfolgreich – mit Ortskenntnis, Diskretion und professioneller Dokumentation.`,
  ];
  
  const index = getVariantIndex(landkreis.slug + "intro", varianten.length);
  return varianten[index];
}

// ============================================================================
// WARUM LOKALE DETEKTEI - VARIANTEN
// ============================================================================

export function getWarumLokalText(name: string, isLandkreis: boolean, seed: string): string {
  const stadtVarianten = [
    `Eine lokale Detektei in ${name} bietet entscheidende Vorteile: Unsere Ermittler kennen die Stadt, ihre Strukturen und können schnell vor Ort sein. Das spart Zeit und Kosten – und erhöht die Erfolgschancen erheblich.`,
    
    `Warum ein Detektiv aus ${name}? Ortskenntnis ist bei Ermittlungen Gold wert. Wir kennen die Gegebenheiten, können Zielpersonen unauffällig verfolgen und wissen, wo und wie wir am effektivsten arbeiten.`,
    
    `Lokale Präsenz macht den Unterschied: Als Detektei in ${name} sind wir in Minuten einsatzbereit – nicht in Stunden. Bei zeitkritischen Observationen kann das entscheidend sein.`,
    
    `Ein Privatdetektiv vor Ort in ${name} bedeutet: kürzere Anfahrtswege, niedrigere Spesen, schnellere Reaktionszeiten. Gleichzeitig profitieren Sie von unserer Erfahrung in der Region.`,
  ];
  
  const landkreisVarianten = [
    `Eine Detektei im ${name} kennt die Region: Wir wissen, welche Routen Zielpersonen nutzen, wo sich Observation lohnt und wie wir in ländlichen wie städtischen Gebieten gleichermaßen effektiv arbeiten.`,
    
    `Warum ein lokaler Detektiv im ${name}? Regionale Expertise spart Zeit und Geld. Unsere Ermittler sind mit den Gegebenheiten im gesamten Landkreis vertraut und schnell vor Ort.`,
    
    `Lokale Detektei-Präsenz im ${name}: Wir sind in allen Städten und Gemeinden des Landkreises einsatzbereit. Kurze Wege, schnelle Reaktion, bessere Ergebnisse.`,
    
    `Der ${name} ist unser Gebiet. Von der größten Stadt bis zur kleinsten Gemeinde – wir kennen jeden Winkel und arbeiten hier seit Jahren erfolgreich und diskret.`,
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
          description: `Ein Klient aus ${name.split(" ")[0]} beauftragte uns wegen Verdacht auf Fremdgehen. Durch diskrete Observation über mehrere Tage konnten wir den Verdacht bestätigen und gerichtsverwertbare Beweise sichern.`
        },
        {
          title: "Unterhaltsermittlung", 
          description: `Nach der Scheidung verschwieg der Ex-Partner sein wahres Einkommen. Unsere Recherchen ${prefix} deckten nicht angegebene Nebeneinkünfte und Vermögenswerte auf.`
        },
        {
          title: "Krankfeierkontrolle",
          description: `Ein Unternehmen ${prefix} hatte Zweifel an der Arbeitsunfähigkeit eines Mitarbeiters. Unsere Observation zeigte: Der "Kranke" arbeitete schwarz auf einer Baustelle.`
        },
        {
          title: "Personensuche",
          description: `Ein Mandant suchte einen verschollenen Verwandten. Durch systematische Recherchen und Befragungen ${prefix} konnten wir die Person innerhalb von zwei Wochen ausfindig machen.`
        }
      ]
    },
    {
      title: `Fallbeispiele aus unserer Arbeit ${prefix}`,
      cases: [
        {
          title: "Verdacht auf Fremdgehen",
          description: `Häufigster Auftrag ${prefix}: Partnerüberwachung bei Untreue-Verdacht. Wir beobachten diskret und dokumentieren Treffen, Kontakte und Verhaltensweisen – immer im Rahmen des Erlaubten.`
        },
        {
          title: "Mitarbeiter-Betrug",
          description: `Ein Unternehmer vermutete, dass sein Außendienstmitarbeiter Arbeitszeit erschwindelt. Unsere GPS-lose Observation bestätigte: Mehrere Stunden täglich wurden privat genutzt.`
        },
        {
          title: "Erbschaftsstreit",
          description: `Bei einer Erbschaft ${prefix} tauchten plötzlich unbekannte Anspruchsteller auf. Unsere Recherchen klärten die tatsächlichen Familienverhältnisse und Berechtigungen.`
        },
        {
          title: "Stalking-Dokumentation",
          description: `Eine Mandantin wurde belästigt. Wir dokumentierten die Vorfälle professionell und lieferten Beweise, die zur erfolgreichen Erwirkung einer einstweiligen Verfügung führten.`
        }
      ]
    },
    {
      title: `So helfen wir Klienten ${prefix}`,
      cases: [
        {
          title: "Eheliche Untreue",
          description: `Der klassische Fall: Verdacht auf Fremdgehen. ${prefix.charAt(0).toUpperCase() + prefix.slice(1)} führen wir regelmäßig diskrete Observationen durch – mit eindeutigen, gerichtsfesten Ergebnissen.`
        },
        {
          title: "Arbeitszeitbetrug",
          description: `Homeoffice-Kontrolle, Außendienst-Überwachung, Nebentätigkeiten während der Krankschreibung – wir decken Arbeitszeitbetrug ${prefix} zuverlässig auf.`
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
    `Detektive arbeiten im Rahmen der sogenannten Jedermannsrechte. Das bedeutet: Alles, was jeder Bürger darf, dürfen auch wir – jedoch mit professioneller Ausrüstung und Erfahrung. In ${name} gelten dieselben rechtlichen Grundlagen wie überall in Deutschland.`,
    
    `In ${name} gilt wie überall: Detektive haben keine Sonderrechte. Wir arbeiten auf Basis der Jedermannsrechte und der Rechtsprechung des Bundesgerichtshofs. Unsere Methoden sind legal, unsere Beweise gerichtsverwertbar.`,
    
    `Rechtssicherheit ist uns wichtig: Alle Ermittlungen in ${name} erfolgen im Einklang mit deutschem Recht. Wir überschreiten keine Grenzen – das würde auch Ihnen als Auftraggeber schaden.`,
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
      `Bei Untreue-Verdacht in ${name} gehen wir methodisch vor: Zunächst analysieren wir Ihre Informationen, dann planen wir die Observation. Unsere Detektive dokumentieren diskret jeden relevanten Kontakt und jede Bewegung – mit Fotos, Zeiten und Orten.`,
      `Fremdgehen aufdecken in ${name}: Wir beobachten die Zielperson über den vereinbarten Zeitraum, dokumentieren Treffen und Aktivitäten. Am Ende erhalten Sie einen detaillierten Bericht mit allen Beweisen.`,
      `Untreue-Ermittlungen in ${name} führen wir mit größter Diskretion durch. Die Zielperson erfährt nichts von unserer Beobachtung. Sie erhalten aussagekräftige Beweise, die auch vor Gericht Bestand haben.`,
    ],
    personensuche: [
      `Personensuche in ${name} und darüber hinaus: Wir finden vermisste Angehörige, untergetauchte Schuldner oder Zeugen. Unsere Methoden reichen von Datenbankrecherchen bis zu Vor-Ort-Ermittlungen.`,
      `Sie suchen jemanden in ${name}? Wir ermitteln aktuelle Adressen, Arbeitgeber und Lebensumstände. Ob Erbfall, Unterhalt oder private Gründe – wir finden die Person.`,
      `Adressermittlung und Personensuche in ${name}: Mit legalen Recherchemethoden und lokaler Präsenz spüren wir Personen auf, die sich Ihren Ansprüchen entziehen wollen.`,
    ],
    wirtschaft: [
      `Wirtschaftsermittlungen in ${name}: Mitarbeiterüberprüfung, Krankfeierkontrolle, Diebstahlaufklärung – wir schützen Ihr Unternehmen vor internem Betrug und Missbrauch.`,
      `Für Unternehmen in ${name} bieten wir: Überprüfung von Bewerbern und Mitarbeitern, Kontrolle bei Verdacht auf Arbeitszeitbetrug, Aufklärung von Unterschlagung und Diebstahl.`,
      `Ihr Wirtschaftsdetektiv in ${name}: Wir ermitteln diskret bei Verdacht auf Mitarbeiterbetrug, überprüfen Krankmeldungen und klären interne Unregelmäßigkeiten auf.`,
    ],
    observation: [
      `Professionelle Observation in ${name}: Unsere Detektive überwachen Zielpersonen unauffällig – zu Fuß, per Fahrzeug oder stationär. Moderne Ausrüstung und Erfahrung garantieren lückenlose Dokumentation.`,
      `Observationen in ${name} führen wir mit mindestens zwei Ermittlern durch. So können wir die Zielperson auch bei Ortswechseln zuverlässig verfolgen, ohne aufzufallen.`,
      `Diskrete Überwachung in ${name}: Wir beobachten Personen im öffentlichen Raum und dokumentieren ihre Aktivitäten. Unsere Berichte sind detailliert, unsere Fotos beweiskräftig.`,
    ],
  };
  
  const varianten = beschreibungen[serviceType];
  const index = getVariantIndex(seed + serviceType, varianten.length);
  return varianten[index];
}
