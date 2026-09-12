import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/artikel/article-body";
import { ArticleShell } from "@/components/artikel/article-shell";
import { RelatedArticles } from "@/components/artikel/related-articles";
import { Icon } from "@/components/ui/icon";
import { formatArticleDate, getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

type ArticlePageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `${SITE_URL}/artikel/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt || undefined,
      modifiedTime: article.updatedAt || undefined,
      authors: [article.author],
      locale: "id_ID",
      siteName: "Raihan Farma"
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription
    }
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article.slug, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author
    },
    publisher: {
      "@type": "Organization",
      name: "Raihan Farma",
      url: SITE_URL
    },
    mainEntityOfPage: `${SITE_URL}/artikel/${article.slug}`,
    keywords: article.keywords.join(", ")
  };

  return (
    <ArticleShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="article-page article-detail">
        <div className="container article-detail-layout">
          <p className="article-back-top">
            <Link href="/artikel">
              <Icon name="arrow" />
              Kembali ke artikel
            </Link>
          </p>

          <div className="article-detail-grid">
            <div className="article-detail-main">
              <header className="article-detail-header">
                <p className="eyebrow">{article.category.toUpperCase()}</p>
                <h1>{article.title}</h1>
                <p className="article-byline">
                  <span>{article.author}</span>
                  {article.publishedAt ? (
                    <>
                      <span aria-hidden="true">·</span>
                      <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
                    </>
                  ) : null}
                </p>
                <p className="article-lead">{article.metaDescription}</p>
              </header>

              <ArticleBody content={article.content} />

              <aside className="article-cta">
                <p>Butuh konsultasi dokter umum atau informasi obat?</p>
                <div className="article-cta-actions">
                  <a className="button primary" href={WHATSAPP_URL}>
                    Hubungi via WhatsApp
                  </a>
                  <Link className="button secondary" href="/jadwal">
                    Lihat jadwal praktik
                  </Link>
                </div>
              </aside>
            </div>

            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      </article>
    </ArticleShell>
  );
}
