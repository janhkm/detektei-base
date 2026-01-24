import type { Metadata } from "next";
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  Building2,
  Scale,
  Zap,
  Target,
  HandshakeIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Über uns | Ihr Netzwerk für geprüfte Detekteien",
  description:
    "Detektei Base vermittelt Sie an geprüfte Partner-Detekteien in ganz Deutschland. Unser Netzwerk aus IHK-zugelassenen Ermittlern garantiert Qualität und Diskretion.",
};

const vorteile = [
  {
    icon: Shield,
    title: "Geprüfte Partner",
    description:
      "Jede Detektei in unserem Netzwerk ist IHK-zugelassen und wird regelmäßig auf Qualität geprüft.",
  },
  {
    icon: Zap,
    title: "Schnelle Vermittlung",
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
    title: "Kostenlos für Sie",
    description:
      "Unsere Vermittlung ist für Sie komplett kostenfrei und unverbindlich.",
  },
];

const fakten = [
  { value: "4", label: "Partner deutschlandweit" },
  { value: "100%", label: "IHK-zugelassen" },
  { value: "24h", label: "Vermittlungszeit" },
  { value: "DE", label: "Bundesweit verfügbar" },
];

const qualitaetsstandards = [
  {
    title: "IHK-Zulassung",
    description: "Alle Partner sind nach §34a GewO zugelassen",
  },
  {
    title: "Berufshaftpflicht",
    description: "Jede Partner-Detektei ist versichert",
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
              Ihr Netzwerk für professionelle Ermittlungen
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Detektei Base</strong> verbindet Sie mit den besten 
              Detekteien Deutschlands. Unser Netzwerk aus geprüften Partner-Detekteien 
              garantiert Ihnen Qualität, Diskretion und schnelle Ergebnisse.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Netzwerk:</strong> 4 geprüfte Partner-Detekteien deutschlandweit mit 20+ Jahren Erfahrung",
              "<strong>Qualität:</strong> Alle Partner sind IHK-zugelassen nach §34a GewO",
              "<strong>Service:</strong> Kostenlose Vermittlung innerhalb von 24 Stunden",
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
                  <strong>Detektei Base nimmt Ihnen diese Arbeit ab.</strong> Wir haben 
                  ein Netzwerk aus über 50 geprüften Partner-Detekteien aufgebaut, die 
                  alle unsere strengen Qualitätskriterien erfüllen: IHK-Zulassung, 
                  Berufshaftpflicht, nachgewiesene Erfahrung.
                </p>
                <p>
                  Nach Ihrer Anfrage analysieren wir Ihren Fall und vermitteln Sie 
                  an die <strong>Detektei, die am besten zu Ihrem Anliegen passt</strong> – 
                  ob Observation, Personensuche oder Wirtschaftsermittlung. So sparen 
                  Sie Zeit und können sicher sein, einen kompetenten Partner zu bekommen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {fakten.map((fakt, i) => (
                <div
                  key={i}
                  className="bg-primary-50 rounded-xl p-6 text-center border border-primary-100"
                >
                  <div className="text-3xl font-bold text-primary-900 mb-1">
                    {fakt.value}
                  </div>
                  <p className="text-sm text-primary-600">{fakt.label}</p>
                </div>
              ))}
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
              So funktioniert die Vermittlung
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
                  "Die ausgewählte Partner-Detektei meldet sich bei Ihnen für eine persönliche Beratung und Auftragsklärung.",
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
                  "Nur geprüfte Partner-Detekteien",
                  "Transparente Vermittlung",
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

      {/* Für Partner-Detekteien */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Users className="h-12 w-12 text-primary-700 mb-4" />
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
                  Für Detekteien: Partner werden
                </h2>
                <p className="text-primary-600 mb-6">
                  Sie sind eine etablierte Detektei mit IHK-Zulassung und möchten 
                  Teil unseres Netzwerks werden? Wir freuen uns auf qualifizierte 
                  Partner, die unsere hohen Standards teilen.
                </p>
                <ul className="space-y-2 text-primary-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-500" />
                    <span>Qualifizierte Anfragen erhalten</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-500" />
                    <span>Regionale und überregionale Aufträge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-500" />
                    <span>Faire Konditionen</span>
                  </li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <a
                  href="mailto:partner@detektei-base.de"
                  className="inline-flex items-center justify-center rounded-lg bg-primary-900 px-6 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-primary-800 transition-all"
                >
                  Partner werden
                </a>
                <p className="mt-3 text-sm text-primary-500">
                  Kontakt: partner@detektei-base.de
                </p>
              </div>
            </div>
          </div>
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
