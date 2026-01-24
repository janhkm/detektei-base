import type { Metadata } from "next";
import { ShieldAlert, CheckCircle, Camera, FileText, AlertTriangle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Stalking & Mobbing | Detektei für Beweissicherung finden",
  description:
    "Finden Sie eine Detektei bei Stalking und Mobbing. ✓ Geprüfte Partner ✓ Kostenlose Vermittlung ✓ Beweissicherung für Strafanzeige.",
};

const anzeichen = [
  "Wiederholte unerwünschte Kontaktaufnahme",
  "Auflauern an Wohnort oder Arbeitsplatz",
  "Beobachtung und Verfolgung",
  "Unerwünschte Geschenke oder Nachrichten",
  "Drohungen gegen Sie oder Angehörige",
  "Üble Nachrede oder Verleumdung",
  "Einschüchterndes Verhalten",
  "Cyberstalking über soziale Medien",
];

const leistungen = [
  {
    icon: Camera,
    title: "Täteridentifikation",
    description:
      "Ermittlung der Identität unbekannter Stalker durch Observation und Recherche",
  },
  {
    icon: FileText,
    title: "Beweisdokumentation",
    description:
      "Lückenlose Dokumentation aller Vorfälle für Strafanzeige und Gericht",
  },
  {
    icon: ShieldAlert,
    title: "Schutzkonzept",
    description: "Beratung zu Schutzmaßnahmen und präventiven Verhaltensweisen",
  },
  {
    icon: Phone,
    title: "Behördenkontakt",
    description: "Unterstützung bei Strafanzeige und Kontakt mit der Polizei",
  },
];

const faqs = [
  {
    question: "Was ist Stalking rechtlich gesehen?",
    answer:
      "Stalking (Nachstellung) ist seit 2007 als eigenständiger Straftatbestand in § 238 StGB geregelt. Darunter fallen beharrliches Verfolgen, Auflauern, unerwünschte Kontaktaufnahme und ähnliche Handlungen, die die Lebensführung schwerwiegend beeinträchtigen.",
  },
  {
    question: "Wie kann ein Detektiv bei Stalking helfen?",
    answer:
      "Detekteien können: unbekannte Stalker identifizieren, Beweise für eine Strafanzeige sichern, das Ausmaß des Stalkings dokumentieren und zu Schutzmaßnahmen beraten. Die Dokumentation ist oft entscheidend für Gewaltschutzanordnungen.",
  },
  {
    question: "Was kostet die Hilfe bei Stalking?",
    answer:
      "Die Kosten hängen vom Umfang ab. Täteridentifikation und Dokumentation beginnen ab 1.000€. Bei längerer Observation entsprechend mehr. Die Vermittlung über Detektei Base ist kostenlos.",
  },
  {
    question: "Soll ich parallel zur Polizei gehen?",
    answer:
      "Ja, es wird immer auch die Erstattung einer Strafanzeige empfohlen. Die Ermittlungsergebnisse der Detektei können die Polizeiarbeit unterstützen und ergänzen. Beides zusammen erhöht die Chancen auf Erfolg.",
  },
  {
    question: "Können Detekteien auch bei Cyberstalking helfen?",
    answer:
      "Ja, auch bei Online-Stalking können Detekteien unterstützen: Dokumentation von Nachrichten, Ermittlung von Fake-Profilen, Sicherung digitaler Beweise. In Zusammenarbeit mit IT-Forensikern auch technisch komplexe Fälle.",
  },
  {
    question: "Was ist eine Gewaltschutzanordnung?",
    answer:
      "Nach dem Gewaltschutzgesetz kann das Gericht dem Stalker verbieten, sich Ihnen zu nähern, Kontakt aufzunehmen oder bestimmte Orte aufzusuchen. Die Dokumentation der Detektei kann die Grundlage für einen solchen Antrag bilden.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Täteridentifikation", priceRange: "ab 1.000€", duration: "individuell" },
  { service: "Observation (Tag)", priceRange: "800-1.500€", duration: "8-12h" },
  { service: "Beweisdokumentation", priceRange: "ab 500€", duration: "individuell" },
  { service: "Ermittlungsbericht", priceRange: "Inklusive", duration: "-" },
];

