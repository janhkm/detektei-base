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
  title: "Detektei finden | Geprüfte Privatdetektive deutschlandweit | Detektei Base",
  description:
    "Finden Sie sofort die richtige Detektei für Ihren Fall. Wir vermitteln Sie kostenlos an geprüfte Partner-Detekteien mit langjähriger Erfahrung – diskret und schnell an zertifizierte Ermittler in Ihrer Region.",
  keywords: [
    "Detektei finden",
    "Privatdetektiv",
    "Detektei Vermittlung",
    "Wirtschaftsdetektei",
    "Beweissicherung",
    "Observation",
    "Personensuche",
    "Untreue Ermittlung",
    "Detektiv Deutschland",
    "geprüfte Detektei",
  ],
  alternates: {
    canonical: "https://detektei-base.de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://detektei-base.de",
    siteName: "Detektei Base",
    title: "Detektei finden | Geprüfte Privatdetektive deutschlandweit",
    description:
      "Finden Sie sofort die richtige Detektei. Kostenlose Vermittlung an geprüfte Partner-Detekteien – diskret und schnell.",
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
    title: "Detektei finden | Geprüfte Privatdetektive deutschlandweit",
    description:
      "Finden Sie sofort die richtige Detektei. Kostenlose Vermittlung an geprüfte Partner-Detekteien deutschlandweit.",
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
