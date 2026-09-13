import type { Metadata } from "next";
import { ArticleCard } from "@/components/artikel/article-card";
import { ArticleShell } from "@/components/artikel/article-shell";
import { PageNav } from "@/components/layout/page-nav";
import { getAllArticles } from "@/lib/articles";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Artikel Kesehatan Tabalong",
  description:
    "Kumpulan edukasi kesehatan untuk masyarakat Tanjung dan Kabupaten Tabalong: diabetes, hipertensi, stunting, imunisasi, dan tips obat aman.",
  alternates: { canonical: "/artikel" },
  openGraph: {
    title: "Artikel Kesehatan | Raihan Farma",
    description: "Edukasi kesehatan lokal untuk keluarga di Tanjung, Tabalong.",
    url: `${SITE_URL}/artikel`,
    type: "website"
  }
};

export default function ArtikelIndexPage() {
  const articles = getAllArticles();

  return (
    <ArticleShell>
      <section className="article-page article-index">
        <div className="container">
          <PageNav secondary={{ href: WHATSAPP_URL, label: "Hubungi sekarang", external: true }} />
          <header className="article-index-header">
            <p className="eyebrow">EDUKASI KESEHATAN</p>
            <h1>
              Artikel untuk
              <br />
              <em>keluarga Tabalong.</em>
            </h1>
            <p className="article-lead">
              Informasi kesehatan yang mudah dipahami, disusun Tim Edukasi Raihan Farma agar warga Tanjung lebih siap menjaga diri dan keluarga.
            </p>
          </header>

          <div className="article-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </ArticleShell>
  );
}
