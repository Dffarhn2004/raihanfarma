import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { SITE_URL } from "@/lib/constants";

const STATIC_PAGES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/layanan", changeFrequency: "monthly", priority: 0.9 },
  { path: "/tim", changeFrequency: "monthly", priority: 0.9 },
  { path: "/jadwal", changeFrequency: "weekly", priority: 0.9 },
  { path: "/tentang", changeFrequency: "monthly", priority: 0.8 },
  { path: "/kontak", changeFrequency: "monthly", priority: 0.9 },
  { path: "/artikel", changeFrequency: "weekly", priority: 0.8 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().map((article) => ({
    url: `${SITE_URL}/artikel/${article.slug}`,
    lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const staticEntries = STATIC_PAGES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority
  }));

  return [...staticEntries, ...articles];
}
