import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface BlogFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  keyword: string;
  image?: {
    alt: string;
    caption?: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  sources?: Array<{
    name: string;
    url: string;
    description?: string;
  }>;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  keyword: string;
}

// Prüfe ob das Posts-Verzeichnis existiert
function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

// Alle Blog-Slugs abrufen
export function getAllPostSlugs(): string[] {
  ensurePostsDirectory();
  
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

// Einzelnen Post abrufen
export function getPostBySlug(slug: string): BlogPost | null {
  ensurePostsDirectory();
  
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontmatter: data as BlogFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

// Alle Posts abrufen (sortiert nach Datum)
export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  
  const posts = slugs
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      
      return {
        slug: post.slug,
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        category: post.frontmatter.category,
        tags: post.frontmatter.tags,
        keyword: post.frontmatter.keyword,
      };
    })
    .filter((post): post is BlogPostMeta => post !== null);
  
  // Nach Datum sortieren (neueste zuerst)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

// Posts nach Kategorie filtern
export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category === category);
}

// Posts nach Tag filtern
export function getPostsByTag(tag: string): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

// Verwandte Posts finden (gleiche Kategorie oder Tags)
export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMeta[] {
  const currentPost = getPostBySlug(slug);
  if (!currentPost) return [];
  
  const allPosts = getAllPosts().filter((p) => p.slug !== slug);
  
  // Punkte für Relevanz berechnen
  const scoredPosts = allPosts.map((post) => {
    let score = 0;
    
    // Gleiche Kategorie = 10 Punkte
    if (post.category === currentPost.frontmatter.category) {
      score += 10;
    }
    
    // Gemeinsame Tags = je 5 Punkte
    const sharedTags = post.tags.filter((tag) =>
      currentPost.frontmatter.tags.includes(tag)
    );
    score += sharedTags.length * 5;
    
    return { ...post, score };
  });
  
  // Nach Score sortieren und limitieren
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score: _score, ...post }) => post);
}

// Kategorien-Liste (muss mit den tatsächlichen Kategorien in den Posts übereinstimmen)
export const BLOG_CATEGORIES = [
  { id: "grundlagen", name: "Grundlagen", slug: "grundlagen", description: "Basiswissen rund um Detekteien" },
  { id: "wirtschaft", name: "Wirtschaft", slug: "wirtschaft", description: "Wirtschaftsdetektei & Arbeitsrecht" },
  { id: "partnerschaft", name: "Partnerschaft", slug: "partnerschaft", description: "Untreue, Scheidung & Familie" },
  { id: "kosten", name: "Kosten", slug: "kosten", description: "Preise & Kostenübersicht" },
  { id: "recht", name: "Recht", slug: "recht", description: "Rechtliche Grundlagen & Grenzen" },
  { id: "digital", name: "Digital", slug: "digital", description: "Online-Ermittlung & OSINT" },
  { id: "entscheidungshilfen", name: "Entscheidungshilfen", slug: "entscheidungshilfen", description: "Checklisten & Tipps zur Entscheidung" },
];

// Kategorie-Slug aus Name generieren
export function getCategorySlug(categoryName: string): string {
  const category = BLOG_CATEGORIES.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  );
  return category?.slug || categoryName.toLowerCase().replace(/\s+/g, "-");
}

// Kategorie-Name aus Slug
export function getCategoryBySlug(slug: string): typeof BLOG_CATEGORIES[0] | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}
