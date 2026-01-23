import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Clock, CheckCircle } from "lucide-react";

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
              <Shield className="h-4 w-4 text-accent-400" />
              <span>Zertifizierter Ermittler & Kriminalist</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight">
              <span className="text-accent-400">Privatdetektiv</span> & Detektei 
              Oliver Peth
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-primary-200 leading-relaxed max-w-xl mx-auto lg:mx-0 hero-description">
              Ihr <strong>Privatdetektiv</strong> für diskrete Ermittlungen. 
              Zertifizierter Ermittler, Kriminalist und Profiler mit 
              gerichtsverwertbarer Beweissicherung – deutschlandweit im Einsatz.
            </p>

            {/* Trust Logos */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <span className="text-xs text-primary-400 mr-2 hidden sm:inline">Zertifizierter Ermittler</span>
              <div className="flex items-center gap-3 sm:gap-5">
                <Image 
                  src="/images/dgfk-deutsche-gesellschaft-kriminalistik.png" 
                  alt="DGfK – Deutsche Gesellschaft für Kriminalistik Mitglied" 
                  width={80}
                  height={32}
                  className="h-6 sm:h-8 w-auto opacity-90 hover:opacity-100 transition-opacity rounded bg-white/90 p-1"
                />
                <Image 
                  src="/images/zad-zentralstelle-ausbildung-detektivgewerbe.jpg" 
                  alt="ZAD – Zentralstelle für die Ausbildung im Detektivgewerbe zertifiziert" 
                  width={90}
                  height={36}
                  className="h-7 sm:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity rounded bg-white/90 p-1"
                />
                <Image 
                  src="/images/ihk-sachkunde-34a-gewo.png" 
                  alt="IHK Sachkundeprüfung nach §34a GewO – Detektei Oliver Peth" 
                  width={90}
                  height={36}
                  className="h-7 sm:h-9 w-auto opacity-90 hover:opacity-100 transition-opacity rounded"
                />
                <Image 
                  src="/images/wad-world-association-detectives.jpg" 
                  alt="W.A.D. – World Association of Detectives Member" 
                  width={90}
                  height={36}
                  className="h-7 sm:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity rounded bg-white/90 p-1"
                />
                <Image 
                  src="/images/vdp-polizei-dein-partner.png" 
                  alt="VDP – Polizei Dein Partner Unterstützer" 
                  width={40}
                  height={40}
                  className="h-8 sm:h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* USP List */}
            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto lg:mx-0">
              {[
                "Kostenlose & unverbindliche Erstberatung",
                "Gerichtsverwertbare Dokumentation",
                "100% Diskretion garantiert",
                "Transparente Kostenstruktur",
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
                className="inline-flex items-center justify-center rounded-lg bg-accent-500 px-6 py-3.5 text-base font-semibold text-primary-900 shadow-lg hover:bg-accent-400 transition-all hover:shadow-xl"
              >
                Kostenlose Beratung anfragen
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

          {/* Image/Visual - Mobile */}
          <div className="relative lg:hidden mt-8">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-xl max-w-md mx-auto">
              <Image 
                src="/images/oliver-peth-detektiv.jpg" 
                alt="Oliver Peth – Privatdetektiv und zertifizierter Ermittler" 
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent" />
              {/* Mobile Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-semibold text-primary-900">
                  IHK-zugelassen
                </div>
                <div className="bg-accent-500 rounded-lg px-3 py-1.5 text-xs font-semibold text-primary-900">
                  Zertifizierter Profiler
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual - Desktop */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/oliver-peth-detektiv.jpg" 
                alt="Oliver Peth – Privatdetektiv und zertifizierter Ermittler, Kriminalist und Profiler" 
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-900">
                    Oliver Peth & Partner
                  </p>
                  <p className="text-xs text-primary-500">
                    Zertifizierter Profiler
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-accent-500 text-primary-900 rounded-lg shadow-lg px-4 py-2 text-sm font-semibold">
              IHK-zugelassen
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
