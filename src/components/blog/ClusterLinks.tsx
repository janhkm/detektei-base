/**
 * ClusterLinks Komponente
 * 
 * Zeigt alle Cluster-Artikel eines Pillars in einer übersichtlichen Liste.
 * Wird auf Pillar-Seiten verwendet, um zu den Vertiefungsartikeln zu verlinken.
 */

import Link from "next/link";
import { ArrowRight, FileText, CheckCircle } from "lucide-react";
import { getClustersForPillar, ClusterArticle } from "@/lib/pillar-cluster";

interface ClusterLinksProps {
  pillarSlug: string;
  title?: string;
  showCount?: boolean;
  variant?: "cards" | "list" | "compact";
  className?: string;
}

export function ClusterLinks({
  pillarSlug,
  title = "Vertiefende Artikel",
  showCount = true,
  variant = "cards",
  className = "",
}: ClusterLinksProps) {
  const clusters = getClustersForPillar(pillarSlug);

  if (clusters.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-bold text-primary-900">
          {title}
        </h2>
        {showCount && (
          <span className="text-sm text-primary-500 bg-primary-100 px-3 py-1 rounded-full">
            {clusters.length} Artikel
          </span>
        )}
      </div>

      {variant === "cards" && (
        <div className="grid sm:grid-cols-2 gap-4">
          {clusters.map((cluster) => (
            <ClusterCard key={cluster.id} cluster={cluster} />
          ))}
        </div>
      )}

      {variant === "list" && (
        <div className="space-y-3">
          {clusters.map((cluster) => (
            <ClusterListItem key={cluster.id} cluster={cluster} />
          ))}
        </div>
      )}

      {variant === "compact" && (
        <ul className="space-y-2">
          {clusters.map((cluster) => (
            <ClusterCompactItem key={cluster.id} cluster={cluster} />
          ))}
        </ul>
      )}
    </div>
  );
}

// ============================================================================
// VARIANT COMPONENTS
// ============================================================================

function ClusterCard({ cluster }: { cluster: ClusterArticle }) {
  return (
    <Link
      href={`/blog/${cluster.slug}`}
      className="group block p-5 bg-white border border-primary-100 rounded-xl hover:border-primary-300 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
          <FileText className="h-5 w-5 text-primary-600" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-primary-900 group-hover:text-primary-700 transition-colors line-clamp-2">
            {cluster.linkText[0]}
          </h3>
          <div className="flex items-center gap-1 mt-2 text-sm text-primary-500">
            <span>Artikel lesen</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function ClusterListItem({ cluster }: { cluster: ClusterArticle }) {
  return (
    <Link
      href={`/blog/${cluster.slug}`}
      className="group flex items-center justify-between p-4 bg-white border border-primary-100 rounded-lg hover:border-primary-200 hover:shadow-sm transition-all"
    >
      <div className="flex items-center gap-3">
        <CheckCircle className="h-5 w-5 text-primary-300 group-hover:text-primary-500 transition-colors" />
        <span className="font-medium text-primary-900 group-hover:text-primary-700">
          {cluster.linkText[0]}
        </span>
      </div>
      <ArrowRight className="h-4 w-4 text-primary-400 group-hover:translate-x-1 transition-transform" />
    </Link>
  );
}

function ClusterCompactItem({ cluster }: { cluster: ClusterArticle }) {
  return (
    <li>
      <Link
        href={`/blog/${cluster.slug}`}
        className="group inline-flex items-center gap-2 text-primary-700 hover:text-primary-900 transition-colors"
      >
        <span className="text-primary-400">→</span>
        <span className="underline decoration-primary-200 group-hover:decoration-primary-400">
          {cluster.linkText[0]}
        </span>
      </Link>
    </li>
  );
}
