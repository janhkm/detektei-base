import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  UserCheck,
  Thermometer,
  AlertTriangle,
  ShieldAlert,
  FileSearch,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Wirtschaftsdetektei | Detektei für Unternehmen finden",
  description:
    "Finden Sie eine Wirtschaftsdetektei für Ihr Unternehmen. ✓ Geprüfte Partner ✓ Kostenlose Vermittlung ✓ Mitarbeiterüberprüfung ✓ Krankfeierkontrolle.",
};

const services = [
  {
    icon: UserCheck,
    title: "Mitarbeiterüberprüfung",
    description:
      "Pre-Employment Screening und Background Checks für sichere Personalentscheidungen. Überprüfung von Lebensläufen und Referenzen.",
    href: "/wirtschaftsdetektei/mitarbeiterpruefung",
    features: ["Background Check", "Referenzprüfung", "Qualifikationsnachweis", "Vorstrafen-Check"],
  },
  {
    icon: Thermometer,
    title: "Krankfeierkontrolle",
    description:
      "Diskrete Observation bei Verdacht auf vorgetäuschte Arbeitsunfähigkeit. Dokumentation von Aktivitäten während der Krankschreibung.",
    href: "/wirtschaftsdetektei/krankfeier",
    features: ["Observation", "Fotodokumentation", "Aktivitätsnachweis", "Gerichtsfeste Beweise"],
  },
  {
    icon: AlertTriangle,
    title: "Betrug & Unterschlagung",
    description:
      "Aufklärung von internem Betrug, Unterschlagung, Diebstahl und Veruntreuung im Unternehmen.",
    href: "/wirtschaftsdetektei/betrug",
    features: ["Täterermittlung", "Beweissicherung", "Schadensdokumentation", "Prävention"],
  },
  {
    icon: ShieldAlert,
    title: "Diebstahlermittlung",
    description:
      "Aufklärung von Inventurverlusten, Warendiebstahl und systematischem Schwund im Unternehmen.",
    href: "/wirtschaftsdetektei/diebstahl",
    features: ["Schwundanalyse", "Täteridentifikation", "Präventionskonzept", "Mitarbeiterschulung"],
  },
  {
    icon: Building2,
    title: "Wettbewerbsverstöße",
    description:
      "Ermittlungen bei unlauterem Wettbewerb, Industriespionage und Verletzung von Geschäftsgeheimnissen.",
    href: "/wirtschaftsdetektei/wettbewerb",
    features: ["Konkurrenzanalyse", "Spionageabwehr", "Geheimnisschutz", "Markenpiraterie"],
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description:
      "Umfassende Prüfung von Geschäftspartnern, Lieferanten und potenziellen Übernahmezielen.",
    href: "/wirtschaftsdetektei/due-diligence",
    features: ["Unternehmensrecherche", "Bonitätsprüfung", "Risikoanalyse", "Compliance-Check"],
  },
];

export default function WirtschaftsdetekteiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" }]}
          />
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
                Wirtschaftsdetektei – Schutz für Ihr Unternehmen
              </h1>
              <p className="mt-6 text-lg text-primary-200 leading-relaxed">
                Mitarbeiterbetrug, Diebstahl, Krankfeiermissbrauch – interne
                Probleme kosten Unternehmen Milliarden. Wir vermitteln Sie an 
                spezialisierte <strong>Partner-Wirtschaftsdetekteien</strong>, die 
                diskret ermitteln und gerichtsverwertbare Beweise liefern.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3.5 text-base font-semibold text-primary-900 hover:bg-accent-400 transition-colors"
                >
                  Kostenlose Beratung
                </Link>
                <a
                  href="tel:+4917666918653"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-6 py-3.5 text-base font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  0176 66918653
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Für Unternehmen jeder Größe
                </h3>
                <ul className="space-y-3">
                  {[
                    "Mittelständische Unternehmen",
                    "Konzerne und Großunternehmen",
                    "Einzelhandel und Gastronomie",
                    "Logistik und Transport",
                    "Produktion und Industrie",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary-200">
                      <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Leistungen:</strong> Mitarbeiterprüfung, Krankfeier, Betrug, Diebstahl, Wettbewerb",
              "<strong>Kosten:</strong> Individuelle Kalkulation, kostenlose Erstberatung",
              "<strong>Beweise:</strong> Gerichtsverwertbar & arbeitsrechtlich belastbar",
              "<strong>Diskretion:</strong> Vertrauliche Behandlung aller Unternehmensdaten",
            ]}
          />

          {/* Services Grid */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 text-center mb-4">
              Wirtschaftsdetektei-Leistungen unserer Partner
            </h2>
            <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12">
              Von der Mitarbeiterüberprüfung bis zur Betrugsermittlung –
              wir vermitteln Sie an Partner-Detekteien mit passender Spezialisierung.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group p-6 bg-accent-50/30 rounded-xl border border-accent-100 hover:bg-white hover:border-accent-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent-200 transition-colors">
                    <service.icon className="h-6 w-6 text-accent-700" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2 flex items-center gap-2">
                    {service.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-primary-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-xs px-2 py-1 bg-white rounded-full text-primary-600 border border-accent-100"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistiken */}
      <section className="py-16 lg:py-24 bg-primary-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Wirtschaftskriminalität in Zahlen
            </h2>
            <p className="text-primary-300 max-w-2xl mx-auto">
              Die Schäden durch interne Straftaten werden oft unterschätzt
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "50 Mrd. €", label: "Schaden durch Wirtschaftskriminalität pro Jahr" },
              { value: "30%", label: "der Unternehmen von Betrug betroffen" },
              { value: "2-5%", label: "Krankfeier-Quote ist vorgetäuscht" },
              { value: "70%", label: "der Täter sind eigene Mitarbeiter" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10"
              >
                <div className="text-3xl font-bold text-accent-400 mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-primary-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-6">
                Warum eine Wirtschaftsdetektei?
              </h2>
              <div className="space-y-4 text-primary-600">
                <p>
                  Interne Ermittlungen durch eigene Mitarbeiter sind oft
                  problematisch: Es fehlt an Erfahrung, rechtlichem Wissen und
                  der nötigen Objektivität. Zudem besteht die Gefahr, dass
                  Verdächtige gewarnt werden.
                </p>
                <p>
                  Die von uns vermittelten Wirtschaftsdetektive arbeiten diskret, 
                  kennen die rechtlichen Grenzen und liefern Beweise, die auch vor
                  Arbeitsgerichten Bestand haben.
                </p>
                <p>
                  <strong>
                    Professionelle Ermittlungen schützen Ihr Unternehmen – und
                    sichern Ihre Ansprüche rechtlich ab.
                  </strong>
                </p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <h3 className="font-display font-bold text-primary-900 mb-6">
                Vorteile externer Ermittler
              </h3>
              <ul className="space-y-4">
                {[
                  "Erfahrung in Wirtschaftsermittlungen",
                  "Kenntnis arbeitsrechtlicher Vorgaben",
                  "Objektivität und Neutralität",
                  "Gerichtsverwertbare Dokumentation",
                  "Keine Vorwarnung an Verdächtige",
                  "Entlastung der internen Ressourcen",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                    <span className="text-primary-700">{item}</span>
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
            title="Vertrauliche Erstberatung für Unternehmen"
            description="Schildern Sie uns Ihre Situation – kostenlos und diskret"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
