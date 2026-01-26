import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Shield,
  CheckCircle,
  XCircle,
  FileText,
  AlertTriangle,
  Gavel,
  Eye,
} from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";

export const metadata: Metadata = {
  title: "Rechtliches | Detektivrecht & Jedermannsrechte",
  description:
    "Rechtliche Grundlagen für Detektei-Ermittlungen: ✓ Jedermannsrechte ✓ Beweisrecht ✓ DSGVO ✓ Was ist erlaubt? Was ist verboten? Rechtssichere Ermittlungen.",
};

const erlaubt = [
  {
    title: "Observation im öffentlichen Raum",
    description:
      "Beobachtung von Personen auf Straßen, Plätzen, in Geschäften und anderen öffentlich zugänglichen Bereichen.",
  },
  {
    title: "Fotografie im öffentlichen Raum",
    description:
      "Anfertigung von Fotos und Videos zur Beweissicherung, wenn die Person im öffentlichen Raum agiert.",
  },
  {
    title: "Recherchen in öffentlichen Quellen",
    description:
      "Nutzung von Handelsregistern, Grundbüchern, sozialen Medien und anderen öffentlich zugänglichen Informationen.",
  },
  {
    title: "Befragungen im Umfeld",
    description:
      "Gespräche mit Nachbarn, Kollegen oder Bekannten – ohne Täuschung über die eigene Identität.",
  },
  {
    title: "GPS-Ortung eigener Fahrzeuge",
    description:
      "Ortung von Fahrzeugen, die dem Auftraggeber gehören (z.B. Firmenwagen bei Verdacht auf Missbrauch).",
  },
  {
    title: "Ermittlung der Adresse",
    description:
      "Auffinden des aktuellen Wohnorts einer Person durch legale Recherchemethoden.",
  },
];

const verboten = [
  {
    title: "Betreten privater Räume",
    description: "Heimliches Eindringen in Wohnungen, Häuser oder umzäunte Grundstücke.",
  },
  {
    title: "Abhören von Gesprächen",
    description:
      "Aufzeichnung von Telefongesprächen oder nicht-öffentlichen Unterhaltungen ohne Einwilligung.",
  },
  {
    title: "Hacking & Ausspähen von Daten",
    description: "Zugriff auf E-Mails, Computer, Smartphones oder Cloud-Dienste ohne Berechtigung.",
  },
  {
    title: "GPS-Tracker an fremden Fahrzeugen",
    description: "Anbringen von Ortungsgeräten an Fahrzeugen, die nicht dem Auftraggeber gehören.",
  },
  {
    title: "Identitätstäuschung gegenüber Behörden",
    description: "Sich als Polizist, Beamter oder andere Amtsperson ausgeben.",
  },
  {
    title: "Nötigung oder Drohung",
    description: "Erzwingen von Aussagen oder Handlungen durch Druck oder Einschüchterung.",
  },
];

const gesetze = [
  {
    gesetz: "Gewerberecht",
    titel: "Gewerbeanmeldung",
    beschreibung:
      "Regelt die Zulassung von Detekteien. Detektive müssen ihre Zuverlässigkeit nachweisen und eine Gewerbeanmeldung haben.",
  },
  {
    gesetz: "§ 32 BDSG / Art. 6 DSGVO",
    titel: "Datenschutz",
    beschreibung:
      "Verarbeitung personenbezogener Daten ist nur bei berechtigtem Interesse erlaubt. Ermittlungen müssen verhältnismäßig sein.",
  },
  {
    gesetz: "§ 127 StPO",
    titel: "Jedermann-Festnahme",
    beschreibung:
      "Erlaubt die vorläufige Festnahme bei Ertappen auf frischer Tat, bis die Polizei eintrifft.",
  },
  {
    gesetz: "§ 229 BGB",
    titel: "Selbsthilfe",
    beschreibung:
      "Erlaubt in engen Grenzen Selbsthilfe zur Sicherung von Ansprüchen, wenn obrigkeitliche Hilfe nicht rechtzeitig erreichbar ist.",
  },
  {
    gesetz: "§ 201 StGB",
    titel: "Verletzung der Vertraulichkeit",
    beschreibung:
      "Verbietet das unbefugte Aufnehmen nicht-öffentlicher Gespräche. Verstöße können strafrechtlich verfolgt werden.",
  },
  {
    gesetz: "§ 823 BGB",
    titel: "Schadensersatz",
    beschreibung:
      "Grundlage für Schadensersatzansprüche, wenn durch Ermittlungen rechtswidrig Rechte verletzt werden.",
  },
];

