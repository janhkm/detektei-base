import type { Metadata } from "next";
import { Thermometer, CheckCircle, Camera, FileText, AlertTriangle } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Krankfeierkontrolle | Lohnfortzahlungsbetrug aufdecken",
  description:
    "Verdacht auf vorgetäuschte Krankheit? Diskrete Observation bei Krankfeiermissbrauch. ✓ Gerichtsverwertbare Beweise ✓ Arbeitsrechtlich belastbar. Jetzt beraten lassen.",
};

const anzeichen = [
  "Häufige Kurzerkrankungen (1-3 Tage)",
  "Krankmeldungen vor/nach Urlauben oder Feiertagen",
  "Krankmeldungen bei abgelehntem Urlaub",
  "Kollegen berichten von Aktivitäten",
  "Social-Media-Posts trotz Krankschreibung",
  "Muster bei bestimmten Wochentagen",
  "Bekannte Nebentätigkeiten",
  "Zeitgleiche Erkrankung mit Kollegen",
];

const faqs = [
  {
    question: "Wann ist eine Krankfeierkontrolle erlaubt?",
    answer:
      "Eine Kontrolle ist erlaubt, wenn ein begründeter Verdacht auf Lohnfortzahlungsbetrug besteht. Typische Anzeichen sind häufige Kurzerkrankungen, Krankmeldungen an bestimmten Tagen oder Hinweise auf Aktivitäten während der Krankheit.",
  },
  {
    question: "Wie läuft eine Krankfeierkontrolle ab?",
    answer:
      "Wir observieren den kranken Mitarbeiter diskret zu verschiedenen Tageszeiten. Dabei dokumentieren wir alle Aktivitäten mit Fotos und erstellen einen detaillierten Bericht. Die Observation erfolgt nur im öffentlichen Raum.",
  },
  {
    question: "Sind die Beweise vor dem Arbeitsgericht verwertbar?",
    answer:
      "Ja, professionell erhobene Beweise sind vor Arbeitsgerichten verwertbar. Sie können als Grundlage für Abmahnungen, Kündigungen oder Schadensersatzforderungen dienen.",
  },
  {
    question: "Was darf der Detektiv beobachten?",
    answer:
      "Der Detektiv darf alles beobachten und dokumentieren, was im öffentlichen Raum sichtbar ist: Einkäufe, Sport, Ausflüge, Arbeiten am Haus, Treffen mit anderen Personen etc.",
  },
  {
    question: "Kann der Mitarbeiter die Observation bemerken?",
    answer:
      "Unsere Detektive sind auf verdeckte Observationen spezialisiert und arbeiten unauffällig. In den allermeisten Fällen bemerkt der Beobachtete nichts von der Überwachung.",
  },
  {
    question: "Was kostet eine Krankfeierkontrolle?",
    answer:
      "Eine Observation kostet 800-1.500€ pro Tag. Die genauen Kosten hängen von Dauer und Umfang ab. Wir empfehlen meist 2-3 Observationstage für aussagekräftige Ergebnisse.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Observation (Tag)", priceRange: "800-1.500€", duration: "8-12h" },
  { service: "Observation (Halbtag)", priceRange: "500-800€", duration: "4-6h" },
  { service: "Ermittlungsbericht", priceRange: "Inklusive", duration: "-" },
  { service: "Gerichtsverwertbare Dokumentation", priceRange: "Inklusive", duration: "-" },
];

export default function KrankfeierPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
              { label: "Krankfeierkontrolle", href: "/wirtschaftsdetektei/krankfeier" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Thermometer className="h-4 w-4 text-accent-400" />
              <span>Lohnfortzahlungsbetrug</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Krankfeierkontrolle – Missbrauch aufdecken
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Verdacht auf <strong>vorgetäuschte Arbeitsunfähigkeit</strong>?
              Unsere Detektive überprüfen diskret, ob der kranke Mitarbeiter
              wirklich krank ist – und liefern gerichtsverwertbare Beweise.
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
                  "<strong>Methode:</strong> Diskrete Observation mit Foto-/Videodokumentation",
                  "<strong>Dauer:</strong> Empfohlen 2-3 Observationstage",
                  "<strong>Kosten:</strong> 800-1.500€ pro Observationstag",
                  "<strong>Ergebnis:</strong> Arbeitsrechtlich verwertbare Beweise",
                ]}
              />

              {/* Anzeichen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Warnsignale für Krankfeiermissbrauch
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Häufige Kurzerkrankungen, Muster bei
                  Krankmeldungen und Hinweise auf Aktivitäten während der
                  Krankheit können auf Missbrauch hindeuten.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {anzeichen.map((item, i) => (
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

              {/* Unsere Leistung */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  So decken wir Krankfeiermissbrauch auf
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Unsere Detektive observieren den
                  kranken Mitarbeiter diskret und dokumentieren alle
                  Aktivitäten, die einer Genesung widersprechen.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Camera,
                      title: "Verdeckte Observation",
                      text: "Diskrete Überwachung zu verschiedenen Tageszeiten",
                    },
                    {
                      icon: FileText,
                      title: "Fotodokumentation",
                      text: "Beweissichere Fotos aller relevanten Aktivitäten",
                    },
                    {
                      icon: CheckCircle,
                      title: "Detaillierter Bericht",
                      text: "Chronologische Dokumentation für Arbeitsgerichte",
                    },
                    {
                      icon: Thermometer,
                      title: "Aktivitätsnachweis",
                      text: "Sport, Einkäufe, Arbeiten, Ausflüge etc.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-primary-50 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary-700 mb-2" />
                      <h3 className="font-semibold text-primary-900">{item.title}</h3>
                      <p className="text-sm text-primary-600 mt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rechtliche Konsequenzen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Mögliche Konsequenzen für den Mitarbeiter
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Bei nachgewiesenem Krankfeiermissbrauch
                  drohen dem Mitarbeiter arbeitsrechtliche und
                  zivilrechtliche Konsequenzen.
                </p>
                <ul className="space-y-3">
                  {[
                    "Abmahnung wegen Vertragsverletzung",
                    "Außerordentliche (fristlose) Kündigung",
                    "Rückforderung der Lohnfortzahlung",
                    "Schadensersatzansprüche des Arbeitgebers",
                    "Strafanzeige wegen Betrugs (in schweren Fällen)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-primary-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Krankfeierkontrolle
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Eine Observation kostet 800-1.500€ pro
                  Tag. Für aussagekräftige Ergebnisse empfehlen wir 2-3
                  Observationstage.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zur Krankfeierkontrolle
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
                    Wann handeln?
                  </h3>
                  <p className="text-sm text-primary-600 mb-4">
                    Je früher Sie handeln, desto besser. Bei begründetem Verdacht
                    sollten Sie nicht warten, bis der Schaden noch größer wird.
                  </p>
                  <p className="text-sm text-primary-600">
                    <strong>Tipp:</strong> Dokumentieren Sie zunächst intern alle
                    Auffälligkeiten (Krankmeldungen, Muster, Hinweise), bevor Sie
                    uns kontaktieren.
                  </p>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Kosten vs. Nutzen
                  </h3>
                  <p className="text-sm text-primary-600">
                    Ein Krankfeierer kostet ein Unternehmen durchschnittlich
                    250-400€ pro Tag. Die Investition in eine Kontrolle
                    amortisiert sich oft schnell.
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
