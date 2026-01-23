import { FileText } from "lucide-react";

interface Case {
  title: string;
  description: string;
}

interface TypischeFaelleProps {
  title: string;
  cases: Case[];
}

export function TypischeFaelle({ title, cases }: TypischeFaelleProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
          <FileText className="h-5 w-5 text-accent-700" />
        </div>
        <h2 className="text-2xl font-display font-bold text-primary-900">
          {title}
        </h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((caseItem, index) => (
          <div
            key={index}
            className="bg-primary-50 rounded-xl p-6 border border-primary-100"
          >
            <h3 className="font-display font-bold text-primary-900 mb-2">
              {caseItem.title}
            </h3>
            <p className="text-primary-600 text-sm leading-relaxed">
              {caseItem.description}
            </p>
          </div>
        ))}
      </div>
      
      <p className="mt-4 text-xs text-primary-400 italic">
        * Alle Fallbeispiele sind anonymisiert und dienen der Veranschaulichung unserer Arbeit.
      </p>
    </div>
  );
}
