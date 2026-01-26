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
    title: "Nur geprüfte Detekteien",
    description:
      "Alle Partner-Detekteien werden von uns sorgfältig ausgewählt und auf Qualität geprüft.",
  },
  {
    icon: Scale,
    title: "Gerichtsverwertbare Beweise",
    description:
      "Unsere Partner liefern Ermittlungsberichte und Dokumentationen, die von Gerichten anerkannt werden.",
  },
  {
    icon: Lock,
    title: "Absolute Diskretion",
    description:
      "Vertraulichkeit ist oberstes Gebot. Ihre Daten werden nur an eine ausgewählte Partner-Detektei weitergegeben.",
  },
  {
    icon: Clock,
    title: "Schnelle Vermittlung",
    description:
      "Keine Zeit verlieren: In der Regel erhalten Sie innerhalb von 24 Stunden einen Rückruf.",
  },
  {
    icon: Award,
    title: "Erfahrene Spezialisten",
    description:
      "Für jeden Fall die passende Expertise – von Observation bis Wirtschaftsermittlung.",
  },
  {
    icon: HeartHandshake,
    title: "Kostenlos für Sie",
    description:
      "Unsere Vermittlung ist komplett kostenlos. Die Konditionen vereinbaren Sie direkt mit der Detektei.",
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
              Warum Detektei Base?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-primary-900">
              Ihr Netzwerk für professionelle Ermittlungen
            </h2>
            <p className="mt-4 text-lg text-primary-600 leading-relaxed">
              Die Suche nach der richtigen Detektei ist zeitaufwendig und schwierig. 
              Wir haben das Netzwerk – Sie sparen Zeit und bekommen garantiert einen 
              kompetenten Partner für Ihren Fall.
            </p>

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
