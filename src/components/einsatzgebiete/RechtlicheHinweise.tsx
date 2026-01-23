import { Scale, Check, X } from "lucide-react";

interface RechtlicheHinweiseProps {
  intro: string;
  erlaubt: string[];
  verboten: string[];
}

export function RechtlicheHinweise({ intro, erlaubt, verboten }: RechtlicheHinweiseProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          <Scale className="h-5 w-5 text-primary-700" />
        </div>
        <h2 className="text-2xl font-display font-bold text-primary-900">
          Rechtliche Grundlagen
        </h2>
      </div>
      
      <p className="text-primary-600 leading-relaxed mb-6">
        {intro}
      </p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Erlaubt */}
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <h3 className="font-display font-bold text-green-800 mb-4 flex items-center gap-2">
            <Check className="h-5 w-5" />
            Was Detektive dürfen
          </h3>
          <ul className="space-y-2">
            {erlaubt.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-green-700"
              >
                <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Verboten */}
        <div className="bg-red-50 rounded-xl p-6 border border-red-200">
          <h3 className="font-display font-bold text-red-800 mb-4 flex items-center gap-2">
            <X className="h-5 w-5" />
            Was verboten ist
          </h3>
          <ul className="space-y-2">
            {verboten.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-red-700"
              >
                <X className="h-4 w-4 mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
