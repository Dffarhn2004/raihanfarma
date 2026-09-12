export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  content: string;
};

export type ArticleSummary = Pick<
  Article,
  "slug" | "title" | "metaDescription" | "category" | "publishedAt"
>;
