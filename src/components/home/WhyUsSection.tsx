import {
  Shield,
  Scale,
  Lock,
  Clock,
  Award,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "IHK-zugelassen & zertifiziert",
    description:
      "Alle unsere Detektive sind nach §34a GewO zugelassen und verfügen über die erforderlichen Sachkundenachweise.",
  },
  {
    icon: Scale,
    title: "Gerichtsverwertbare Beweise",
    description:
      "Unsere Ermittlungsberichte und Dokumentationen werden von Gerichten und Anwälten anerkannt.",
  },
  {
    icon: Lock,
    title: "Absolute Diskretion",
    description:
      "Vertraulichkeit ist oberstes Gebot. Alle Informationen werden streng vertraulich behandelt.",
  },
  {
    icon: Clock,
    title: "Schnelle Einsatzbereitschaft",
    description:
      "In dringenden Fällen können wir innerhalb von 24 Stunden mit den Ermittlungen beginnen.",
  },
  {
    icon: Award,
    title: "20+ Jahre Erfahrung",
    description:
      "Profitieren Sie von unserer langjährigen Expertise in allen Bereichen der Ermittlungsarbeit.",
  },
  {
    icon: HeartHandshake,
    title: "Transparente Kosten",
    description:
      "Keine versteckten Gebühren. Sie erhalten vorab einen detaillierten Kostenvoranschlag.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
              Warum wir?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-primary-900">
              Vertrauen Sie auf Professionalität und Erfahrung
            </h2>
            <p className="mt-4 text-lg text-primary-600 leading-relaxed">
              Als etablierte Detektei verbinden wir modernste
              Ermittlungsmethoden mit jahrzehntelanger Erfahrung. Unser Team aus
              erfahrenen Ermittlern steht Ihnen diskret und zuverlässig zur
              Seite.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-900">
                  20+
                </div>
                <div className="text-sm text-primary-500 mt-1">
                  Jahre Erfahrung
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-900">
                  2.500+
                </div>
                <div className="text-sm text-primary-500 mt-1">
                  Gelöste Fälle
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary-900">
                  98%
                </div>
                <div className="text-sm text-primary-500 mt-1">
                  Erfolgsquote
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-primary-50 rounded-xl border border-primary-100"
              >
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary-700" />
                </div>
                <h3 className="font-semibold text-primary-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-primary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
