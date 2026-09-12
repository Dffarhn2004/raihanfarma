import type { Metadata } from "next";
import { Benefits } from "@/components/home/benefits";
import { Faq } from "@/components/home/faq";
import { PageIntro } from "@/components/layout/page-intro";
import { PageNav } from "@/components/layout/page-nav";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tentang Apotek Raihan Farma Tanjung Tabalong",
  description:
    "Tentang Raihan Farma: apotek, praktik dokter umum, dan praktik psikologi di Jl. Basuki Rahmat No.29, Hikun, Kecamatan Tanjung, Kabupaten Tabalong.",
  keywords: [
    "apotek Raihan Farma",
    "tentang Raihan Farma",
    "apotek Hikun Tanjung",
    "kesehatan Tabalong",
    "praktik dokter Tanjung"
  ],
  alternates: { canonical: "/tentang" },
  openGraph: {
    title: "Tentang Kami | Raihan Farma",
    description:
      "Mengenal Raihan Farma — apotek dan pelayanan kesehatan yang dekat dengan warga Tanjung, Tabalong.",
    url: `${SITE_URL}/tentang`,
    type: "website"
  }
};

export default function TentangPage() {
  return (
    <SiteShell>
      <section className="article-page">
        <div className="container">
          <PageNav secondary={{ href: WHATSAPP_URL, label: "Hubungi sekarang", external: true }} />
          <PageIntro
            eyebrow="TENTANG KAMI"
            title={
              <>
                Teman kesehatan
                <br />
                <em>untuk warga Tanjung.</em>
              </>
            }
            lead="Raihan Farma hadir di Hikun, Kecamatan Tanjung, Kabupaten Tabalong untuk mendekatkan layanan apotek, konsultasi dokter umum, dan praktik psikologi dalam satu tempat yang mudah dijangkau."
          />
        </div>
        <Benefits showHeading={false} />
        <Faq />
      </section>
    </SiteShell>
  );
}
