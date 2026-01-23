import { FAQ, Stadt, Bundesland, Landkreis } from "@/data/types";
import { getVariantIndex, formatPopulation, getCitySize } from "./content-variants";

// ============================================================================
// FAQ VARIANTEN-POOLS
// ============================================================================

// Jede FAQ-Antwort hat 5-6 Varianten für maximale Diversität

type AnswerGenerator = (name: string, extra?: string) => string;

// --- KOSTEN FRAGE ---
const KOSTEN_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ein Privatdetektiv in ${name} kostet zwischen 60-150€ pro Stunde, abhängig von Erfahrung und Auftragsart. Für ganztägige Observationen sollten Sie mit 800-1.500€ rechnen. Die Erstberatung ist immer kostenlos.`,
  
  (name) => `Die Kosten für einen Detektiv in ${name} variieren: Stundenpreise von 60-150€, Tagessätze ab 800€. Sie erhalten vorab einen transparenten Kostenvoranschlag ohne versteckte Gebühren.`,
  
  (name) => `In ${name} liegen die Detektivkosten bei 60-150€ pro Stunde. Für Observationen rechnen Sie mit 800-1.500€ täglich, Spesen inklusive. Wir beraten Sie kostenlos zu den zu erwartenden Kosten.`,
  
  (name) => `Für professionelle Ermittlungen in ${name} zahlen Sie 60-150€/Stunde. Tageseinsätze kosten 800-1.500€. Alle Preise sind transparent – keine Überraschungen.`,
  
  (name) => `Unsere Detektivleistungen in ${name}: Stundensätze 60-150€, Tagespauschalen ab 800€. Die Kosten hängen vom konkreten Auftrag ab – kontaktieren Sie uns für ein individuelles Angebot.`,
  
  (name) => `Was kostet ein Detektiv in ${name}? Rechnen Sie mit 60-150€ pro Stunde oder 800-1.500€ pro Observationstag. Die Erstberatung zur Kostenschätzung ist kostenlos.`,
];

// --- SERIÖSER DETEKTIV FRAGE ---
const SERIOES_VARIANTEN: AnswerGenerator[] = [
  () => `Achten Sie auf: IHK-Zulassung nach §34a GewO, Mitgliedschaft in Berufsverbänden (BDD, BVPD), transparente Preisgestaltung mit schriftlichem Kostenvoranschlag, und professionelle Kommunikation.`,
  
  () => `Seriöse Detekteien erkennen Sie an: Gewerbezulassung, transparente Preise ohne Vorauskasse, schriftliche Verträge, und einer kostenlosen Erstberatung. Misstrauen Sie Anbietern mit unrealistischen Versprechen.`,
  
  () => `Prüfen Sie: Ist die Detektei IHK-zugelassen? Gibt es einen schriftlichen Vertrag? Sind die Kosten transparent? Seriöse Ermittler beantworten diese Fragen offen und ehrlich.`,
  
  () => `Merkmale seriöser Detekteien: IHK-Zulassung, Berufshaftpflicht, transparente Preise, schriftliche Auftragsbestätigung. Wir erfüllen alle diese Kriterien und beraten Sie gerne unverbindlich.`,
  
  () => `Eine gute Detektei bietet: Kostenlose Erstberatung, transparente Kostenaufstellung, schriftlichen Vertrag und realistische Einschätzungen. Vorsicht bei Garantieversprechen – seriöse Ermittler versprechen Methoden, keine Ergebnisse.`,
];

// --- GERICHTSVERWERTBARKEIT FRAGE ---
const GERICHT_VARIANTEN: AnswerGenerator[] = [
  () => `Ja, professionell gesicherte Beweise sind vor Gericht verwertbar, sofern sie legal im Rahmen der Jedermannsrechte beschafft wurden. Das gilt für Observationsberichte, Fotos aus dem öffentlichen Raum und Zeugenaussagen.`,
  
  () => `Unsere Beweise sind gerichtsverwertbar. Wir arbeiten ausschließlich mit legalen Methoden und dokumentieren alle Ermittlungen so, dass sie vor Zivil- und Arbeitsgerichten Bestand haben.`,
  
  () => `Ja, wenn sie legal erhoben wurden. Unsere Detektive sind in gerichtsfester Dokumentation geschult. Observationsberichte und Fotomaterial werden von Gerichten als Beweismittel anerkannt.`,
  
  () => `Gerichtsverwertbar sind: Observationsberichte, Fotos/Videos aus dem öffentlichen Raum, unsere Zeugenaussagen. Alle Ermittlungen erfolgen im Rahmen der Jedermannsrechte.`,
  
  () => `Die von uns gesicherten Beweise können Sie in rechtlichen Verfahren verwenden. Wir achten streng auf legale Methoden und lückenlose Dokumentation – das ist die Grundlage für Verwertbarkeit.`,
];

// --- SCHNELLIGKEIT FRAGE ---
const SCHNELL_VARIANTEN: AnswerGenerator[] = [
  (name) => `In dringenden Fällen können wir innerhalb von 24 Stunden in ${name} mit den Ermittlungen beginnen. Nach Erstberatung und Auftragserteilung sind unsere Detektive schnell einsatzbereit.`,
  
  (name) => `Schnelle Einsatzbereitschaft in ${name}: Bei Eilaufträgen starten wir innerhalb von 24 Stunden. Kontaktieren Sie uns – wir besprechen, wie schnell wir für Sie aktiv werden können.`,
  
  (name) => `In ${name} sind wir kurzfristig verfügbar. Bei dringenden Fällen können Ermittlungen oft schon am nächsten Tag beginnen. Rufen Sie uns an für eine schnelle Terminabsprache.`,
  
  (name) => `Unsere Reaktionszeit in ${name}: In den meisten Fällen sind wir innerhalb von 24-48 Stunden einsatzbereit. Bei besonderer Dringlichkeit finden wir gemeinsam eine Lösung.`,
  
  (name) => `Schnellstart möglich: In ${name} können wir nach Auftragserteilung kurzfristig beginnen. Unser Netzwerk ermöglicht flexible Einsatzplanung auch bei eiligen Anfragen.`,
];

// --- LEISTUNGEN FRAGE ---
const LEISTUNGEN_VARIANTEN: AnswerGenerator[] = [
  (name) => `Unsere Detektei in ${name} führt Privatermittlungen (Untreue, Personensuche, Unterhaltsermittlungen) und Wirtschaftsermittlungen (Mitarbeiterüberprüfung, Krankfeierkontrolle, Diebstahlermittlung) durch.`,
  
  (name) => `In ${name} bieten wir das komplette Spektrum: Privatdetektei (Untreue, Sorgerecht, Stalking) und Wirtschaftsdetektei (Mitarbeiterüberprüfung, Krankfeierkontrolle, Betrugsermittlung).`,
  
  (name) => `Unser Leistungsspektrum in ${name}: Privat – Untreue aufdecken, Personen finden, Sorgerecht. Geschäftlich – Mitarbeiter-Checks, Krankfeier, Wirtschaftsdelikte. Alles diskret und legal.`,
  
  (name) => `Wir ermitteln in ${name} bei: Fremdgehensverdacht, vermissten Personen, Unterhaltsstreitigkeiten, Mitarbeiterbetrug, simulierter Krankheit und Diebstahl. Umfassend und professionell.`,
  
  (name) => `Das komplette Ermittlungsspektrum in ${name}: Von der Untreue-Observation über Adressermittlung bis zur Wirtschaftsdetektei. Alle Leistungen unter einem Dach.`,
];

// --- DISKRETION FRAGE ---
const DISKRETION_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ja, absolute Diskretion ist das Fundament unserer Arbeit. Unsere Detektive in ${name} arbeiten verdeckt und unauffällig. Ihre Identität und der Ermittlungsauftrag bleiben stets geschützt.`,
  
  (name) => `Diskretion in ${name} garantiert: Ihre Anfrage wird vertraulich behandelt, unsere Ermittler arbeiten unauffällig, und alle Ergebnisse gehen ausschließlich an Sie.`,
  
  (name) => `In ${name} arbeiten wir mit höchster Diskretion. Niemand erfährt von der Ermittlung – weder die Zielperson noch Dritte. Vertraulichkeit ist unser oberstes Gebot.`,
  
  (name) => `100% diskret in ${name}: Verdeckte Arbeitsmethoden, keine Rückverfolgung zu Ihnen, verschlüsselte Kommunikation. Ihre Privatsphäre ist bei uns sicher.`,
  
  (name) => `Vertraulichkeit in ${name} ist selbstverständlich: Unsere Detektive agieren im Verborgenen, Ihre Daten werden geschützt, der Auftrag bleibt geheim.`,
];

