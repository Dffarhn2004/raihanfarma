import { HomePage } from "@/components/home/home-page";
import { getLatestArticles } from "@/lib/articles";

export default function Home() {
  const latestArticles = getLatestArticles(3).map(
    ({ slug, title, metaDescription, category, publishedAt }) => ({
      slug,
      title,
      metaDescription,
      category,
      publishedAt
    })
  );

  return <HomePage latestArticles={latestArticles} />;
}
