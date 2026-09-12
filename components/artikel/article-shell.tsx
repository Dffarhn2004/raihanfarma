"use client";

import type { ReactNode } from "react";
import { SiteShell } from "@/components/layout/site-shell";

type ArticleShellProps = {
  children: ReactNode;
  homeHref?: string;
};

export function ArticleShell({ children, homeHref = "/" }: ArticleShellProps) {
  return (
    <SiteShell homeHref={homeHref} className="article-shell">
      {children}
    </SiteShell>
  );
}
