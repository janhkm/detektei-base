import type { Metadata } from "next";
import {
  Phone,
  FileText,
  Search,
  Camera,
  FileCheck,
  CheckCircle,
  Clock,
  Shield,
  MessageCircle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Ablauf | So arbeiten wir für Sie",
  description:
    "Transparenter Ermittlungsablauf von der Erstberatung bis zum Bericht. ✓ Kostenlose Beratung ✓ Klare Prozesse ✓ Regelmäßige Updates. Erfahren Sie, wie wir arbeiten.",
};

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Kostenlose Erstberatung",
    description:
      "Schildern Sie uns Ihren Fall vertraulich per Telefon oder E-Mail. Wir analysieren die Situation und beraten Sie zu den Möglichkeiten – kostenlos und unverbindlich.",
    details: [
      "Vertrauliches Gespräch über Ihre Situation",
      "Einschätzung der Erfolgsaussichten",
      "Beratung zu rechtlichen Möglichkeiten",
      "Erste Kostenschätzung",
    ],
    duration: "ca. 30 Minuten",
  },
  {
    step: "02",
    icon: FileText,
    title: "Auftragserteilung",
    description:
      "Nach Ihrer Entscheidung erstellen wir einen transparenten Kostenvoranschlag und Auftragsvertrag. Sie behalten jederzeit die volle Kostenkontrolle.",
    details: [
      "Detaillierter Kostenvoranschlag",
      "Schriftlicher Auftragsvertrag",
      "Klare Zieldefinition",
      "Festlegung des Budgetrahmens",
    ],
    duration: "1-2 Werktage",
  },
  {
    step: "03",
    icon: Search,
    title: "Ermittlung & Recherche",
    description:
      "Unsere erfahrenen Detektive beginnen mit den Ermittlungen. Je nach Auftrag umfasst dies Observationen, Recherchen oder Befragungen.",
    details: [
      "Verdeckte Observation",
      "Datenbank- und Online-Recherche",
      "Befragungen im Umfeld",
      "Vor-Ort-Ermittlungen",
    ],
    duration: "Je nach Auftrag",
  },
  {
    step: "04",
    icon: Camera,
    title: "Beweissicherung",
    description:
      "Alle relevanten Erkenntnisse werden professionell und gerichtsverwertbar dokumentiert: Fotos, Videos, Protokolle und Berichte.",
    details: [
      "Foto- und Videodokumentation",
      "Lückenlose Protokolle",
      "Zeugensicherung wenn möglich",
      "Digitale Beweissicherung",
    ],
    duration: "Laufend während Ermittlung",
  },
  {
    step: "05",
    icon: FileCheck,
    title: "Abschlussbericht",
    description:
      "Sie erhalten einen detaillierten, gerichtsverwertbaren Ermittlungsbericht mit allen Beweisen und einer Zusammenfassung der Ergebnisse.",
    details: [
      "Chronologischer Ablaufbericht",
      "Alle Beweismittel als Anlage",
      "Zusammenfassung der Erkenntnisse",
      "Handlungsempfehlungen",
    ],
    duration: "3-5 Werktage nach Abschluss",
  },
  {
    step: "06",
    icon: MessageCircle,
    title: "Nachbesprechung",
    description:
      "Wir besprechen die Ergebnisse persönlich mit Ihnen und beraten Sie zu möglichen nächsten Schritten – ob rechtliche Maßnahmen oder weitere Ermittlungen.",
    details: [
      "Persönliches Abschlussgespräch",
      "Erläuterung der Ergebnisse",
      "Beratung zu nächsten Schritten",
      "Bei Bedarf Vermittlung an Anwälte",
    ],
    duration: "ca. 60 Minuten",
  },
];

