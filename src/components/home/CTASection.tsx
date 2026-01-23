import Link from "next/link";
import { Phone, Mail, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-1.5 text-sm text-accent-300 mb-6">
          <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
          <span>Kostenlose Erstberatung</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
          Lassen Sie uns über Ihren Fall sprechen
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto">
          Vertraulich, unverbindlich und kostenfrei. Als zertifizierter 
          Ermittler und Kriminalist berate ich Sie diskret zu Ihren Möglichkeiten.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-8 py-4 text-base font-semibold text-primary-900 shadow-lg hover:bg-accent-400 transition-all hover:shadow-xl"
          >
            Jetzt Kontakt aufnehmen
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href="tel:+4917666918653"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/20 transition-all"
          >
            <Phone className="h-5 w-5" />
            <span>0176 66918653</span>
          </a>
        </div>

        {/* Contact Options */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-300">
          <a
            href="mailto:kontakt@detektei-base.de"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>kontakt@detektei-base.de</span>
          </a>
          <span className="hidden sm:inline text-primary-600">|</span>
          <span>Mo-Fr 8-20 Uhr, Sa 9-16 Uhr</span>
        </div>

        {/* Trust Note */}
        <p className="mt-8 text-xs text-primary-400">
          Alle Anfragen werden vertraulich behandelt. Keine Weitergabe an
          Dritte.
        </p>
      </div>
    </section>
  );
}
