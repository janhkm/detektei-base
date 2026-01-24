import type { Metadata } from "next";
import { Users, CheckCircle, Scale, Wallet, FileText, Eye } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Sorgerecht & Unterhalt | Detektei für Familienrecht finden",
  description:
    "Finden Sie eine Detektei für Beweissicherung bei Sorgerecht und Unterhalt. ✓ Geprüfte Partner ✓ Kostenlose Vermittlung. Gerichtsverwertbare Beweise.",
};

const leistungen = [
  {
    icon: Wallet,
    title: "Unterhaltsermittlung",
    description:
      "Überprüfung der tatsächlichen Einkommens- und Vermögensverhältnisse bei Verdacht auf Unterhaltsbetrug",
  },
  {
    icon: Eye,
    title: "Lebensstil-Dokumentation",
    description:
      "Beweissicherung bei offensichtlichem Missverhältnis zwischen angegebenem Einkommen und Lebensstandard",
  },
  {
    icon: Scale,
    title: "Umgangsrechtsverstöße",
    description:
      "Dokumentation bei Verletzung des Umgangsrechts oder Entfremdung des Kindes",
  },
  {
    icon: FileText,
    title: "Kindeswohlgefährdung",
    description:
      "Beweissicherung bei Verdacht auf Vernachlässigung oder Gefährdung im Haushalt des Ex-Partners",
  },
];

const faqs = [
  {
    question: "Wann ist eine Unterhaltsermittlung sinnvoll?",
    answer:
      "Eine Ermittlung ist sinnvoll, wenn Sie vermuten, dass Ihr Ex-Partner sein Einkommen oder Vermögen falsch angibt, um Unterhaltszahlungen zu reduzieren. Typische Anzeichen sind ein auffällig hoher Lebensstandard trotz angeblich geringem Einkommen.",
  },
  {
    question: "Welche Beweise können Detekteien liefern?",
    answer:
      "Detekteien dokumentieren den tatsächlichen Lebensstil (Fahrzeuge, Urlaube, Ausgaben), recherchieren Beschäftigungsverhältnisse, Nebeneinkünfte und Vermögenswerte. Alle Beweise werden gerichtsverwertbar aufbereitet.",
  },
  {
    question: "Sind die Ermittlungen legal?",
    answer:
      "Ja, alle Ermittlungen professioneller Detekteien erfolgen im Rahmen der Jedermannsrechte und sind vollständig legal. Es wird nur im öffentlichen Raum beobachtet und mit legalen Recherchemethoden gearbeitet.",
  },
  {
    question: "Wie helfen die Beweise vor Gericht?",
    answer:
      "Ermittlungsberichte von Detekteien werden von Familiengerichten anerkannt. Sie können als Grundlage für Anträge auf Auskunft über Einkommen dienen oder bestehende Unterhaltstitel anfechten.",
  },
  {
    question: "Was kostet eine Sorgerechts-/Unterhaltsermittlung?",
    answer:
      "Die Kosten hängen vom Umfang ab. Einfache Lebensstil-Checks beginnen ab 800€, umfassende Vermögensrecherchen ab 1.500€. Sie erhalten vorab einen detaillierten Kostenvoranschlag.",
  },
  {
    question: "Können Sie auch bei Umgangsrechtsverletzungen helfen?",
    answer:
      "Ja, Detekteien dokumentieren Verstöße gegen das Umgangsrecht, z.B. wenn das Kind nicht wie vereinbart übergeben wird oder der Kontakt zum Kind systematisch verhindert wird.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Lebensstil-Check", priceRange: "ab 800€", duration: "3-5 Tage" },
  { service: "Vermögensrecherche", priceRange: "ab 1.500€", duration: "1-2 Wochen" },
  { service: "Observation", priceRange: "800-1.500€/Tag", duration: "variabel" },
  { service: "Gerichtsverwertbarer Bericht", priceRange: "Inklusive", duration: "-" },
];

export default function SorgerechtPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Privatdetektei", href: "/privatdetektei" },
              { label: "Sorgerecht & Unterhalt", href: "/privatdetektei/sorgerecht" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Users className="h-4 w-4 text-accent-400" />
              <span>Familienrecht</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Sorgerecht & Unterhalt – Beweise für Ihr Recht
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Verdacht auf <strong>Unterhaltsbetrug</strong>? Verletzung des
              Umgangsrechts? Wir vermitteln Sie an <strong>spezialisierte 
              Partner-Detekteien</strong> für gerichtsverwertbare Beweise – 
              diskret, professionell und im Interesse des Kindeswohls.
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
                  "<strong>Leistungen:</strong> Unterhaltsermittlung, Vermögensrecherche, Umgangsrecht",
                  "<strong>Beweise:</strong> Gerichtsverwertbar für Familiengerichte",
                  "<strong>Kosten:</strong> Ab 800€, individuelle Kalkulation",
                  "<strong>Ziel:</strong> Faire Regelungen im Interesse aller Beteiligten",
                ]}
              />

              {/* Leistungen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Leistungen im Familienrecht
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Detekteien unterstützen bei Unterhaltsfragen,
                  Sorgerechtstreitigkeiten und Umgangsrechtsverletzungen mit
                  professioneller Beweissicherung.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {leistungen.map((item, i) => (
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

              {/* Typische Situationen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Typische Situationen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> In diesen Fällen kann eine
                  Detektei-Ermittlung gerichtsverwertbare Beweise liefern:
                </p>
                <ul className="space-y-3">
                  {[
                    "Ex-Partner gibt zu geringes Einkommen an, lebt aber offensichtlich gut",
                    "Verdacht auf nicht deklarierte Nebeneinkünfte oder Schwarzarbeit",
                    "Kind wird nicht wie vereinbart zum Umgang gebracht",
                    "Sorge um das Wohl des Kindes beim anderen Elternteil",
                    "Neuer Lebenspartner könnte Einfluss auf Unterhaltsansprüche haben",
                    "Verdacht auf Verschwendung von Kindesunterhalt",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-3 bg-primary-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Familienrechts-Ermittlungen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Die Kosten beginnen bei 800€ für
                  einfache Lebensstil-Checks. Umfassende Vermögensrecherchen
                  werden individuell kalkuliert.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Sorgerecht & Unterhalt
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <Scale className="h-8 w-8 text-primary-700 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Vor Gericht verwertbar
                  </h3>
                  <p className="text-sm text-primary-600">
                    Ermittlungsberichte professioneller Detekteien werden von 
                    Familiengerichten anerkannt und können als Beweismittel in 
                    Verfahren eingebracht werden.
                  </p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Im Interesse des Kindes
                  </h3>
                  <p className="text-sm text-primary-600">
                    Bei allen Ermittlungen steht das Kindeswohl im Mittelpunkt.
                    Wir handeln verantwortungsvoll und mit dem nötigen
                    Fingerspitzengefühl.
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
