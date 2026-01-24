import type { Metadata } from "next";
import { UserX, CheckCircle, AlertTriangle, Search, Shield, Heart } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Betrug & Scamming | Detektei für Betrugsermittlung finden",
  description:
    "Finden Sie eine Detektei bei Romance Scam & Heiratsschwindel. ✓ Geprüfte Partner ✓ Kostenlose Vermittlung ✓ Identitätsprüfung.",
};

const betrugsarten = [
  {
    title: "Romance Scam",
    description:
      "Betrüger bauen über Dating-Plattformen eine emotionale Bindung auf, um dann Geld zu erschwindeln",
  },
  {
    title: "Heiratsschwindel",
    description:
      "Personen gaukeln ernste Absichten vor, um finanzielle Vorteile zu erlangen",
  },
  {
    title: "Love Bombing & Manipulation",
    description:
      "Übertriebene Zuneigung am Anfang, um später Kontrolle und Ausbeutung zu ermöglichen",
  },
  {
    title: "Erbschleicherei",
    description:
      "Gezielte Annäherung an vermögende oder ältere Personen mit dem Ziel, ins Testament zu gelangen",
  },
];

const warnsignale = [
  "Person vermeidet Videocalls oder Treffen",
  "Schnelle Liebesbekundungen nach kurzem Kontakt",
  "Widersprüche in der Lebensgeschichte",
  "Bitte um Geld (Notfall, Geschäft, Reise)",
  "Profilbilder wirken zu perfekt (Stockfotos)",
  "Angeblich im Ausland/Militär/auf Bohrinsel",
  "Ausweichen bei konkreten Fragen",
  "Isolation von Familie und Freunden",
];

const faqs = [
  {
    question: "Was ist Romance Scam?",
    answer:
      "Romance Scam (auch Love Scam) ist eine Betrugsmasche, bei der Täter über Dating-Plattformen oder soziale Medien eine vorgetäuschte Liebesbeziehung aufbauen. Ziel ist es, das Opfer emotional zu binden und dann unter verschiedenen Vorwänden Geld zu erbitten.",
  },
  {
    question: "Wie kann ein Detektiv bei Betrugsverdacht helfen?",
    answer:
      "Detekteien können: die Identität der Person überprüfen, Angaben verifizieren (Beruf, Wohnort, Familienstand), nach früheren Betrugsdelikten recherchieren und Beweise für eine mögliche Strafanzeige sichern.",
  },
  {
    question: "Was kostet eine Überprüfung einer Person?",
    answer:
      "Ein Identitäts- und Hintergrundcheck beginnt ab 500€. Der Preis hängt vom Umfang ab – ob nur Identität oder auch Lebensstil, Finanzen und Geschichte geprüft werden sollen.",
  },
  {
    question: "Kann ich mein Geld zurückbekommen?",
    answer:
      "Das ist leider schwierig. Viele Romance Scammer agieren aus dem Ausland. Unsere Ermittlungen können aber bei einer Strafanzeige helfen und weitere Zahlungen verhindern.",
  },
  {
    question: "Ist es peinlich, auf einen Betrüger hereingefallen zu sein?",
    answer:
      "Nein! Romance Scammer sind Profis, die psychologisch manipulieren. Opfer sind keine dummen Menschen, sondern Menschen mit echten Gefühlen. Wir behandeln jeden Fall absolut vertraulich und ohne Wertung.",
  },
  {
    question: "Wann sollte ich einen Detektiv einschalten?",
    answer:
      "Sobald Sie Zweifel haben! Lieber einmal zu früh prüfen als zu spät. Bevor Sie Geld überweisen oder wichtige Entscheidungen treffen, kann eine Überprüfung Klarheit schaffen.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Identitätsprüfung (Basis)", priceRange: "ab 500€", duration: "3-5 Tage" },
  { service: "Hintergrund-Check (umfassend)", priceRange: "ab 1.000€", duration: "1-2 Wochen" },
  { service: "Internationale Recherche", priceRange: "ab 1.500€", duration: "individuell" },
  { service: "Ermittlungsbericht", priceRange: "Inklusive", duration: "-" },
];

