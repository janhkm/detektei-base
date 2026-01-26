import { Shield, Award, Clock, Users, Scale, Lock } from "lucide-react";

const indicators = [
  {
    icon: Shield,
    label: "Geprüfte Partner",
    description: "Erfahrene Ermittler",
  },
  {
    icon: Scale,
    label: "Gerichtsverwertbar",
    description: "Rechtssichere Beweise",
  },
  {
    icon: Lock,
    label: "100% Diskret",
    description: "Vertrauliche Vermittlung",
  },
  {
    icon: Clock,
    label: "24h Vermittlung",
    description: "Schnelle Reaktionszeit",
  },
  {
    icon: Users,
    label: "Deutschlandweit",
    description: "Partner-Netzwerk",
  },
  {
    icon: Award,
    label: "Kostenlos",
    description: "Vermittlung für Sie",
  },
];

export function TrustIndicators() {
  return (
    <section className="py-8 bg-primary-50 border-y border-primary-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-3"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                <item.icon className="h-5 w-5 text-primary-700" />
              </div>
              <p className="text-sm font-semibold text-primary-900">
                {item.label}
              </p>
              <p className="text-xs text-primary-500 mt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