const faqs = [
  {
    question: "Welche rechtlichen Befugnisse hat ein Detektiv?",
    answer:
      "Ein Detektiv hat keine hoheitlichen Befugnisse wie die Polizei. Er arbeitet auf Basis der Jedermannsrechte – also den Rechten, die jedem Bürger zustehen. Das umfasst Observation im öffentlichen Raum, Recherchen in öffentlichen Quellen und Befragungen.",
  },
  {
    question: "Sind Detektiv-Beweise vor Gericht verwertbar?",
    answer:
      "Ja, sofern sie legal erhoben wurden. Gerichte akzeptieren Observationsberichte, Fotos und Zeugenaussagen von Detektiven als Beweismittel. Illegal beschaffte Beweise (z.B. durch Abhören) sind hingegen nicht verwertbar.",
  },
  {
    question: "Darf ein Detektiv Personen verfolgen?",
    answer:
      "Ja, das diskrete Verfolgen einer Person im öffentlichen Raum (Observation) ist erlaubt. Dabei darf der Detektiv aber keine Grenzen überschreiten, die in eine Belästigung oder Nötigung münden.",
  },
  {
    question: "Darf der Auftraggeber alles beauftragen?",
    answer:
      "Nein. Auch der Auftraggeber macht sich strafbar, wenn er illegale Ermittlungen in Auftrag gibt. Seriöse Detekteien lehnen rechtswidrige Aufträge ab und beraten zu den legalen Möglichkeiten.",
  },
  {
    question: "Was ist bei Untreue-Ermittlungen erlaubt?",
    answer:
      "Erlaubt ist: Observation des Partners im öffentlichen Raum, Fotodokumentation von Treffen, Recherche in sozialen Medien. Verboten: Abhören von Telefonaten, Lesen von E-Mails, Eindringen in die Wohnung des Partners oder Dritten.",
  },
  {
    question: "Wie schütze ich mich vor unseriösen Detekteien?",
    answer:
      "Achten Sie auf: Mitgliedschaft in Berufsverbänden (BDD, BVPD), schriftliche Auftragserteilung mit klarer Kostenaufstellung, transparente Kommunikation über die Grenzen des Erlaubten, langjährige Erfahrung.",
  },
];

