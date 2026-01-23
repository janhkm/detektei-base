import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "AGB | Allgemeine Geschäftsbedingungen",
  description:
    "Allgemeine Geschäftsbedingungen der Detektei Oliver Peth. Transparente Vertragsbedingungen für Detektiv-Dienstleistungen.",
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
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-primary max-w-none">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
            Verträge zwischen der Detektei Oliver Peth (nachfolgend
            &quot;Detektei&quot;) und dem Auftraggeber über die Erbringung von
            Detektiv-Dienstleistungen.
          </p>
          <p>
            (2) Abweichende Bedingungen des Auftraggebers werden nicht
            anerkannt, es sei denn, die Detektei stimmt ihrer Geltung
            ausdrücklich schriftlich zu.
          </p>
          <p>
            (3) Diese AGB gelten auch für alle zukünftigen Geschäftsbeziehungen,
            auch wenn sie nicht nochmals ausdrücklich vereinbart werden.
          </p>

          <h2>§ 2 Vertragsgegenstand</h2>
          <p>
            (1) Die Detektei erbringt Ermittlungs- und Observationsdienstleistungen
            im Rahmen der gesetzlichen Bestimmungen und der sogenannten
            Jedermannsrechte.
          </p>
          <p>
            (2) Art und Umfang der Leistungen ergeben sich aus der schriftlichen
            Auftragsbestätigung oder dem Ermittlungsauftrag.
          </p>
          <p>
            (3) Die Detektei ist berechtigt, zur Erfüllung ihrer Pflichten
            qualifizierte Subunternehmer oder freie Mitarbeiter einzusetzen.
          </p>

          <h2>§ 3 Auftragserteilung</h2>
          <p>
            (1) Aufträge bedürfen der Schriftform oder Textform (E-Mail). Die
            Detektei bestätigt den Auftrag schriftlich oder per E-Mail.
          </p>
          <p>
            (2) Der Auftraggeber versichert, dass der Auftrag einem berechtigten
            Interesse entspricht und keine rechtswidrigen Zwecke verfolgt werden.
          </p>
          <p>
            (3) Der Auftraggeber ist verpflichtet, alle für die Durchführung des
            Auftrags notwendigen Informationen vollständig und wahrheitsgemäß
            mitzuteilen.
          </p>

          <h2>§ 4 Vergütung und Zahlungsbedingungen</h2>
          <p>
            (1) Die Vergütung richtet sich nach der im Auftrag vereinbarten
            Honorarvereinbarung. Sofern keine abweichende Vereinbarung getroffen
            wurde, gelten die zum Zeitpunkt der Auftragserteilung gültigen
            Stundensätze der Detektei.
          </p>
          <p>
            (2) Bei längeren Ermittlungen kann die Detektei Abschlagszahlungen
            verlangen. Eine Anzahlung von bis zu 50% der geschätzten Kosten kann
            bei Auftragserteilung fällig werden.
          </p>
          <p>
            (3) Reisekosten, Übernachtungskosten und andere Auslagen werden
            zusätzlich berechnet, sofern nichts anderes vereinbart wurde.
          </p>
          <p>
            (4) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung
            ohne Abzug zahlbar.
          </p>
          <p>
            (5) Die Detektei informiert den Auftraggeber rechtzeitig, wenn das
            vereinbarte Budget voraussichtlich überschritten wird. Ohne
            ausdrückliche Zustimmung des Auftraggebers werden keine weiteren
            kostenpflichtigen Maßnahmen ergriffen.
          </p>

          <h2>§ 5 Mitwirkungspflichten des Auftraggebers</h2>
          <p>
            (1) Der Auftraggeber ist verpflichtet, der Detektei alle für die
            Durchführung des Auftrags erforderlichen Informationen rechtzeitig
            und vollständig zur Verfügung zu stellen.
          </p>
          <p>
            (2) Änderungen der Sachlage sind der Detektei unverzüglich
            mitzuteilen.
          </p>
          <p>
            (3) Der Auftraggeber stellt die Detektei von allen Ansprüchen Dritter
            frei, die aus einer Verletzung seiner Mitwirkungspflichten
            resultieren.
          </p>

          <h2>§ 6 Verschwiegenheit und Datenschutz</h2>
          <p>
            (1) Die Detektei verpflichtet sich zur strengen Verschwiegenheit über
            alle im Rahmen des Auftrags bekannt gewordenen Informationen.
          </p>
          <p>
            (2) Ermittlungsergebnisse werden ausschließlich dem Auftraggeber
            mitgeteilt, es sei denn, eine Weitergabe ist gesetzlich vorgeschrieben
            oder vom Auftraggeber ausdrücklich genehmigt.
          </p>
          <p>
            (3) Die Verarbeitung personenbezogener Daten erfolgt gemäß den
            Bestimmungen der DSGVO und des BDSG. Näheres regelt unsere
            Datenschutzerklärung.
          </p>
          <p>
            (4) Nach Abschluss des Auftrags werden alle erhobenen Daten auf
            Wunsch des Auftraggebers gelöscht, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>

          <h2>§ 7 Haftung</h2>
          <p>
            (1) Die Detektei haftet für Schäden nur bei Vorsatz und grober
            Fahrlässigkeit sowie bei schuldhafter Verletzung wesentlicher
            Vertragspflichten (Kardinalpflichten).
          </p>
          <p>
            (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten
            ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden
            begrenzt.
          </p>
          <p>
            (3) Die Haftung für mittelbare Schäden, entgangenen Gewinn und
            Folgeschäden ist ausgeschlossen, soweit gesetzlich zulässig.
          </p>
          <p>
            (4) Die vorstehenden Haftungsbeschränkungen gelten nicht für Schäden
            aus der Verletzung von Leben, Körper oder Gesundheit sowie für
            Ansprüche nach dem Produkthaftungsgesetz.
          </p>

          <h2>§ 8 Auftragsbeendigung und Kündigung</h2>
          <p>
            (1) Der Auftrag endet mit Erfüllung des Auftrags oder durch
            Kündigung.
          </p>
          <p>
            (2) Der Auftraggeber kann den Auftrag jederzeit ohne Angabe von
            Gründen kündigen. In diesem Fall sind die bis zur Kündigung
            erbrachten Leistungen und angefallenen Kosten zu vergüten.
          </p>
          <p>
            (3) Die Detektei kann den Auftrag aus wichtigem Grund kündigen,
            insbesondere wenn:
          </p>
          <ul>
            <li>
              der Auftraggeber unrichtige Angaben gemacht hat, die für die
              Durchführung des Auftrags wesentlich sind,
            </li>
            <li>
              der Auftraggeber mit Zahlungen in erheblichem Umfang in Verzug ist,
            </li>
            <li>
              sich herausstellt, dass der Auftrag rechtswidrige Zwecke verfolgt,
            </li>
            <li>
              das Vertrauensverhältnis nachhaltig gestört ist.
            </li>
          </ul>

          <h2>§ 9 Ermittlungsbericht</h2>
          <p>
            (1) Die Detektei erstellt nach Abschluss der Ermittlungen einen
            schriftlichen Ermittlungsbericht, sofern nicht anders vereinbart.
          </p>
          <p>
            (2) Der Bericht dokumentiert den Ermittlungsverlauf und die
            Ergebnisse in einer für den Auftraggeber und ggf. Gerichte
            verwertbaren Form.
          </p>
          <p>
            (3) Das Urheberrecht am Ermittlungsbericht verbleibt bei der
            Detektei. Der Auftraggeber erhält ein einfaches Nutzungsrecht für
            den vereinbarten Zweck.
          </p>

          <h2>§ 10 Rechtliche Grenzen der Ermittlungstätigkeit</h2>
          <p>
            (1) Die Detektei arbeitet ausschließlich im Rahmen der gesetzlichen
            Bestimmungen und der sogenannten Jedermannsrechte.
          </p>
          <p>
            (2) Nicht zu den Leistungen der Detektei gehören insbesondere:
          </p>
          <ul>
            <li>Das Betreten von Privatgrundstücken ohne Erlaubnis</li>
            <li>Das Abhören von Telefongesprächen</li>
            <li>Das Öffnen von Briefen oder Paketen</li>
            <li>Hacken von E-Mail-Konten oder Computern</li>
            <li>Jegliche Form von rechtswidriger Informationsbeschaffung</li>
          </ul>
          <p>
            (3) Die Detektei behält sich vor, Aufträge abzulehnen, die gegen
            geltendes Recht oder ethische Grundsätze verstoßen.
          </p>

          <h2>§ 11 Schlussbestimmungen</h2>
          <p>
            (1) Es gilt das Recht der Bundesrepublik Deutschland unter
            Ausschluss des UN-Kaufrechts.
          </p>
          <p>
            (2) Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis
            ist, soweit gesetzlich zulässig, der Sitz der Detektei.
          </p>
          <p>
            (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
            werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
          </p>
          <p>
            (4) Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
            Dies gilt auch für die Aufhebung dieses Schriftformerfordernisses.
          </p>

          <p className="mt-8">
            <em>Stand: Januar 2026</em>
          </p>
        </div>
      </section>
    </>
  );
}
