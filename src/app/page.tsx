import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { FAQSection } from "@/components/home/FAQSection";
import { generateHomepageSchema } from "@/lib/schemas/homepage";

// ============================================
// STARTSEITEN-SPEZIFISCHE METADATA
// ============================================

export const metadata: Metadata = {
  title: "Detektei Base | Professionelle Ermittlungen deutschlandweit",
  description:
    "Detektei Base – Professionelle Ermittlungen. Privatdetektei und Wirtschaftsdetektei für diskrete Aufklärung mit gerichtsverwertbaren Beweisen. Zusätzlich mit geprüften Partnern deutschlandweit.",
  keywords: [
    "Detektei",
    "Privatdetektiv",
    "Privatdetektei",
    "Wirtschaftsdetektei",
    "Beweissicherung",
    "Observation",
    "Personensuche",
    "Untreue Ermittlung",
    "Ermittlungen",
    "Detektei Deutschland",
  ],
  alternates: {
    canonical: "https://detektei-base.de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://detektei-base.de",
    siteName: "Detektei Base",
    title: "Detektei Base | Professionelle Ermittlungen deutschlandweit",
    description:
      "Detektei Base – Professionelle Ermittlungen. Privatdetektei & Wirtschaftsdetektei, zusätzlich mit geprüften Partnern.",
    images: [
      {
        url: "https://detektei-base.de/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Detektei Base – Ihr Netzwerk für geprüfte Privatdetektive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Detektei Base | Professionelle Ermittlungen deutschlandweit",
    description:
      "Detektei Base – Professionelle Ermittlungen. Privatdetektei & Wirtschaftsdetektei deutschlandweit.",
    images: ["https://detektei-base.de/images/og-homepage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  const jsonLd = generateHomepageSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />
      <TrustIndicators />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
