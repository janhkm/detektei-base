import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Impressum | Rechtliche Angaben",
  description: "Impressum und rechtliche Angaben der Detektei Base Vermittlungsplattform gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-primary-950 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Impressum", href: "/impressum" }]} />
          <h1 className="mt-4 text-3xl font-display font-bold text-white">
            Impressum
          </h1>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-primary max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>

          <p>
            <strong>Hemkemeier & Awad GbR</strong>
            <br />
            Mühlstraße 41
            <br />
            71229 Leonberg
            <br />
            Deutschland
          </p>

          <h3>Vertreten durch</h3>
          <p>
            Jan Hemkemeier
            <br />
            Adrian Awad
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: 0176 66918653
            <br />
            E-Mail: kontakt@detektei-base.de
          </p>

          <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
          <p>
            Hemkemeier & Awad GbR
            <br />
            Mühlstraße 41
            <br />
            71229 Leonberg
          </p>

          <h2>Art der Tätigkeit</h2>
          <p>
            Detektei Base ist eine <strong>Vermittlungsplattform</strong>, die 
            Kontakte zwischen Auftraggebern und selbstständigen Partner-Detekteien 
            herstellt. Wir erbringen selbst keine Detektiv-Dienstleistungen.
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            <br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich.
          </p>

          <h2>Haftungshinweis zur Vermittlung</h2>
          <p>
            <strong>
              Wir vermitteln lediglich den Kontakt zu selbstständigen 
              Partner-Detekteien.
            </strong>{" "}
            Für die Leistungen, die von den vermittelten Partner-Detekteien 
            erbracht werden, übernehmen wir keine Haftung. Die Partner-Detekteien 
            sind eigenständige Unternehmen und keine Erfüllungsgehilfen von 
            Detektei Base.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </section>
    </>
  );
}
