import { PriceItem } from "@/data/types";

interface PriceTableProps {
  prices: PriceItem[];
  className?: string;
}

export function PriceTable({ prices, className }: PriceTableProps) {
  return (
    <div className={className}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary-50">
              <th className="text-left p-4 font-semibold text-primary-900 border-b border-primary-200">
                Leistung
              </th>
              <th className="text-left p-4 font-semibold text-primary-900 border-b border-primary-200">
                Preisspanne
              </th>
              <th className="text-left p-4 font-semibold text-primary-900 border-b border-primary-200">
                Dauer
              </th>
            </tr>
          </thead>
          <tbody>
            {prices.map((price, index) => (
              <tr
                key={index}
                className="border-b border-primary-100 hover:bg-primary-50/50 transition-colors"
              >
                <td className="p-4 text-primary-700">{price.service}</td>
                <td className="p-4 font-medium text-primary-900">
                  {price.priceRange}
                </td>
                <td className="p-4 text-primary-500">{price.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-primary-500">
        * Alle Preise verstehen sich zzgl. Spesen und MwSt. Individuelle
        Kostenvoranschläge auf Anfrage.
      </p>
    </div>
  );
}
