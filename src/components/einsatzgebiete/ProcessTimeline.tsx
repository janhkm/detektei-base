import { Phone, FileText, Search, CheckCircle, FileCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Kostenlose Anfrage",
    description: "Schildern Sie Ihren Fall vertraulich per Telefon oder E-Mail.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Vermittlung an Partner",
    description: "Wir finden die passende Detektei und stellen den Kontakt her.",
  },
  {
    step: "03",
    icon: Search,
    title: "Ermittlung",
    description: "Die Partner-Detektei führt die Ermittlungen diskret durch.",
  },
  {
    step: "04",
    icon: FileCheck,
    title: "Beweissicherung",
    description: "Alle Beweise werden gerichtsverwertbar dokumentiert.",
  },
  {
    step: "05",
    icon: CheckCircle,
    title: "Abschlussbericht",
    description: "Sie erhalten einen detaillierten Ermittlungsbericht.",
  },
];

interface ProcessTimelineProps {
  stadtName?: string;
  className?: string;
}

export function ProcessTimeline({ stadtName, className }: ProcessTimelineProps) {
  return (
    <div className={className}>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 hidden sm:block" />

        <div className="space-y-6">
          {steps.map((item, index) => (
            <div key={index} className="relative flex gap-4 sm:gap-6">
              {/* Step Number */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <item.icon className="h-5 w-5 text-primary-600" />
                  <h3 className="font-display font-bold text-primary-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-primary-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-200">
        <p className="text-sm text-primary-700">
          <strong>Schnellstart möglich:</strong> In dringenden Fällen können 
          Partner-Detekteien innerhalb von 24 Stunden{stadtName ? ` in ${stadtName}` : ""} mit den
          Ermittlungen beginnen.
        </p>
      </div>
    </div>
  );
}