// --- ANONYME BEAUFTRAGUNG FRAGE ---
const ANONYM_VARIANTEN: AnswerGenerator[] = [
  () => `Für die Erstberatung können Sie anonym bleiben – rufen Sie uns einfach an ohne sich vorzustellen. Für eine Auftragserteilung benötigen wir jedoch Ihre Kontaktdaten, die selbstverständlich vertraulich behandelt werden.`,
  
  () => `Anonyme Erstberatung ist möglich. Schildern Sie Ihren Fall ohne Ihren Namen zu nennen. Erst bei konkreter Auftragserteilung brauchen wir Kontaktdaten – die wir natürlich vertraulich behandeln.`,
  
  () => `Sie können uns anonym kontaktieren und Ihre Situation schildern. Die Erstberatung erfolgt ohne Verpflichtung. Für einen Auftrag sind dann Kontaktdaten nötig, aber diese bleiben streng vertraulich.`,
  
  () => `Erste Beratung anonym: Ja. Rufen Sie an, schildern Sie den Fall, ohne sich zu identifizieren. Für einen Auftrag brauchen wir später Kontaktdaten – alle Daten werden vertraulich behandelt.`,
  
  () => `Wir verstehen, dass Anonymität wichtig ist. Für die Erstberatung müssen Sie sich nicht identifizieren. Erst wenn Sie beauftragen möchten, benötigen wir Ihre (vertraulichen) Daten.`,
];

