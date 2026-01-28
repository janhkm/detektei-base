import type { Metadata } from "next";
import Link from "next/link";
import {
  Eye,
  CheckCircle,
  Camera,
  MapPin,
  Clock,
  Shield,
  FileText,
  Users,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";
import { ProcessTimeline } from "@/components/einsatzgebiete/ProcessTimeline";
import { generatePrivatdetekteiBreadcrumbSchema } from "@/lib/schemas/breadcrumbs";

export const metadata: Metadata = {
  title: "Observation | Detektei für Personenüberwachung finden",
  description:
    "Detektei Base – professionelle Observation. ✓ Diskrete Überwachung ✓ Gerichtsverwertbare Beweise ✓ Rund um die Uhr erreichbar.",
};

const einsatzgebiete = [
  "Untreue-Verdacht und Partnerüberwachung",
  "Krankfeierkontrolle bei Mitarbeitern",
  "Wettbewerbsverstöße aufdecken",
  "Unterhalts- und Vermögensermittlung",
  "Stalking-Dokumentation",
  "Versicherungsbetrug nachweisen",
  "Diebstahl und Unterschlagung",
  "Kontaktpersonen identifizieren",
];

const faqs = [
  {
    question: "Was ist eine Observation?",
    answer:
      "Eine Observation ist die systematische, verdeckte Beobachtung einer Person oder eines Ortes durch professionelle Detektive. Dabei werden Bewegungen, Kontakte und Aktivitäten dokumentiert – diskret und legal im öffentlichen Raum.",
  },
  {
    question: "Ist eine Observation legal?",
    answer:
      "Ja, Observationen im öffentlichen Raum sind legal und werden von Gerichten als Beweismittel anerkannt. Professionelle Detektive arbeiten im Rahmen der Jedermannsrechte und überschreiten keine rechtlichen Grenzen.",
  },
  {
    question: "Wie läuft eine Observation ab?",
    answer:
      "Nach einem Briefing über die Zielperson beginnt die Observation zu den vereinbarten Zeiten. Die Detektive folgen der Person unauffällig, dokumentieren alle relevanten Aktivitäten mit Fotos und Videos und erstellen einen detaillierten Bericht.",
  },
  {
    question: "Wie viele Detektive sind im Einsatz?",
    answer:
      "Je nach Auftrag setzen Detekteien mindestens zwei Ermittler ein. Bei mobilen Observationen oder in unübersichtlichen Situationen können auch drei oder mehr erforderlich sein, um die Zielperson nicht zu verlieren.",
  },
  {
    question: "Was kostet eine Observation?",
    answer:
      "Eine Observation kostet zwischen 60-150€ pro Stunde oder 800-1.500€ pro Tag (8-12 Stunden). Die genauen Kosten hängen von der Anzahl der Detektive und dem Umfang ab. Sie erhalten vorab einen transparenten Kostenvoranschlag.",
  },
  {
    question: "Wie lange dauert eine Observation?",
    answer:
      "Die Dauer richtet sich nach dem Auftragsziel. Manche Aufträge erfordern nur wenige Stunden, andere mehrere Tage. Wir beraten Sie, welcher Zeitraum für Ihr Anliegen sinnvoll ist.",
  },
  {
    question: "Werden die Ergebnisse vor Gericht anerkannt?",
    answer:
      "Ja, professionelle Observationsberichte sind gerichtsverwertbar. Die Detektive dokumentieren alle Beobachtungen so, dass sie als Beweismittel in zivil- und arbeitsrechtlichen Verfahren verwendet werden können.",
  },
  {
    question: "Bemerkt die Zielperson die Observation?",
    answer:
      "Nein, professionelle Detektive sind Experten im verdeckten Arbeiten. Mit unauffälligen Fahrzeugen, angepasster Kleidung und Erfahrung bleiben sie unentdeckt. Die Zielperson erfährt nichts von der Überwachung.",
  },
];

const prices = [
  { service: "Erstkontakt", priceRange: "Jetzt anrufen", duration: "-" },
  { service: "Observation (Stunde)", priceRange: "60-150€", duration: "pro Detektiv" },
  { service: "Observation (Halbtag)", priceRange: "400-800€", duration: "4-6h" },
  { service: "Observation (Tag)", priceRange: "800-1.500€", duration: "8-12h" },
  { service: "Wochenpaket", priceRange: "ab 3.500€", duration: "5 Tage" },
  { service: "Ermittlungsbericht", priceRange: "Inklusive", duration: "-" },
];

export default function ObservationPage() {
  const breadcrumbSchema = generatePrivatdetekteiBreadcrumbSchema("Observation", "observation");

  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Privatdetektei", href: "/privatdetektei" },
              { label: "Observation", href: "/privatdetektei/observation" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Eye className="h-4 w-4 text-accent-400" />
              <span>Professionelle Überwachung</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Observation – Professionelle Personenüberwachung
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Die <strong>Observation</strong> ist das Kerngeschäft jeder
              Detektei. <strong>Detektei Base</strong> überwacht Zielpersonen diskret 
              und dokumentiert alle relevanten Aktivitäten – für gerichtsverwertbare Beweise. 
              Zusätzlich arbeiten wir mit geprüften Partnern deutschlandweit.
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
                  "<strong>Methode:</strong> Verdeckte Überwachung mit Foto-/Videodokumentation",
                  "<strong>Einsatz:</strong> Mindestens 2 Detektive für lückenlose Observation",
                  "<strong>Kosten:</strong> 60-150€/Stunde, 800-1.500€/Tag",
                  "<strong>Ergebnis:</strong> Gerichtsverwertbarer Ermittlungsbericht",
                ]}
              />

              {/* Was ist Observation */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Was ist eine Observation?
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Eine Observation ist die systematische,
                  verdeckte Beobachtung einer Person durch professionelle
                  Detektive. Bewegungen, Kontakte und Aktivitäten werden
                  dokumentiert – diskret, legal und gerichtsverwertbar.
                </p>
                <p className="text-primary-600 mb-4">
                  Bei einer Observation verfolgen professionelle Detektive eine
                  Zielperson über einen definierten Zeitraum. Dabei werden alle
                  relevanten Aktivitäten beobachtet und dokumentiert: Wo hält
                  sich die Person auf? Mit wem trifft sie sich? Was tut sie?
                </p>
                <p className="text-primary-600">
                  Die Ergebnisse werden in einem detaillierten Ermittlungsbericht
                  zusammengefasst, der bei Bedarf als Beweis vor Gericht
                  verwendet werden kann.
                </p>
              </div>

              {/* Einsatzgebiete */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Einsatzgebiete für Observationen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Observationen kommen bei Untreue-Verdacht,
                  Krankfeierkontrolle, Unterhaltsermittlungen und vielen anderen
                  Anlässen zum Einsatz – immer wenn Beweise durch Beobachtung
                  gesichert werden sollen.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {einsatzgebiete.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg"
                    >
                      <CheckCircle className="h-4 w-4 text-accent-600 flex-shrink-0" />
                      <span className="text-sm text-primary-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Unsere Methoden */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Observationsmethoden professioneller Detekteien
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Professionelle Detekteien setzen auf mobile 
                  und stationäre Observation, moderne Technik und erfahrene Teams – 
                  für lückenlose Dokumentation ohne Entdeckungsrisiko.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Users,
                      title: "Team-Observation",
                      text: "Mindestens 2 Detektive für lückenlose Überwachung",
                    },
                    {
                      icon: Camera,
                      title: "Foto- & Videodokumentation",
                      text: "Hochwertige Aufnahmen als Beweismittel",
                    },
                    {
                      icon: MapPin,
                      title: "Mobile Observation",
                      text: "Verfolgung zu Fuß und mit unauffälligen Fahrzeugen",
                    },
                    {
                      icon: Clock,
                      title: "Stationäre Observation",
                      text: "Überwachung von Orten über längere Zeiträume",
                    },
                    {
                      icon: Shield,
                      title: "Verdecktes Arbeiten",
                      text: "Unauffällige Kleidung, neutrale Fahrzeuge",
                    },
                    {
                      icon: FileText,
                      title: "Gerichtsfeste Berichte",
                      text: "Detaillierte Dokumentation für rechtliche Verfahren",
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

              {/* Ablauf */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Ablauf einer Observation
                </h2>
                <ProcessTimeline />
              </div>

              {/* Rechtliche Grundlagen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Rechtliche Grundlagen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Observationen im öffentlichen Raum sind
                  legal und die gewonnenen Beweise gerichtsverwertbar. Unsere
                  Detektive arbeiten im Rahmen der Jedermannsrechte.
                </p>
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="font-semibold text-primary-900 mb-4">
                    Was ist bei Observationen erlaubt?
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-green-700 mb-2">
                        ✓ Erlaubt
                      </h4>
                      <ul className="space-y-2 text-sm text-primary-600">
                        <li>• Beobachtung im öffentlichen Raum</li>
                        <li>• Fotografieren in der Öffentlichkeit</li>
                        <li>• Verfolgung auf öffentlichen Wegen</li>
                        <li>• Dokumentation von Kontakten</li>
                        <li>• Notieren von Fahrzeugkennzeichen</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-red-700 mb-2">
                        ✗ Nicht erlaubt
                      </h4>
                      <ul className="space-y-2 text-sm text-primary-600">
                        <li>• Betreten von Privatgrundstücken</li>
                        <li>• Fotografieren in privaten Räumen</li>
                        <li>• Abhören von Gesprächen</li>
                        <li>• GPS-Tracker ohne Einwilligung</li>
                        <li>• Hacken von Geräten oder Konten</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Observationen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Eine Observation kostet zwischen 60-150€
                  pro Stunde oder 800-1.500€ pro Tag. Die Kosten hängen von der
                  Anzahl der Detektive und dem Umfang ab.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Observationen
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
                    Vorteile professioneller Observation
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Erfahrene, geschulte Detektive",
                      "Modernste Ausrüstung",
                      "Gerichtsverwertbare Beweise",
                      "Absolute Diskretion garantiert",
                      "Rechtssichere Methoden",
                      "Detaillierte Dokumentation",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-primary-700">
                        <CheckCircle className="h-4 w-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <h3 className="font-display font-bold text-primary-900 mb-2">
                    Schnelle Reaktionszeit
                  </h3>
                  <p className="text-sm text-primary-600">
                    In dringenden Fällen können wir innerhalb von 24 Stunden 
                    einsatzbereit sein. Kontaktieren Sie uns 
                    für eine schnelle Beratung.
                  </p>
                </div>

                {/* Verwandte Themen */}
                <div className="bg-white rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Verwandte Themen
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/privatdetektei/untreue" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Untreue aufdecken
                      </Link>
                    </li>
                    <li>
                      <Link href="/kosten" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Detektiv Kosten im Überblick
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/detektivrecht-deutschland" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Rechtliche Grundlagen
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/privatdetektiv-kosten" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Ratgeber: Kosten 2026
                      </Link>
                    </li>
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
