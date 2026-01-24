/**
 * RelatedArticles Komponente
 * 
 * Zeigt verwandte Artikel basierend auf der Pillar-Cluster-Struktur an.
 * Für Pillar-Artikel: Zeigt zugehörige Cluster
 * Für Cluster-Artikel: Zeigt Pillar + Geschwister-Cluster
 */

import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react";
import { getRelatedContent, InternalLink } from "@/lib/internal-linking";
import { isPillar, isCluster, getPillarForCluster } from "@/lib/pillar-cluster";

interface RelatedArticlesProps {
  currentSlug: string;
  category?: string;
  maxArticles?: number;
  className?: string;
}

export function RelatedArticles({
  currentSlug,
  category,
  maxArticles = 4,
  className = "",
}: RelatedArticlesProps) {
  const { title, links } = getRelatedContent(currentSlug, {
    maxLinks: maxArticles,
    category,
    excludeUrls: [`/blog/${currentSlug}`],
  });

  if (links.length === 0) {
    return null;
  }

  const isPillarArticle = isPillar(currentSlug);
  const isClusterArticle = isCluster(currentSlug);

  return (
    <div className={`bg-primary-50 rounded-xl p-6 lg:p-8 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
          {isPillarArticle ? (
            <BookOpen className="h-5 w-5 text-primary-700" />
          ) : (
            <Lightbulb className="h-5 w-5 text-primary-700" />
          )}
        </div>
        <div>
          <h3 className="font-display font-bold text-primary-900">{title}</h3>
          {isPillarArticle && (
            <p className="text-sm text-primary-500">
              Vertiefende Artikel zu diesem Thema
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {links.map((link, index) => (
          <RelatedArticleLink key={link.url} link={link} index={index} />
        ))}
      </div>

      {isClusterArticle && (
        <PillarBacklink slug={currentSlug} className="mt-6" />
      )}
    </div>
  );
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

function RelatedArticleLink({ link, index }: { link: InternalLink; index: number }) {
  const isService = link.type === "service";
  
  return (
    <Link
      href={link.url}
      className={`
        group flex items-center justify-between p-4 rounded-lg transition-all
        ${isService 
          ? "bg-accent-50 border border-accent-100 hover:border-accent-200 hover:bg-white" 
          : "bg-white border border-primary-100 hover:border-primary-200 hover:shadow-sm"
        }
      `}
    >
      <div className="flex-1 min-w-0">
        <span className={`
          font-medium group-hover:text-primary-700 transition-colors
          ${isService ? "text-accent-900" : "text-primary-900"}
        `}>
          {link.text}
        </span>
        {link.type === "pillar" && (
          <span className="ml-2 text-xs bg-primary-100 text-primary-600 px-2 py-0.5 rounded">
            Übersicht
          </span>
        )}
      </div>
      <ArrowRight className={`
        h-4 w-4 flex-shrink-0 ml-3 transition-transform group-hover:translate-x-1
        ${isService ? "text-accent-400 group-hover:text-accent-600" : "text-primary-400 group-hover:text-primary-600"}
      `} />
    </Link>
  );
}

function PillarBacklink({ slug, className = "" }: { slug: string; className?: string }) {
  const parentPillar = getPillarForCluster(slug);
  
  if (!parentPillar) return null;

  return (
    <div className={`pt-4 border-t border-primary-200 ${className}`}>
      <p className="text-sm text-primary-500 mb-3">
        Dieser Artikel ist Teil unserer Artikelserie:
      </p>
      <Link
        href={parentPillar.pillarUrl}
        className="group flex items-center gap-3 p-4 bg-primary-100 rounded-lg hover:bg-primary-200 transition-colors"
      >
        <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center group-hover:bg-primary-300">
          <BookOpen className="h-4 w-4 text-primary-700" />
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-primary-900 group-hover:text-primary-700">
            {parentPillar.pillarTitle}
          </span>
          <span className="block text-xs text-primary-500">
            Zum Hauptartikel →
          </span>
        </div>
      </Link>
    </div>
  );
}

// ============================================================================
// EXPORT ADDITIONAL COMPONENTS
// ============================================================================

export { PillarBacklink };
