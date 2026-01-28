import type { Metadata } from "next";
import { Euro, CheckCircle, Calculator, FileText, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Kosten | Individuelle Preisgestaltung",
  description:
    "Detektei-Kosten werden individuell nach Fall und Aufwand berechnet. ✓ Rund um die Uhr erreichbar ✓ Transparente Angebote von Detektei Base.",
};

const leistungsKategorien = [
  {
    title: "Observation",
    description: "Überwachung und Dokumentation von Personen",
    faktoren: [
      "Dauer der Observation (Stunden/Tage)",
      "Anzahl der eingesetzten Ermittler",
      "Komplexität der Überwachung",
      "Entfernung zum Einsatzort",
    ],
    includes: ["Fotodokumentation", "Ermittlungsbericht", "Gerichtsverwertbare Beweise"],
  },
  {
    title: "Personensuche",
    description: "Ermittlung von Aufenthaltsorten und Adressen",
    faktoren: [
      "Verfügbare Ausgangsinformationen",
      "Nationale oder internationale Suche",
      "Komplexität des Falls",
      "Benötigte Recherchetiefe",
    ],
    includes: ["Datenbankrecherche", "Abschlussbericht", "Verifizierte Ergebnisse"],
  },
  {
    title: "Wirtschaftsermittlungen",
    description: "Ermittlungen für Unternehmen",
    faktoren: [
      "Art der Ermittlung (Prüfung, Observation)",
      "Umfang der Untersuchung",
      "Anzahl betroffener Personen",
      "Erforderliche Spezialkenntnisse",
    ],
    includes: ["Dokumentation", "Gerichtsverwertbarer Bericht", "Beratung"],
  },
];

const faqs = [
  {
    question: "Wie setzen sich die Kosten zusammen?",
    answer:
      "Die Kosten setzen sich aus dem Stundenhonorar, eventuellen Tagespauschalen und Spesen (Fahrtkosten, Übernachtung bei weiten Entfernungen) zusammen. Sie erhalten vorab einen detaillierten Kostenvoranschlag.",
  },
  {
    question: "Gibt es versteckte Kosten?",
    answer:
      "Nein. Alle Kosten werden vorab transparent kommuniziert. Der Kostenvoranschlag enthält alle zu erwartenden Positionen. Zusätzliche Kosten entstehen nur nach vorheriger Absprache.",
  },
  {
    question: "Wann muss ich bezahlen?",
    answer:
      "In der Regel wird eine Anzahlung (ca. 50%) bei Auftragserteilung fällig. Die Restzahlung erfolgt nach Abschluss der Ermittlung. Bei längeren Aufträgen sind Zwischenabrechnungen möglich.",
  },
  {
    question: "Was ist, wenn das Budget überschritten wird?",
    answer:
      "Die Detektei informiert Sie rechtzeitig, wenn das vereinbarte Budget erschöpft ist. Ohne Ihre ausdrückliche Zustimmung werden keine weiteren Kosten verursacht.",
  },
  {
    question: "Kann ich die Kosten steuerlich absetzen?",
    answer:
      "In vielen Fällen ja: Unternehmen können die Kosten als Betriebsausgaben absetzen. Bei privaten Ermittlungen im Zusammenhang mit rechtlichen Verfahren können die Kosten als außergewöhnliche Belastung geltend gemacht werden. Fragen Sie Ihren Steuerberater.",
  },
  {
    question: "Gibt es Pauschalpreise?",
    answer:
      "Für bestimmte Standardleistungen wie Adressermittlung oder Mitarbeiterüberprüfung bieten Detekteien Pauschalpreise an. Bei komplexen Ermittlungen erfolgt die Abrechnung nach Aufwand. Die Erstberatung bei Detektei Base ist kostenlos.",
  },
];

