import { FAQ, Stadt, Bundesland, Landkreis } from "@/data/types";
import { getVariantIndex, formatPopulation, getCitySize } from "./content-variants";

// ============================================================================
// FAQ VARIANTEN-POOLS
// ============================================================================

// Jede FAQ-Antwort hat 5-6 Varianten für maximale Diversität

type AnswerGenerator = (name: string, extra?: string) => string;

// --- KOSTEN FRAGE ---
const KOSTEN_VARIANTEN: AnswerGenerator[] = [
  (name) => `Die Kosten für einen Privatdetektiv in ${name} werden individuell nach Fall und Aufwand berechnet. Faktoren wie Ermittlungsdauer, Komplexität und benötigte Ressourcen fließen in die Kalkulation ein. Über Detektei Base erhalten Sie ein unverbindliches Angebot – die Vermittlung ist kostenlos.`,
  
  (name) => `Detektivkosten in ${name} hängen vom konkreten Auftrag ab: Art der Ermittlung, Dauer und Aufwand bestimmen den Preis. Detektei Base vermittelt Sie kostenlos an geprüfte Partner-Detekteien, die Ihnen ein individuelles Angebot erstellen.`,
  
  (name) => `In ${name} werden die Detektivkosten individuell kalkuliert – je nach Ermittlungsart, Dauer und Komplexität Ihres Falls. Die Erstberatung und Vermittlung über Detektei Base ist für Sie kostenlos.`,
  
  (name) => `Die Kosten für Ermittlungen in ${name} richten sich nach dem individuellen Aufwand. Im kostenlosen Erstgespräch erhalten Sie eine transparente Einschätzung. Detektei Base vermittelt Sie an passende Partner – unverbindlich und kostenlos.`,
  
  (name) => `Was kostet ein Detektiv in ${name}? Das hängt von Ihrem individuellen Fall ab – Auftragsart, Dauer und Komplexität bestimmen den Preis. Detektei Base vermittelt Sie kostenlos an passende Partner-Detekteien.`,
  
  (name) => `Die Ermittlungskosten in ${name} werden nach individuellem Aufwand berechnet. Jeder Fall ist anders – daher erstellen Partner-Detekteien Ihnen ein maßgeschneidertes Angebot. Die Vermittlung über Detektei Base ist kostenlos.`,
];

// --- SERIÖSER DETEKTIV FRAGE ---
const SERIOES_VARIANTEN: AnswerGenerator[] = [
  () => `Achten Sie auf: Mitgliedschaft in Berufsverbänden (BDD, BVPD), transparente Preisgestaltung mit schriftlichem Kostenvoranschlag, langjährige Erfahrung und professionelle Kommunikation. Detektei Base vermittelt nur geprüfte Partner.`,
  
  () => `Seriöse Detekteien erkennen Sie an: Gewerbezulassung, transparente Preise ohne Vorauskasse, schriftliche Verträge. Alle Partner-Detekteien von Detektei Base erfüllen diese Kriterien. Jetzt anrufen.`,
  
  () => `Prüfen Sie: Gibt es einen schriftlichen Vertrag? Sind die Kosten transparent? Hat die Detektei Erfahrung? Detektei Base arbeitet nur mit Partnern zusammen, die alle Qualitätskriterien erfüllen.`,
  
  () => `Merkmale seriöser Detekteien: Berufshaftpflicht, transparente Preise, schriftliche Auftragsbestätigung, langjährige Erfahrung. Detektei Base prüft alle Partner-Detekteien auf diese Kriterien.`,
  
  () => `Eine gute Detektei bietet: Transparente Kostenaufstellung, schriftlichen Vertrag und realistische Einschätzungen. Detektei Base vermittelt Sie an Detekteien, die diese Standards erfüllen. Jetzt anrufen.`,
];

// --- GERICHTSVERWERTBARKEIT FRAGE ---
const GERICHT_VARIANTEN: AnswerGenerator[] = [
  () => `Ja, professionell gesicherte Beweise sind vor Gericht verwertbar, sofern sie legal im Rahmen der Jedermannsrechte beschafft wurden. Das gilt für Observationsberichte, Fotos aus dem öffentlichen Raum und Zeugenaussagen.`,
  
  () => `Die Beweise professioneller Detekteien sind gerichtsverwertbar. Seriöse Detekteien arbeiten ausschließlich mit legalen Methoden und dokumentieren alle Ermittlungen so, dass sie vor Zivil- und Arbeitsgerichten Bestand haben.`,
  
  () => `Ja, wenn sie legal erhoben wurden. Professionelle Detektive sind in gerichtsfester Dokumentation geschult. Observationsberichte und Fotomaterial werden von Gerichten als Beweismittel anerkannt.`,
  
  () => `Gerichtsverwertbar sind: Observationsberichte, Fotos/Videos aus dem öffentlichen Raum, Zeugenaussagen der Detektive. Alle Ermittlungen erfolgen im Rahmen der Jedermannsrechte.`,
  
  () => `Die von Detekteien gesicherten Beweise können Sie in rechtlichen Verfahren verwenden. Professionelle Ermittler achten streng auf legale Methoden und lückenlose Dokumentation.`,
];

