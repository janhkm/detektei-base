import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";
import { SkipLink } from "@/components/layout/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://detektei-base.de"),
  title: {
    default: "Detektei Oliver Peth | Zertifizierter Ermittler & Kriminalist",
    template: "%s | Detektei Peth",
  },
  description:
    "Oliver Peth – Zertifizierter Ermittler, Kriminalist und Profiler. Diskrete Privatdetektei und Wirtschaftsdetektei mit gerichtsverwertbarer Beweissicherung. Deutschlandweit.",
  keywords: [
    "Detektei",
    "Oliver Peth",
    "Privatdetektiv",
    "Wirtschaftsdetektei",
    "Ermittler",
    "Kriminalist",
    "Profiler",
    "Beweissicherung",
  ],
  authors: [{ name: "Oliver Peth" }],
  creator: "Oliver Peth",
  publisher: "Detektei Oliver Peth",
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
    title: "Detektei Peth",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Detektei Oliver Peth",
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
      <body className="min-h-screen flex flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
