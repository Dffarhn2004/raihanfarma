"use client";

import { useState } from "react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ArticlesTeaser } from "@/components/home/articles-teaser";
import { Benefits } from "@/components/home/benefits";
import { DoctorSection } from "@/components/home/doctor-section";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { IntroStrip } from "@/components/home/intro-strip";
import { Location } from "@/components/home/location";
import { MobileCta } from "@/components/home/mobile-cta";
import { PharmacyJsonLd } from "@/components/home/pharmacy-json-ld";
import { Schedule } from "@/components/home/schedule";
import { Services } from "@/components/home/services";
import type { ArticleSummary } from "@/lib/article-types";

type HomePageProps = {
  latestArticles: ArticleSummary[];
};

export function HomePage({ latestArticles }: HomePageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <Navbar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen(!menuOpen)}
        onCloseMenu={() => setMenuOpen(false)}
        homeHref="#beranda"
      />
      <Hero />
      <IntroStrip />
      <Services />
      <DoctorSection />
      <Schedule />
      <Benefits />
      <Faq />
      <ArticlesTeaser articles={latestArticles} />
      <Location />
      <Footer homeHref="#beranda" />
      <MobileCta />
      <PharmacyJsonLd />
    </main>
  );
}
