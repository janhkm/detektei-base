import type { Metadata } from "next";
import {
  Phone,
  FileText,
  Search,
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
  title: "Ablauf | So funktioniert eine Ermittlung",
  description:
    "So funktioniert eine Ermittlung bei Detektei Base. ✓ Rund um die Uhr erreichbar ✓ Individuelle Planung ✓ Gerichtsverwertbare Ergebnisse. Transparenter Ablauf.",
};

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Erste Kontaktaufnahme",
    description:
      "Schildern Sie uns Ihren Fall vertraulich per Telefon, E-Mail oder Kontaktformular. Wir beraten Sie zu den Möglichkeiten und erstellen eine erste Einschätzung.",
    details: [
      "Vertrauliches Gespräch über Ihre Situation",
      "Erste Einschätzung der Erfolgsaussichten",
      "Beratung zu rechtlichen Möglichkeiten",
      "Völlig kostenlos und unverbindlich",
    ],
    duration: "ca. 15-30 Minuten",
  },
  {
    step: "02",
    icon: FileText,
    title: "Individuelles Angebot",
    description:
      "Nach der Erstberatung erstellen wir Ihnen ein maßgeschneidertes Angebot mit transparenter Kostenaufstellung.",
    details: [
      "Detaillierter Kostenvoranschlag",
      "Klare Aufschlüsselung der Leistungen",
      "Keine versteckten Kosten",
      "Keine Verpflichtung zur Beauftragung",
    ],
    duration: "Innerhalb von 24h",
  },
  {
    step: "03",
    icon: Search,
    title: "Professionelle Ermittlung",
    description:
      "Nach Ihrer Beauftragung führen wir die Ermittlungen durch – diskret, professionell und im Rahmen der Jedermannsrechte.",
    details: [
      "Erfahrene Ermittler im Einsatz",
      "Direkter Ansprechpartner für Sie",
      "Regelmäßige Updates zum Fortschritt",
      "Legale Methoden garantiert",
    ],
    duration: "Je nach Auftrag",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Ergebnisse & Bericht",
    description:
      "Sie erhalten einen detaillierten, gerichtsverwertbaren Ermittlungsbericht mit allen Beweisen und Dokumentationen.",
    details: [
      "Chronologischer Ablaufbericht",
      "Alle Beweismittel dokumentiert",
      "Gerichtsverwertbare Qualität",
      "Handlungsempfehlungen",
    ],
    duration: "Nach Abschluss",
  },
];

const faqs = [
  {
    question: "Ist die Erstberatung wirklich kostenlos?",
    answer:
      "Ja, die Erstberatung bei Detektei Base ist komplett kostenfrei und unverbindlich. Erst nach Ihrer ausdrücklichen Beauftragung entstehen Kosten.",
  },
  {
    question: "Wie schnell können Sie mit einer Ermittlung beginnen?",
    answer:
      "In der Regel können wir innerhalb von 24-48 Stunden mit den Ermittlungen beginnen. In dringenden Fällen ist oft ein noch schnellerer Einsatz möglich.",
  },
  {
    question: "Kann ich den Auftrag abbrechen?",
    answer:
      "Ja, natürlich. Wir arbeiten mit fairen Kündigungsbedingungen. Sie zahlen nur für die bis dahin erbrachten Leistungen.",
  },
  {
    question: "Was passiert mit meinen Daten?",
    answer:
      "Alle Anfragen werden streng vertraulich behandelt. Diskretion ist bei uns oberstes Gebot. Details finden Sie in unserer Datenschutzerklärung.",
  },
  {
    question: "Sind die Beweise vor Gericht verwertbar?",
    answer:
      "Ja, alle von uns dokumentierten Beweise sind gerichtsverwertbar, sofern sie legal erhoben wurden. Wir arbeiten ausschließlich im Rahmen der Jedermannsrechte.",
  },
  {
    question: "Wie werde ich über den Fortschritt informiert?",
    answer:
      "Sie erhalten regelmäßige Updates – je nach Wunsch täglich oder nach wichtigen Erkenntnissen. Bei dringenden Entwicklungen informieren wir Sie sofort.",
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
              So funktioniert eine Ermittlung
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Von der Erstberatung bis zum gerichtsverwertbaren Ergebnis – 
              transparent und professionell. Sie behalten jederzeit die volle Kontrolle.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Kostenlos:</strong> Erstberatung ohne Verpflichtung",
              "<strong>Transparent:</strong> Klare Kostenaufstellung vorab",
              "<strong>Professionell:</strong> Erfahrene Ermittler",
              "<strong>Gerichtsfest:</strong> Verwertbare Beweise",
            ]}
          />

          {/* Process Steps */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 text-center mb-4">
              Der Ablauf in 4 Schritten
            </h2>
            <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12">
              Einfach und transparent – von der Anfrage bis zum Ergebnis
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
              Das garantieren wir Ihnen
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Professionelle Ermittlungen mit klaren Zusagen
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "100% Diskretion",
                description: "Absolute Vertraulichkeit garantiert",
              },
              {
                icon: MessageCircle,
                title: "Rund um die Uhr erreichbar",
                description: "Unverbindlich und vertraulich",
              },
              {
                icon: Clock,
                title: "Schnelle Reaktion",
                description: "Einsatzbereit innerhalb von 24h",
              },
              {
                icon: CheckCircle,
                title: "Gerichtsfeste Beweise",
                description: "Professionelle Dokumentation",
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
            title="Jetzt kontaktieren"
            description="Schildern Sie uns Ihren Fall – unverbindlich und vertraulich"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
