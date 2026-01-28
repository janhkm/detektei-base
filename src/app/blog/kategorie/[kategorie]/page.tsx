import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getAllPosts, BLOG_CATEGORIES, getCategoryBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ kategorie: string }>;
}

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    kategorie: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kategorie } = await params;
  const category = getCategoryBySlug(kategorie);

  if (!category) {
    return {
      title: "Kategorie nicht gefunden",
    };
  }

  return {
    title: `${category.name} | Blog`,
    description: `Alle Artikel zum Thema ${category.name}. ${category.description}`,
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function CategoryPage({ params }: PageProps) {
  const { kategorie } = await params;
  const category = getCategoryBySlug(kategorie);

  if (!category) {
    notFound();
  }

  // Filter posts by category name
  const allPosts = getAllPosts();
  const posts = allPosts.filter(
    (post) => post.category.toLowerCase() === category.name.toLowerCase()
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: category.name, href: `/blog/kategorie/${kategorie}` },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-medium text-accent-400 uppercase tracking-wider mb-3">
              Kategorie
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight">
              {category.name}
            </h1>
            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              {category.description} – {posts.length} Artikel
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
                    Noch keine Artikel in dieser Kategorie.
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 mt-4 text-primary-700 hover:text-primary-900"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Zurück zum Blog
                  </Link>
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
                {/* Alle Kategorien */}
                <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Alle Kategorien
                  </h3>
                  <ul className="space-y-2">
                    {BLOG_CATEGORIES.map((cat) => {
                      const isActive = cat.slug === kategorie;
                      const catPosts = allPosts.filter(
                        (p) => p.category.toLowerCase() === cat.name.toLowerCase()
                      );
                      return (
                        <li key={cat.id}>
                          <Link
                            href={`/blog/kategorie/${cat.slug}`}
                            className={`flex items-center justify-between py-1 transition-colors ${
                              isActive
                                ? "text-primary-900 font-semibold"
                                : "text-primary-600 hover:text-primary-900"
                            }`}
                          >
                            <span>{cat.name}</span>
                            <span className="text-xs bg-primary-100 px-2 py-0.5 rounded-full">
                              {catPosts.length}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-primary-900 rounded-xl p-6 text-white">
                  <h3 className="font-display font-bold mb-2">
                    Rund um die Uhr erreichbar
                  </h3>
                  <p className="text-primary-200 text-sm mb-4">
                    Sie brauchen professionelle Hilfe? Wir beraten Sie kostenlos
                    und unverbindlich.
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center w-full rounded-lg bg-accent-500 px-4 py-3 text-sm font-semibold text-primary-900 hover:bg-accent-400 transition-colors"
                  >
                    Jetzt Kontakt aufnehmen
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
