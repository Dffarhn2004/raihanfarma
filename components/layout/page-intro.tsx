import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  className?: string;
};

export function PageIntro({ eyebrow, title, lead, className }: PageIntroProps) {
  return (
    <header className={className ? `article-index-header ${className}` : "article-index-header"}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="article-lead">{lead}</p>
    </header>
  );
}
