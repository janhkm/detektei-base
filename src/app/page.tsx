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
  title: "Privatdetektiv & Detektei Oliver Peth | Zertifizierter Ermittler Deutschland",
  description:
    "Oliver Peth – Ihr Privatdetektiv und zertifizierter Ermittler, Kriminalist & Profiler. Diskrete Detektei mit gerichtsverwertbarer Beweissicherung. Kostenlose Erstberatung. Deutschlandweit.",
  keywords: [
    "Privatdetektiv",
    "Detektei",
    "Oliver Peth",
    "Ermittler",
    "Kriminalist",
    "Profiler",
    "Wirtschaftsdetektei",
    "Beweissicherung",
    "Observation",
    "Personensuche",
    "Untreue",
    "Detektiv Deutschland",
  ],
  alternates: {
    canonical: "https://detektei-base.de",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://detektei-base.de",
    siteName: "Detektei Oliver Peth",
    title: "Privatdetektiv & Detektei Oliver Peth | Zertifizierter Ermittler",
    description:
      "Oliver Peth – Ihr Privatdetektiv und zertifizierter Ermittler. Diskrete Detektei mit gerichtsverwertbarer Beweissicherung. Deutschlandweit im Einsatz.",
    images: [
      {
        url: "https://detektei-base.de/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Detektei Oliver Peth – Privatdetektiv und zertifizierter Ermittler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privatdetektiv & Detektei Oliver Peth",
    description:
      "Zertifizierter Ermittler, Kriminalist & Profiler. Diskrete Ermittlungen mit gerichtsverwertbarer Beweissicherung.",
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
