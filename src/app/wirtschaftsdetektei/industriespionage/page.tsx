import type { Metadata } from "next";
import { Shield, CheckCircle, AlertTriangle, Lock, Eye, Server } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Industriespionage | Spionageabwehr & Informationsschutz",
  description:
    "Schutz vor Industriespionage: ✓ Spionageabwehr ✓ Lauschangriff-Detektion ✓ Informationsschutz. Sichern Sie Ihre Geschäftsgeheimnisse.",
};

const bedrohungen = [
  {
    icon: Eye,
    title: "Konkurrenzausspähung",
    description: "Systematisches Ausspähen durch Wettbewerber oder deren Beauftragte",
  },
  {
    icon: Server,
    title: "Datendiebstahl",
    description: "Abfluss von Geschäftsgeheimnissen durch Insider oder Hacker",
  },
  {
    icon: Lock,
    title: "Lauschangriffe",
    description: "Abhörgeräte in Büros, Konferenzräumen oder Fahrzeugen",
  },
  {
    icon: AlertTriangle,
    title: "Social Engineering",
    description: "Manipulation von Mitarbeitern zur Preisgabe von Informationen",
  },
];

const faqs = [
  {
    question: "Was ist Industriespionage?",
    answer:
      "Industriespionage bezeichnet das illegale Beschaffen von Geschäftsgeheimnissen, technischem Know-how, Kundendaten oder strategischen Informationen durch Wettbewerber, fremde Staaten oder kriminelle Akteure.",
  },
  {
    question: "Wie erkenne ich, ob mein Unternehmen ausspioniert wird?",
    answer:
      "Warnsignale sind: Unerklärliche Informationslecks, Wettbewerber kennen interne Details, verdächtige Anfragen an Mitarbeiter, ungewöhnliche technische Störungen oder das Gefühl, beobachtet zu werden.",
  },
  {
    question: "Was können Sie gegen Industriespionage tun?",
    answer:
      "Wir bieten: Lauschabwehr (Sweeping), Sicherheitsaudits, Überprüfung von Mitarbeitern und Geschäftspartnern, Ermittlung bei Verdacht auf Informationsabfluss und Beratung zu Schutzmaßnahmen.",
  },
  {
    question: "Was ist Lauschabwehr (Sweeping)?",
    answer:
      "Bei einem Sweep durchsuchen wir Ihre Räumlichkeiten mit Spezialgeräten nach Abhörtechnik: Wanzen, versteckte Kameras, manipulierte Telefone oder WLAN-Sniffer. Dies sollte regelmäßig erfolgen.",
  },
  {
    question: "Was kostet der Schutz vor Industriespionage?",
    answer:
      "Ein Lauschabwehr-Sweep beginnt ab 2.000€ je nach Raumgröße. Sicherheitsaudits ab 3.000€. Umfassende Ermittlungen bei Verdacht werden individuell kalkuliert.",
  },
  {
    question: "Wie kann ich mein Unternehmen präventiv schützen?",
    answer:
      "Empfehlungen: Need-to-know-Prinzip, Geheimhaltungsvereinbarungen, Zugangskontrollen, regelmäßige Sweeps, Mitarbeitersensibilisierung, sichere IT-Infrastruktur und Background-Checks bei Neueinstellungen.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Lauschabwehr-Sweep (bis 200m²)", priceRange: "ab 2.000€", duration: "1 Tag" },
  { service: "Sicherheitsaudit", priceRange: "ab 3.000€", duration: "1-2 Wochen" },
  { service: "Ermittlung bei Verdacht", priceRange: "ab 5.000€", duration: "individuell" },
  { service: "Mitarbeiter-Screening", priceRange: "ab 500€/Person", duration: "3-5 Tage" },
];

export default function IndustriespionagePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
              { label: "Industriespionage", href: "/wirtschaftsdetektei/industriespionage" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Shield className="h-4 w-4 text-accent-400" />
              <span>Spionageabwehr</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Industriespionage abwehren
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Geschäftsgeheimnisse schützen</strong> – Wir helfen bei
              Lauschabwehr, Sicherheitsaudits und Ermittlungen bei Verdacht auf
              Spionage gegen Ihr Unternehmen.
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
                  "<strong>Bedrohungen:</strong> Abhörangriffe, Datendiebstahl, Social Engineering",
                  "<strong>Schutz:</strong> Lauschabwehr, Sicherheitsaudits, Mitarbeiter-Screening",
                  "<strong>Kosten:</strong> Sweep ab 2.000€, Audit ab 3.000€",
                  "<strong>Prävention:</strong> Regelmäßige Überprüfungen empfohlen",
                ]}
              />

              {/* Bedrohungen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Bedrohungen durch Industriespionage
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Industriespionage kann durch
                  technische Mittel, Insider oder Social Engineering erfolgen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {bedrohungen.map((item, i) => (
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

              {/* Unsere Leistungen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Unsere Schutzmaßnahmen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Wir bieten technische Abwehr,
                  Sicherheitsberatung und Ermittlungen bei konkretem Verdacht.
                </p>
                <ul className="space-y-3">
                  {[
                    "Lauschabwehr-Sweeps: Aufspüren von Wanzen und versteckten Kameras",
                    "Technische Sicherheitsprüfung von IT und Kommunikation",
                    "Sicherheitsaudits: Analyse von Schwachstellen im Unternehmen",
                    "Background-Checks bei Neueinstellungen in sensiblen Bereichen",
                    "Ermittlungen bei Verdacht auf Informationsabfluss",
                    "Schulungen zur Sensibilisierung von Mitarbeitern",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Spionageabwehr
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Ein Lauschabwehr-Sweep beginnt ab
                  2.000€. Umfassende Sicherheitsaudits ab 3.000€.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Industriespionage
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                <div className="bg-primary-900 rounded-xl p-6 text-white">
                  <h3 className="font-display font-bold mb-4">
                    Schaden durch Wirtschaftsspionage
                  </h3>
                  <div className="text-3xl font-bold text-accent-400">50+ Mrd. €</div>
                  <p className="text-sm text-primary-300 mt-2">
                    jährlicher Schaden für deutsche Unternehmen durch
                    Wirtschaftsspionage und Datendiebstahl
                  </p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Regelmäßige Sweeps
                  </h3>
                  <p className="text-sm text-primary-600">
                    Wir empfehlen regelmäßige Lauschabwehr-Checks – vor wichtigen
                    Meetings, bei Personalwechsel in Schlüsselpositionen und
                    mindestens jährlich.
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
