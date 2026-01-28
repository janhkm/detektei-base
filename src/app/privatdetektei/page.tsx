import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Search,
  Users,
  ShieldAlert,
  Eye,
  UserX,
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Privatdetektei | Diskrete Ermittlungen für Privatpersonen",
  description:
    "Detektei Base – Ihre Privatdetektei. ✓ Untreue aufdecken ✓ Personensuche ✓ Unterhaltsermittlungen. Professionelle Ermittlungen, zusätzlich mit geprüften Partnern deutschlandweit.",
};

const services = [
  {
    icon: Heart,
    title: "Untreue & Fremdgehen",
    description:
      "Diskrete Observation bei Verdacht auf Untreue. Wir liefern Ihnen gerichtsverwertbare Beweise.",
    href: "/privatdetektei/untreue",
    features: ["Verdeckte Observation", "Fotodokumentation", "GPS-Ortung", "Detaillierter Bericht"],
  },
  {
    icon: Search,
    title: "Personensuche",
    description:
      "Professionelle Suche nach vermissten Personen, Schuldnern, Erben oder alten Bekannten. Weltweite Recherche.",
    href: "/privatdetektei/personensuche",
    features: ["Adressermittlung", "Aufenthaltsort finden", "Vermisstensuche", "Erbenermittlung"],
  },
  {
    icon: Users,
    title: "Sorgerecht & Unterhalt",
    description:
      "Beweissicherung bei Unterhaltsbetrug, Verletzung von Sorgerechtspflichten oder Umgangsrechtsverstößen.",
    href: "/privatdetektei/sorgerecht",
    features: ["Unterhaltsermittlung", "Vermögensrecherche", "Lebensstil-Check", "Zeugenaussagen"],
  },
  {
    icon: ShieldAlert,
    title: "Stalking & Belästigung",
    description:
      "Dokumentation und Beweissicherung bei Stalking, Mobbing oder Belästigung. Schutz und rechtliche Absicherung.",
    href: "/privatdetektei/stalking",
    features: ["Täteridentifikation", "Beweissicherung", "Dokumentation", "Behördenkontakt"],
  },
  {
    icon: Eye,
    title: "Observation",
    description:
      "Professionelle Überwachung und Dokumentation von Personen und Aktivitäten. Diskret, legal und gerichtsverwertbar.",
    href: "/privatdetektei/observation",
    features: ["Mobile Observation", "Standortüberwachung", "Verhaltensanalyse", "Video-/Fotobeweis"],
  },
  {
    icon: UserX,
    title: "Betrug & Scamming",
    description:
      "Aufklärung von Romance Scam, Heiratsschwindel und anderen Betrugsmaschen im privaten Umfeld.",
    href: "/privatdetektei/betrug",
    features: ["Identitätsprüfung", "Hintergrundcheck", "Betrugserkennung", "Schadensdokumentation"],
  },
];

export default function PrivatdetekteiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privatdetektei", href: "/privatdetektei" }]} />
          <div className="mt-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
                Privatdetektei – Diskrete Ermittlungen
              </h1>
              <p className="mt-6 text-lg text-primary-200 leading-relaxed">
                Verdacht auf Untreue? Suchen Sie eine vermisste Person? <strong>Detektei Base</strong> führt 
                professionelle Ermittlungen durch – diskret und mit gerichtsverwertbaren Beweisen. 
                Zusätzlich arbeiten wir mit geprüften Partnern deutschlandweit.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3.5 text-base font-semibold text-primary-900 hover:bg-accent-400 transition-colors"
                >
                  Jetzt kontaktieren
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
                  Unsere Qualitätsgarantie
                </h3>
                <ul className="space-y-3">
                  {[
                    "Professionelle Ermittlungen",
                    "Zusätzlich geprüfte Partner deutschlandweit",
                    "Rund um die Uhr erreichbar",
                    "Erfahrene Ermittler für jeden Fall",
                    "Schnelle Reaktionszeit in 24h",
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
              "<strong>Leistungen:</strong> Untreue, Personensuche, Sorgerecht, Stalking, Betrug",
              "<strong>Kosten:</strong> Individuell nach Fall – Erstberatung kostenlos",
              "<strong>Reichweite:</strong> Deutschlandweit, zusätzlich mit geprüften Partnern",
              "<strong>Ergebnis:</strong> Gerichtsverwertbare Beweise und detaillierte Berichte",
            ]}
          />

          {/* Services Grid */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 text-center mb-4">
              Unsere Leistungen im Privatbereich
            </h2>
            <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12">
              Wählen Sie Ihr Thema – wir beraten Sie unverbindlich.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group p-6 bg-primary-50/50 rounded-xl border border-primary-100 hover:bg-white hover:border-primary-200 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                    <service.icon className="h-6 w-6 text-primary-700" />
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
                        className="text-xs px-2 py-1 bg-white rounded-full text-primary-600 border border-primary-100"
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

      {/* Why Us */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-6">
                Warum eine Privatdetektei beauftragen?
              </h2>
              <div className="space-y-4 text-primary-600">
                <p>
                  In vielen Lebenssituationen benötigen Sie Gewissheit – sei es
                  bei Verdacht auf Untreue, der Suche nach einer vermissten
                  Person oder bei Unterhaltsfragen. Eigene Nachforschungen
                  können rechtlich problematisch sein und emotional belasten.
                </p>
                <p>
                  <strong>Professionelle Privatdetektive</strong> arbeiten diskret,
                  effizient und im Rahmen der gesetzlichen Möglichkeiten. Die
                  gewonnenen Beweise sind gerichtsverwertbar und können in
                  rechtlichen Verfahren eingesetzt werden.
                </p>
                <p>
                  <strong>Detektei Base</strong> führt professionelle Ermittlungen durch 
                  und arbeitet zusätzlich mit geprüften Partnern deutschlandweit zusammen.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-primary-100">
              <h3 className="font-display font-bold text-primary-900 mb-6">
                Typische Anlässe für Privatermittlungen
              </h3>
              <ul className="space-y-4">
                {[
                  "Verdacht auf Untreue oder Fremdgehen des Partners",
                  "Suche nach vermissten Familienangehörigen",
                  "Überprüfung von Unterhaltsansprüchen",
                  "Klärung von Erbschaftsangelegenheiten",
                  "Dokumentation von Stalking oder Belästigung",
                  "Überprüfung neuer Lebenspartner",
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABox
            title="Jetzt kontaktieren"
            description="Detektei Base – Ihre Privatdetektei für professionelle Ermittlungen"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
