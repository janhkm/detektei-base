import type { Metadata } from "next";
import {
  Phone,
  Users,
  Handshake,
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
  title: "Ablauf | So funktioniert die Vermittlung",
  description:
    "Transparenter Ablauf von der Anfrage bis zur Detektei. ✓ Kostenlose Beratung ✓ Schnelle Vermittlung ✓ Geprüfte Partner. Erfahren Sie, wie wir Sie unterstützen.",
};

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Kostenlose Anfrage",
    description:
      "Schildern Sie uns Ihren Fall vertraulich per Telefon, E-Mail oder Kontaktformular. Wir benötigen nur die wichtigsten Informationen, um die passende Detektei zu finden.",
    details: [
      "Vertrauliches Gespräch über Ihre Situation",
      "Einschätzung, welche Art Detektei Sie brauchen",
      "Beratung zu Ihren Möglichkeiten",
      "Völlig kostenlos und unverbindlich",
    ],
    duration: "ca. 15-30 Minuten",
  },
  {
    step: "02",
    icon: Users,
    title: "Wir finden den Experten",
    description:
      "Basierend auf Ihrem Anliegen, Standort und der benötigten Spezialisierung wählen wir die geeignete Partner-Detektei aus unserem Netzwerk.",
    details: [
      "Analyse Ihres Falls",
      "Auswahl nach Spezialisierung",
      "Regionale Verfügbarkeit prüfen",
      "Nur geprüfte, erfahrene Partner",
    ],
    duration: "Wenige Stunden",
  },
  {
    step: "03",
    icon: Handshake,
    title: "Kontakt zur Detektei",
    description:
      "Die ausgewählte Partner-Detektei meldet sich direkt bei Ihnen. Sie besprechen Ihren Fall persönlich und erhalten einen individuellen Kostenvoranschlag.",
    details: [
      "Persönliche Beratung durch die Detektei",
      "Detaillierter Kostenvoranschlag",
      "Klärung aller Fragen",
      "Keine Verpflichtung zur Beauftragung",
    ],
    duration: "Innerhalb von 24h",
  },
  {
    step: "04",
    icon: Search,
    title: "Ermittlung durch Partner",
    description:
      "Nach Ihrer Beauftragung führt die Partner-Detektei die Ermittlungen professionell durch. Sie haben direkten Kontakt zu Ihrem Ermittler.",
    details: [
      "Professionelle Ermittlungsarbeit",
      "Direkter Ansprechpartner",
      "Regelmäßige Updates",
      "Legale Methoden garantiert",
    ],
    duration: "Je nach Auftrag",
  },
  {
    step: "05",
    icon: FileCheck,
    title: "Ergebnisse & Bericht",
    description:
      "Sie erhalten von der Partner-Detektei einen detaillierten, gerichtsverwertbaren Ermittlungsbericht mit allen Beweisen.",
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
    question: "Was kostet die Vermittlung?",
    answer:
      "Die Vermittlung über Detektei Base ist für Sie komplett kostenfrei. Wir finanzieren uns über Provisionen der Partner-Detekteien. Die Kosten für die Ermittlung selbst vereinbaren Sie direkt mit der Detektei.",
  },
  {
    question: "Wie schnell werde ich an eine Detektei vermittelt?",
    answer:
      "In der Regel meldet sich eine passende Partner-Detektei innerhalb von 24 Stunden (an Werktagen) bei Ihnen. In dringenden Fällen ist oft eine noch schnellere Vermittlung möglich.",
  },
  {
    question: "Kann ich den Auftrag bei der Detektei abbrechen?",
    answer:
      "Ja, das regeln Sie direkt mit der Partner-Detektei. Unsere Partner arbeiten in der Regel mit fairen Kündigungsbedingungen ohne versteckte Kosten.",
  },
  {
    question: "Was passiert mit meinen Daten?",
    answer:
      "Ihre Anfragedaten werden nur an die eine ausgewählte Partner-Detektei weitergegeben. Wir geben keine Daten an mehrere Detekteien weiter. Details finden Sie in unserer Datenschutzerklärung.",
  },
  {
    question: "Wie wählen Sie die Partner-Detektei aus?",
    answer:
      "Wir berücksichtigen Ihr Anliegen (z.B. Untreue, Wirtschaftsermittlung), Ihren Standort und die Spezialisierung der Detektei. Alle Partner sind erfahren und von uns geprüft.",
  },
  {
    question: "Was, wenn ich mit der vermittelten Detektei nicht zufrieden bin?",
    answer:
      "Kontaktieren Sie uns – wir helfen Ihnen gerne und können bei Bedarf eine alternative Partner-Detektei vermitteln.",
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
              So funktioniert die Vermittlung
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Von Ihrer Anfrage bis zur passenden Detektei – transparent und 
              unkompliziert. Sie behalten jederzeit die volle Kontrolle.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Kostenlos:</strong> Unsere Vermittlung ist für Sie gratis",
              "<strong>Schnell:</strong> Partner-Detektei meldet sich in 24h",
              "<strong>Geprüft:</strong> Alle Partner sind erfahrene Ermittler",
              "<strong>Unverbindlich:</strong> Keine Verpflichtung zur Beauftragung",
            ]}
          />

          {/* Process Steps */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 text-center mb-4">
              Der Vermittlungsprozess in 5 Schritten
            </h2>
            <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12">
              Einfach und transparent – so finden Sie die richtige Detektei
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
              Das können Sie von unserer Vermittlung erwarten
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Geprüfte Partner",
                description: "Alle Detekteien sind erfahren und geprüft",
              },
              {
                icon: MessageCircle,
                title: "Kostenlose Vermittlung",
                description: "Für Sie entstehen keine Kosten",
              },
              {
                icon: Clock,
                title: "Schnelle Reaktion",
                description: "Rückmeldung innerhalb von 24h",
              },
              {
                icon: CheckCircle,
                title: "Unverbindlich",
                description: "Keine Verpflichtung zur Beauftragung",
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
            Häufige Fragen zur Vermittlung
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABox
            title="Jetzt die passende Detektei finden"
            description="Kostenlose und unverbindliche Vermittlung"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
