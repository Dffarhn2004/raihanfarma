import type { Metadata } from "next";
import { LOGO_ALT, LOGO_PATH, SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Raihan Farma",
  title: {
    default: "Raihan Farma: Apotek, Dokter Umum & Psikologi Tanjung Tabalong",
    template: "%s | Raihan Farma"
  },
  description:
    "Raihan Farma melayani apotek, konsultasi dokter umum, dan praktik psikologi bersama Saudah, S. Psi. di Hikun, Tanjung, Tabalong. Lihat jadwal, lokasi, dan hubungi WhatsApp.",
  keywords: [
    "apotek Tanjung Tabalong",
    "dokter umum Tanjung Tabalong",
    "psikolog Tanjung Tabalong",
    "psikolog Tabalong",
    "praktik psikologi Tanjung",
    "praktik psikologi Tabalong",
    "konsultasi psikologi Tanjung",
    "konsultasi psikologi Tabalong",
    "Saudah S. Psi Psikolog",
    "apotek Hikun",
    "praktik dokter umum Tanjung",
    "kesehatan mental Tabalong"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: "Raihan Farma — Apotek, Dokter Umum & Psikologi",
    description:
      "Apotek, praktik dokter umum, dan praktik psikologi bersama Saudah, S. Psi Psikolog di Tanjung, Tabalong.",
    url: SITE_URL,
    siteName: "Raihan Farma",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: LOGO_PATH,
        width: 1254,
        height: 1254,
        alt: LOGO_ALT
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Farma — Apotek, Dokter Umum & Psikologi",
    description:
      "Apotek, dokter umum, dan praktik psikologi di Tanjung, Tabalong.",
    images: [LOGO_PATH]
  },
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
