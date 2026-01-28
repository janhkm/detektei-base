import type { Metadata } from "next";
import { AlertTriangle, CheckCircle, Search, Shield, FileText, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Betrug & Unterschlagung | Detektei für Unternehmen finden",
  description:
    "Detektei Base – Ermittlungen bei Betrug und Unterschlagung. ✓ Täterermittlung ✓ Gerichtsverwertbare Beweise ✓ Rund um die Uhr erreichbar.",
};

const betrugsarten = [
  {
    title: "Unterschlagung",
    description: "Veruntreuen von Firmengeldern, Manipulieren von Abrechnungen, falschen Spesenabrechnungen",
  },
  {
    title: "Diebstahl",
    description: "Entwendung von Waren, Material, Werkzeug oder Büroausstattung",
  },
  {
    title: "Abrechnungsbetrug",
    description: "Gefälschte Rechnungen, Scheinlieferanten, überhöhte Preise bei Komplizen",
  },
  {
    title: "Datenmissbrauch",
    description: "Weitergabe von Kundendaten, Betriebsgeheimnissen oder Geschäftsinformationen",
  },
  {
    title: "Arbeitszeitbetrug",
    description: "Falsches Stempeln, private Tätigkeiten während der Arbeitszeit",
  },
  {
    title: "Korruption",
    description: "Bestechung, Kick-backs, unlautere Geschäftsbeziehungen zu Lieferanten",
  },
];

const faqs = [
  {
    question: "Wie erkennt man Betrug im Unternehmen?",
    answer:
      "Warnsignale sind: Unerklärliche Buchungsunregelmäßigkeiten, Mitarbeiter mit auffälligem Lebensstil, fehlende Belege, ungewöhnliche Lieferantenbeziehungen, Widerstand gegen Kontrollen, oder Hinweise von Kollegen.",
  },
  {
    question: "Wie läuft eine Betrugsermittlung ab?",
    answer:
      "Wir analysieren zunächst die Verdachtslage, sichern diskret Beweise (Dokumente, Observation, Befragungen), identifizieren Täter und erstellen einen gerichtsverwertbaren Bericht. Alles erfolgt in enger Abstimmung mit Ihnen.",
  },
  {
    question: "Können Sie auch digital ermitteln?",
    answer:
      "Ja, in Zusammenarbeit mit IT-Forensikern können wir auch digitale Spuren sichern: E-Mails, Dateien, Zugriffsprotokolle etc. Dies geschieht immer im Rahmen der rechtlichen Möglichkeiten.",
  },
  {
    question: "Wann sollte ich die Polizei einschalten?",
    answer:
      "Eine Strafanzeige ist bei schwerem Betrug sinnvoll. Wir empfehlen, erst Beweise zu sichern und dann zu entscheiden. Unsere Ermittlungsergebnisse können die Polizeiarbeit unterstützen.",
  },
  {
    question: "Was kostet eine Betrugsermittlung?",
    answer:
      "Die Kosten hängen vom Umfang ab. Einfache Ermittlungen beginnen bei 2.000€, komplexe Fälle mit Forensik können deutlich mehr kosten. Sie erhalten vorab einen detaillierten Kostenvoranschlag.",
  },
  {
    question: "Wie kann ich mein Unternehmen vor Betrug schützen?",
    answer:
      "Prävention durch: Vier-Augen-Prinzip, regelmäßige Kontrollen, Hinweisgebersysteme, Background-Checks bei Einstellungen, und eine Unternehmenskultur, die Betrug nicht toleriert. Wir beraten Sie gerne.",
  },
];

const prices = [
  { service: "Erstkontakt", priceRange: "Jetzt anrufen", duration: "-" },
  { service: "Verdachtsanalyse", priceRange: "ab 800€", duration: "1-3 Tage" },
  { service: "Ermittlung (einfach)", priceRange: "ab 2.000€", duration: "1-2 Wochen" },
  { service: "Ermittlung (komplex)", priceRange: "ab 5.000€", duration: "individuell" },
  { service: "IT-Forensik (optional)", priceRange: "ab 3.000€", duration: "individuell" },
];