export default function BetrugsermittlungPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Privatdetektei", href: "/privatdetektei" },
              { label: "Betrug & Scamming", href: "/privatdetektei/betrug" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <UserX className="h-4 w-4 text-accent-400" />
              <span>Schutz vor Betrug</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Betrug & Scamming – Identität prüfen, Schaden vermeiden
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              <strong>Romance Scam, Heiratsschwindel, Erbschleicherei</strong> –
              Betrüger nutzen Gefühle aus. Wir vermitteln Sie an <strong>spezialisierte 
              Partner-Detekteien</strong>, die Personen diskret prüfen.
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
                  "<strong>Themen:</strong> Romance Scam, Heiratsschwindel, Erbschleicherei",
                  "<strong>Leistung:</strong> Identitätsprüfung, Hintergrund-Check, Verifizierung",
                  "<strong>Kosten:</strong> Ab 500€ für Identitätsprüfung",
                  "<strong>Ziel:</strong> Klarheit vor wichtigen Entscheidungen",
                ]}
              />

              {/* Betrugsarten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Typische Betrugsmaschen im privaten Umfeld
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Betrüger nutzen emotionale Bindungen
                  aus, um finanzielle oder andere Vorteile zu erlangen. Die
                  Methoden sind oft raffiniert und schwer zu durchschauen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {betrugsarten.map((item, i) => (
                    <div key={i} className="p-5 bg-primary-50 rounded-xl">
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
                  Warnsignale erkennen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Diese Red Flags können auf Betrug
                  hindeuten – einzeln nicht zwingend, aber in Kombination ein
                  Grund zur Vorsicht:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {warnsignale.map((item, i) => (
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

              {/* Unsere Leistungen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  So helfen wir Ihnen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Wir überprüfen diskret die Identität
                  und Hintergründe von Personen, bevor Sie wichtige
                  Entscheidungen treffen.
                </p>
                <ul className="space-y-3">
                  {[
                    "Verifizierung der Identität (Name, Alter, Wohnort)",
                    "Prüfung von Angaben zu Beruf und Arbeitgeber",
                    "Recherche zu Familienstand und Beziehungshistorie",
                    "Überprüfung auf frühere Betrugsdelikte",
                    "Analyse von Social-Media-Profilen",
                    "Bei Bedarf: Observation und persönliche Ermittlung",
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
                  <strong>Kurz:</strong> Eine Identitätsprüfung beginnt ab 500€.
                  Umfassende Hintergrund-Checks kosten ab 1.000€, internationale
                  Recherchen entsprechend mehr.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Betrug & Scamming
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <Heart className="h-8 w-8 text-accent-600 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Keine Scham
                  </h3>
                  <p className="text-sm text-primary-600">
                    Auf Betrüger hereinzufallen ist keine Dummheit – es zeigt,
                    dass Sie echte Gefühle haben. Wir behandeln jeden Fall
                    absolut vertraulich und wertfrei.
                  </p>
                </div>

                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <Shield className="h-8 w-8 text-primary-700 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Prävention ist möglich
                  </h3>
                  <p className="text-sm text-primary-600">
                    Bevor Sie Geld überweisen oder gemeinsame Pläne machen:
                    Lassen Sie die Person prüfen. Ein Check kostet weniger als
                    der potenzielle Schaden.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-primary-100">
                  <Search className="h-8 w-8 text-primary-700 mb-3" />
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Was wir brauchen
                  </h3>
                  <ul className="text-sm text-primary-600 space-y-1">
                    <li>• Name der Person</li>
                    <li>• Fotos (wenn vorhanden)</li>
                    <li>• Kommunikationsverlauf</li>
                    <li>• Angegebene Daten (Beruf, Ort etc.)</li>
                    <li>• Social-Media-Profile</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
