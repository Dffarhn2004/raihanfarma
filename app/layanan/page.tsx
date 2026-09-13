import type { Metadata } from "next";
import { Services } from "@/components/home/services";
import { PageIntro } from "@/components/layout/page-intro";
import { PageNav } from "@/components/layout/page-nav";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Layanan Apotek, Dokter Umum & Psikologi Tanjung",
  description:
    "Layanan Raihan Farma di Hikun, Tanjung, Tabalong: praktik dokter umum, praktik psikologi bersama Saudah, S. Psi., serta pelayanan apotek dan resep.",
  keywords: [
    "layanan apotek Tanjung",
    "dokter umum Tabalong",
    "psikolog Tanjung",
    "apotek Hikun",
    "konsultasi psikologi Tabalong"
  ],
  alternates: { canonical: "/layanan" },
  openGraph: {
    title: "Layanan Raihan Farma — Dokter, Psikologi & Apotek",
    description:
      "Praktik dokter umum, praktik psikologi, dan apotek dalam satu lokasi di Tanjung, Tabalong.",
    url: `${SITE_URL}/layanan`,
    type: "website"
  }
};

export default function LayananPage() {
  return (
    <SiteShell>
      <section className="article-page">
        <div className="container">
          <PageNav secondary={{ href: WHATSAPP_URL, label: "Hubungi sekarang", external: true }} />
          <PageIntro
            eyebrow="LAYANAN RAIHAN FARMA"
            title={
              <>
                Pelayanan kesehatan
                <br />
                <em>dalam satu lokasi.</em>
              </>
            }
            lead="Di Hikun, Tanjung, Kabupaten Tabalong, Raihan Farma menghadirkan praktik dokter umum, praktik psikologi, dan apotek agar warga lebih mudah mendapatkan perawatan yang terarah."
          />
        </div>
        <Services showHeading={false} />
      </section>
    </SiteShell>
  );
}
