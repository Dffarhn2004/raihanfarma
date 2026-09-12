import { ArticleCard } from "@/components/artikel/article-card";
import { Icon } from "@/components/ui/icon";
import type { ArticleSummary } from "@/lib/article-types";

type ArticlesTeaserProps = {
  articles: ArticleSummary[];
};

export function ArticlesTeaser({ articles }: ArticlesTeaserProps) {
  if (articles.length === 0) return null;

  return (
    <section className="section articles-teaser-section" id="artikel">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ARTIKEL KESEHATAN</p>
            <h2>
              Edukasi untuk
              <br />
              <em>keluarga Tabalong.</em>
            </h2>
          </div>
          <p>
            Tips dan informasi kesehatan yang relevan dengan kebutuhan warga Tanjung — disusun agar mudah dipahami.
          </p>
        </div>

        <div className="article-grid teaser-grid">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <a className="text-link articles-teaser-link" href="/artikel">
          Lihat semua artikel <Icon name="arrow" />
        </a>
      </div>
    </section>
  );
}