// --- KONTAKT FRAGE ---
const KONTAKT_VARIANTEN: AnswerGenerator[] = [
  () => `Sie erreichen uns telefonisch unter 0176 66918653 (Mo-Fr 8-20 Uhr, Sa 9-16 Uhr) oder per E-Mail. Nutzen Sie auch unser Kontaktformular für eine unverbindliche Anfrage.`,
  
  () => `Kontakt: Telefon 0176 66918653 (werktags 8-20 Uhr, samstags 9-16 Uhr), E-Mail oder Kontaktformular. Die Erstberatung ist kostenlos und vertraulich.`,
  
  () => `Rufen Sie uns an: 0176 66918653. Unsere Berater sind Mo-Fr 8-20 Uhr und Sa 9-16 Uhr für Sie da. Oder schreiben Sie uns – wir melden uns diskret zurück.`,
  
  () => `Wir sind erreichbar unter 0176 66918653 (Montag bis Freitag 8-20 Uhr, Samstag 9-16 Uhr). Alternativ nutzen Sie unser Kontaktformular für eine diskrete Anfrage.`,
  
  () => `Ihr Draht zu uns: 0176 66918653. Erreichbarkeit Mo-Fr 8-20, Sa 9-16 Uhr. Per E-Mail oder Formular erreichen Sie uns rund um die Uhr – Antwort binnen 24h.`,
];

// --- DAUER FRAGE ---
const DAUER_VARIANTEN: AnswerGenerator[] = [
  (name) => `Die Dauer einer Ermittlung in ${name} hängt vom Fall ab: Einfache Fälle klären sich oft in 2-3 Tagen, komplexere Ermittlungen können 1-2 Wochen dauern. Wir beraten Sie vorab zur realistischen Zeitplanung.`,
  
  (name) => `Wie lange dauert eine Ermittlung in ${name}? Das variiert: Manche Observationen bringen schon am ersten Tag Ergebnisse, andere benötigen eine Woche oder mehr. Wir beraten Sie vorab realistisch.`,
  
  (name) => `In ${name} rechnen Sie je nach Auftragsart mit 2-10 Tagen. Die tatsächliche Dauer besprechen wir nach Analyse Ihres Falls – transparent und ehrlich.`,
  
  (name) => `Ermittlungsdauer in ${name}: Privatdetektei-Fälle dauern typischerweise 3-7 Tage, Wirtschaftsdetektei-Fälle 5-14 Tage. Bei eiligen Fällen priorisieren wir – schnelle Ergebnisse sind möglich.`,
];