export default function RechtlichesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Rechtliches", href: "/rechtliches" }]} />
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Scale className="h-4 w-4 text-accent-400" />
              <span>Rechtliche Grundlagen</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Rechtliches – Was darf ein Detektiv?
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Detektive arbeiten auf Basis der <strong>Jedermannsrechte</strong>.
              Erfahren Sie, was bei Ermittlungen erlaubt ist, wo die Grenzen
              liegen und wie Beweise rechtssicher erhoben werden.
            </p>
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              "<strong>Grundlage:</strong> Jedermannsrechte – keine hoheitlichen Befugnisse",
              "<strong>Erlaubt:</strong> Observation im öffentlichen Raum, Fotodokumentation, Recherchen",
              "<strong>Verboten:</strong> Abhören, Hacking, Betreten privater Räume",
              "<strong>Beweise:</strong> Legal erhobene Beweise sind gerichtsverwertbar",
            ]}
          />

          {/* Was ist erlaubt / verboten */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8">
            {/* Erlaubt */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary-900">
                  Was ist erlaubt?
                </h2>
              </div>
              <div className="space-y-4">
                {erlaubt.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-green-50 rounded-lg border border-green-100"
                  >
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verboten */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-display font-bold text-primary-900">
                  Was ist verboten?
                </h2>
              </div>
              <div className="space-y-4">
                {verboten.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-red-50 rounded-lg border border-red-100"
                  >
                    <h3 className="font-semibold text-primary-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-primary-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevante Gesetze */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
              Relevante Gesetze für Detektivarbeit
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Diese Gesetze bilden den rechtlichen Rahmen für Ermittlungen
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gesetze.map((g, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-primary-100">
                <div className="flex items-center gap-3 mb-3">
                  <Gavel className="h-5 w-5 text-primary-700" />
                  <span className="font-mono text-sm text-primary-500">{g.gesetz}</span>
                </div>
                <h3 className="font-semibold text-primary-900 mb-2">{g.titel}</h3>
                <p className="text-sm text-primary-600">{g.beschreibung}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beweisrecht */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-6">
                Beweisrecht – Was zählt vor Gericht?
              </h2>
              <p className="text-primary-600 mb-6">
                <strong>Kurz:</strong> Professionell und legal erhobene Beweise
                eines Detektivs sind vor Gericht verwertbar – sowohl im
                Zivilrecht (Scheidung, Unterhalt) als auch im Arbeitsrecht
                (Kündigung, Schadensersatz).
              </p>
              <ul className="space-y-3">
                {[
                  "Observationsberichte mit Zeit, Ort und Handlung",
                  "Fotos und Videos aus dem öffentlichen Raum",
                  "Zeugenaussagen des Detektivs",
                  "Dokumentation von Rechercheergebnissen",
                  "Chronologische Protokolle",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent-500 flex-shrink-0" />
                    <span className="text-primary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8">
              <AlertTriangle className="h-12 w-12 text-accent-400 mb-6" />
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Wichtig zu wissen
              </h3>
              <ul className="space-y-3 text-primary-200">
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold">→</span>
                  Illegal erhobene Beweise sind nicht verwertbar
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold">→</span>
                  Der Auftraggeber haftet mit, wenn er illegale Methoden beauftragt
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold">→</span>
                  Die Verhältnismäßigkeit muss gewahrt bleiben
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-400 font-bold">→</span>
                  Ein berechtigtes Interesse am Ergebnis muss vorliegen
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Unsere Standards */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
              Unsere rechtlichen Standards
            </h2>
            <p className="text-primary-600 max-w-2xl mx-auto">
              Wir garantieren rechtskonforme Ermittlungen
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Geprüfte Partner",
                description: "Erfahrene Ermittler",
              },
              {
                icon: FileText,
                title: "DSGVO-konform",
                description: "Datenschutz nach höchsten Standards",
              },
              {
                icon: Eye,
                title: "Transparenz",
                description: "Klare Kommunikation über Grenzen",
              },
              {
                icon: Scale,
                title: "Rechtssicherheit",
                description: "Gerichtsverwertbare Dokumentation",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 text-center border border-primary-100"
              >
                <item.icon className="h-10 w-10 text-primary-700 mx-auto mb-4" />
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
            Häufige Fragen zum Detektivrecht
          </h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* Links */}
      <section className="py-16 lg:py-24 bg-primary-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-display font-bold text-primary-900 mb-6">
            Weiterführende Informationen
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/impressum" className="p-4 bg-white rounded-lg border border-primary-100 hover:border-primary-200 transition-colors">
              <span className="text-primary-900 font-semibold">Impressum</span>
              <p className="text-sm text-primary-600">Rechtliche Angaben zur Detektei</p>
            </Link>
            <Link href="/datenschutz" className="p-4 bg-white rounded-lg border border-primary-100 hover:border-primary-200 transition-colors">
              <span className="text-primary-900 font-semibold">Datenschutz</span>
              <p className="text-sm text-primary-600">Informationen zur Datenverarbeitung</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CTABox
            title="Fragen zur Rechtslage?"
            description="Wir beraten Sie kostenlos zu den rechtlichen Möglichkeiten"
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
