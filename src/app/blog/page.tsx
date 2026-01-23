import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllPosts, BLOG_CATEGORIES } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Ratgeber & Wissen rund um Detektei-Dienstleistungen",
  description:
    "Fachartikel zu Privatdetektiv, Observation, Kosten und Rechtsfragen. Fundiertes Wissen von erfahrenen Ermittlern.",
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              Ratgeber & Wissen
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              Fachartikel zu Detektei-Dienstleistungen, rechtlichen Grundlagen
              und Kosten. Fundiertes Wissen von erfahrenen Ermittlern für Ihre
              Fragen.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-primary-600">
                    Noch keine Artikel vorhanden. Bald verfügbar!
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {posts.map((post) => (
                    <article
                      key={post.slug}
                      className="group bg-white rounded-xl border border-primary-100 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-primary-500 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 rounded-full text-primary-700 font-medium">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.date)}
                          </span>
                        </div>

                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-xl font-display font-bold text-primary-900 group-hover:text-primary-700 transition-colors">
                            {post.title}
                          </h2>
                        </Link>

                        <p className="mt-3 text-primary-600 line-clamp-2">
                          {post.description}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 text-xs text-primary-500"
                              >
                                <Tag className="h-3 w-3" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors"
                          >
                            Weiterlesen
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Kategorien */}
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Kategorien
                  </h3>
                  <ul className="space-y-2">
                    {BLOG_CATEGORIES.map((category) => (
                      <li key={category.id}>
                        <span className="text-primary-600 hover:text-primary-900 transition-colors cursor-default">
                          {category.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-primary-900 rounded-xl p-6 text-white">
                  <h3 className="font-display font-bold mb-2">
                    Persönliche Beratung
                  </h3>
                  <p className="text-primary-200 text-sm mb-4">
                    Sie haben Fragen zu einem Thema? Unsere Experten beraten Sie
                    diskret und kostenlos.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center w-full rounded-lg bg-accent-500 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-400 transition-colors"
                  >
                    Beratung anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
