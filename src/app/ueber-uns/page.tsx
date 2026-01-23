import type { Metadata } from "next";
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  Building2,
  Scale,
  Heart,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Über uns | Oliver Peth – Zertifizierter Ermittler & Kriminalist",
  description:
    "Lernen Sie Oliver Peth kennen: Zertifizierter Ermittler, Kriminalist und Profiler. IHK-zugelassen, deutschlandweit im Einsatz. Vertrauen durch Expertise.",
};

const werte = [
  {
    icon: Shield,
    title: "Diskretion",
    description:
      "Absolute Vertraulichkeit ist das Fundament unserer Arbeit. Ihre Informationen sind bei uns sicher.",
  },
  {
    icon: Scale,
    title: "Integrität",
    description:
      "Wir arbeiten ausschließlich mit legalen Methoden und halten uns strikt an Recht und Gesetz.",
  },
  {
    icon: Award,
    title: "Professionalität",
    description:
      "Höchste Qualitätsstandards bei Ermittlung, Dokumentation und Berichterstattung.",
  },
  {
    icon: Heart,
    title: "Empathie",
    description:
      "Wir verstehen, dass hinter jedem Auftrag Menschen mit echten Sorgen stehen.",
  },
];

const fakten = [
  { value: "IHK", label: "Zugelassen §34a" },
  { value: "Zert.", label: "Ermittler & Profiler" },
  { value: "DE", label: "Bundesweit im Einsatz" },
  { value: "100%", label: "Diskretion garantiert" },
];

const zertifizierungen = [
  {
    title: "IHK-Zulassung",
    description: "Zugelassen nach §34a Gewerbeordnung",
  },
  {
    title: "Zertifizierter Ermittler",
    description: "Fachlich qualifizierte Ausbildung",
  },
  {
    title: "Kriminalist & Profiler",
    description: "Spezialisierung auf Fallanalyse",
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
              Oliver Peth – Zertifizierter Ermittler & Kriminalist
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Zertifizierter Ermittler, Kriminalist und Profiler</strong> mit 
              langjähriger Erfahrung in der professionellen Ermittlungsarbeit. 
              Diskretion, Präzision und gerichtsverwertbare Ergebnisse.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Qualifikation:</strong> Zertifizierter Ermittler, Kriminalist & Profiler",
              "<strong>Zulassung:</strong> IHK-zugelassen nach §34a GewO",
              "<strong>Einsatzgebiet:</strong> Deutschlandweit verfügbar",
              "<strong>Expertise:</strong> Profiling, Kriminalistik, Beweissicherung",
            ]}
          />

          {/* Über Oliver Peth */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-6">
                Über Oliver Peth
              </h2>
              <div className="space-y-4 text-primary-600">
                <p>
                  Als <strong>zertifizierter Ermittler, Kriminalist und Profiler</strong> verbinde 
                  ich fundierte Ausbildung mit jahrelanger praktischer Erfahrung. Meine 
                  Spezialisierung liegt in der systematischen Analyse von Sachverhalten und 
                  der Erstellung gerichtsverwertbarer Dokumentationen.
                </p>
                <p>
                  Die Kombination aus kriminalistischem Fachwissen und Profiling-Expertise 
                  ermöglicht mir, auch komplexe Fälle strukturiert und zielgerichtet 
                  zu bearbeiten. Dabei arbeite ich stets im Rahmen der gesetzlichen 
                  Möglichkeiten und mit höchster Diskretion.
                </p>
                <p>
                  <strong>Mein Versprechen:</strong> Professionelle Ermittlungsarbeit mit 
                  klaren Ergebnissen – diskret, legal und nachvollziehbar dokumentiert.
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

      {/* Unsere Werte */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
              Unsere Werte
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Diese Grundsätze leiten unser tägliches Handeln
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {werte.map((wert, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-primary-100">
                <wert.icon className="h-10 w-10 text-primary-700 mb-4" />
                <h3 className="font-display font-bold text-primary-900 mb-2">
                  {wert.title}
                </h3>
                <p className="text-sm text-primary-600">{wert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifikationen */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-6">
                Qualifikation & Zertifizierung
              </h2>
              <p className="text-primary-600 mb-8">
                Vertrauen basiert auf Kompetenz. Unsere Detektive sind
                umfassend qualifiziert und arbeiten nach höchsten Standards.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {zertifizierungen.map((zert, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-900">{zert.title}</h4>
                      <p className="text-sm text-primary-600">{zert.description}</p>
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
                  "Rechtskonforme Ermittlungen",
                  "Gerichtsverwertbare Dokumentation",
                  "Regelmäßige Fortbildung",
                  "Transparente Kommunikation",
                  "Faire und nachvollziehbare Preise",
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

      {/* Expertise */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
              Meine Expertise
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Spezialisierte Fähigkeiten für professionelle Ermittlungsarbeit
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Profiling",
                description:
                  "Systematische Verhaltensanalyse und Personeneinschätzung auf Basis kriminalistischer Methoden.",
              },
              {
                icon: Shield,
                title: "Kriminalistik",
                description:
                  "Fundierte Ausbildung in kriminalistischen Ermittlungsmethoden und Beweissicherung.",
              },
              {
                icon: Clock,
                title: "Deutschlandweit",
                description:
                  "Flexibel und schnell einsatzbereit in allen Bundesländern.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-primary-100">
                <item.icon className="h-10 w-10 text-primary-700 mb-4" />
                <h3 className="font-display font-bold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABox
            title="Lernen Sie uns kennen"
            description="Kostenlose und unverbindliche Erstberatung"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
