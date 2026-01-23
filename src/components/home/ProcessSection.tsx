import { Phone, FileText, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Kostenlose Erstberatung",
    description:
      "Schildern Sie uns Ihren Fall vertraulich. Wir analysieren die Situation und beraten Sie zu den Möglichkeiten.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Auftragserteilung",
    description:
      "Nach Ihrer Zustimmung erstellen wir einen transparenten Kostenvoranschlag und Auftragsvertrag.",
  },
  {
    step: "03",
    icon: Search,
    title: "Ermittlung & Observation",
    description:
      "Unsere erfahrenen Detektive führen die Ermittlungen diskret und professionell durch.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Ergebnisbericht",
    description:
      "Sie erhalten einen detaillierten, gerichtsverwertbaren Bericht mit allen relevanten Beweisen.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent-600 uppercase tracking-wider">
            Unser Ablauf
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-primary-900">
            So arbeiten wir für Sie
          </h2>
          <p className="mt-4 text-lg text-primary-600">
            Ein strukturierter Prozess für maximale Effizienz und Transparenz –
            von der ersten Beratung bis zum fertigen Ermittlungsbericht.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100 hover:shadow-md transition-shadow h-full">
                  {/* Step Number */}
                  <div className="relative z-10 w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center mb-5 -mt-10 ml-auto mr-auto lg:ml-0 lg:mr-0">
                    <span className="text-white font-bold text-sm">
                      {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="h-7 w-7 text-primary-700" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/ablauf"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors"
          >
            Mehr zum Ermittlungsablauf erfahren
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
