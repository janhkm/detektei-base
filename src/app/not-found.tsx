import Link from "next/link";
import { Home, Phone, Search, ArrowRight } from "lucide-react";

export default function NotFound() {
  const popularPages = [
    { name: "Privatdetektei", href: "/privatdetektei", description: "Ermittlungen für Privatpersonen" },
    { name: "Wirtschaftsdetektei", href: "/wirtschaftsdetektei", description: "Ermittlungen für Unternehmen" },
    { name: "Kosten", href: "/kosten", description: "Transparente Preisübersicht" },
    { name: "Einsatzgebiete", href: "/einsatzgebiete", description: "Deutschlandweit im Einsatz" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 mb-8">
            <Search className="h-10 w-10 text-accent-400" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
            404
          </h1>
          <p className="text-2xl sm:text-3xl font-display text-white/90 mb-4">
            Seite nicht gefunden
          </p>
          <p className="text-lg text-primary-200 max-w-xl mx-auto mb-10">
            Die gesuchte Seite existiert leider nicht oder wurde verschoben. 
            Keine Sorge – wir helfen Ihnen, das Richtige zu finden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3.5 text-base font-semibold text-primary-900 hover:bg-accent-400 transition-colors"
            >
              <Home className="h-5 w-5" />
              Zur Startseite
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-6 py-3.5 text-base font-semibold text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Beliebte Seiten */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-display font-bold text-primary-900 text-center mb-8">
            Vielleicht suchen Sie...
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {popularPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group p-5 bg-primary-50 rounded-xl border border-primary-100 hover:bg-white hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-primary-900 group-hover:text-primary-700">
                      {page.name}
                    </h3>
                    <p className="text-sm text-primary-600 mt-1">
                      {page.description}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary-600 mb-4">
              Sie benötigen Hilfe bei einem konkreten Anliegen?
            </p>
            <a
              href="tel:+4917666918653"
              className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-primary-700 transition-colors"
            >
              <Phone className="h-5 w-5" />
              0176 66918653
            </a>
            <p className="text-sm text-primary-500 mt-2">
              Mo-Fr 8-20 Uhr, Sa 9-16 Uhr
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
