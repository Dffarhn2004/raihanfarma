import Link from "next/link";
import { Icon } from "@/components/ui/icon";

type PageNavSecondary = {
  href: string;
  label: string;
  external?: boolean;
};

type PageNavProps = {
  secondary?: PageNavSecondary;
};

export function PageNav({ secondary }: PageNavProps) {
  return (
    <nav className="page-nav" aria-label="Navigasi halaman">
      <Link href="/" className="page-nav-link page-nav-home">
        <Icon name="arrow" />
        Kembali ke beranda
      </Link>
      {secondary ? (
        <>
          <span className="page-nav-sep" aria-hidden="true">
            ·
          </span>
          {secondary.external ? (
            <a className="page-nav-link page-nav-secondary" href={secondary.href}>
              {secondary.label}
            </a>
          ) : (
            <Link className="page-nav-link page-nav-secondary" href={secondary.href}>
              {secondary.label}
            </Link>
          )}
        </>
      ) : null}
    </nav>
  );
}
