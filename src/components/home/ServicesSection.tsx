import Link from "next/link";
import {
  Heart,
  Building2,
  Search,
  Users,
  FileSearch,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

const privateServices = [
  {
    icon: Heart,
    title: "Untreue & Fremdgehen",
    description:
      "Diskrete Observation bei Verdacht auf Untreue. Gerichtsverwertbare Beweise für Scheidungsverfahren.",
    href: "/privatdetektei/untreue",
  },
  {
    icon: Search,
    title: "Personensuche",
    description:
      "Professionelle Suche nach vermissten Personen, Schuldnern oder Erben. Weltweite Recherche.",
    href: "/privatdetektei/personensuche",
  },
  {
    icon: Users,
    title: "Sorgerecht & Unterhalt",
    description:
      "Beweissicherung bei Unterhaltsbetrug oder Verletzung von Sorgerechtspflichten.",
    href: "/privatdetektei/sorgerecht",
  },
];

const businessServices = [
  {
    icon: Building2,
    title: "Mitarbeiterüberprüfung",
    description:
      "Pre-Employment Screening und Background Checks für sichere Personalentscheidungen.",
    href: "/wirtschaftsdetektei/mitarbeiterpruefung",
  },
  {
    icon: ShieldAlert,
    title: "Betrug & Diebstahl",
    description:
      "Aufklärung von Unterschlagung, Inventurdifferenzen und internem Betrug.",
    href: "/wirtschaftsdetektei/betrug",
  },
  {
    icon: FileSearch,
    title: "Krankfeiermissbrauch",
    description:
      "Observation bei Verdacht auf vorgetäuschte Arbeitsunfähigkeit.",
    href: "/wirtschaftsdetektei/krankfeier",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
            Unsere Leistungen
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-primary-900">
            Professionelle Ermittlungen für jeden Bedarf
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            Von privaten Angelegenheiten bis hin zu komplexen
            Wirtschaftsermittlungen – wir bieten maßgeschneiderte Lösungen mit
            höchster Diskretion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Privatdetektei */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary-700" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary-900">
                  Privatdetektei
                </h3>
                <p className="text-sm text-primary-500">
                  Für private Angelegenheiten
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {privateServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block p-5 bg-primary-50/50 rounded-xl border border-primary-100 hover:bg-primary-50 hover:border-primary-200 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                      <service.icon className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary-900 group-hover:text-primary-700 transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h4>
                      <p className="mt-1 text-sm text-primary-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/privatdetektei"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors"
            >
              Alle Privatdetektei-Leistungen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Wirtschaftsdetektei */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-accent-700" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-primary-900">
                  Wirtschaftsdetektei
                </h3>
                <p className="text-sm text-primary-500">
                  Für Unternehmen & Selbstständige
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {businessServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block p-5 bg-accent-50/50 rounded-xl border border-accent-100 hover:bg-accent-50 hover:border-accent-200 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0 group-hover:shadow-md transition-shadow">
                      <service.icon className="h-5 w-5 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary-900 group-hover:text-primary-700 transition-colors flex items-center gap-2">
                        {service.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h4>
                      <p className="mt-1 text-sm text-primary-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/wirtschaftsdetektei"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-accent-700 hover:text-accent-800 transition-colors"
            >
              Alle Wirtschaftsdetektei-Leistungen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
