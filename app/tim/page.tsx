import type { Metadata } from "next";
import { DoctorSection } from "@/components/home/doctor-section";
import { PageIntro } from "@/components/layout/page-intro";
import { PageNav } from "@/components/layout/page-nav";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { DOCTOR, PSYCHOLOGIST } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Tim Dokter Umum & Psikolog Tanjung Tabalong",
  description: `Kenali tim Raihan Farma: ${DOCTOR.name} (${DOCTOR.role}) dan ${PSYCHOLOGIST.name} (${PSYCHOLOGIST.role}) di Hikun, Tanjung, Kabupaten Tabalong.`,
  keywords: [
    "dokter umum Tanjung Tabalong",
    "psikolog Tabalong",
    "Saudah S. Psi Psikolog",
    "dr H Syaifullah",
    "praktik psikologi Tanjung"
  ],
  alternates: { canonical: "/tim" },
  openGraph: {
    title: "Tim Kami | Raihan Farma Tanjung Tabalong",
    description: `Dokter umum ${DOCTOR.name} dan psikolog ${PSYCHOLOGIST.name} siap melayani keluarga di Tanjung.`,
    url: `${SITE_URL}/tim`,
    type: "website"
  }
};

export default function TimPage() {
  return (
    <SiteShell>
      <section className="article-page">
        <div className="container">
          <PageNav secondary={{ href: WHATSAPP_URL, label: "Hubungi sekarang", external: true }} />
          <PageIntro
            eyebrow="TIM KAMI"
            title={
              <>
                Dokter dan psikolog
                <br />
                <em>untuk keluarga Tabalong.</em>
              </>
            }
            lead={`${DOCTOR.name} melayani konsultasi kesehatan umum, sementara ${PSYCHOLOGIST.name} membuka praktik psikologi di Raihan Farma. Konfirmasi jadwal melalui WhatsApp sebelum berkunjung.`}
          />
        </div>
        <DoctorSection showHeading={false} />
      </section>
    </SiteShell>
  );
}
