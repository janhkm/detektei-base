import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getStadtPageData,
  getAllStadtParams,
  getLandkreisById,
  getBundeslandById,
} from "@/data";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";
import { ServicesList } from "@/components/einsatzgebiete/ServicesList";
import { ProcessTimeline } from "@/components/einsatzgebiete/ProcessTimeline";
import { NearbyLocations } from "@/components/einsatzgebiete/NearbyLocations";
import { TypischeFaelle } from "@/components/einsatzgebiete/TypischeFaelle";
import { WarumLokal } from "@/components/einsatzgebiete/WarumLokal";
import { RechtlicheHinweise } from "@/components/einsatzgebiete/RechtlicheHinweise";
import { getStadtFAQs } from "@/lib/faqs";
import { generateGraphSchema } from "@/lib/schemas/einsatzgebiete";
import {
  getStadtH1,
  getStadtTitle,
  getStadtMetaDescription,
  getStadtIntroText,
  getWarumLokalText,
  getTypischeFaelleText,
  getRechtlicheHinweise,
} from "@/lib/content-variants";

// ============================================================================
// ISR KONFIGURATION - Kritisch für Scale
// ============================================================================

// Erlaubt dynamische Generierung für alle Städte nicht im generateStaticParams
export const dynamicParams = true;
// Revalidierung alle 7 Tage
export const revalidate = 604800;

const SITE_URL = "https://detektei-base.de";

interface PageProps {
  params: Promise<{
    bundesland: string;
    landkreisOderStadt: string;
    stadt: string;
  }>;
}

