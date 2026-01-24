import type { Metadata } from "next";
import { Scale, CheckCircle, AlertTriangle, Shield, FileSearch, Eye } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Wettbewerbsverstöße | Detektei für Wettbewerbsrecht finden",
  description:
    "Finden Sie eine Detektei bei Wettbewerbsverstößen. ✓ Geprüfte Partner ✓ Kostenlose Vermittlung ✓ Markenpiraterie ✓ Geschäftsgeheimnis-Schutz.",
};

const verstoesse = [
  {
    title: "Markenpiraterie & Plagiate",
    description: "Ermittlung von Herstellern und Vertriebswegen gefälschter Produkte",
  },
  {
    title: "Unlautere Abwerbung",
    description: "Dokumentation von systematischer Abwerbung mit unlauteren Mitteln",
  },
  {
    title: "Verletzung von Geschäftsgeheimnissen",
    description: "Ermittlung bei Verdacht auf Weitergabe vertraulicher Informationen",
  },
  {
    title: "Vertragsbruch durch Ex-Mitarbeiter",
    description: "Überprüfung von Wettbewerbsverboten und Geheimhaltungsklauseln",
  },
  {
    title: "Irreführende Werbung",
    description: "Dokumentation von Falschaussagen über eigene oder fremde Produkte",
  },
  {
    title: "Produktpiraterie im Internet",
    description: "Aufspüren von Online-Händlern mit gefälschten Produkten",
  },
];

const faqs = [
  {
    question: "Was sind typische Wettbewerbsverstöße?",
    answer:
      "Typische Verstöße umfassen: Markenpiraterie und Plagiate, irreführende Werbung, Verletzung von Geschäftsgeheimnissen, unlautere Abwerbung, Rufschädigung und Vertragsbruch durch Ex-Mitarbeiter.",
  },
  {
    question: "Wie können Sie bei Markenpiraterie helfen?",
    answer:
      "Detekteien ermitteln die Quellen von Fälschungen, dokumentieren Vertriebswege, kaufen Testprodukte als Beweismittel und liefern Informationen für Abmahnungen, einstweilige Verfügungen oder Strafanzeigen.",
  },
  {
    question: "Was tun bei Verdacht auf Geheimnisverrat?",
    answer:
      "Detekteien können überprüfen, ob ehemalige Mitarbeiter beim Wettbewerber arbeiten und Firmengeheimnisse nutzen, Kontakte zu aktuellen Mitarbeitern halten oder gegen Wettbewerbsverbote verstoßen.",
  },
  {
    question: "Sind die Ermittlungen vor Gericht verwertbar?",
    answer:
      "Ja, alle unsere Ermittlungen und Dokumentationen sind so aufbereitet, dass sie als Beweismittel in Zivil- und Strafverfahren verwendet werden können.",
  },
  {
    question: "Was kostet eine Wettbewerbsermittlung?",
    answer:
      "Die Kosten hängen stark vom Umfang ab. Einfache Recherchen beginnen bei 1.500€, umfassende Ermittlungen mit Observation ab 3.000€. Bei internationalen Fällen entsprechend mehr.",
  },
  {
    question: "Können Sie auch international ermitteln?",
    answer:
      "Ja, durch unser Partnernetzwerk können wir auch grenzüberschreitend ermitteln – besonders relevant bei Markenpiraterie mit Produktionsstandorten im Ausland.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Recherche & Analyse", priceRange: "ab 1.500€", duration: "1-2 Wochen" },
  { service: "Testkauf (Markenpiraterie)", priceRange: "ab 500€", duration: "individuell" },
  { service: "Observation", priceRange: "800-1.500€/Tag", duration: "variabel" },
  { service: "Umfassende Ermittlung", priceRange: "ab 3.000€", duration: "individuell" },
];

export default function WettbewerbsverstoessePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
              { label: "Wettbewerbsverstöße", href: "/wirtschaftsdetektei/wettbewerb" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Scale className="h-4 w-4 text-accent-400" />
              <span>Wettbewerbsrecht</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Wettbewerbsverstöße aufdecken
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Markenpiraterie, unlautere Abwerbung, Geheimnisverrat</strong> –
              Wettbewerbsverstöße schaden Ihrem Unternehmen. Wir vermitteln Sie an 
              <strong> spezialisierte Partner-Detekteien</strong> für Beweissicherung.
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
                  "<strong>Themen:</strong> Markenpiraterie, Abwerbung, Geheimnisverrat, Vertragsbruch",
                  "<strong>Methoden:</strong> Recherche, Testkäufe, Observation, Dokumentation",
                  "<strong>Kosten:</strong> Ab 1.500€, individuelle Kalkulation",
                  "<strong>Ergebnis:</strong> Beweismaterial für rechtliche Schritte",
                ]}
              />

              {/* Verstöße */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Typische Wettbewerbsverstöße
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Unlauterer Wettbewerb kann viele Formen
                  annehmen – von Produktfälschungen über Geheimnisverrat bis zu
                  systematischer Abwerbung.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {verstoesse.map((item, i) => (
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
                  <strong>Kurz:</strong> Wir setzen verschiedene legale Methoden
                  ein, um Wettbewerbsverstöße zu dokumentieren.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: FileSearch,
                      title: "Recherche",
                      text: "Marktanalyse, Online-Recherche, Quellenermittlung",
                    },
                    {
                      icon: Shield,
                      title: "Testkäufe",
                      text: "Beschaffung von Beweismaterial bei Plagiatsverdacht",
                    },
                    {
                      icon: Eye,
                      title: "Observation",
                      text: "Überwachung von Ex-Mitarbeitern bei Verdacht",
                    },
                    {
                      icon: Scale,
                      title: "Dokumentation",
                      text: "Gerichtsverwertbare Aufbereitung aller Beweise",
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

              {/* Rechtliche Möglichkeiten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Rechtliche Möglichkeiten bei Wettbewerbsverstößen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Mit unseren Beweisen können Sie
                  verschiedene rechtliche Schritte einleiten:
                </p>
                <ul className="space-y-3">
                  {[
                    "Abmahnung mit Unterlassungserklärung",
                    "Einstweilige Verfügung bei akuter Gefährdung",
                    "Schadensersatzklage (entgangener Gewinn, Marktverwirrung)",
                    "Strafanzeige bei Straftaten (Markenpiraterie, Geheimnisverrat)",
                    "Arbeitsrechtliche Schritte gegen eigene Mitarbeiter",
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
                  Kosten für Wettbewerbsermittlungen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Die Kosten beginnen bei 1.500€ für
                  Recherchen. Umfassende Ermittlungen mit Observation ab 3.000€.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Wettbewerbsverstößen
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
                    Bei Wettbewerbsverstößen ist schnelles Handeln wichtig –
                    Beweise können verschwinden, Schäden wachsen. Kontaktieren
                    Sie uns bei Verdacht zeitnah.
                  </p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Internationale Fälle
                  </h3>
                  <p className="text-sm text-primary-600">
                    Besonders bei Markenpiraterie mit ausländischen Quellen
                    unterstützt unser internationales Partnernetzwerk bei
                    grenzüberschreitenden Ermittlungen.
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
