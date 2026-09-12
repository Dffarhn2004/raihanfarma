"use client";

import { useState, type ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MobileCta } from "@/components/home/mobile-cta";

type SiteShellProps = {
  children: ReactNode;
  homeHref?: string;
  className?: string;
};

export function SiteShell({ children, homeHref = "/", className = "site-shell" }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={className}>
      <Navbar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={() => setMenuOpen(false)}
        homeHref={homeHref}
      />
      {children}
      <Footer homeHref={homeHref} />
      <MobileCta />
    </main>
  );
}