export async function generateStaticParams() {
  // Bei Build: Nur die Top 100 Städte nach Einwohnerzahl generieren
  // Der Rest wird on-demand mit ISR generiert
  // Dies hält Build-Zeiten niedrig bei tausenden potenziellen Seiten
  
  const allParams = getAllStadtParams();
  
  // Für bessere Performance: Alle Städte bei Build generieren
  // wenn die Gesamtzahl unter 500 liegt
  if (allParams.length <= 500) {
    return allParams;
  }
  
  // Bei mehr als 500 Städten: Nur die wichtigsten bei Build
  // Rest wird on-demand generiert
  return allParams.slice(0, 100);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { bundesland: bundeslandSlug, landkreisOderStadt: landkreisSlug, stadt: stadtSlug } = await params;
  const data = getStadtPageData(bundeslandSlug, stadtSlug, landkreisSlug);

  if (!data) return {};

  // Verwende variierende Title und Description
  const title = getStadtTitle(data.stadt, data.bundesland);
  const description = getStadtMetaDescription(data.stadt, data.bundesland);
  const pageUrl = `/einsatzgebiete/bundesland/${bundeslandSlug}/${landkreisSlug}/${stadtSlug}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${pageUrl}`,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      siteName: "Detektei Base",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function StadtPage({ params }: PageProps) {
  const { bundesland: bundeslandSlug, landkreisOderStadt: landkreisSlug, stadt: stadtSlug } = await params;
  const data = getStadtPageData(bundeslandSlug, stadtSlug, landkreisSlug);

  if (!data) {
    notFound();
  }

  const { bundesland, landkreis, stadt, nahegelegeneStaedte } = data;
  const faqs = getStadtFAQs(stadt, bundesland);
  const seed = stadt.slug + stadt.id;
  
  // Variierende Inhalte
  const h1 = getStadtH1(stadt, bundesland);
  const introText = getStadtIntroText(stadt, bundesland);
  const warumLokalText = getWarumLokalText(stadt.name, false, seed);
  const typischeFaelle = getTypischeFaelleText(stadt.name, false, seed);
  const rechtlicheHinweise = getRechtlicheHinweise(stadt.name, seed);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Einsatzgebiete", href: "/einsatzgebiete" },
    { label: bundesland.name, href: `/einsatzgebiete/bundesland/${bundesland.slug}` },
  ];

  if (landkreis) {
    breadcrumbs.push({
      label: landkreis.name,
      href: `/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}`,
    });
  }

  breadcrumbs.push({
    label: stadt.name,
    href: `/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis?.slug || ""}/${stadt.slug}`,
  });

  const pageUrl = `/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis?.slug || ""}/${stadt.slug}`;

  const jsonLd = generateGraphSchema({
    pageType: "stadt",
    breadcrumbs,
    bundesland,
    landkreis,
    stadt,
    faqs,
    pageTitle: `Detektei für ${stadt.name}`,
    pageDescription: `Professionelle Detektei für ${stadt.name} – Diskrete Ermittlungen.`,
    pageUrl,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              {h1}
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed intro-text">
              {introText}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Column */}
            <div className="lg:col-span-2">
              <KeyTakeaways
                items={[
                  `<strong>Kosten:</strong> Individuell nach Fall und Aufwand – jetzt anrufen`,
                  `<strong>Reaktionszeit:</strong> Innerhalb von 24h einsatzbereit in ${stadt.name}`,
                  `<strong>Leistungen:</strong> Privatdetektei & Wirtschaftsdetektei`,
                  `<strong>Beweise:</strong> Gerichtsverwertbar & DSGVO-konform`,
                ]}
              />

              {/* Services */}
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Detektei-Leistungen für {stadt.name}
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Detektei Base bietet für {stadt.name} 
                  das gesamte Spektrum der Privatdetektei und Wirtschaftsdetektei – 
                  diskret, professionell und gerichtsverwertbar.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <ServicesList type="privat" stadtName={stadt.name} />
                  <ServicesList type="wirtschaft" stadtName={stadt.name} />
                </div>
              </div>

              {/* Process */}
              <div className="mt-16">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Ablauf einer Ermittlung in {stadt.name}
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Der Ermittlungsablauf in {stadt.name}{" "}
                  folgt einem strukturierten 5-Schritte-Prozess von der
                  Erstberatung bis zum gerichtsverwertbaren Bericht.
                </p>
                <ProcessTimeline stadtName={stadt.name} />
              </div>

              {/* Warum Detektei Base */}
              <div className="mt-16">
                <WarumLokal
                  title={`Warum Detektei Base für ${stadt.name}?`}
                  text={warumLokalText}
                />
              </div>

              {/* Typische Fälle */}
              <div className="mt-16">
                <TypischeFaelle
                  title={typischeFaelle.title}
                  cases={typischeFaelle.cases}
                />
              </div>

              {/* Prices */}
              <div className="mt-16">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                  Detektiv-Kosten für {stadt.name}
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Die Kosten für einen Privatdetektiv für {stadt.name}{" "}
                  werden individuell nach Fall und Aufwand berechnet. Rufen Sie jetzt an – 
                  Sie erhalten ein unverbindliches Angebot für Ihre Situation.
                </p>
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="font-semibold text-primary-900 mb-3">Was beeinflusst die Kosten?</h3>
                  <ul className="space-y-2 text-primary-700 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-0.5">•</span>
                      <span><strong>Art der Ermittlung:</strong> Observation, Recherche, Personensuche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-0.5">•</span>
                      <span><strong>Dauer und Umfang:</strong> Einzelne Termine oder längere Überwachung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-0.5">•</span>
                      <span><strong>Komplexität:</strong> Einfache oder aufwändige Ermittlung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-500 mt-0.5">•</span>
                      <span><strong>Ressourcen:</strong> Anzahl der benötigten Ermittler</span>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-primary-600">
                    <strong>Jetzt anrufen.</strong> Schildern Sie Ihren Fall – 
                    Sie erhalten eine transparente Einschätzung ohne Verpflichtung.
                  </p>
                </div>
              </div>

              {/* Rechtliche Hinweise */}
              <div className="mt-16">
                <RechtlicheHinweise
                  intro={rechtlicheHinweise.intro}
                  erlaubt={rechtlicheHinweise.erlaubt}
                  verboten={rechtlicheHinweise.verboten}
                />
              </div>

              {/* Nearby */}
              <div className="mt-16">
                <NearbyLocations
                  locations={nahegelegeneStaedte}
                  bundesland={bundesland}
                  currentStadt={stadt}
                />
              </div>

              {/* FAQ */}
              <div className="mt-16">
                <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                  Häufige Fragen zur Detektei für {stadt.name}
                </h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                {/* Info Card */}
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    {stadt.name} auf einen Blick
                  </h3>
                  <dl className="space-y-3 text-sm">
                    {landkreis && (
                      <div className="flex justify-between">
                        <dt className="text-primary-500">Landkreis</dt>
                        <dd className="font-medium text-primary-900">
                          {landkreis.name}
                        </dd>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <dt className="text-primary-500">Bundesland</dt>
                      <dd className="font-medium text-primary-900">
                        {bundesland.name}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-primary-500">PLZ</dt>
                      <dd className="font-medium text-primary-900">
                        {stadt.plz.slice(0, 3).join(", ")}
                        {stadt.plz.length > 3 && "..."}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Trust Badges */}
                <div className="bg-white rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Unsere Qualitätsgarantie
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Professionelle Ermittlungen",
                      "Deutschlandweit tätig",
                      "100% Diskretion garantiert",
                      "Rund um die Uhr erreichbar",
                      "DSGVO-konforme Arbeitsweise",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-primary-700">
                        <span className="text-accent-500">✓</span>
                        {item}
                      </li>
                    ))}
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
