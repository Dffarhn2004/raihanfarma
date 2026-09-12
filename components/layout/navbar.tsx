"use client";

import { BrandLogo } from "@/components/ui/brand-logo";
import { Icon } from "@/components/ui/icon";
import { WHATSAPP_URL } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/site-data";

type NavbarProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  homeHref?: string;
};

function resolveNavHref(href: string, homeHref: string): string {
  if (href.startsWith("/") || href.startsWith("http")) return href;
  if (homeHref === "/" || homeHref.startsWith("/")) return `/${href}`;
  return href;
}

export function Navbar({ menuOpen, onToggleMenu, onCloseMenu, homeHref = "/" }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a className="brand" href={homeHref} aria-label="Raihan Farma beranda">
          <BrandLogo size="nav" priority />
          <span>
            raihan<span>farma</span>
          </span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={resolveNavHref(href, homeHref)} onClick={onCloseMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href={WHATSAPP_URL}>
            Daftar Konsultasi <Icon name="arrow" />
          </a>
        </nav>
        <button
          className="menu-button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          onClick={onToggleMenu}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
