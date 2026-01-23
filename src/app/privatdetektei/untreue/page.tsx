import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  CheckCircle,
  AlertTriangle,
  Camera,
  FileText,
  Clock,
  Shield,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PriceTable } from "@/components/ui/PriceTable";
import { CTABox } from "@/components/ui/CTABox";
import { ProcessTimeline } from "@/components/einsatzgebiete/ProcessTimeline";
import { generatePrivatdetekteiBreadcrumbSchema } from "@/lib/schemas/breadcrumbs";

export const metadata: Metadata = {
  title: "Untreue aufdecken | Fremdgehen beweisen lassen",
  description:
    "Verdacht auf Untreue? Unsere Detektive decken Fremdgehen diskret auf. ✓ Gerichtsverwertbare Beweise ✓ 100% Diskretion ✓ Erfahrene Ermittler. Jetzt beraten lassen.",
};

const anzeichen = [
  "Häufige Überstunden oder Dienstreisen",
  "Verstecktes Telefonverhalten",
  "Plötzliche Veränderung des Aussehens",
  "Emotionale Distanz",
  "Unerklärliche Ausgaben",
  "Neue Passwörter auf Geräten",
  "Weniger gemeinsame Zeit",
  "Defensive Reaktionen bei Nachfragen",
];

const faqs = [
  {
    question: "Wie kann ein Detektiv Untreue aufdecken?",
    answer:
      "Unsere Detektive führen diskrete Observationen durch, dokumentieren Treffen und Aktivitäten mit Foto- und Videobeweisen und erstellen einen detaillierten Bericht. Alle Ermittlungen erfolgen legal im öffentlichen Raum.",
  },
  {
    question: "Sind die Beweise vor Gericht verwertbar?",
    answer:
      "Ja, alle von uns dokumentierten Beweise sind gerichtsverwertbar, sofern sie legal erhoben wurden. Unsere Berichte werden von Anwälten und Gerichten anerkannt und können in Scheidungsverfahren eingesetzt werden.",
  },
  {
    question: "Wie lange dauert eine Untreue-Ermittlung?",
    answer:
      "Die Dauer hängt vom Einzelfall ab. Oft reichen 2-5 Observationstage, um Gewissheit zu erlangen. In manchen Fällen sind längere Ermittlungen nötig. Wir beraten Sie individuell.",
  },
  {
    question: "Was kostet eine Untreue-Ermittlung?",
    answer:
      "Die Kosten liegen bei 60-150€ pro Stunde bzw. 800-1.500€ pro Observationstag. Sie erhalten vorab einen transparenten Kostenvoranschlag. Die Erstberatung ist kostenlos.",
  },
  {
    question: "Erfährt mein Partner von der Ermittlung?",
    answer:
      "Nein, absolute Diskretion ist garantiert. Unsere Detektive arbeiten verdeckt und unauffällig. Ihr Partner erfährt nichts von der Observation – weder während noch nach der Ermittlung.",
  },
  {
    question: "Was passiert nach der Ermittlung?",
    answer:
      "Sie erhalten einen ausführlichen Bericht mit allen Beweisen. Wir besprechen die Ergebnisse persönlich mit Ihnen und beraten Sie zu weiteren Schritten, falls gewünscht auch zur Zusammenarbeit mit einem Anwalt.",
  },
];

const prices = [
  { service: "Erstberatung", priceRange: "Kostenlos", duration: "30 min" },
  { service: "Observation (Stunde)", priceRange: "60-150€", duration: "-" },
  { service: "Observation (Tag)", priceRange: "800-1.500€", duration: "8-12h" },
  { service: "Ermittlungsbericht", priceRange: "Inklusive", duration: "-" },
  { service: "Gerichtsverwertbare Dokumentation", priceRange: "Inklusive", duration: "-" },
];

export default function UntreuePage() {
  const breadcrumbSchema = generatePrivatdetekteiBreadcrumbSchema("Untreue aufdecken", "untreue");

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
              { label: "Untreue aufdecken", href: "/privatdetektei/untreue" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Heart className="h-4 w-4 text-accent-400" />
              <span>Diskrete Ermittlungen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Untreue aufdecken – Gewissheit durch professionelle Ermittlung
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Der Verdacht auf <strong>Untreue</strong> belastet. Statt
              selbst zu ermitteln, überlassen Sie die Aufklärung unseren
              erfahrenen Detektiven. Wir liefern Ihnen diskret und legal
              gerichtsverwertbare Beweise.
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
                  "<strong>Dauer:</strong> Meist 2-5 Observationstage für Klarheit",
                  "<strong>Kosten:</strong> 800-1.500€/Tag, kostenlose Erstberatung",
                  "<strong>Ergebnis:</strong> Gerichtsverwertbarer Ermittlungsbericht",
                ]}
              />

              {/* Anzeichen */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Anzeichen für Untreue erkennen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Typische Warnsignale für Fremdgehen sind
                  verändertes Verhalten, Geheimniskrämerei und emotionale
                  Distanz. Beobachten Sie mehrere dieser Anzeichen, kann eine
                  professionelle Überprüfung Klarheit schaffen.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {anzeichen.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg"
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
                  So decken wir Untreue auf
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Unsere Detektive führen verdeckte
                  Observationen durch, dokumentieren alle relevanten Aktivitäten
                  und erstellen einen gerichtsverwertbaren Bericht.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Camera,
                      title: "Verdeckte Observation",
                      text: "Diskrete Überwachung ohne Verdacht zu erregen",
                    },
                    {
                      icon: FileText,
                      title: "Dokumentation",
                      text: "Lückenlose Foto- und Videobeweise",
                    },
                    {
                      icon: Clock,
                      title: "Flexible Einsätze",
                      text: "Observation zu allen Tages- und Nachtzeiten",
                    },
                    {
                      icon: Shield,
                      title: "Rechtssicherheit",
                      text: "Alle Ermittlungen im Rahmen der Gesetze",
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
                  Ablauf einer Untreue-Ermittlung
                </h2>
                <ProcessTimeline />
              </div>

              {/* Kosten */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Kosten für Untreue-Ermittlungen
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Eine Untreue-Ermittlung kostet zwischen
                  800-1.500€ pro Observationstag. Die genauen Kosten hängen vom
                  Umfang ab – Sie erhalten vorab einen transparenten
                  Kostenvoranschlag.
                </p>
                <PriceTable prices={prices} />
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zu Untreue-Ermittlungen
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
                    Warum professionelle Hilfe?
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Eigene Ermittlungen sind rechtlich riskant",
                      "Emotionale Distanz für objektive Ergebnisse",
                      "Professionelle Beweissicherung",
                      "Gerichtsverwertbare Dokumentation",
                      "Diskretion schützt alle Beteiligten",
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
                    Vertraulich & diskret
                  </h3>
                  <p className="text-sm text-primary-600">
                    Ihre Anfrage wird zu 100% vertraulich behandelt. Niemand
                    erfährt von der Ermittlung – weder Ihr Partner noch Dritte.
                  </p>
                </div>

                {/* Verwandte Themen */}
                <div className="bg-white rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Verwandte Themen
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/privatdetektei/observation" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Observation: Ablauf & Methoden
                      </Link>
                    </li>
                    <li>
                      <Link href="/kosten" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Detektiv Kosten im Überblick
                      </Link>
                    </li>
                    <li>
                      <Link href="/ablauf" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Ablauf einer Ermittlung
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/untreue-aufdecken" className="text-primary-600 hover:text-primary-900 transition-colors">
                        → Ratgeber: Untreue aufdecken
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
