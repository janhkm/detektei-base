import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SkipLink } from "@/components/layout/SkipLink";
import { CookieBanner } from "@/components/layout/CookieBanner";

// ============================================================================
// FONT OPTIMIZATION
// ============================================================================

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  // Preload nur die wichtigsten Gewichte
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  preload: true,
  // Nur benötigte Gewichte laden
  weight: ["400", "700"],
});

// ============================================================================
// VIEWPORT CONFIGURATION
// ============================================================================

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1e3a5f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://detektei-base.de"),
  title: {
    default: "Detektei finden | Geprüfte Privatdetektive deutschlandweit",
    template: "%s | Detektei Base",
  },
  description:
    "Finden Sie sofort die richtige Detektei für Ihren Fall. Unser Netzwerk aus geprüften Partner-Detekteien vermittelt Sie diskret und schnell an erfahrene Ermittler in Ihrer Region.",
  keywords: [
    "Detektei finden",
    "Privatdetektiv",
    "Wirtschaftsdetektei",
    "Detektei Vermittlung",
    "Ermittler",
    "Observation",
    "Beweissicherung",
    "Detektei Deutschland",
  ],
  authors: [{ name: "Detektei Base" }],
  creator: "Detektei Base",
  publisher: "Detektei Base",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Detektei Base",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Detektei Base",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      {/* 
        HINWEIS: Keine preconnect/dns-prefetch zu Google Fonts!
        Next.js next/font/google hostet Fonts automatisch lokal zur Build-Zeit.
        Manuelle Links zu Google-Servern würden IP-Adressen ohne Einwilligung übertragen (DSGVO-Verstoß).
        Google Tag Manager wird nur nach Cookie-Consent geladen.
      */}
      <body className="min-h-screen flex flex-col antialiased">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
        <MobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