// --- SCHNELLIGKEIT FRAGE ---
const SCHNELL_VARIANTEN: AnswerGenerator[] = [
  (name) => `In dringenden Fällen kann eine Detektei innerhalb von 24 Stunden in ${name} mit den Ermittlungen beginnen. Detektei Base vermittelt Sie schnell an einsatzbereite Partner-Detekteien vor Ort.`,
  
  (name) => `Schnelle Vermittlung in ${name}: Detektei Base findet kurzfristig verfügbare Partner-Detekteien. Bei Eilaufträgen können Ermittlungen oft schon am nächsten Tag starten.`,
  
  (name) => `In ${name} sind Partner-Detekteien kurzfristig verfügbar. Bei dringenden Fällen können Ermittlungen oft schon am nächsten Tag beginnen. Detektei Base vermittelt Sie schnell.`,
  
  (name) => `Schnelle Reaktionszeiten in ${name}: Durch das Netzwerk von Detektei Base sind Partner-Detekteien meist innerhalb von 24-48 Stunden einsatzbereit.`,
  
  (name) => `Schnellstart möglich: In ${name} können Partner-Detekteien nach Auftragserteilung kurzfristig beginnen. Das Netzwerk von Detektei Base ermöglicht flexible Einsatzplanung.`,
];

// --- LEISTUNGEN FRAGE ---
const LEISTUNGEN_VARIANTEN: AnswerGenerator[] = [
  (name) => `Detektei Base vermittelt in ${name} Partner-Detekteien für Privatermittlungen (Untreue, Personensuche, Unterhaltsermittlungen) und Wirtschaftsermittlungen (Mitarbeiterüberprüfung, Krankfeierkontrolle, Diebstahlermittlung).`,
  
  (name) => `In ${name} vermittelt Detektei Base Partner für das komplette Spektrum: Privatdetektei (Untreue, Sorgerecht, Stalking) und Wirtschaftsdetektei (Mitarbeiterüberprüfung, Krankfeierkontrolle, Betrugsermittlung).`,
  
  (name) => `Leistungsspektrum unserer Partner in ${name}: Privat – Untreue aufdecken, Personen finden, Sorgerecht. Geschäftlich – Mitarbeiter-Checks, Krankfeier, Wirtschaftsdelikte. Alles diskret und legal.`,
  
  (name) => `Partner-Detekteien in ${name} ermitteln bei: Fremdgehensverdacht, vermissten Personen, Unterhaltsstreitigkeiten, Mitarbeiterbetrug, simulierter Krankheit und Diebstahl. Detektei Base vermittelt den passenden Experten.`,
  
  (name) => `Das komplette Ermittlungsspektrum in ${name}: Von der Untreue-Observation über Adressermittlung bis zur Wirtschaftsdetektei. Detektei Base findet die passende Partner-Detektei.`,
];

