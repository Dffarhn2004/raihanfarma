import Link from "next/link";
import type { ArticleSummary } from "@/lib/article-types";

type RelatedArticlesProps = {
  articles: ArticleSummary[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <aside className="article-related" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading">Artikel terkait</h2>
      <ul className="article-related-list">
        {articles.map((article) => (
          <li key={article.slug}>
            <p className="article-related-category">{article.category}</p>
            <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link className="text-link article-related-all" href="/artikel">
        Semua artikel
      </Link>
    </aside>
  );
}
