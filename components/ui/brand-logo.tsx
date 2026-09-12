import Image from "next/image";
import { LOGO_ALT, LOGO_MARK_PATH } from "@/lib/constants";

type BrandLogoProps = {
  size?: "nav" | "footer" | "hero";
  className?: string;
  priority?: boolean;
};

const sizes = {
  nav: { width: 80, height: 80, className: "brand-logo brand-logo-nav" },
  footer: { width: 88, height: 88, className: "brand-logo brand-logo-footer" },
  hero: { width: 184, height: 184, className: "brand-logo brand-logo-hero" }
} as const;

export function BrandLogo({ size = "nav", className = "", priority = false }: BrandLogoProps) {
  const config = sizes[size];

  return (
    <Image
      src={LOGO_MARK_PATH}
      alt={LOGO_ALT}
      width={config.width}
      height={config.height}
      className={`${config.className} ${className}`.trim()}
      priority={priority}
    />
  );
}
