import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerNavigation = {
  leistungen: [
    { name: "Privatdetektei", href: "/privatdetektei" },
    { name: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei" },
    { name: "Einsatzgebiete", href: "/einsatzgebiete" },
  ],
  unternehmen: [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Blog", href: "/blog" },
    { name: "Ablauf", href: "/ablauf" },
    { name: "Kosten", href: "/kosten" },
    { name: "Kontakt", href: "/kontakt" },
  ],
  rechtliches: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
    { name: "Rechtliche Hinweise", href: "/rechtliches" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-primary-200" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Brand & Contact */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2" aria-label="Detektei Base - Zur Startseite">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center" aria-hidden="true">
                  <span className="text-primary-900 font-display font-bold text-lg">
                    DB
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-display text-lg font-bold text-white leading-tight">
                    Detektei Base
                  </span>
                  <span className="text-xs text-primary-400">
                    Zertifizierter Ermittler
                  </span>
                </div>
              </Link>
              <p className="mt-4 text-sm text-primary-300 leading-relaxed">
                Oliver Peth – Zertifizierter Ermittler, Kriminalist und Profiler.
                Diskrete Ermittlungen mit gerichtsverwertbaren Beweisen.
              </p>
              <address className="mt-6 space-y-3 not-italic">
                <a
                  href="tel:+4917666918653"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  aria-label="Telefon: 0176 66918653"
                >
                  <Phone className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  <span>0176 66918653</span>
                </a>
                <a
                  href="mailto:kontakt@detektei-base.de"
                  className="flex items-center gap-3 text-sm hover:text-white transition-colors"
                  aria-label="E-Mail: kontakt@detektei-base.de"
                >
                  <Mail className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  <span>kontakt@detektei-base.de</span>
                </a>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-accent-500 mt-0.5" aria-hidden="true" />
                  <span>Deutschlandweit im Einsatz</span>
                </div>
              </address>
            </div>

            {/* Navigation Links */}
            <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3" aria-label="Footer-Navigation">
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider" id="footer-leistungen">
                  Leistungen
                </h3>
                <ul className="mt-4 space-y-3" aria-labelledby="footer-leistungen">
                  {footerNavigation.leistungen.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider" id="footer-unternehmen">
                  Unternehmen
                </h3>
                <ul className="mt-4 space-y-3" aria-labelledby="footer-unternehmen">
                  {footerNavigation.unternehmen.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider" id="footer-rechtliches">
                  Rechtliches
                </h3>
                <ul className="mt-4 space-y-3" aria-labelledby="footer-rechtliches">
                  {footerNavigation.rechtliches.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-primary-800 py-8">
          <ul className="flex flex-wrap justify-center gap-8 text-xs text-primary-400" aria-label="Vertrauensmerkmale">
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>IHK-zugelassen</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>DSGVO-konform</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Gerichtsverwertbare Beweise</span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Kostenlose Erstberatung</span>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-800 py-6">
          <p className="text-center text-xs text-primary-400">
            &copy; {currentYear} Detektei Base. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
