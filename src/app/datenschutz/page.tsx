import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Datenschutz | Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Detektei Base Vermittlungsplattform gemäß DSGVO. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-primary-950 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Datenschutz", href: "/datenschutz" }]} />
          <h1 className="mt-4 text-3xl font-display font-bold text-white">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-primary max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>

          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen und unsere Vermittlungsleistung nutzen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden
            können.
          </p>

          <div className="bg-accent-50 border border-accent-200 rounded-lg p-4 my-6">
            <h4 className="text-accent-800 font-semibold mt-0">
              Wichtiger Hinweis zur Datenweitergabe
            </h4>
            <p className="text-accent-700 mb-0">
              <strong>Detektei Base ist eine Vermittlungsplattform.</strong> Wenn
              Sie eine Anfrage stellen, leiten wir Ihre Kontaktdaten und
              Anfrageinformationen an eine geeignete Partner-Detektei weiter.
              Diese Partner-Detektei wird dann eigenverantwortlich für die
              Verarbeitung Ihrer Daten im Rahmen der Detektiv-Dienstleistung.
              Details hierzu finden Sie unter Punkt 5.
            </p>
          </div>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </strong>
          </p>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber Detektei Base. Die Kontaktdaten können Sie dem
            Impressum dieser Website entnehmen.
          </p>

          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong>
          </p>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen, z.B. wenn Sie das Kontaktformular ausfüllen oder uns
            anrufen. Andere Daten werden automatisch oder nach Ihrer Einwilligung
            beim Besuch der Website durch unsere IT-Systeme erfasst (z.B.
            technische Daten wie Internetbrowser, Betriebssystem oder Uhrzeit des
            Seitenaufrufs).
          </p>

          <p>
            <strong>Wofür nutzen wir Ihre Daten?</strong>
          </p>
          <p>
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Die Daten aus Kontaktanfragen nutzen
            wir ausschließlich zur Vermittlung an geeignete Partner-Detekteien.
          </p>

          <p>
            <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong>
          </p>
          <p>
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen
            zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <h2>2. Hosting</h2>
          <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
          <p>
            <strong>Vercel Inc.</strong>
          </p>
          <p>
            Diese Website wird bei Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
            91789, USA gehostet. Die personenbezogenen Daten, die auf dieser
            Website erfasst werden, werden auf den Servern von Vercel
            gespeichert. Vercel ist unter dem EU-US Data Privacy Framework
            zertifiziert.
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>

          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p>
            Detektei Base
            <br />
            [Vollständige Adresse siehe Impressum]
            <br />
            <br />
            Telefon: 0176 66918653
            <br />
            E-Mail: kontakt@detektei-base.de
          </p>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten entscheidet.
          </p>

          <h3>Speicherdauer</h3>
          <p>
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            Anfragedaten werden in der Regel nach 6 Monaten gelöscht, sofern
            keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3>Recht auf Datenübertragbarkeit</h3>
          <p>
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
            oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen.
          </p>

          <h3>Auskunft, Löschung und Berichtigung</h3>
          <p>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
            das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
            der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
            Löschung dieser Daten.
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>

          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert.
          </p>
          <p>
            <strong>
              Wichtig: Diese Daten werden an Partner-Detekteien weitergegeben.
            </strong>{" "}
            Siehe hierzu Punkt 5 dieser Datenschutzerklärung.
          </p>
          <p>
            Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO
            (Ihre Einwilligung) sowie Art. 6 Abs. 1 lit. b DSGVO (Verarbeitung
            zur Durchführung vorvertraglicher Maßnahmen).
          </p>

          <h3>Anfrage per E-Mail oder Telefon</h3>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage
            inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
            Telefonnummer, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
            bei uns gespeichert und verarbeitet. Diese Daten werden ebenfalls an
            Partner-Detekteien weitergegeben.
          </p>

          <h2>5. Datenweitergabe an Partner-Detekteien</h2>

          <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 my-6">
            <h4 className="text-primary-900 font-semibold mt-0">
              Zentrale Information
            </h4>
            <p className="text-primary-700 mb-0">
              Dieser Abschnitt beschreibt, wie und warum wir Ihre Daten an
              Partner-Detekteien weitergeben.
            </p>
          </div>

          <h3>Zweck der Datenweitergabe</h3>
          <p>
            Detektei Base ist ein Vermittlungsportal. Der Hauptzweck unserer
            Dienstleistung ist die Vermittlung von Kontakten zwischen Ihnen und
            geeigneten Detekteien. Um diesen Zweck zu erfüllen, ist es
            erforderlich, dass wir Ihre Anfragedaten an Partner-Detekteien
            weitergeben.
          </p>

          <h3>Welche Daten werden weitergegeben?</h3>
          <ul>
            <li>Ihr Name</li>
            <li>Ihre E-Mail-Adresse</li>
            <li>Ihre Telefonnummer (falls angegeben)</li>
            <li>Der Inhalt Ihrer Anfrage / Fallbeschreibung</li>
            <li>Der gewählte Themenbereich (z.B. Untreue, Personensuche)</li>
          </ul>

          <h3>An wen werden die Daten weitergegeben?</h3>
          <p>
            Ihre Daten werden an <strong>eine</strong> ausgewählte
            Partner-Detektei weitergegeben, die wir basierend auf Ihrem Anliegen
            und Standort für geeignet halten. Wir geben Ihre Daten nicht an
            mehrere Detekteien gleichzeitig weiter.
          </p>
          <p>
            Unsere Partner-Detekteien sind selbstständige Unternehmen mit Sitz in
            Deutschland, die sich vertraglich zur Einhaltung der DSGVO
            verpflichtet haben.
          </p>

          <h3>Rechtsgrundlage</h3>
          <p>
            Die Rechtsgrundlage für die Datenweitergabe ist Ihre Einwilligung
            gemäß Art. 6 Abs. 1 lit. a DSGVO. Diese Einwilligung erteilen Sie,
            wenn Sie das Kontaktformular absenden und dabei bestätigen, dass Sie
            die Datenschutzerklärung gelesen haben.
          </p>

          <h3>Verantwortlichkeit nach der Weitergabe</h3>
          <p>
            Nach der Weitergabe Ihrer Daten an die Partner-Detektei ist diese
            eigenverantwortlich für die weitere Verarbeitung Ihrer Daten. Die
            Partner-Detektei wird zum eigenständigen Verantwortlichen im Sinne
            der DSGVO. Für die Datenverarbeitung durch die Partner-Detektei gilt
            deren Datenschutzerklärung.
          </p>

          <h3>Widerruf der Einwilligung</h3>
          <p>
            Sie können Ihre Einwilligung zur Datenweitergabe jederzeit mit
            Wirkung für die Zukunft widerrufen. Senden Sie hierzu eine E-Mail an
            kontakt@detektei-base.de. Bitte beachten Sie, dass ein Widerruf die
            Rechtmäßigkeit der bereits erfolgten Datenverarbeitung nicht berührt
            und dass wir nach einem Widerruf keine Vermittlung mehr durchführen
            können.
          </p>

          <h2>6. Ihre Rechte als betroffene Person</h2>
          <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul>
            <li>
              <strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können
              Auskunft darüber verlangen, ob und welche personenbezogenen Daten
              wir über Sie gespeichert haben.
            </li>
            <li>
              <strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die
              Berichtigung unrichtiger Daten verlangen.
            </li>
            <li>
              <strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können unter
              bestimmten Voraussetzungen die Löschung Ihrer Daten verlangen.
            </li>
            <li>
              <strong>
                Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):
              </strong>{" "}
              Sie können unter bestimmten Voraussetzungen verlangen, dass die
              Verarbeitung Ihrer Daten eingeschränkt wird.
            </li>
            <li>
              <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong>{" "}
              Sie haben das Recht, Ihre Daten in einem gängigen Format zu
              erhalten.
            </li>
            <li>
              <strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können
              unter bestimmten Voraussetzungen der Verarbeitung Ihrer Daten
              widersprechen.
            </li>
            <li>
              <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei
              einer Datenschutz-Aufsichtsbehörde zu beschweren.
            </li>
          </ul>

          <h2>7. SSL- bzw. TLS-Verschlüsselung</h2>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie
            an uns senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
            des Browsers von „http://" auf „https://" wechselt und an dem
            Schloss-Symbol in Ihrer Browserzeile.
          </p>

          <h2>8. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie
            an geänderte Rechtslagen oder bei Änderungen unserer Leistungen
            anzupassen. Die jeweils aktuelle Version finden Sie auf dieser Seite.
          </p>

          <p>
            <em>Stand: Januar 2026</em>
          </p>
        </div>
      </section>
    </>
  );
}