export default function StalkingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Privatdetektei", href: "/privatdetektei" },
              { label: "Stalking & Mobbing", href: "/privatdetektei/stalking" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <ShieldAlert className="h-4 w-4 text-accent-400" />
              <span>Schutz & Dokumentation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Stalking & Mobbing – Professionelle Hilfe finden
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Werden Sie verfolgt, belästigt oder bedroht? Wir vermitteln Sie an 
              <strong> spezialisierte Partner-Detekteien</strong>, die Beweise sichern, 
              den Täter identifizieren und Sie rechtlich schützen.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main */}
            <div className="lg:col-span-2">
              <KeyTakeaways
                items={[
                  "<strong>Leistungen:</strong> Täteridentifikation, Beweissicherung, Dokumentation",
                  "<strong>Ziel:</strong> Grundlage für Strafanzeige & Gewaltschutzanordnung",
                  "<strong>Kosten:</strong> Ab 1.000€, kostenlose Erstberatung",
                  "<strong>Wichtig:</strong> Parallel immer auch Strafanzeige erstatten",
                ]}
              />

              {/* Warnsignale */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Anzeichen für Stalking erkennen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Stalking äußert sich durch wiederholte
                  unerwünschte Kontaktaufnahme, Verfolgung, Auflauern und
                  Einschüchterung – online wie offline.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {anzeichen.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-red-50 rounded-lg"
                    >
                      <AlertTriangle className="h-4 w-4 text-red-500 flex-shrink-0" />
                      <span className="text-sm text-primary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unsere Leistungen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  So helfen wir Ihnen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Wir identifizieren unbekannte Täter,
                  dokumentieren Vorfälle gerichtsfest und beraten Sie zu
                  Schutzmaßnahmen und rechtlichen Schritten.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {leistungen.map((item, i) => (
                    <div key={i} className="p-5 bg-primary-50 rounded-xl">
                      <item.icon className="h-8 w-8 text-primary-700 mb-3" />
                      <h3 className="font-semibold text-primary-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sofortmaßnahmen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Sofortmaßnahmen bei Stalking
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Was Sie selbst tun können, während wir
                  ermitteln:
                </p>
                <ol className="space-y-3">
                  {[
                    "Jeden Vorfall dokumentieren: Datum, Uhrzeit, Ort, was geschah",
                    "Screenshots von Nachrichten und Social-Media-Kontakten sichern",
                    "Zeugen notieren, die Vorfälle beobachtet haben",
                    "Keinen Kontakt zum Stalker aufnehmen – keine Reaktion zeigen",
                    "Vertrauenspersonen informieren (Familie, Freunde, Arbeitgeber)",
                    "Bei akuter Gefahr: Polizei rufen (110)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg"
                    >
                      <span className="w-6 h-6 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">
                        {i + 1}
                      </span>
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Stalking-Ermittlungen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Die Kosten beginnen bei 1.000€ für
                  Täteridentifikation und Dokumentation. Bei längerer Observation
                  entsprechend mehr.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Stalking & Mobbing
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <AlertTriangle className="h-8 w-8 text-red-500 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Bei akuter Gefahr
                  </h3>
                  <p className="text-sm text-primary-600 mb-4">
                    Wenn Sie sich in unmittelbarer Gefahr befinden, rufen Sie
                    sofort die Polizei.
                  </p>
                  <a
                    href="tel:110"
                    className="block w-full bg-red-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
                  >
                    Notruf: 110
                  </a>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Hilfreiche Anlaufstellen
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong className="text-primary-900">Weißer Ring:</strong>
                      <br />
                      <span className="text-primary-600">116 006 (kostenlos)</span>
                    </li>
                    <li>
                      <strong className="text-primary-900">Frauen-Hilfetelefon:</strong>
                      <br />
                      <span className="text-primary-600">08000 116 016 (kostenlos)</span>
                    </li>
                    <li>
                      <strong className="text-primary-900">Polizei (nicht Notfall):</strong>
                      <br />
                      <span className="text-primary-600">Lokale Dienststelle</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
