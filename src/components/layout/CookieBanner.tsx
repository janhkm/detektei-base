"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Script from "next/script";

const GA_MEASUREMENT_ID = "G-D2H0E6PG1D";

type ConsentStatus = "pending" | "accepted" | "rejected";

// Globale Funktion zum Öffnen der Cookie-Einstellungen
let openCookieSettingsCallback: (() => void) | null = null;

export function openCookieSettings() {
  if (openCookieSettingsCallback) {
    openCookieSettingsCallback();
  }
}

export function CookieBanner() {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [showBanner, setShowBanner] = useState(false);

  const showSettings = useCallback(() => {
    setShowBanner(true);
  }, []);

  useEffect(() => {
    // Registriere die Callback-Funktion
    openCookieSettingsCallback = showSettings;
    
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
    
    return () => {
      openCookieSettingsCallback = null;
    };
  }, [showSettings]);

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
                {/* DSGVO-konform: Beide Buttons müssen gleichwertig gestaltet sein */}
                <button
                  onClick={handleReject}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-primary-700 hover:bg-primary-600 rounded-lg transition-colors border border-primary-600"
                >
                  Ablehnen
                </button>
                <button
                  onClick={handleAccept}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-primary-700 hover:bg-primary-600 rounded-lg transition-colors border border-primary-600"
                >
                  Akzeptieren
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