export default function BetrugsermittlungPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
              { label: "Betrug & Unterschlagung", href: "/wirtschaftsdetektei/betrug" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <AlertTriangle className="h-4 w-4 text-accent-400" />
              <span>Wirtschaftskriminalität</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Betrug & Unterschlagung – Schäden aufklären und begrenzen
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Betrug im Unternehmen</strong> verursacht Millionenschäden.
              Unsere Wirtschaftsdetektive ermitteln diskret, identifizieren
              Täter und sichern gerichtsverwertbare Beweise für Ihre Ansprüche.
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
                  "<strong>Leistungen:</strong> Täterermittlung, Beweissicherung, Schadensdokumentation",
                  "<strong>Methoden:</strong> Observation, Dokumentenanalyse, IT-Forensik",
                  "<strong>Ergebnis:</strong> Gerichtsverwertbare Beweise für Zivil- und Strafverfahren",
                  "<strong>Prävention:</strong> Beratung zu Schutzmaßnahmen",
                ]}
              />

              {/* Betrugsarten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Typische Betrugsformen im Unternehmen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Betrug durch Mitarbeiter reicht von
                  Unterschlagung über Diebstahl bis zu Abrechnungsbetrug und
                  Korruption.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {betrugsarten.map((item, i) => (
                    <div key={i} className="p-4 bg-primary-50 rounded-lg">
                      <h3 className="font-semibold text-primary-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unsere Methoden */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Unsere Ermittlungsmethoden
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Wir kombinieren klassische
                  Detektivarbeit mit moderner Forensik für umfassende
                  Beweissicherung.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Search,
                      title: "Dokumentenanalyse",
                      text: "Prüfung von Belegen, Rechnungen, Abrechnungen",
                    },
                    {
                      icon: Users,
                      title: "Diskrete Befragungen",
                      text: "Gespräche mit Kollegen und Beteiligten",
                    },
                    {
                      icon: Shield,
                      title: "Observation",
                      text: "Überwachung verdächtiger Personen",
                    },
                    {
                      icon: FileText,
                      title: "IT-Forensik",
                      text: "Analyse digitaler Spuren und Daten",
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-accent-50 rounded-lg">
                      <item.icon className="h-6 w-6 text-accent-700 mb-2" />
                      <h3 className="font-semibold text-primary-900">{item.title}</h3>
                      <p className="text-sm text-primary-600 mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ablauf */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Ablauf einer Betrugsermittlung
                </h2>
                <ol className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Verdachtsanalyse",
                      text: "Wir analysieren die Verdachtslage und definieren das Ermittlungsziel",
                    },
                    {
                      step: "2",
                      title: "Ermittlungsstrategie",
                      text: "Entwicklung eines maßgeschneiderten Ermittlungsplans",
                    },
                    {
                      step: "3",
                      title: "Beweissicherung",
                      text: "Diskrete Ermittlung und rechtssichere Dokumentation",
                    },
                    {
                      step: "4",
                      title: "Täteridentifikation",
                      text: "Ermittlung der verantwortlichen Personen",
                    },
                    {
                      step: "5",
                      title: "Abschlussbericht",
                      text: "Gerichtsverwertbarer Bericht mit allen Beweisen",
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 p-4 bg-primary-50 rounded-lg">
                      <div className="w-10 h-10 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary-900">{item.title}</h3>
                        <p className="text-sm text-primary-600 mt-1">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Betrugsermittlungen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Betrugsermittlungen beginnen ab 2.000€.
                  Die Kosten hängen von Umfang und Komplexität ab – Sie erhalten
                  vorab einen detaillierten Kostenvoranschlag.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Betrugsermittlungen
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <AlertTriangle className="h-8 w-8 text-accent-600 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Schnell handeln
                  </h3>
                  <p className="text-sm text-primary-600">
                    Je länger Betrug unentdeckt bleibt, desto größer der Schaden.
                    Bei Verdacht sollten Sie zeitnah handeln – bevor Beweise
                    vernichtet werden.
                  </p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Diskretion garantiert
                  </h3>
                  <p className="text-sm text-primary-600">
                    Unsere Ermittlungen laufen diskret ab. Unschuldige
                    Mitarbeiter werden nicht belastet und der Betriebsfrieden
                    bleibt gewahrt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
