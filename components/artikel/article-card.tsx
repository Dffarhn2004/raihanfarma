import Link from "next/link";
import { formatArticleDate } from "@/lib/article-format";
import type { ArticleSummary } from "@/lib/article-types";

type ArticleCardProps = {
  article: ArticleSummary;
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/artikel/${article.slug}`} className="article-card">
      <p className="article-card-meta">
        <span>{article.category}</span>
        {article.publishedAt ? <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time> : null}
      </p>
      <h3>{article.title}</h3>
      <p>{article.metaDescription}</p>
      <span className="text-link">Baca selengkapnya</span>
    </Link>
  );
}