// --- KEINE BEWEISE FRAGE ---
const KEINE_BEWEISE_VARIANTEN: AnswerGenerator[] = [
  () => `Wenn wir keine Beweise finden, ist das auch ein Ergebnis – und manchmal das bessere. Sie zahlen für unsere Arbeit, nicht für ein bestimmtes Ergebnis. Wir dokumentieren, was wir beobachten – auch wenn das "nichts Auffälliges" ist.`,
  
  () => `Keine Garantie für Ergebnisse, aber Garantie für professionelle Arbeit: Wenn die Zielperson sich im Beobachtungszeitraum unauffällig verhält, berichten wir das. Oft ist auch das eine wertvolle Information.`,
  
  () => `Wir versprechen keine Ergebnisse, sondern professionelle Ermittlung. Wenn wir nichts finden, könnte Ihr Verdacht unbegründet sein – oder die Zielperson war im Beobachtungszeitraum vorsichtig. Wir besprechen dann das weitere Vorgehen.`,
  
  () => `Seriöse Detekteien versprechen Methoden, keine Ergebnisse. Wenn unsere Observation keine Beweise erbringt, dokumentieren wir das transparent. Manchmal ist "nichts gefunden" die beste Nachricht.`,
];

// --- ZEUGE VOR GERICHT FRAGE ---
const ZEUGE_VARIANTEN: AnswerGenerator[] = [
  () => `Ja, unsere Detektive können als Zeugen vor Gericht aussagen. Wir sind darauf vorbereitet und haben Erfahrung mit Vernehmungen. Unsere Dokumentation ist so angelegt, dass sie die Aussage stützt.`,
  
  () => `Selbstverständlich stehen unsere Ermittler als Zeugen zur Verfügung. Die gerichtsfeste Dokumentation und die persönliche Aussage des Detektivs ergänzen sich und erhöhen die Beweiskraft.`,
  
  () => `Ja, bei Bedarf sagen unsere Detektive vor Gericht aus. Das ist Teil unseres Service. Unsere Ermittler sind erfahren im Umgang mit Richtern und Anwälten.`,
  
  () => `Unsere Detektive können Sie als Zeugen benennen. Wir dokumentieren Beobachtungen so, dass wir sie auch Jahre später präzise wiedergeben können. Gerichtserfahrung ist bei uns Standard.`,
];

// --- FORTSCHRITT FRAGE ---
const FORTSCHRITT_VARIANTEN: AnswerGenerator[] = [
  () => `Wir halten Sie regelmäßig auf dem Laufenden – je nach Wunsch täglich oder nach Abschluss wichtiger Phasen. Bei dringenden Erkenntnissen melden wir uns sofort. Alle Berichte erfolgen über sichere Kanäle.`,
  
  () => `Updates erhalten Sie nach Vereinbarung: telefonisch, per verschlüsselter E-Mail oder persönlich. Bei wichtigen Entwicklungen informieren wir Sie sofort. Diskretion hat dabei höchste Priorität.`,
  
  () => `Über den Fortschritt informieren wir Sie regelmäßig und diskret. Wann und wie oft besprechen wir vorab. Bei eiligen Erkenntnissen melden wir uns umgehend – sicher und vertraulich.`,
  
  () => `Sie bleiben informiert: Regelmäßige Statusberichte, sofortige Meldung bei wichtigen Erkenntnissen. Die Kommunikation erfolgt ausschließlich über vereinbarte, sichere Kanäle.`,
];

// ============================================================================
// FAQ GENERATOREN
// ============================================================================

/**
 * Generiert FAQs für Stadt-Seiten mit variierenden Antworten (10-12 FAQs)
 */
