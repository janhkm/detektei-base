import { MapPin } from "lucide-react";

interface WarumLokalProps {
  title: string;
  text: string;
  benefits?: string[];
}

const DEFAULT_BENEFITS = [
  "Schnelle Einsatzbereitschaft – deutschlandweit",
  "Erfahrung mit regionalen Gegebenheiten",
  "Transparente Kostenstruktur",
  "Bundesweites Netzwerk für Recherchen",
  "Flexible Einsatzplanung möglich",
];

export function WarumLokal({ title, text, benefits = DEFAULT_BENEFITS }: WarumLokalProps) {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border border-primary-100">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
          <MapPin className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-display font-bold text-primary-900">
          {title}
        </h2>
      </div>
      
      <p className="text-primary-700 leading-relaxed mb-6">
        {text}
      </p>
      
      <div className="grid sm:grid-cols-2 gap-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-primary-700"
          >
            <span className="text-accent-600 font-bold">✓</span>
            {benefit}
          </div>
        ))}
      </div>
    </div>
  );
}
