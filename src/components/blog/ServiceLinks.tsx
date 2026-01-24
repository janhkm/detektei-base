/**
 * ServiceLinks Komponente
 * 
 * Zeigt Links zu relevanten Service-Seiten basierend auf der Artikel-Kategorie.
 * Wird verwendet, um von Blog-Artikeln auf transaktionale Seiten zu verlinken.
 */

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { getServicePagesForCategory } from "@/lib/pillar-cluster";

interface ServiceLinksProps {
  category: string;
  title?: string;
  maxLinks?: number;
  variant?: "box" | "inline" | "sidebar";
  className?: string;
}

export function ServiceLinks({
  category,
  title = "Passende Dienstleistungen",
  maxLinks = 3,
  variant = "box",
  className = "",
}: ServiceLinksProps) {
  const servicePages = getServicePagesForCategory(category).slice(0, maxLinks);

  if (servicePages.length === 0) {
    return null;
  }

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap gap-2 ${className}`}>
        {servicePages.map((page) => (
          <Link
            key={page.url}
            href={page.url}
            className="inline-flex items-center gap-1 px-3 py-1.5 bg-accent-50 text-accent-700 rounded-full text-sm font-medium hover:bg-accent-100 transition-colors"
          >
            {getServiceName(page.url)}
            <ArrowRight className="h-3 w-3" />
          </Link>
        ))}
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className={`bg-accent-50 rounded-xl p-5 ${className}`}>
        <h4 className="font-display font-bold text-primary-900 mb-4">
          {title}
        </h4>
        <ul className="space-y-2">
          {servicePages.map((page) => (
            <li key={page.url}>
              <Link
                href={page.url}
                className="group flex items-center gap-2 text-sm text-primary-700 hover:text-primary-900"
              >
                <span className="text-accent-500">→</span>
                <span className="group-hover:underline">{getServiceName(page.url)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Default: box variant
  return (
    <div className={`border border-accent-200 rounded-xl p-6 bg-gradient-to-br from-accent-50 to-white ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <ExternalLink className="h-5 w-5 text-accent-600" />
        <h3 className="font-display font-bold text-primary-900">{title}</h3>
      </div>
      
      <p className="text-sm text-primary-600 mb-4">
        Entdecken Sie unsere spezialisierten Dienstleistungen zu diesem Thema:
      </p>

      <div className="space-y-2">
        {servicePages.map((page) => (
          <Link
            key={page.url}
            href={page.url}
            className="group flex items-center justify-between p-3 bg-white rounded-lg border border-accent-100 hover:border-accent-300 hover:shadow-sm transition-all"
          >
            <span className="font-medium text-primary-900 group-hover:text-accent-700">
              {getServiceName(page.url)}
            </span>
            <ArrowRight className="h-4 w-4 text-accent-400 group-hover:text-accent-600 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// HELPER
// ============================================================================

function getServiceName(url: string): string {
  const names: Record<string, string> = {
    "/privatdetektei": "Privatdetektei",
    "/privatdetektei/untreue": "Untreue aufdecken",
    "/privatdetektei/observation": "Observation",
    "/privatdetektei/personensuche": "Personensuche",
    "/privatdetektei/stalking": "Stalking-Fälle",
    "/privatdetektei/sorgerecht": "Sorgerecht & Umgang",
    "/privatdetektei/betrug": "Betrugsermittlung",
    "/wirtschaftsdetektei": "Wirtschaftsdetektei",
    "/wirtschaftsdetektei/krankfeier": "Krankfeierkontrolle",
    "/wirtschaftsdetektei/betrug": "Betrugsermittlung",
    "/wirtschaftsdetektei/wettbewerb": "Wettbewerbsverstöße",
    "/wirtschaftsdetektei/mitarbeiterpruefung": "Mitarbeiterprüfung",
    "/wirtschaftsdetektei/industriespionage": "Industriespionage",
    "/wirtschaftsdetektei/versicherungsbetrug": "Versicherungsbetrug",
    "/kosten": "Kosten & Preise",
    "/ablauf": "Unser Ablauf",
    "/kontakt": "Jetzt Kontakt aufnehmen",
    "/rechtliches": "Rechtliche Grundlagen",
    "/ueber-uns": "Über uns",
    "/einsatzgebiete": "Einsatzgebiete",
  };

  return names[url] || url.split("/").filter(Boolean).pop()?.replace(/-/g, " ") || url;
}
