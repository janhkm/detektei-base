import type { Metadata } from "next";
import { UserCheck, CheckCircle, FileSearch, Shield, AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Mitarbeiterüberprüfung | Detektei für Background Check finden",
  description:
    "Finden Sie eine Detektei für Mitarbeiterüberprüfung. ✓ Geprüfte Partner ✓ Kostenlose Vermittlung ✓ Pre-Employment Screening ✓ Background Checks.",
};

const pruefungen = [
  {
    title: "Lebenslauf-Verifizierung",
    description: "Überprüfung von Ausbildung, Berufserfahrung und Qualifikationen",
  },
  {
    title: "Referenzprüfung",
    description: "Kontaktaufnahme mit früheren Arbeitgebern und Verifizierung der Angaben",
  },
  {
    title: "Qualifikationsnachweis",
    description: "Überprüfung von Zeugnissen, Zertifikaten und Abschlüssen",
  },
  {
    title: "Bonitätsprüfung",
    description: "Check der finanziellen Situation bei relevanten Positionen",
  },
  {
    title: "Social Media Screening",
    description: "Analyse öffentlicher Online-Profile und Aktivitäten",
  },
  {
    title: "Sanktionslistenprüfung",
    description: "Abgleich mit internationalen Sanktions- und Sperrlisten",
  },
];

const faqs = [
  {
    question: "Wann ist eine Mitarbeiterüberprüfung sinnvoll?",
    answer:
      "Besonders bei Schlüsselpositionen, Vertrauensstellungen (Finanzen, IT, Geschäftsführung), Zugang zu sensiblen Daten oder bei Bewerbern mit Lücken im Lebenslauf. Auch bei internen Beförderungen kann ein Check sinnvoll sein.",
  },
  {
    question: "Ist das rechtlich erlaubt?",
    answer:
      "Ja, im Rahmen des AGG und BDSG sind Überprüfungen erlaubt, wenn der Bewerber zustimmt und die Prüfungen für die Stelle relevant sind. Wir beraten Sie zu den rechtlichen Rahmenbedingungen.",
  },
  {
    question: "Was wird genau geprüft?",
    answer:
      "Je nach Vereinbarung: Identität, Ausbildung, Berufserfahrung, Referenzen, Qualifikationen, Bonität (bei relevanten Positionen), öffentliche Einträge und Social Media. Der Umfang wird individuell festgelegt.",
  },
  {
    question: "Wie lange dauert eine Überprüfung?",
    answer:
      "Ein Standard-Background-Check dauert 3-5 Werktage. Bei internationalen Prüfungen oder umfangreichen Recherchen kann es 1-2 Wochen dauern.",
  },
  {
    question: "Erfährt der Bewerber davon?",
    answer:
      "Der Bewerber muss der Überprüfung zustimmen (DSGVO). Die Ergebnisse erhalten nur Sie als Auftraggeber. Diskrepanzen können Sie im Gespräch mit dem Bewerber klären.",
  },
  {
    question: "Was kostet eine Mitarbeiterüberprüfung?",
    answer:
      "Ein Standard-Background-Check kostet ab 300€. Umfangreiche Checks mit internationaler Recherche ab 800€. Für regelmäßige Aufträge bieten wir Rahmenverträge an.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Basis-Check (Identität, Lebenslauf)", priceRange: "ab 300€", duration: "3-5 Tage" },
  { service: "Standard-Check (inkl. Referenzen)", priceRange: "ab 500€", duration: "5-7 Tage" },
  { service: "Premium-Check (umfassend)", priceRange: "ab 800€", duration: "1-2 Wochen" },
  { service: "Internationaler Check", priceRange: "ab 1.200€", duration: "2-3 Wochen" },
];

export default function MitarbeiterpruefungPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
              { label: "Mitarbeiterüberprüfung", href: "/wirtschaftsdetektei/mitarbeiterpruefung" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <UserCheck className="h-4 w-4 text-accent-400" />
              <span>Pre-Employment Screening</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Mitarbeiterüberprüfung – Sichere Personalentscheidungen
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Vertrauen ist gut, Überprüfung ist besser. Mit professionellen
              <strong> Background Checks</strong> stellen Sie sicher, dass neue
              Mitarbeiter wirklich die sind, die sie vorgeben zu sein.
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
                  "<strong>Umfang:</strong> Lebenslauf, Referenzen, Qualifikationen, Bonität",
                  "<strong>Dauer:</strong> 3 Tage bis 2 Wochen je nach Umfang",
                  "<strong>Kosten:</strong> Ab 300€ für Basis-Check",
                  "<strong>Rechtlich:</strong> DSGVO-konform mit Einwilligung des Bewerbers",
                ]}
              />

              {/* Prüfungen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Was Detekteien prüfen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Detekteien verifizieren Angaben im Lebenslauf,
                  prüfen Referenzen, Qualifikationen und – bei Bedarf – Bonität
                  und Online-Präsenz.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pruefungen.map((item, i) => (
                    <div key={i} className="p-4 bg-primary-50 rounded-lg">
                      <h3 className="font-semibold text-primary-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-primary-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warnsignale */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Warnsignale bei Bewerbungen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Diese Red Flags können auf
                  problematische Bewerber hinweisen:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Lücken im Lebenslauf ohne Erklärung",
                    "Vage Angaben zu früheren Arbeitgebern",
                    "Übertrieben positive Selbstdarstellung",
                    "Keine Referenzen verfügbar",
                    "Unstimmigkeiten bei Qualifikationen",
                    "Häufige Jobwechsel ohne Grund",
                    "Ausweichen bei konkreten Nachfragen",
                    "Diskrepanzen zu Online-Profilen",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-accent-50 rounded-lg"
                    >
                      <AlertTriangle className="h-4 w-4 text-accent-600 flex-shrink-0" />
                      <span className="text-sm text-primary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Mitarbeiterüberprüfung
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Ein Basis-Background-Check kostet ab
                  300€. Für umfangreiche oder internationale Prüfungen erstellen
                  wir individuelle Angebote.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zur Mitarbeiterüberprüfung
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-700 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    DSGVO-konform
                  </h3>
                  <p className="text-sm text-primary-600">
                    Alle Überprüfungen erfolgen DSGVO-konform. Der Bewerber muss
                    der Prüfung zustimmen. Wir beraten Sie zu den rechtlichen
                    Anforderungen.
                  </p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Rahmenverträge
                  </h3>
                  <p className="text-sm text-primary-600">
                    Für Unternehmen mit regelmäßigem Prüfbedarf bieten wir
                    attraktive Rahmenverträge mit vergünstigten Konditionen.
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