export function getStadtFAQs(stadt: Stadt, bundesland: Bundesland): FAQ[] {
  const name = stadt.name;
  const seed = stadt.slug + stadt.id;
  
  return [
    {
      question: `Was kostet ein Privatdetektiv in ${name}?`,
      answer: KOSTEN_VARIANTEN[getVariantIndex(seed + "kosten", KOSTEN_VARIANTEN.length)](name),
    },
    {
      question: `Wie finde ich einen seriösen Detektiv in ${name}?`,
      answer: SERIOES_VARIANTEN[getVariantIndex(seed + "serioes", SERIOES_VARIANTEN.length)](name),
    },
    {
      question: `Sind Detektiv-Beweise aus ${name} vor Gericht verwertbar?`,
      answer: GERICHT_VARIANTEN[getVariantIndex(seed + "gericht", GERICHT_VARIANTEN.length)](name),
    },
    {
      question: `Wie schnell kann ein Detektiv in ${name} starten?`,
      answer: SCHNELL_VARIANTEN[getVariantIndex(seed + "schnell", SCHNELL_VARIANTEN.length)](name),
    },
    {
      question: `Welche Ermittlungen führt die Detektei in ${name} durch?`,
      answer: LEISTUNGEN_VARIANTEN[getVariantIndex(seed + "leistungen", LEISTUNGEN_VARIANTEN.length)](name),
    },
    {
      question: `Arbeitet die Detektei diskret in ${name}?`,
      answer: DISKRETION_VARIANTEN[getVariantIndex(seed + "diskret", DISKRETION_VARIANTEN.length)](name),
    },
    {
      question: `Wie lange dauert eine Ermittlung in ${name}?`,
      answer: DAUER_VARIANTEN[getVariantIndex(seed + "dauer", DAUER_VARIANTEN.length)](name),
    },
    {
      question: `Was passiert, wenn keine Beweise gefunden werden?`,
      answer: KEINE_BEWEISE_VARIANTEN[getVariantIndex(seed + "keinebeweise", KEINE_BEWEISE_VARIANTEN.length)](name),
    },
    {
      question: `Kann der Detektiv später als Zeuge vor Gericht aussagen?`,
      answer: ZEUGE_VARIANTEN[getVariantIndex(seed + "zeuge", ZEUGE_VARIANTEN.length)](name),
    },
    {
      question: `Wie werde ich über den Ermittlungsfortschritt informiert?`,
      answer: FORTSCHRITT_VARIANTEN[getVariantIndex(seed + "fortschritt", FORTSCHRITT_VARIANTEN.length)](name),
    },
    {
      question: `Kann ich die Detektei in ${name} auch anonym beauftragen?`,
      answer: ANONYM_VARIANTEN[getVariantIndex(seed + "anonym", ANONYM_VARIANTEN.length)](name),
    },
    {
      question: `Wie kontaktiere ich die Detektei in ${name}?`,
      answer: KONTAKT_VARIANTEN[getVariantIndex(seed + "kontakt", KONTAKT_VARIANTEN.length)](name),
    },
  ];
}

// --- LANDKREIS SPEZIFISCHE VARIANTEN ---
const LK_STAEDTE_VARIANTEN: AnswerGenerator[] = [
  (name) => `Unsere Detektei ist im gesamten ${name} tätig. Wir decken alle größeren Städte sowie kleinere Gemeinden ab. Die genaue Auflistung der Einsatzorte finden Sie auf dieser Seite.`,
  
  (name) => `Im ${name} sind wir flächendeckend im Einsatz. Alle Städte und Gemeinden werden abgedeckt – von der Kreisstadt bis zu ländlichen Ortschaften.`,
  
  (name) => `Wir ermitteln im gesamten ${name}. Ob in der Kreisstadt oder in kleineren Gemeinden – unsere Detektive sind vor Ort im Einsatz.`,
  
  (name) => `Der ${name} gehört vollständig zu unserem Einsatzgebiet. Eine Übersicht aller Städte mit eigener Seite finden Sie unten – auch darüber hinaus sind wir aktiv.`,
  
  (name) => `Flächendeckend im ${name}: Wir sind in allen Städten und Gemeinden des Landkreises für Sie da. Scrollen Sie nach unten für eine Übersicht.`,
];

