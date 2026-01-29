import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import {
  getBundeslandPageData,
  getAllBundeslandParams,
} from "@/data";
import { Breadcrumbs, BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";
import { getBundeslandFAQs } from "@/lib/faqs";
import { generateGraphSchema } from "@/lib/schemas/einsatzgebiete";
import {
  getBundeslandH1,
  getBundeslandTitle,
  getBundeslandMetaDescription,
} from "@/lib/content-variants";

// ============================================================================
// ISR KONFIGURATION
// ============================================================================

// Alle Bundesländer werden statisch generiert (nur 16 Seiten)
export const dynamicParams = true;
export const revalidate = 2592000; // 30 Tage in Sekunden

const SITE_URL = "https://detektei-base.de";

interface PageProps {
  params: Promise<{ bundesland: string }>;
}

export async function generateStaticParams() {
  // Alle 16 Bundesländer werden bei Build generiert
  return getAllBundeslandParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { bundesland: slug } = await params;
  const data = getBundeslandPageData(slug);
  if (!data) return {};

  const title = getBundeslandTitle(data.bundesland);
  const description = getBundeslandMetaDescription(data.bundesland);

  const pageUrl = `/einsatzgebiete/bundesland/${slug}`;

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

export default async function BundeslandPage({ params }: PageProps) {
  const { bundesland: slug } = await params;
  const data = getBundeslandPageData(slug);

  if (!data) {
    notFound();
  }

  const { bundesland, landkreise, kreisfreieStaedte } = data;
  const faqs = getBundeslandFAQs(bundesland);
  
  // Variierende Inhalte
  const h1 = getBundeslandH1(bundesland);

  const breadcrumbs: BreadcrumbItem[] = [
    { label: "Einsatzgebiete", href: "/einsatzgebiete" },
    { label: bundesland.name, href: `/einsatzgebiete/bundesland/${bundesland.slug}` },
  ];

  const pageUrl = `/einsatzgebiete/bundesland/${bundesland.slug}`;

  const jsonLd = generateGraphSchema({
    pageType: "bundesland",
    breadcrumbs,
    bundesland,
    faqs,
    pageTitle: h1,
    pageDescription: getBundeslandMetaDescription(bundesland),
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
              Sie suchen eine <strong>Detektei für {bundesland.name}</strong>?
              Detektei Base führt professionelle Ermittlungen durch – Privatdetektei 
              und Wirtschaftsdetektei mit gerichtsverwertbarer Beweissicherung. 
              Deutschlandweit tätig, schnell einsatzbereit.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KeyTakeaways
            items={[
              `<strong>Einsatzgebiet:</strong> Ganz ${bundesland.name}`,
              `<strong>Leistungen:</strong> Privatdetektei & Wirtschaftsdetektei`,
              `<strong>Kosten:</strong> 60-150€/Stunde, jetzt anrufen`,
              `<strong>Reaktionszeit:</strong> Innerhalb von 24h einsatzbereit`,
            ]}
          />

          {/* Kreisfreie Städte */}
          {kreisfreieStaedte.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-primary-900">
                    Kreisfreie Städte in {bundesland.name}
                  </h2>
                  <p className="text-sm text-primary-500">
                    Detektei Base ist in allen Großstädten tätig
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {kreisfreieStaedte
                  .sort((a, b) => b.population - a.population)
                  .map((stadt) => (
                    <Link
                      key={stadt.id}
                      href={`/einsatzgebiete/bundesland/${bundesland.slug}/${stadt.slug}`}
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

          {/* Landkreise */}
          {landkreise.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent-700" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold text-primary-900">
                    Landkreise in {bundesland.name}
                  </h2>
                  <p className="text-sm text-primary-500">
                    Ermittlungen auch in ländlichen Regionen
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {landkreise
                  .sort((a, b) => b.population - a.population)
                  .map((landkreis) => (
                    <Link
                      key={landkreis.id}
                      href={`/einsatzgebiete/bundesland/${bundesland.slug}/${landkreis.slug}`}
                      className="group flex items-center justify-between p-4 bg-accent-50/50 rounded-lg border border-accent-100 hover:border-accent-200 hover:bg-white hover:shadow-sm transition-all"
                    >
                      <span className="font-semibold text-primary-900 group-hover:text-primary-700">
                        {landkreis.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
              Häufige Fragen zu Detektei-Leistungen für {bundesland.name}
            </h2>
            <FAQAccordion faqs={faqs} />
          </div>

          {/* CTA */}
          <div className="mt-16">
            <CTABox
              title={`Detektei für ${bundesland.name} kontaktieren`}
              description="Jetzt anrufen – unverbindlich"
              variant="dark"
            />
          </div>
        </div>
      </section>
    </>
  );
}
