import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { KeyTakeaways } from "@/components/ui/KeyTakeaways";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTABox } from "@/components/ui/CTABox";
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { generateBlogBreadcrumbSchema } from "@/lib/schemas/breadcrumbs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    keywords: post.frontmatter.tags.join(", "),
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      modifiedTime: post.frontmatter.updatedAt || post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
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

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const readingTime = estimateReadingTime(post.content);

  // Einfaches MDX-Rendering (ohne komplexe MDX-Features)
  // Für vollständiges MDX-Rendering wäre @next/mdx oder mdx-bundler nötig
  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      // Überschriften
      if (line.startsWith("## ")) {
        return `<h2 class="text-2xl font-display font-bold text-primary-900 mt-10 mb-4">${line.slice(3)}</h2>`;
      }
      if (line.startsWith("### ")) {
        return `<h3 class="text-xl font-display font-semibold text-primary-900 mt-8 mb-3">${line.slice(4)}</h3>`;
      }
      // Leere Zeilen
      if (line.trim() === "") {
        return "";
      }
      // Listen
      if (line.startsWith("- ")) {
        return `<li class="ml-4">${line.slice(2)}</li>`;
      }
      // Normaler Text
      return `<p class="text-primary-600 mb-4 leading-relaxed">${line}</p>`;
    })
    .join("\n");

  const breadcrumbSchema = generateBlogBreadcrumbSchema(post.frontmatter.title, slug);

  // Article Schema für Rich Snippets
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.image?.alt 
      ? `https://detektei-base.de/images/blog/${slug}.jpg`
      : "https://detektei-base.de/images/og-homepage.jpg",
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updatedAt || post.frontmatter.date,
    author: {
      "@type": "Person",
      name: "Oliver Peth",
      url: "https://detektei-base.de/ueber-uns",
    },
    publisher: {
      "@type": "Organization",
      name: "Detektei Base",
      logo: {
        "@type": "ImageObject",
        url: "https://detektei-base.de/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://detektei-base.de/blog/${slug}`,
    },
    keywords: post.frontmatter.tags.join(", "),
    articleSection: post.frontmatter.category,
    wordCount: post.content.split(/\s+/).length,
  };

  // FAQ Schema wenn FAQs vorhanden
  const faqSchema = post.frontmatter.faqs && post.frontmatter.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.frontmatter.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* FAQ JSON-LD (wenn vorhanden) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.frontmatter.title, href: `/blog/${slug}` },
            ]}
          />
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-300 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full text-white font-medium">
                {post.frontmatter.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {formatDate(post.frontmatter.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {readingTime} Min. Lesezeit
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
              {post.frontmatter.title}
            </h1>

            <p className="mt-6 text-lg text-primary-200 leading-relaxed">
              {post.frontmatter.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <article className="lg:col-span-2">
              {/* Key Takeaways wenn vorhanden */}
              {post.frontmatter.keyword && (
                <KeyTakeaways
                  items={[
                    `<strong>Thema:</strong> ${post.frontmatter.keyword}`,
                    `<strong>Kategorie:</strong> ${post.frontmatter.category}`,
                    `<strong>Aktualisiert:</strong> ${formatDate(post.frontmatter.updatedAt || post.frontmatter.date)}`,
                  ]}
                />
              )}

              {/* Artikel-Inhalt */}
              <div
                className="mt-8 prose prose-primary max-w-none"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* FAQs wenn vorhanden */}
              {post.frontmatter.faqs && post.frontmatter.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
                    Häufige Fragen
                  </h2>
                  <FAQAccordion faqs={post.frontmatter.faqs} />
                </div>
              )}

              {/* Quellenverzeichnis wenn vorhanden */}
              {post.frontmatter.sources && post.frontmatter.sources.length > 0 && (
                <div className="mt-12 p-6 bg-primary-50 rounded-xl">
                  <h3 className="font-display font-bold text-primary-900 mb-4">
                    Quellen
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {post.frontmatter.sources.map((source, i) => (
                      <li key={i}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-700 hover:text-primary-900 underline"
                        >
                          {source.name}
                        </a>
                        {source.description && (
                          <span className="text-primary-500">
                            {" "}
                            – {source.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary-50 rounded-full text-sm text-primary-700"
                  >
                    <Tag className="h-3.5 w-3.5" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Navigation */}
              <div className="mt-12 flex justify-between border-t border-primary-100 pt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Zurück zum Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <CTABox variant="dark" />

                {/* Verwandte Artikel */}
                {relatedPosts.length > 0 && (
                  <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                    <h3 className="font-display font-bold text-primary-900 mb-4">
                      Verwandte Artikel
                    </h3>
                    <ul className="space-y-4">
                      {relatedPosts.map((related) => (
                        <li key={related.slug}>
                          <Link
                            href={`/blog/${related.slug}`}
                            className="group block"
                          >
                            <span className="text-sm font-medium text-primary-900 group-hover:text-primary-700 transition-colors line-clamp-2">
                              {related.title}
                            </span>
                            <span className="flex items-center gap-1 mt-1 text-xs text-primary-500">
                              <ArrowRight className="h-3 w-3" />
                              Weiterlesen
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
