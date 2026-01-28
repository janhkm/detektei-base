import type { Metadata } from "next";
import {
  Shield,
  CheckCircle,
  Building2,
  Zap,
  Target,
  HandshakeIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Über uns | Detektei Base",
  description:
    "Detektei Base – Professionelle Ermittlungen. Privatdetektei und Wirtschaftsdetektei deutschlandweit, zusätzlich mit geprüften Partnern.",
};

const vorteile = [
  {
    icon: Shield,
    title: "Geprüfte Partner",
    description:
      "Jede Detektei in unserem Netzwerk wird sorgfältig ausgewählt und regelmäßig auf Qualität geprüft.",
  },
  {
    icon: Zap,
    title: "Schnelle Reaktionszeit",
    description:
      "Keine Zeit verlieren: Wir finden innerhalb von 24 Stunden die passende Detektei für Ihren Fall.",
  },
  {
    icon: Target,
    title: "Passgenau",
    description:
      "Spezialisierte Experten für jeden Bereich – von Observation bis Wirtschaftsermittlung.",
  },
  {
    icon: HandshakeIcon,
    title: "Rund um die Uhr erreichbar",
    description:
      "Die Erstberatung ist für Sie komplett kostenfrei und unverbindlich.",
  },
];


const qualitaetsstandards = [
  {
    title: "Geprüfte Qualifikation",
    description: "Alle Partner sind erfahrene Ermittler",
  },
  {
    title: "Berufshaftpflicht",
    description: "Vollumfänglich versichert",
  },
  {
    title: "Erfahrung",
    description: "Mindestens 3 Jahre Berufserfahrung",
  },
  {
    title: "DSGVO-konform",
    description: "Datenschutz nach höchsten Standards",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Über uns", href: "/ueber-uns" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Ihre Detektei für professionelle Ermittlungen
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Detektei Base</strong> – Ihre Detektei für professionelle 
              Ermittlungen. Privatdetektei und Wirtschaftsdetektei deutschlandweit, 
              zusätzlich mit geprüften Partnern.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Leistungen:</strong> Privatdetektei und Wirtschaftsdetektei deutschlandweit",
              "<strong>Zusätzlich:</strong> Geprüfte Partner in allen Bundesländern",
              "<strong>Service:</strong> Rund um die Uhr erreichbar, Rückmeldung innerhalb von 24 Stunden",
              "<strong>Garantie:</strong> Passende Experten für jeden Ermittlungsfall",
            ]}
          />

          {/* Über Detektei Base */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-6">
                Warum Detektei Base?
              </h2>
              <div className="space-y-4 text-primary-600">
                <p>
                  Die Suche nach einer seriösen Detektei kann überwältigend sein. 
                  <strong> Wie erkennt man einen qualifizierten Ermittler?</strong> Wer 
                  ist auf meinen speziellen Fall spezialisiert? Kann ich den Bewertungen 
                  im Internet trauen?
                </p>
                <p>
                  <strong>Detektei Base – Ihre Detektei.</strong> Wir führen professionelle 
                  Ermittlungen durch und arbeiten zusätzlich mit geprüften Partnern zusammen, die 
                  alle unsere strengen Qualitätskriterien erfüllen: 
                  Berufshaftpflicht und nachgewiesene Erfahrung.
                </p>
                <p>
                  Nach Ihrer Anfrage analysieren wir Ihren Fall und finden 
                  die <strong>Detektei, die am besten zu Ihrem Anliegen passt</strong> – 
                  ob Observation, Personensuche oder Wirtschaftsermittlung. So sparen 
                  Sie Zeit und können sicher sein, einen kompetenten Partner zu bekommen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
              Ihre Vorteile mit Detektei Base
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Wir machen es Ihnen einfach, die richtige Detektei zu finden
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vorteile.map((vorteil, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-primary-100">
                <vorteil.icon className="h-10 w-10 text-primary-700 mb-4" />
                <h3 className="font-display font-bold text-primary-900 mb-2">
                  {vorteil.title}
                </h3>
                <p className="text-sm text-primary-600">{vorteil.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
              So funktioniert es
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              In drei einfachen Schritten zur passenden Detektei
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Anfrage stellen",
                description:
                  "Schildern Sie uns Ihr Anliegen – kostenlos und unverbindlich. Alle Informationen werden streng vertraulich behandelt.",
              },
              {
                step: "2",
                title: "Passende Detektei",
                description:
                  "Wir analysieren Ihren Fall und wählen aus unserem Netzwerk die Detektei aus, die am besten zu Ihrem Anliegen passt.",
              },
              {
                step: "3",
                title: "Direkte Verbindung",
                description:
                  "Wir melden uns bei Ihnen für eine persönliche Beratung und Auftragsklärung.",
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100 h-full">
                  <div className="w-10 h-10 bg-primary-900 text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-600">{item.description}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualitätsstandards */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-6">
                Unsere Qualitätsstandards
              </h2>
              <p className="text-primary-600 mb-8">
                Nicht jede Detektei schafft es in unser Netzwerk. Wir prüfen jeden 
                Partner sorgfältig, damit Sie sich auf Qualität verlassen können.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {qualitaetsstandards.map((standard, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-900">{standard.title}</h4>
                      <p className="text-sm text-primary-600">{standard.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <Building2 className="h-12 w-12 text-accent-400 mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">
                Unser Versprechen
              </h3>
              <ul className="space-y-3">
                {[
                  "Professionelle Ermittlungen",
                  "Zusätzlich geprüfte Partner",
                  "Keine versteckten Kosten",
                  "Datenschutz nach DSGVO",
                  "Schnelle Bearbeitung Ihrer Anfrage",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                    <span className="text-primary-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABox
            title="Jetzt kontaktieren"
            description="Kostenlose und unverbindliche Erstberatung"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
