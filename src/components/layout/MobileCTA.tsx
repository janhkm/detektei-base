"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, X } from "lucide-react";

export function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div 
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 animate-slide-up"
      role="complementary"
      aria-label="Kontaktoptionen"
    >
      {/* Dismiss button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="absolute -top-10 right-4 w-8 h-8 bg-primary-800 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
        aria-label="Kontaktleiste schließen"
      >
        <X className="h-4 w-4" />
      </button>

      {/* CTA Bar */}
      <div className="bg-primary-900 border-t border-primary-700 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-center gap-3">
          {/* Call Button */}
          <a
            href="tel:+4917666918653"
            className="flex-1 flex items-center justify-center gap-2 bg-accent-500 text-primary-900 font-semibold py-3 px-4 rounded-lg hover:bg-accent-400 active:scale-[0.98] transition-all"
            aria-label="Jetzt anrufen"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>Anrufen</span>
          </a>

          {/* Contact Button */}
          <Link
            href="/kontakt"
            className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white font-semibold py-3 px-4 rounded-lg border border-white/20 hover:bg-white/20 active:scale-[0.98] transition-all"
            aria-label="Kontaktformular öffnen"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>Kontakt</span>
          </Link>
        </div>

        {/* Trust indicator */}
        <p className="text-center text-xs text-primary-300 mt-2">
          Geprüfte Partner-Detekteien deutschlandweit
        </p>
      </div>
    </div>
  );
}
