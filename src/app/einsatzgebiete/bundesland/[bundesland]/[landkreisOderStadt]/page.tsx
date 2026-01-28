import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import {
  getBundeslandBySlug,
  getLandkreisBySlug,
  getStadtBySlug,
  getStadtPageData,
  getLandkreisPageData,
  getAllLandkreisParams,
  getAllKreisfreieStadtParams,
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
import { getStadtFAQs, getLandkreisFAQs } from "@/lib/faqs";
import { generateGraphSchema } from "@/lib/schemas/einsatzgebiete";
import {
  getStadtH1,
  getStadtTitle,
  getStadtMetaDescription,
  getStadtIntroText,
  getLandkreisH1,
  getLandkreisTitle,
  getLandkreisMetaDescription,
  getLandkreisIntroText,
  getWarumLokalText,
  getTypischeFaelleText,
  getRechtlicheHinweise,
} from "@/lib/content-variants";

// ============================================================================
// ISR KONFIGURATION
// ============================================================================

// Erlaubt dynamische Generierung für Seiten nicht im generateStaticParams
export const dynamicParams = true;
// Revalidierung alle 14 Tage
export const revalidate = 1209600;

const SITE_URL = "https://detektei-base.de";

interface PageProps {
  params: Promise<{ bundesland: string; landkreisOderStadt: string }>;
}

export async function generateStaticParams() {
  // Bei Build: Nur die wichtigsten Landkreise und kreisfreie Städte generieren
  // Rest wird on-demand mit ISR generiert
  const landkreisParams = getAllLandkreisParams();
  const kreisfreieStadtParams = getAllKreisfreieStadtParams();
  
  // Alle kreisfreien Städte (wichtig, da Metropolen)
  // + alle Landkreise (manageable Anzahl)
  return [...kreisfreieStadtParams, ...landkreisParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { bundesland: bundeslandSlug, landkreisOderStadt: slug } = await params;

  // Prüfe ob es eine kreisfreie Stadt ist
  const stadtData = getStadtPageData(bundeslandSlug, slug);
  if (stadtData && stadtData.stadt.is_kreisfrei) {
    const title = getStadtTitle(stadtData.stadt, stadtData.bundesland);
    const description = getStadtMetaDescription(stadtData.stadt, stadtData.bundesland);
    const pageUrl = `/einsatzgebiete/bundesland/${bundeslandSlug}/${slug}`;
    
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

  // Sonst Landkreis
  const landkreisData = getLandkreisPageData(bundeslandSlug, slug);
  if (landkreisData) {
    const title = getLandkreisTitle(landkreisData.landkreis, landkreisData.bundesland);
    const description = getLandkreisMetaDescription(
      landkreisData.landkreis, 
      landkreisData.bundesland,
      landkreisData.staedte.length
    );
    const pageUrl = `/einsatzgebiete/bundesland/${bundeslandSlug}/${slug}`;
    
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

  return {};
}

export default async function LandkreisOderStadtPage({ params }: PageProps) {
  const { bundesland: bundeslandSlug, landkreisOderStadt: slug } = await params;

  // Prüfe ob es eine kreisfreie Stadt ist
  const stadtData = getStadtPageData(bundeslandSlug, slug);
  if (stadtData && stadtData.stadt.is_kreisfrei) {
    return <StadtPageContent data={stadtData} />;
  }

  // Sonst Landkreis-Seite
  const landkreisData = getLandkreisPageData(bundeslandSlug, slug);
  if (landkreisData) {
    return <LandkreisPageContent data={landkreisData} />;
  }

  notFound();
}

// ============================================
// KREISFREIE STADT SEITE (Goldstandard)
// ============================================

import { StadtPageData } from "@/data/types";

function StadtPageContent({ data }: { data: StadtPageData }) {
  const { bundesland, stadt, nahegelegeneStaedte } = data;
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
    { label: stadt.name, href: `/einsatzgebiete/bundesland/${bundesland.slug}/${stadt.slug}` },
  ];

  const pageUrl = `/einsatzgebiete/bundesland/${bundesland.slug}/${stadt.slug}`;

  const jsonLd = generateGraphSchema({
    pageType: "stadt",
    breadcrumbs,
    bundesland,
    stadt,
    faqs,
    pageTitle: h1,
    pageDescription: getStadtMetaDescription(stadt, bundesland),
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
                  Detektei-Leistungen in {stadt.name}
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Detektei Base bietet in {stadt.name} 
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
                  Kosten für einen Detektiv in {stadt.name}
                </h2>
                <p className="text-primary-600 mb-6">
                  <strong>Kurz:</strong> Die Kosten für einen Privatdetektiv in {stadt.name}{" "}
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
                  Häufige Fragen zur Detektei in {stadt.name}
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
                    Das garantieren wir
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

// ============================================
// LANDKREIS SEITE
// ============================================

import { LandkreisPageData } from "@/data/types";

function LandkreisPageContent({ data }: { data: LandkreisPageData }) {
  const { bundesland, landkreis, staedte, kleineGemeinden } = data;
  const faqs = getLandkreisFAQs(landkreis, bundesland);
  const seed = landkreis.slug + landkreis.id;
  
  // Variierende Inhalte
  const h1 = getLandkreisH1(landkreis, bundesland);
  const introText = getLandkreisIntroText(landkreis, bundesland);
  const warumLokalText = getWarumLokalText(landkreis.name, true, seed);
  const typischeFaelle = getTypischeFaelleText(landkreis.name, true, seed);
  const rechtlicheHinweise = getRechtlicheHinweise(landkreis.name, seed);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Einsatzgebiete", href: "/einsatzgebiete" },
    { label: bundesland.name, href: `/einsatzgebiete/bundesland/${bundesland.slug}` },
    {
      label: landkreis.name,
      href: `/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}`,
    },
  ];

  const pageUrl = `/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}`;

  const jsonLd = generateGraphSchema({
    pageType: "landkreis",
    breadcrumbs,
    bundesland,
    landkreis,
    faqs,
    pageTitle: h1,
    pageDescription: getLandkreisMetaDescription(landkreis, bundesland, staedte.length),
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
          <KeyTakeaways
            items={[
              `<strong>Einsatzgebiet:</strong> Gesamter ${landkreis.name}`,
              `<strong>Leistungen:</strong> Privatdetektei & Wirtschaftsdetektei`,
              `<strong>Kosten:</strong> Individuell nach Fall und Aufwand – jetzt anrufen`,
              `<strong>Beweise:</strong> Gerichtsverwertbar & DSGVO-konform`,
            ]}
          />

          {/* Städte im Landkreis */}
          {staedte.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-primary-900">
                    Städte im {landkreis.name} mit Detektei-Service
                  </h2>
                  <p className="text-sm text-primary-500">
                    Klicken Sie auf eine Stadt für lokale Informationen
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {staedte
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((stadt) => (
                    <Link
                      key={stadt.id}
                      href={`/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}/${stadt.slug}`}
                      className="group flex items-center justify-between p-4 bg-primary-50 rounded-lg border border-primary-100 hover:border-primary-300 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <span className="font-semibold text-primary-900 group-hover:text-primary-700">
                        {stadt.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* Kleine Gemeinden */}
          {kleineGemeinden.length > 0 && (
            <div className="mt-8 p-4 bg-accent-50 rounded-lg border border-accent-200">
              <p className="text-sm text-primary-700">
                <strong>Auch in kleineren Gemeinden:</strong> Wir 
                führen Ermittlungen auch in {kleineGemeinden.slice(0, 5).join(", ")}
                {kleineGemeinden.length > 5 &&
                  ` und ${kleineGemeinden.length - 5} weiteren Orten`}{" "}
                durch.
              </p>
            </div>
          )}

          {/* Services */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
              Detektei-Leistungen im {landkreis.name}
            </h2>
            <p className="text-primary-600 mb-6">
              <strong>Kurz:</strong> Detektei Base bietet im {landkreis.name} 
              das gesamte Spektrum der Privatdetektei und Wirtschaftsdetektei – 
              diskret, professionell und gerichtsverwertbar.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <ServicesList type="privat" />
              <ServicesList type="wirtschaft" />
            </div>
          </div>

          {/* Warum Detektei Base */}
          <div className="mt-16">
            <WarumLokal
              title={`Warum Detektei Base für den ${landkreis.name}?`}
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
              Kosten für Detektiv-Einsätze im {landkreis.name}
            </h2>
            <p className="text-primary-600 mb-6">
              <strong>Kurz:</strong> Die Kosten für einen Privatdetektiv im {landkreis.name}{" "}
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

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
              Häufige Fragen zur Detektei im {landkreis.name}
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>

          {/* CTA */}
          <div className="mt-16">
            <CTABox
              title={`Detektei im ${landkreis.name} kontaktieren`}
              description="Jetzt anrufen – unverbindlich"
              variant="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}
