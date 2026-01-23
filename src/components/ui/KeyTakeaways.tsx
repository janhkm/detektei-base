import { Lightbulb } from "lucide-react";

interface KeyTakeawaysProps {
  items: string[];
}

export function KeyTakeaways({ items }: KeyTakeawaysProps) {
  return (
    <div className="my-8 rounded-xl bg-accent-50 border border-accent-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-accent-500 rounded-lg flex items-center justify-center">
          <Lightbulb className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-lg font-display font-bold text-primary-900">
          Das Wichtigste im Überblick
        </h2>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-primary-700">
            <span className="text-accent-600 font-bold mt-0.5">•</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}