// --- DISKRETION FRAGE ---
const DISKRETION_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ja, absolute Diskretion ist das Fundament professioneller Detektivarbeit. Partner-Detekteien in ${name} arbeiten verdeckt und unauffällig. Ihre Identität und der Ermittlungsauftrag bleiben stets geschützt.`,
  
  (name) => `Diskretion in ${name} garantiert: Ihre Anfrage wird vertraulich behandelt. Professionelle Detekteien arbeiten unauffällig, und alle Ergebnisse gehen ausschließlich an Sie.`,
  
  (name) => `In ${name} arbeiten professionelle Detekteien mit höchster Diskretion. Niemand erfährt von der Ermittlung – weder die Zielperson noch Dritte. Vertraulichkeit ist oberstes Gebot.`,
  
  (name) => `100% diskret in ${name}: Professionelle Detekteien nutzen verdeckte Arbeitsmethoden ohne Rückverfolgung zu Ihnen. Detektei Base vermittelt nur seriöse, diskrete Partner.`,
  
  (name) => `Vertraulichkeit in ${name} ist selbstverständlich: Professionelle Detektive agieren im Verborgenen, Ihre Daten werden geschützt, der Auftrag bleibt geheim.`,
];

// --- ANONYME BEAUFTRAGUNG FRAGE ---
const ANONYM_VARIANTEN: AnswerGenerator[] = [
  () => `Beim ersten Anruf bei Detektei Base können Sie anonym bleiben. Schildern Sie Ihren Fall ohne Ihren Namen zu nennen. Erst bei der Vermittlung an eine Partner-Detektei werden Kontaktdaten benötigt – diese werden vertraulich behandelt.`,
  
  () => `Anonymer Anruf ist möglich. Kontaktieren Sie Detektei Base, ohne sich vorzustellen. Für die Vermittlung an eine Detektei werden später Kontaktdaten benötigt – alle Daten werden vertraulich behandelt.`,
  
  () => `Sie können Detektei Base anonym kontaktieren und Ihre Situation schildern. Die Beratung erfolgt ohne Verpflichtung. Für eine Vermittlung sind dann Kontaktdaten nötig, die streng vertraulich behandelt werden.`,
  
  () => `Erster Anruf anonym: Ja. Kontaktieren Sie Detektei Base und schildern Sie den Fall, ohne sich zu identifizieren. Für eine Vermittlung werden später Kontaktdaten benötigt – alle Daten werden vertraulich behandelt.`,
  
  () => `Anonymität ist wichtig. Beim ersten Anruf bei Detektei Base müssen Sie sich nicht identifizieren. Erst für die Vermittlung an eine Partner-Detektei werden Ihre (vertraulichen) Daten benötigt.`,
];

// --- KONTAKT FRAGE ---
const KONTAKT_VARIANTEN: AnswerGenerator[] = [
  () => `Sie erreichen Detektei Base telefonisch unter 0176 66918653 (Mo-Fr 8-20 Uhr, Sa 9-16 Uhr) oder per E-Mail. Nutzen Sie auch das Kontaktformular für eine unverbindliche Anfrage zur Vermittlung.`,
  
  () => `Kontakt Detektei Base: Telefon 0176 66918653 (werktags 8-20 Uhr, samstags 9-16 Uhr), E-Mail oder Kontaktformular. Die Beratung und Vermittlung ist kostenlos und vertraulich.`,
  
  () => `Rufen Sie Detektei Base an: 0176 66918653. Die Berater sind Mo-Fr 8-20 Uhr und Sa 9-16 Uhr für Sie da. Oder schreiben Sie – wir vermitteln diskret an passende Partner-Detekteien.`,
  
  () => `Detektei Base ist erreichbar unter 0176 66918653 (Montag bis Freitag 8-20 Uhr, Samstag 9-16 Uhr). Alternativ nutzen Sie das Kontaktformular für eine diskrete Vermittlungsanfrage.`,
  
  () => `Ihr Draht zu Detektei Base: 0176 66918653. Erreichbarkeit Mo-Fr 8-20, Sa 9-16 Uhr. Per E-Mail oder Formular erreichen Sie uns rund um die Uhr – Vermittlung binnen 24h.`,
];

// --- DAUER FRAGE ---
const DAUER_VARIANTEN: AnswerGenerator[] = [
  (name) => `Die Dauer einer Ermittlung in ${name} hängt vom Fall ab: Einfache Fälle klären sich oft in 2-3 Tagen, komplexere Ermittlungen können 1-2 Wochen dauern. Die Partner-Detektei berät Sie vorab zur realistischen Zeitplanung.`,
  
  (name) => `Wie lange dauert eine Ermittlung in ${name}? Das variiert: Manche Observationen bringen schon am ersten Tag Ergebnisse, andere benötigen eine Woche oder mehr. Die Detektei berät Sie vorab realistisch.`,
  
  (name) => `In ${name} rechnen Sie je nach Auftragsart mit 2-10 Tagen. Die tatsächliche Dauer bespricht die vermittelte Detektei nach Analyse Ihres Falls – transparent und ehrlich.`,
  
  (name) => `Ermittlungsdauer in ${name}: Privatdetektei-Fälle dauern typischerweise 3-7 Tage, Wirtschaftsdetektei-Fälle 5-14 Tage. Bei eiligen Fällen vermittelt Detektei Base priorisiert.`,
];

// --- KEINE BEWEISE FRAGE ---
const KEINE_BEWEISE_VARIANTEN: AnswerGenerator[] = [
  () => `Wenn die Detektei keine Beweise findet, ist das auch ein Ergebnis – und manchmal das bessere. Sie zahlen für die Arbeit, nicht für ein bestimmtes Ergebnis. Detekteien dokumentieren, was sie beobachten – auch wenn das "nichts Auffälliges" ist.`,
  
  () => `Keine Garantie für Ergebnisse, aber Garantie für professionelle Arbeit: Wenn die Zielperson sich im Beobachtungszeitraum unauffällig verhält, dokumentiert die Detektei das. Oft ist auch das eine wertvolle Information.`,
  
  () => `Seriöse Detekteien versprechen keine Ergebnisse, sondern professionelle Ermittlung. Wenn nichts gefunden wird, könnte der Verdacht unbegründet sein – oder die Zielperson war im Beobachtungszeitraum vorsichtig.`,
  
  () => `Seriöse Detekteien versprechen Methoden, keine Ergebnisse. Wenn die Observation keine Beweise erbringt, wird das transparent dokumentiert. Manchmal ist "nichts gefunden" die beste Nachricht.`,
];

// --- ZEUGE VOR GERICHT FRAGE ---
const ZEUGE_VARIANTEN: AnswerGenerator[] = [
  () => `Ja, professionelle Detektive können als Zeugen vor Gericht aussagen. Seriöse Detekteien sind darauf vorbereitet und haben Erfahrung mit Vernehmungen. Die Dokumentation ist so angelegt, dass sie die Aussage stützt.`,
  
  () => `Selbstverständlich stehen Detektive als Zeugen zur Verfügung. Die gerichtsfeste Dokumentation und die persönliche Aussage des Detektivs ergänzen sich und erhöhen die Beweiskraft.`,
  
  () => `Ja, bei Bedarf sagen Detektive vor Gericht aus. Das ist Teil des Service professioneller Detekteien. Erfahrene Ermittler kennen sich mit Vernehmungen und Gerichtsverfahren aus.`,
  
  () => `Detektive können Sie als Zeugen benennen. Professionelle Detekteien dokumentieren Beobachtungen so, dass sie auch Jahre später präzise wiedergegeben werden können. Gerichtserfahrung ist Standard.`,
];

// --- FORTSCHRITT FRAGE ---
const FORTSCHRITT_VARIANTEN: AnswerGenerator[] = [
  () => `Die Detektei hält Sie regelmäßig auf dem Laufenden – je nach Wunsch täglich oder nach Abschluss wichtiger Phasen. Bei dringenden Erkenntnissen werden Sie sofort informiert. Alle Berichte erfolgen über sichere Kanäle.`,
  
  () => `Updates erhalten Sie nach Vereinbarung mit der Detektei: telefonisch, per verschlüsselter E-Mail oder persönlich. Bei wichtigen Entwicklungen werden Sie sofort informiert. Diskretion hat dabei höchste Priorität.`,
  
  () => `Über den Fortschritt informiert die Detektei Sie regelmäßig und diskret. Wann und wie oft wird vorab besprochen. Bei eiligen Erkenntnissen werden Sie umgehend kontaktiert – sicher und vertraulich.`,
  
  () => `Sie bleiben informiert: Regelmäßige Statusberichte, sofortige Meldung bei wichtigen Erkenntnissen. Die Kommunikation erfolgt ausschließlich über vereinbarte, sichere Kanäle zwischen Ihnen und der Detektei.`,
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
  (name) => `Detektei Base vermittelt Partner-Detekteien im gesamten ${name}. Alle größeren Städte sowie kleinere Gemeinden werden abgedeckt. Die genaue Auflistung der Einsatzorte finden Sie auf dieser Seite.`,
  
  (name) => `Im ${name} vermittelt Detektei Base Partner flächendeckend. Alle Städte und Gemeinden werden abgedeckt – von der Kreisstadt bis zu ländlichen Ortschaften.`,
  
  (name) => `Detektei Base vermittelt im gesamten ${name}. Ob in der Kreisstadt oder in kleineren Gemeinden – Partner-Detekteien sind vor Ort verfügbar.`,
  
  (name) => `Der ${name} wird vollständig abgedeckt. Detektei Base vermittelt Partner in allen Städten. Eine Übersicht finden Sie unten.`,
  
  (name) => `Flächendeckend im ${name}: Detektei Base vermittelt Partner-Detekteien in allen Städten und Gemeinden des Landkreises. Scrollen Sie nach unten für eine Übersicht.`,
];

const LK_SCHNELL_VARIANTEN: AnswerGenerator[] = [
  (name) => `Durch das Netzwerk von Detektei Base können Partner-Detekteien im ${name} schnell reagieren. In den meisten Fällen ist ein Detektiv innerhalb von 24-48 Stunden einsatzbereit.`,
  
  (name) => `Im ${name} sind Partner-Detekteien kurzfristig verfügbar. Dank lokaler Präsenz erreichen Detektive jeden Ort im Landkreis zeitnah.`,
  
  (name) => `Schnelle Vermittlung im ${name}: Nach Anfrage bei Detektei Base können Partner meist innerhalb von 24-48 Stunden mit der Arbeit beginnen.`,
  
  (name) => `Das Netzwerk von Detektei Base im ${name} ermöglicht schnelle Reaktionszeiten. Kontaktieren Sie uns – wir vermitteln schnell an verfügbare Partner.`,
];

const LK_KLEIN_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ja, Detektei Base vermittelt auch Partner für kleinere Gemeinden im ${name}. Ermittlungen im gesamten Landkreis werden abgedeckt – diskret und professionell.`,
  
  (name) => `Auch in kleinen Gemeinden des ${name} sind Partner-Detekteien verfügbar. Das Netzwerk ermöglicht Ermittlungen in jeder Ecke des Landkreises.`,
  
  (name) => `Im ${name} vermittelt Detektei Base überall – nicht nur in den großen Städten. Auch ländliche Gemeinden werden durch Partner-Detekteien abgedeckt.`,
  
  (name) => `Selbstverständlich vermittelt Detektei Base auch Partner für kleinere Orte im ${name}. Diskrete Ermittlungen sind überall im Landkreis möglich.`,
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
  (name) => `Die Kosten für einen Privatdetektiv in ${name} werden individuell nach Aufwand berechnet. Faktoren wie Ermittlungsart, Dauer und Komplexität bestimmen den Preis. Die Vermittlung über Detektei Base ist kostenlos.`,
  
  (name) => `Detektivkosten in ${name} hängen vom konkreten Auftrag ab. Im kostenlosen Erstgespräch erhalten Sie eine transparente Einschätzung für Ihren individuellen Fall. Detektei Base vermittelt kostenlos.`,
  
  (name) => `In ${name} werden die Ermittlungskosten individuell kalkuliert – je nach Auftragsart und Aufwand. Die Partner-Detektei erstellt Ihnen ein maßgeschneidertes Angebot. Die Vermittlung ist kostenlos.`,
  
  (name) => `Was kostet ein Detektiv in ${name}? Das richtet sich nach Ihrem individuellen Fall. Detektei Base vermittelt Sie kostenlos an passende Partner, die Ihnen ein unverbindliches Angebot erstellen.`,
];

