"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-D2H0E6PG1D";

type ConsentStatus = "pending" | "accepted" | "rejected";

export function CookieBanner() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Prüfe ob bereits eine Entscheidung getroffen wurde
    const storedConsent = localStorage.getItem("cookie-consent");
    if (storedConsent === "accepted") {
      setConsentStatus("accepted");
      setShowBanner(false);
    } else if (storedConsent === "rejected") {
      setConsentStatus("rejected");
      setShowBanner(false);
    } else {
      // Noch keine Entscheidung - Banner anzeigen
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsentStatus("accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setConsentStatus("rejected");
    setShowBanner(false);
  };

  return (
    <>
      {/* Google Analytics - nur laden wenn akzeptiert */}
      {consentStatus === "accepted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary-950 border-t border-primary-800 shadow-2xl">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-primary-200 leading-relaxed">
                  Wir verwenden Cookies und Google Analytics, um unsere Website zu
                  verbessern und die Nutzung zu analysieren. Mit Klick auf
                  &quot;Akzeptieren&quot; stimmen Sie der Verwendung von Analyse-Cookies zu.
                  Weitere Informationen finden Sie in unserer{" "}
                  <Link
                    href="/datenschutz"
                    className="text-accent-400 underline hover:text-accent-300"
                  >
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 lg:flex-shrink-0">
                <button
                  onClick={handleReject}
                  className="px-5 py-2.5 text-sm font-medium text-primary-300 bg-primary-800 hover:bg-primary-700 rounded-lg transition-colors border border-primary-700"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 text-sm font-medium text-primary-900 bg-accent-500 hover:bg-accent-400 rounded-lg transition-colors"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Hook zum Prüfen des Consent-Status (für andere Komponenten)
export function useAnalyticsConsent() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    setHasConsent(consent === "accepted");
  }, []);

  return hasConsent;
}