export default function KostenPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Kosten", href: "/kosten" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Euro className="h-4 w-4 text-accent-400" />
              <span>Transparente Preise</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Detektei-Kosten – Fair, transparent, kalkulierbar
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Wir arbeiten mit <strong>transparenten Preisen</strong>. 
              Hier finden Sie eine Übersicht der üblichen Kosten für Detektiv-Dienstleistungen – 
              ohne versteckte Gebühren oder böse Überraschungen. Die Erstberatung bei 
              Detektei Base ist für Sie kostenfrei.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Erstkontakt:</strong> Jetzt anrufen – unverbindlich",
              "<strong>Preisgestaltung:</strong> Individuell nach Fall und Aufwand",
              "<strong>Angebot:</strong> Transparenter Kostenvoranschlag vor Auftragserteilung",
              "<strong>Erstberatung:</strong> Bei Detektei Base für Sie kostenlos",
            ]}
          />

          {/* Leistungskategorien */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 text-center mb-4">
              Wovon hängen die Kosten ab?
            </h2>
            <p className="text-primary-600 text-center max-w-2xl mx-auto mb-12">
              Jeder Fall ist einzigartig – daher werden die Kosten individuell kalkuliert. 
              Hier sehen Sie, welche Faktoren in die Preisgestaltung einfließen.
            </p>

            <div className="grid lg:grid-cols-3 gap-8">
              {leistungsKategorien.map((kategorie, i) => (
                <div
                  key={i}
                  className="bg-primary-50 rounded-2xl border border-primary-100 overflow-hidden"
                >
                  <div className="p-6 bg-primary-900 text-white">
                    <h3 className="text-xl font-display font-bold">{kategorie.title}</h3>
                    <p className="text-sm text-primary-300 mt-1">
                      {kategorie.description}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-primary-500 mb-2">Kostenfaktoren:</p>
                    <ul className="space-y-3 mb-6">
                      {kategorie.faktoren.map((faktor, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-primary-700">
                          <span className="text-accent-500 mt-0.5">•</span>
                          {faktor}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-primary-200">
                      <p className="text-xs text-primary-500 mb-2">Immer inklusive:</p>
                      <ul className="space-y-1">
                        {kategorie.includes.map((item, k) => (
                          <li
                            key={k}
                            className="flex items-center gap-2 text-sm text-primary-600"
                          >
                            <CheckCircle className="h-3.5 w-3.5 text-accent-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kostenrechner Info */}
          <div className="mt-16 bg-accent-50 rounded-2xl p-8 border border-accent-200">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                  Individuelles Angebot gewünscht?
                </h3>
                <p className="text-primary-600">
                  Jeder Fall ist anders. Wir erstellen Ihnen einen 
                  unverbindlichen Kostenvoranschlag – maßgeschneidert auf Ihre Situation.
                </p>
              </div>
              <a
                href="tel:+4917666918653"
                className="inline-flex items-center gap-2 bg-primary-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Was beeinflusst die Kosten */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 text-center mb-12">
            Was beeinflusst die Kosten?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Art der Ermittlung",
                description:
                  "Observationen sind aufwändiger als reine Recherchen",
              },
              {
                title: "Dauer & Umfang",
                description:
                  "Längere Ermittlungen kosten mehr, bieten aber Mengenrabatte",
              },
              {
                title: "Anzahl der Detektive",
                description:
                  "Manche Einsätze erfordern ein Team für bessere Ergebnisse",
              },
              {
                title: "Entfernung & Reisen",
                description: "Spesen für Anfahrt, Übernachtung bei weiten Wegen",
              },
              {
                title: "Komplexität",
                description:
                  "Schwierige Fälle erfordern mehr Erfahrung und Aufwand",
              },
              {
                title: "Zeitdruck",
                description:
                  "Eilaufträge können höhere Kosten verursachen",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-primary-100">
                <h3 className="font-semibold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-sm text-primary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-primary-900 text-center mb-8">
            Häufige Fragen zu den Kosten
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABox
            title="Jetzt anrufen"
            description="Erhalten Sie ein unverbindliches Angebot für Ihren Fall"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
