import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Article } from "@/lib/article-types";
import { WHATSAPP_URL } from "@/lib/constants";

export type { Article, ArticleSummary } from "@/lib/article-types";
export { formatArticleDate } from "@/lib/article-format";

const ARTICLES_DIR = path.join(process.cwd(), "artikel");

type ArticleFrontmatter = {
  title?: string;
  slug?: string;
  meta_title?: string;
  meta_description?: string;
  category?: string;
  keywords?: string[];
  published_at?: string;
  updated_at?: string;
  author?: string;
};

function rewriteInternalLinks(content: string): string {
  return content
    .replace(/\]\(\/jadwal-dokter\)/g, "](/jadwal)")
    .replace(/\]\(\/kontak\)/g, `](${WHATSAPP_URL})`);
}

function parseArticleFile(filename: string): Article {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const fm = data as ArticleFrontmatter;

  if (!fm.slug || !fm.title) {
    throw new Error(`Artikel ${filename} harus punya slug dan title di frontmatter.`);
  }

  return {
    slug: fm.slug,
    title: fm.title,
    metaTitle: fm.meta_title ?? fm.title,
    metaDescription: fm.meta_description ?? "",
    category: fm.category ?? "Edukasi Kesehatan",
    keywords: fm.keywords ?? [],
    publishedAt: fm.published_at ?? "",
    updatedAt: fm.updated_at ?? fm.published_at ?? "",
    author: fm.author ?? "Tim Edukasi Raihan Farma",
    content: rewriteInternalLinks(content.trim())
  };
}

function sortByPublishedDesc(a: Article, b: Article): number {
  return b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title);
}

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(parseArticleFile)
    .sort(sortByPublishedDesc);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getLatestArticles(limit = 3): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const articles = getAllArticles();
  const current = articles.find((article) => article.slug === slug);
  if (!current) return [];

  const others = articles.filter((article) => article.slug !== slug);
  const sameCategory = others.filter((article) => article.category === current.category);
  const otherCategory = others.filter((article) => article.category !== current.category);

  return [...sameCategory, ...otherCategory].slice(0, limit);
}
