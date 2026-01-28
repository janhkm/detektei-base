import type { Metadata } from "next";
import {
  Search,
  CheckCircle,
  Globe,
  Database,
  Users,
  FileSearch,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Personensuche | Detektei für Vermisstensuche finden",
  description:
    "Detektei Base – professionelle Personensuche. ✓ Vermisste finden ✓ Schuldner aufspüren ✓ Erbenermittlung ✓ Rund um die Uhr erreichbar.",
};

const anwendungsfaelle = [
  {
    icon: Users,
    title: "Vermisste Angehörige",
    description: "Suche nach Familienmitgliedern, mit denen der Kontakt abgebrochen ist",
  },
  {
    icon: FileSearch,
    title: "Schuldnerermittlung",
    description: "Aufspüren von Schuldnern zur Durchsetzung von Forderungen",
  },
  {
    icon: Database,
    title: "Erbensuche",
    description: "Ermittlung unbekannter Erben für Nachlassangelegenheiten",
  },
  {
    icon: Globe,
    title: "Internationale Suche",
    description: "Weltweite Recherche nach Personen im Ausland",
  },
];

const faqs = [
  {
    question: "Wie funktioniert eine professionelle Personensuche?",
    answer:
      "Professionelle Detekteien kombinieren Datenbankrecherchen, Befragungen im Umfeld, Observation und internationale Netzwerke. Je nach Fall werden verschiedene legale Methoden genutzt, um den aktuellen Aufenthaltsort zu ermitteln.",
  },
  {
    question: "Wie lange dauert eine Personensuche?",
    answer:
      "Die Dauer variiert stark: Einfache Adressermittlungen sind oft in 3-5 Tagen möglich. Komplexere Fälle (z.B. internationale Suche, Personen ohne digitale Spuren) können mehrere Wochen dauern.",
  },
  {
    question: "Was kostet eine Personensuche?",
    answer:
      "Einfache Adressermittlungen beginnen ab 500€. Komplexe Suchaufträge werden individuell kalkuliert. Sie erhalten vorab einen Kostenvoranschlag mit Erfolgsaussichten.",
  },
  {
    question: "Können Detekteien auch Personen im Ausland finden?",
    answer:
      "Ja, durch internationale Netzwerke können Detekteien auch Personen im Ausland aufspüren. Die Möglichkeiten variieren je nach Land und lokalen Gegebenheiten.",
  },
  {
    question: "Was benötigt die Detektei für die Suche?",
    answer:
      "Je mehr Informationen Sie haben, desto besser: Name, Geburtsdatum, letzte bekannte Adresse, Fotos, Arbeitgeber, Kontakte. Aber auch mit wenigen Daten können Detekteien oft erfolgreich ermitteln.",
  },
  {
    question: "Ist die Personensuche legal?",
    answer:
      "Ja, sofern ein berechtigtes Interesse vorliegt (z.B. Unterhalt, Erbschaft, familiäre Gründe). Professionelle Detekteien arbeiten ausschließlich mit legalen Methoden und halten alle Datenschutzbestimmungen ein.",
  },
];

const prices = [
  { service: "Erstkontakt", priceRange: "Jetzt anrufen", duration: "-" },
  { service: "Adressermittlung (einfach)", priceRange: "ab 500€", duration: "3-5 Tage" },
  { service: "Personensuche (komplex)", priceRange: "ab 1.500€", duration: "1-4 Wochen" },
  { service: "Internationale Suche", priceRange: "ab 2.500€", duration: "individuell" },
  { service: "Erbenermittlung", priceRange: "ab 1.000€", duration: "individuell" },
];

export default function PersonensuchePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Privatdetektei", href: "/privatdetektei" },
              { label: "Personensuche", href: "/privatdetektei/personensuche" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Search className="h-4 w-4 text-accent-400" />
              <span>Weltweite Recherche</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Personensuche – Vermisste Personen professionell finden
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Sie suchen einen vermissten Angehörigen, einen Schuldner oder
              unbekannte Erben? Wir arbeiten mit spezialisierten Detekteien zusammen, 
              die Personen finden – <strong>deutschlandweit und international</strong>.
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
                  "<strong>Methoden:</strong> Datenbankrecherche, Befragungen, internationale Netzwerke",
                  "<strong>Dauer:</strong> 3 Tage bis mehrere Wochen je nach Komplexität",
                  "<strong>Kosten:</strong> Ab 500€, individuelle Kalkulation",
                  "<strong>Reichweite:</strong> Deutschland und weltweit",
                ]}
              />

              {/* Anwendungsfälle */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Wann ist eine Personensuche sinnvoll?
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Eine professionelle Personensuche hilft
                  bei der Suche nach vermissten Angehörigen, Schuldnern, Erben
                  oder Personen, zu denen der Kontakt abgebrochen ist.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {anwendungsfaelle.map((item, i) => (
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

              {/* Methoden */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Methoden professioneller Personensuche
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Professionelle Detekteien nutzen eine 
                  Kombination aus Datenbankrecherchen, Befragungen, Observation 
                  und internationalen Partnernetzwerken.
                </p>
                <ul className="space-y-3">
                  {[
                    "Recherche in offiziellen und kommerziellen Datenbanken",
                    "Befragung im sozialen Umfeld der gesuchten Person",
                    "Analyse von Social Media und Online-Präsenzen",
                    "Observation letzter bekannter Aufenthaltsorte",
                    "Zusammenarbeit mit internationalen Partnerbüros",
                    "Ermittlung über Arbeitgeber und Geschäftsbeziehungen",
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
                  Kosten für Personensuche
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Die Kosten für eine Personensuche
                  beginnen bei 500€ für einfache Adressermittlungen. Komplexe
                  oder internationale Suchen werden individuell kalkuliert.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zur Personensuche
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Was wir benötigen
                  </h3>
                  <ul className="space-y-2 text-sm text-primary-600">
                    <li>• Vollständiger Name (falls bekannt)</li>
                    <li>• Geburtsdatum oder -jahr</li>
                    <li>• Letzte bekannte Adresse</li>
                    <li>• Fotos (wenn vorhanden)</li>
                    <li>• Bekannte Kontakte/Arbeitgeber</li>
                    <li>• Grund der Suche</li>
                  </ul>
                  <p className="mt-4 text-xs text-primary-500">
                    Auch mit wenigen Informationen können wir oft erfolgreich
                    ermitteln.
                  </p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <Globe className="h-8 w-8 text-accent-600 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Internationale Suche
                  </h3>
                  <p className="text-sm text-primary-600">
                    Durch unser globales Partnernetzwerk finden wir Personen auch
                    im Ausland – in Europa, Amerika, Asien und darüber hinaus.
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