const LK_SCHNELL_VARIANTEN: AnswerGenerator[] = [
  (name) => `Durch unser Netzwerk können wir im ${name} schnell reagieren. In den meisten Fällen ist ein Detektiv innerhalb von 24-48 Stunden einsatzbereit.`,
  
  (name) => `Im ${name} sind wir kurzfristig verfügbar. Dank lokaler Präsenz erreichen unsere Detektive jeden Ort im Landkreis zeitnah.`,
  
  (name) => `Schnelle Einsatzbereitschaft im ${name}: Nach Auftragserteilung können wir meist innerhalb von 24-48 Stunden mit der Arbeit beginnen.`,
  
  (name) => `Unser Netzwerk im ${name} ermöglicht schnelle Reaktionszeiten. Kontaktieren Sie uns – wir besprechen, wie schnell wir für Sie starten können.`,
];

const LK_KLEIN_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ja, unsere Detektei ist auch in kleineren Gemeinden im ${name} tätig. Wir führen Ermittlungen im gesamten Landkreis durch – diskret und professionell.`,
  
  (name) => `Auch in kleinen Gemeinden des ${name} sind wir im Einsatz. Unser Netzwerk ermöglicht Ermittlungen in jeder Ecke des Landkreises.`,
  
  (name) => `Im ${name} ermitteln wir überall – nicht nur in den großen Städten. Auch ländliche Gemeinden gehören zu unserem Einsatzgebiet.`,
  
  (name) => `Selbstverständlich arbeiten wir auch in kleineren Orten im ${name}. Diskrete Ermittlungen sind überall im Landkreis möglich.`,
];

/**
 * Generiert FAQs für Landkreis-Seiten mit variierenden Antworten (10 FAQs)
 */
export function getLandkreisFAQs(landkreis: Landkreis, bundesland: Bundesland): FAQ[] {
  const name = landkreis.name;
  const seed = landkreis.slug + landkreis.id;
  
  return [
    {
      question: `Welche Städte im ${name} werden abgedeckt?`,
      answer: LK_STAEDTE_VARIANTEN[getVariantIndex(seed + "staedte", LK_STAEDTE_VARIANTEN.length)](name),
    },
    {
      question: `Was kostet ein Detektiv im ${name}?`,
      answer: KOSTEN_VARIANTEN[getVariantIndex(seed + "kosten", KOSTEN_VARIANTEN.length)](name),
    },
    {
      question: `Wie schnell ist ein Detektiv im ${name} vor Ort?`,
      answer: LK_SCHNELL_VARIANTEN[getVariantIndex(seed + "schnell", LK_SCHNELL_VARIANTEN.length)](name),
    },
    {
      question: `Arbeiten Sie auch in kleineren Gemeinden im ${name}?`,
      answer: LK_KLEIN_VARIANTEN[getVariantIndex(seed + "klein", LK_KLEIN_VARIANTEN.length)](name),
    },
    {
      question: `Welche Ermittlungen führen Sie im ${name} durch?`,
      answer: LEISTUNGEN_VARIANTEN[getVariantIndex(seed + "leistungen", LEISTUNGEN_VARIANTEN.length)](name),
    },
    {
      question: `Sind Detektiv-Beweise aus dem ${name} gerichtsverwertbar?`,
      answer: GERICHT_VARIANTEN[getVariantIndex(seed + "gericht", GERICHT_VARIANTEN.length)](name),
    },
    {
      question: `Wie lange dauert eine Ermittlung im ${name}?`,
      answer: DAUER_VARIANTEN[getVariantIndex(seed + "dauer", DAUER_VARIANTEN.length)](name),
    },
    {
      question: `Arbeitet die Detektei diskret im ${name}?`,
      answer: DISKRETION_VARIANTEN[getVariantIndex(seed + "diskret", DISKRETION_VARIANTEN.length)](name),
    },
    {
      question: `Wie werde ich über den Fortschritt informiert?`,
      answer: FORTSCHRITT_VARIANTEN[getVariantIndex(seed + "fortschritt", FORTSCHRITT_VARIANTEN.length)](name),
    },
    {
      question: `Wie kontaktiere ich die Detektei im ${name}?`,
      answer: KONTAKT_VARIANTEN[getVariantIndex(seed + "kontakt", KONTAKT_VARIANTEN.length)](name),
    },
  ];
}

// --- BUNDESLAND SPEZIFISCHE VARIANTEN ---
const BL_KOSTEN_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ein Privatdetektiv in ${name} kostet zwischen 50-150€ pro Stunde, je nach Region und Auftragsart. In Ballungsräumen liegen die Preise tendenziell höher als in ländlichen Gebieten.`,
  
  (name) => `Die Kosten in ${name} variieren regional: In Großstädten 80-150€/Stunde, in ländlichen Gebieten ab 50€. Observationen kosten landesweit 800-1.500€ pro Tag.`,
  
  (name) => `Detektivkosten in ${name}: 50-150€ pro Stunde, abhängig von Standort und Auftrag. Wir erstellen Ihnen gerne ein individuelles Angebot für Ihre Region.`,
  
  (name) => `In ${name} zahlen Sie für einen Privatdetektiv 50-150€/Stunde. Die genauen Kosten hängen von der Region und dem Ermittlungsumfang ab.`,
];