const faqs = [
  {
    question: "Wie lange dauert eine Ermittlung?",
    answer:
      "Die Dauer hängt vom Fall ab. Einfache Observationen können 2-5 Tage dauern, komplexe Ermittlungen mehrere Wochen. Wir geben Ihnen bei der Erstberatung eine realistische Einschätzung.",
  },
  {
    question: "Wie erfahre ich vom Fortschritt?",
    answer:
      "Sie erhalten regelmäßige Updates – je nach Wunsch täglich, wöchentlich oder bei wichtigen Entwicklungen. Sie können jederzeit anrufen und den aktuellen Stand erfragen.",
  },
  {
    question: "Kann ich den Auftrag abbrechen?",
    answer:
      "Ja, Sie können den Auftrag jederzeit beenden. Abgerechnet werden nur die bis dahin erbrachten Leistungen. Es gibt keine versteckten Kosten oder Stornogebühren.",
  },
  {
    question: "Was passiert mit meinen Daten?",
    answer:
      "Alle Daten werden streng vertraulich behandelt und DSGVO-konform verarbeitet. Nach Abschluss des Auftrags werden die Daten auf Wunsch gelöscht oder sicher archiviert.",
  },
  {
    question: "Arbeiten Sie auch am Wochenende?",
    answer:
      "Ja, unsere Detektive sind bei Bedarf auch an Wochenenden und Feiertagen im Einsatz. Gerade für Observationen sind flexible Einsatzzeiten oft entscheidend.",
  },
  {
    question: "Wie erreiche ich Sie in dringenden Fällen?",
    answer:
      "Unser Büro ist Mo-Fr 8-20 Uhr und Sa 9-16 Uhr besetzt. In dringenden Fällen erreichen Sie uns auch außerhalb dieser Zeiten über unsere Notfall-Nummer.",
  },
];

export default function AblaufPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Ablauf", href: "/ablauf" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Unser Ablauf – Transparent von Anfang bis Ende
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Von der ersten Kontaktaufnahme bis zum fertigen Ermittlungsbericht
              – wir arbeiten strukturiert, transparent und halten Sie jederzeit
              auf dem Laufenden.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Erstberatung:</strong> Kostenlos und unverbindlich",
              "<strong>Transparenz:</strong> Klare Kosten, regelmäßige Updates",
              "<strong>Flexibilität:</strong> Auftrag jederzeit kündbar",
              "<strong>Ergebnis:</strong> Gerichtsverwertbarer Abschlussbericht",
            ]}
          />

          {/* Process Steps */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 text-center mb-4">
              Der Ermittlungsprozess in 6 Schritten
            </h2>
            <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12">
              Ein strukturierter Ablauf garantiert effiziente Ermittlungen und
              transparente Kommunikation.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative grid md:grid-cols-12 gap-6 p-6 bg-primary-50 rounded-2xl border border-primary-100"
                >
                  {/* Step Number */}
                  <div className="md:col-span-1 flex md:justify-center">
                    <div className="w-14 h-14 bg-primary-900 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon className="h-6 w-6 text-primary-700" />
                      <h3 className="text-xl font-display font-bold text-primary-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-primary-600 mb-4">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-primary-700">
                          <CheckCircle className="h-4 w-4 text-accent-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div className="md:col-span-4 flex md:items-center md:justify-end">
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-primary-200">
                      <Clock className="h-4 w-4 text-primary-500" />
                      <span className="text-sm text-primary-700">{step.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Garantien */}
      <section className="py-16 lg:py-24 bg-primary-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Unsere Garantien
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Damit Sie sich auf das Wesentliche konzentrieren können
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "100% Diskretion",
                description: "Absolute Vertraulichkeit ist garantiert",
              },
              {
                icon: FileText,
                title: "Transparente Kosten",
                description: "Keine versteckten Gebühren",
              },
              {
                icon: Clock,
                title: "Regelmäßige Updates",
                description: "Sie bleiben immer informiert",
              },
              {
                icon: CheckCircle,
                title: "Gerichtsverwertbar",
                description: "Professionelle Beweissicherung",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <item.icon className="h-10 w-10 text-accent-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-primary-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-primary-900 text-center mb-8">
            Häufige Fragen zum Ablauf
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABox
            title="Bereit für den ersten Schritt?"
            description="Kostenlose und unverbindliche Erstberatung"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
