import type { Metadata } from "next";
import { ShieldAlert, CheckCircle, AlertTriangle, Camera, FileText, Car } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Versicherungsbetrug | Detektei für Versicherungen finden",
  description:
    "Finden Sie eine Detektei für Versicherungsbetrug. ✓ Geprüfte Partner ✓ Kostenlose Vermittlung ✓ Fingierte Unfälle ✓ Gerichtsverwertbare Beweise.",
};

const betrugsarten = [
  {
    icon: Car,
    title: "Fingierte Unfälle",
    description: "Inszenierte Verkehrsunfälle zur Erschleichung von Versicherungsleistungen",
  },
  {
    icon: AlertTriangle,
    title: "Überhöhte Schadensmeldungen",
    description: "Aufbauschen von Schäden oder Hinzufügen nicht existenter Schäden",
  },
  {
    icon: FileText,
    title: "Gefälschte Belege",
    description: "Manipulation von Rechnungen, Quittungen oder Gutachten",
  },
  {
    icon: ShieldAlert,
    title: "Vorgetäuschte Diebstähle",
    description: "Fingierte Einbrüche oder Diebstähle zur Leistungserschleichung",
  },
];

const faqs = [
  {
    question: "Welche Arten von Versicherungsbetrug gibt es?",
    answer:
      "Die häufigsten Formen sind: fingierte Unfälle, übertriebene Schadensmeldungen, vorgetäuschte Diebstähle, gefälschte Belege, simulierte Arbeitsunfähigkeit und Brandstiftung. Detekteien ermitteln in allen Bereichen.",
  },
  {
    question: "Wie decken Detektive Versicherungsbetrug auf?",
    answer:
      "Durch Observation der Versicherungsnehmer, Überprüfung von Angaben, Befragungen im Umfeld, Analyse von Dokumenten und Social Media. Bei Verdacht auf vorgetäuschte Arbeitsunfähigkeit dokumentieren wir Aktivitäten, die der angegebenen Einschränkung widersprechen.",
  },
  {
    question: "Für wen arbeiten Sie bei Versicherungsbetrug?",
    answer:
      "Detekteien arbeiten primär für Versicherungsunternehmen, die Betrugsverdacht haben. Aber auch Unternehmen, die von Mitarbeitern durch fingierte Arbeitsunfälle geschädigt werden, beauftragen Detekteien.",
  },
  {
    question: "Sind die Ermittlungen legal?",
    answer:
      "Ja, alle Ermittlungen professioneller Detekteien erfolgen im Rahmen der Jedermannsrechte. Es wird nur im öffentlichen Raum observiert und mit legalen Recherchemethoden gearbeitet. Die Beweise sind gerichtsverwertbar.",
  },
  {
    question: "Was kostet eine Betrugsermittlung für Versicherungen?",
    answer:
      "Die Kosten hängen vom Umfang ab. Einfache Überprüfungen beginnen ab 1.500€, komplexe Fälle mit längerer Observation entsprechend mehr. Für Versicherungen bieten wir auch Rahmenverträge an.",
  },
  {
    question: "Wie hoch ist die Erfolgsquote?",
    answer:
      "Bei begründetem Anfangsverdacht können wir in etwa 60-70% der Fälle relevante Erkenntnisse liefern – entweder Beweise für Betrug oder Entlastung des Verdächtigen.",
  },
];

const prices = [
  { service: "Erstkontakt", priceRange: "Jetzt anrufen", duration: "-" },
  { service: "Verdachtsprüfung", priceRange: "ab 1.500€", duration: "3-5 Tage" },
  { service: "Observation (Tag)", priceRange: "800-1.500€", duration: "8-12h" },
  { service: "Umfassende Ermittlung", priceRange: "ab 3.000€", duration: "individuell" },
  { service: "Gerichtsverwertbarer Bericht", priceRange: "Inklusive", duration: "-" },
];

export default function VersicherungsbetrugsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
              { label: "Versicherungsbetrug", href: "/wirtschaftsdetektei/versicherungsbetrug" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <ShieldAlert className="h-4 w-4 text-accent-400" />
              <span>Betrugsermittlung</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Versicherungsbetrug aufdecken
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Fingierte Unfälle, überhöhte Schäden, vorgetäuschte Arbeitsunfähigkeit</strong> –
              Versicherungsbetrug kostet Milliarden. Wir vermitteln Sie an <strong>spezialisierte 
              Partner-Detekteien</strong> für gerichtsverwertbare Beweise.
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
                  "<strong>Betrugsarten:</strong> Fingierte Unfälle, überhöhte Schäden, Diebstahl-Simulation",
                  "<strong>Methoden:</strong> Observation, Dokumentenprüfung, Befragungen",
                  "<strong>Kosten:</strong> Ab 1.500€, Rahmenverträge für Versicherer",
                  "<strong>Ergebnis:</strong> Gerichtsverwertbare Dokumentation",
                ]}
              />

              {/* Betrugsarten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Typische Formen von Versicherungsbetrug
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Versicherungsbetrug reicht von
                  fingierten Unfällen über überhöhte Schadensmeldungen bis zu
                  vorgetäuschten Diebstählen und Arbeitsunfällen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {betrugsarten.map((item, i) => (
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

              {/* Unsere Methoden */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Unsere Ermittlungsmethoden
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Wir kombinieren Observation,
                  Dokumentenanalyse und Befragungen für umfassende
                  Beweissicherung.
                </p>
                <ul className="space-y-3">
                  {[
                    "Observation des Versicherungsnehmers bei Verdacht auf Simulation",
                    "Überprüfung der angegebenen Schadenshöhe und -umstände",
                    "Analyse von Dokumenten, Belegen und Gutachten",
                    "Recherche in sozialen Medien (Aktivitäten trotz angeblicher Einschränkung)",
                    "Befragungen im Umfeld (Nachbarn, Kollegen)",
                    "Dokumentation von Aktivitäten, die dem Schadensbild widersprechen",
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
                  Kosten für Betrugsermittlungen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Eine Verdachtsprüfung beginnt ab 1.500€.
                  Für Versicherungsunternehmen mit regelmäßigem Bedarf bieten wir
                  Rahmenverträge.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Versicherungsbetrug
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
                    Schaden durch Versicherungsbetrug
                  </h3>
                  <div className="space-y-3">
                    <div className="text-3xl font-bold text-accent-400">4-5 Mrd. €</div>
                    <p className="text-sm text-primary-300">
                      jährlicher Schaden durch Versicherungsbetrug in Deutschland
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-2xl font-bold text-accent-400">~10%</div>
                    <p className="text-sm text-primary-300">
                      aller Schadensmeldungen enthalten betrügerische Elemente
                    </p>
                  </div>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Rahmenverträge
                  </h3>
                  <p className="text-sm text-primary-600">
                    Für Versicherungsunternehmen mit regelmäßigem Prüfbedarf
                    bieten wir attraktive Rahmenverträge mit vergünstigten
                    Konditionen und priorisierten Einsätzen.
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