const BL_LEISTUNGEN_VARIANTEN: AnswerGenerator[] = [
  (name) => `In ${name} bieten wir: Privatdetektei (Untreue, Sorgerecht, Stalking, Betrug) und Wirtschaftsdetektei (Mitarbeiterüberprüfung, Krankfeierkontrolle, Betrugsermittlung). Landesweit verfügbar.`,
  
  (name) => `Unser Angebot in ${name}: Privat – Untreue, Personensuche, Sorgerecht. Geschäftlich – Mitarbeiter-Checks, Krankfeier, Betrug. Landesweit professionell und diskret.`,
  
  (name) => `Landesweit in ${name}: Privatdetektei für Privatpersonen (Untreue, Sorgerecht, Stalking). Wirtschaftsdetektei für Unternehmen (Mitarbeiterprüfung, Krankfeier, Betrug).`,
  
  (name) => `Das komplette Ermittlungsspektrum in ganz ${name}: Von der Personensuche über Untreue-Ermittlung bis zur Wirtschaftsdetektei – wir sind Ihr Partner.`,
];

const BL_LAND_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ja, wir sind in ganz ${name} tätig – sowohl in Städten als auch in ländlichen Regionen. Unser Netzwerk ermöglicht Einsätze im gesamten Bundesland.`,
  
  (name) => `Landesweit in ${name}: Unser Netzwerk reicht von den Großstädten bis in ländliche Gebiete. Überall im Bundesland sind wir für Sie da.`,
  
  (name) => `Auch auf dem Land in ${name} sind wir aktiv. Dank unseres Netzwerks erreichen wir jeden Winkel des Bundeslandes.`,
  
  (name) => `In ganz ${name} ermitteln wir – Großstadt wie Land. Flexible Einsatzplanung ermöglicht Aufträge in allen Regionen.`,
];

/**
 * Generiert FAQs für Bundesland-Seiten mit variierenden Antworten
 */
export function getBundeslandFAQs(bundesland: Bundesland): FAQ[] {
  const name = bundesland.name;
  const seed = bundesland.slug + bundesland.id;
  
  return [
    {
      question: `Was kostet ein Privatdetektiv in ${name}?`,
      answer: BL_KOSTEN_VARIANTEN[getVariantIndex(seed + "kosten", BL_KOSTEN_VARIANTEN.length)](name),
    },
    {
      question: `Welche Detektei-Leistungen gibt es in ${name}?`,
      answer: BL_LEISTUNGEN_VARIANTEN[getVariantIndex(seed + "leistungen", BL_LEISTUNGEN_VARIANTEN.length)](name),
    },
    {
      question: `Sind Detektiv-Beweise in ${name} gerichtsverwertbar?`,
      answer: GERICHT_VARIANTEN[getVariantIndex(seed + "gericht", GERICHT_VARIANTEN.length)](name),
    },
    {
      question: `Wie schnell kann ein Detektiv in ${name} starten?`,
      answer: SCHNELL_VARIANTEN[getVariantIndex(seed + "schnell", SCHNELL_VARIANTEN.length)](name),
    },
    {
      question: `Arbeitet die Detektei auch in ländlichen Gebieten von ${name}?`,
      answer: BL_LAND_VARIANTEN[getVariantIndex(seed + "land", BL_LAND_VARIANTEN.length)](name),
    },
  ];
}
