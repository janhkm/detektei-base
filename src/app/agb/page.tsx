import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "AGB | Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der Detektei Base Vermittlungsplattform. Transparente Bedingungen für die Vermittlung von Detektiv-Dienstleistungen.",
};

export default function AGBPage() {
  return (
    <>
      <section className="bg-primary-950 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "AGB", href: "/agb" }]} />
          <h1 className="mt-4 text-3xl font-display font-bold text-white">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="mt-2 text-primary-300">
            für die Vermittlung von Detektei-Dienstleistungen
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-primary max-w-none">
          <h2>§ 1 Geltungsbereich und Vertragsgegenstand</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
            Vermittlungsleistungen der Detektei Base (nachfolgend
            &quot;Vermittler&quot; oder &quot;wir&quot;) gegenüber Nutzern
            (nachfolgend &quot;Auftraggeber&quot; oder &quot;Sie&quot;).
          </p>
          <p>
            (2) <strong>Detektei Base ist ein Vermittlungsportal.</strong> Wir
            vermitteln Kontakte zwischen Auftraggebern und selbstständigen,
            geprüften Detekteien (nachfolgend &quot;Partner-Detekteien&quot;).
            Wir erbringen selbst keine Detektiv-Dienstleistungen.
          </p>
          <p>
            (3) Der Vertrag über die eigentliche Detektiv-Dienstleistung kommt
            ausschließlich zwischen Ihnen und der jeweiligen Partner-Detektei
            zustande. Für diesen Vertrag gelten die Geschäftsbedingungen der
            jeweiligen Partner-Detektei.
          </p>
          <p>
            (4) Abweichende Bedingungen des Auftraggebers werden nicht
            anerkannt, es sei denn, wir stimmen ihrer Geltung ausdrücklich
            schriftlich zu.
          </p>

          <h2>§ 2 Unsere Vermittlungsleistung</h2>
          <p>
            (1) Unsere Vermittlungsleistung umfasst:
          </p>
          <ul>
            <li>
              Entgegennahme und Analyse Ihrer Anfrage
            </li>
            <li>
              Auswahl einer geeigneten Partner-Detektei aus unserem Netzwerk
              basierend auf Ihrem Anliegen, Standort und Spezialisierung
            </li>
            <li>
              Weiterleitung Ihrer Kontaktdaten und Anfrageinformationen an die
              ausgewählte Partner-Detektei
            </li>
            <li>
              Herstellung des Erstkontakts zwischen Ihnen und der Partner-Detektei
            </li>
          </ul>
          <p>
            (2) Die Vermittlungsleistung ist für Auftraggeber kostenfrei. Wir
            finanzieren uns über Vermittlungsprovisionen, die von den
            Partner-Detekteien getragen werden.
          </p>
          <p>
            (3) Wir schulden keinen Erfolg der Ermittlung und übernehmen keine
            Garantie für das Zustandekommen eines Vertrages mit einer
            Partner-Detektei oder für die Qualität der von der Partner-Detektei
            erbrachten Leistungen.
          </p>

          <h2>§ 3 Anfrage und Vermittlungsprozess</h2>
          <p>
            (1) Sie können eine Anfrage über unser Kontaktformular, per E-Mail
            oder telefonisch stellen. Mit Absenden der Anfrage erklären Sie sich
            mit diesen AGB und unserer Datenschutzerklärung einverstanden.
          </p>
          <p>
            (2) Nach Eingang Ihrer Anfrage prüfen wir diese und wählen eine
            geeignete Partner-Detektei aus. Wir leiten Ihre Anfrage und
            Kontaktdaten an diese Partner-Detektei weiter.
          </p>
          <p>
            (3) Die Partner-Detektei wird sich in der Regel innerhalb von 24
            Stunden (an Werktagen) bei Ihnen melden, um das weitere Vorgehen zu
            besprechen.
          </p>
          <p>
            (4) Die Beauftragung der Partner-Detektei, die Festlegung des
            Leistungsumfangs und die Honorarvereinbarung erfolgen ausschließlich
            zwischen Ihnen und der Partner-Detektei. Wir sind an diesen
            Vereinbarungen nicht beteiligt.
          </p>

          <h2>§ 4 Anforderungen an Partner-Detekteien</h2>
          <p>
            (1) Wir arbeiten ausschließlich mit Partner-Detekteien zusammen, die
            folgende Kriterien erfüllen:
          </p>
          <ul>
            <li>
              Gewerbeanmeldung für Detektei-Dienstleistungen
            </li>
            <li>
              Sachkundenachweis nach § 34a Gewerbeordnung (GewO) oder
              gleichwertige Qualifikation
            </li>
            <li>
              Nachweis einer Berufshaftpflichtversicherung
            </li>
            <li>
              Verpflichtung zur Einhaltung der DSGVO
            </li>
          </ul>
          <p>
            (2) Wir überprüfen diese Kriterien bei Aufnahme in unser Netzwerk.
            Eine fortlaufende Kontrolle der Geschäftstätigkeit der
            Partner-Detekteien ist uns jedoch nicht möglich. Wir übernehmen
            daher keine Gewähr für die fortdauernde Erfüllung dieser Kriterien.
          </p>

          <h2>§ 5 Pflichten des Auftraggebers</h2>
          <p>
            (1) Sie versichern, dass Ihre Anfrage einem berechtigten Interesse
            dient und keine rechtswidrigen Zwecke verfolgt werden.
          </p>
          <p>
            (2) Sie sind verpflichtet, alle für die Vermittlung notwendigen
            Informationen vollständig und wahrheitsgemäß anzugeben.
          </p>
          <p>
            (3) Sie nehmen zur Kenntnis, dass Ihre Daten an die ausgewählte
            Partner-Detektei weitergeleitet werden. Einzelheiten hierzu finden
            Sie in unserer Datenschutzerklärung.
          </p>

          <h2>§ 6 Haftung und Haftungsbeschränkung</h2>
          <p>
            (1) <strong>Keine Haftung für Partner-Detekteien:</strong> Wir
            haften nicht für die Leistungen der Partner-Detekteien. Die
            Partner-Detekteien sind selbstständige Unternehmen und keine
            Erfüllungsgehilfen von uns. Für Schäden, die aus dem Vertrag
            zwischen Ihnen und der Partner-Detektei entstehen, ist
            ausschließlich die Partner-Detektei verantwortlich.
          </p>
          <p>
            (2) <strong>Haftung für unsere Vermittlungsleistung:</strong> Wir
            haften für Schäden aus unserer Vermittlungstätigkeit nur bei Vorsatz
            und grober Fahrlässigkeit sowie bei schuldhafter Verletzung
            wesentlicher Vertragspflichten (Kardinalpflichten).
          </p>
          <p>
            (3) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten
            ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden
            begrenzt.
          </p>
          <p>
            (4) Die vorstehenden Haftungsbeschränkungen gelten nicht für Schäden
            aus der Verletzung von Leben, Körper oder Gesundheit sowie für
            Ansprüche nach dem Produkthaftungsgesetz.
          </p>

          <h2>§ 7 Datenschutz und Vertraulichkeit</h2>
          <p>
            (1) Der Schutz Ihrer personenbezogenen Daten ist uns wichtig.
            Einzelheiten zur Datenverarbeitung finden Sie in unserer
            Datenschutzerklärung.
          </p>
          <p>
            (2) Mit Ihrer Anfrage willigen Sie ein, dass wir Ihre
            personenbezogenen Daten und Anfrageinformationen an die ausgewählte
            Partner-Detektei weitergeben. Diese Einwilligung können Sie
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            (3) Wir behandeln alle Informationen, die Sie uns mitteilen,
            vertraulich und geben diese – außer an Partner-Detekteien im Rahmen
            der Vermittlung – nicht an Dritte weiter, es sei denn, wir sind
            gesetzlich dazu verpflichtet.
          </p>

          <h2>§ 8 Widerrufsrecht für Verbraucher</h2>
          <p>
            (1) Wenn Sie Verbraucher im Sinne des § 13 BGB sind, haben Sie bei
            Fernabsatzverträgen ein gesetzliches Widerrufsrecht.
          </p>
          <p>
            (2) <strong>Widerrufsbelehrung:</strong>
          </p>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen
            diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn
            Tage ab dem Tag des Vertragsschlusses.
          </p>
          <p>
            Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Kontaktdaten siehe
            Impressum) mittels einer eindeutigen Erklärung (z.B. ein mit der
            Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen
            Vertrag zu widerrufen, informieren.
          </p>
          <p>
            (3) <strong>Folgen des Widerrufs:</strong> Wenn Sie diesen Vertrag
            widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
            erhalten haben, unverzüglich zurückzuzahlen. Da unsere
            Vermittlungsleistung für Sie kostenfrei ist, entstehen durch den
            Widerruf keine Rückzahlungsansprüche.
          </p>
          <p>
            (4) <strong>Hinweis:</strong> Wenn wir auf Ihren ausdrücklichen
            Wunsch bereits vor Ablauf der Widerrufsfrist mit der Vermittlung
            begonnen haben und eine Partner-Detektei bereits kontaktiert wurde,
            kann das Widerrufsrecht vorzeitig erlöschen.
          </p>

          <h2>§ 9 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter
            Ausschluss des UN-Kaufrechts.
          </p>
          <p>
            (2) Ist der Auftraggeber Kaufmann, juristische Person des
            öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist
            Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis
            unser Geschäftssitz.
          </p>
          <p>
            (3) Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-700 underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
          <p>
            (4) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
            werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
          <p>
            (5) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
            Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.
          </p>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-100">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              Zusammenfassung für Verbraucher
            </h3>
            <ul className="space-y-2 text-primary-600 text-sm">
              <li>
                <strong>Wir sind Vermittler:</strong> Detektei Base vermittelt
                Sie an selbstständige Partner-Detekteien.
              </li>
              <li>
                <strong>Kostenfrei für Sie:</strong> Unsere Vermittlung kostet
                Sie nichts.
              </li>
              <li>
                <strong>Vertrag mit der Detektei:</strong> Der Auftrag kommt
                zwischen Ihnen und der Partner-Detektei zustande, nicht mit uns.
              </li>
              <li>
                <strong>Datenweitergabe:</strong> Ihre Anfragedaten werden an
                die Partner-Detektei weitergeleitet.
              </li>
            </ul>
          </div>

          <p className="mt-8">
            <em>Stand: Januar 2026</em>
          </p>
        </div>
      </section>
    </>
  );
}
