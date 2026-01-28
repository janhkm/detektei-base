import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Clock, CheckCircle, Users, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm mb-6">
              <Users className="h-4 w-4 text-accent-400" />
              <span>Privatdetektei | Wirtschaftsdetektei</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              Professionelle <span className="text-accent-400">Ermittlungen</span> für Ihren Fall
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-primary-200 leading-relaxed max-w-xl mx-auto lg:mx-0 hero-description">
              <strong>Detektei Base – Ihre Detektei.</strong> Wir führen professionelle Ermittlungen durch – 
              Privatdetektei und Wirtschaftsdetektei. Zusätzlich arbeiten wir mit geprüften Partnern 
              deutschlandweit für gerichtsverwertbare Beweissicherung.
            </p>

            {/* Trust Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400">24h</div>
                <div className="text-xs sm:text-sm text-primary-300">Schnelle Reaktionszeit</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-accent-400">100%</div>
                <div className="text-xs sm:text-sm text-primary-300">Geprüfte Partner</div>
              </div>
            </div>

            {/* USP List */}
            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {[
                "Rund um die Uhr erreichbar",
                "Privatdetektei & Wirtschaftsdetektei",
                "Zusätzlich geprüfte Partner deutschlandweit",
                "Gerichtsverwertbare Beweise",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white">
                  <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-base font-semibold text-primary-900 shadow-lg hover:bg-accent-400 transition-all hover:shadow-xl"
              >
                <Zap className="h-5 w-5" />
                Jetzt kontaktieren
              </Link>
              <a
                href="tel:+4917666918653"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                <Phone className="h-5 w-5" />
                <span>0176 66918653</span>
              </a>
            </div>

            {/* Availability */}
            <div className="mt-8 flex items-center gap-2 justify-center lg:justify-start text-sm text-primary-300">
              <Clock className="h-4 w-4" />
              <span>Erreichbar: Mo-Fr 8-20 Uhr, Sa 9-16 Uhr</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/sasun-bughdaryan-Qwv7JPI03VQ-unsplash.jpg"
                alt="Lupe auf Zielscheibe symbolisiert präzise Detektei-Ermittlungen und zielgerichtete Beweissicherung"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent-500 text-primary-900 rounded-lg shadow-lg px-4 py-2 text-sm font-semibold">
              Alle geprüft
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Präzise Ermittlungen
                  </p>
                  <p className="text-xs text-primary-500">
                    Gerichtsverwertbare Beweise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Hero Image */}
          <div className="relative lg:hidden mt-8">
            <div className="relative rounded-xl overflow-hidden shadow-xl max-w-md mx-auto">
              <Image
                src="/images/sasun-bughdaryan-Qwv7JPI03VQ-unsplash.jpg"
                alt="Lupe auf Zielscheibe symbolisiert präzise Detektei-Ermittlungen und zielgerichtete Beweissicherung"
                width={400}
                height={267}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white font-semibold text-sm">
                  Professionelle Ermittlungen deutschlandweit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 100V60C240 20 480 0 720 0C960 0 1200 20 1440 60V100H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