const BL_LEISTUNGEN_VARIANTEN: AnswerGenerator[] = [
  (name) => `In ${name} vermittelt Detektei Base Partner für: Privatdetektei (Untreue, Sorgerecht, Stalking, Betrug) und Wirtschaftsdetektei (Mitarbeiterüberprüfung, Krankfeierkontrolle, Betrugsermittlung). Landesweit verfügbar.`,
  
  (name) => `Das Angebot in ${name}: Privat – Untreue, Personensuche, Sorgerecht. Geschäftlich – Mitarbeiter-Checks, Krankfeier, Betrug. Detektei Base vermittelt landesweit professionelle Partner.`,
  
  (name) => `Landesweit in ${name}: Detektei Base vermittelt Partner für Privatpersonen (Untreue, Sorgerecht, Stalking) und Unternehmen (Mitarbeiterprüfung, Krankfeier, Betrug).`,
  
  (name) => `Das komplette Ermittlungsspektrum in ganz ${name}: Von der Personensuche über Untreue-Ermittlung bis zur Wirtschaftsdetektei – Detektei Base findet den passenden Partner.`,
];

const BL_LAND_VARIANTEN: AnswerGenerator[] = [
  (name) => `Ja, Detektei Base vermittelt Partner in ganz ${name} – sowohl in Städten als auch in ländlichen Regionen. Das Netzwerk ermöglicht Einsätze im gesamten Bundesland.`,
  
  (name) => `Landesweit in ${name}: Das Netzwerk von Detektei Base reicht von den Großstädten bis in ländliche Gebiete. Überall im Bundesland sind Partner-Detekteien verfügbar.`,
  
  (name) => `Auch auf dem Land in ${name} vermittelt Detektei Base Partner. Dank des Netzwerks werden alle Regionen des Bundeslandes abgedeckt.`,
  
  (name) => `In ganz ${name} werden Partner vermittelt – Großstadt wie Land. Flexible Einsatzplanung ermöglicht Aufträge in allen Regionen über Detektei Base.`,
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
