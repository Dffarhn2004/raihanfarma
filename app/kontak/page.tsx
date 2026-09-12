import type { Metadata } from "next";
import { Location } from "@/components/home/location";
import { Icon } from "@/components/ui/icon";
import { PageIntro } from "@/components/layout/page-intro";
import { PageNav } from "@/components/layout/page-nav";
import { SiteShell } from "@/components/layout/site-shell";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Apotek Raihan Farma Tanjung Tabalong",
  description:
    "Hubungi Raihan Farma di WhatsApp atau datang ke Jl. Basuki Rahmat No.29 RT.03, Hikun, Kecamatan Tanjung, Kabupaten Tabalong, Kalimantan Selatan 71571.",
  keywords: [
    "kontak apotek Tanjung",
    "lokasi apotek Tabalong",
    "WhatsApp Raihan Farma",
    "alamat apotek Hikun",
    "apotek Basuki Rahmat Tanjung"
  ],
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: "Kontak & Lokasi | Raihan Farma",
    description:
      "Alamat, peta, dan WhatsApp Apotek Raihan Farma di Hikun, Tanjung, Tabalong.",
    url: `${SITE_URL}/kontak`,
    type: "website"
  }
};

export default function KontakPage() {
  return (
    <SiteShell>
      <section className="article-page">
        <div className="container">
          <PageNav secondary={{ href: WHATSAPP_URL, label: "Hubungi sekarang", external: true }} />
          <PageIntro
            eyebrow="KONTAK & LOKASI"
            title={
              <>
                Hubungi kami
                <br />
                <em>atau datang langsung.</em>
              </>
            }
            lead="Konfirmasi jadwal konsultasi dokter atau psikologi melalui WhatsApp, atau kunjungi apotek kami di Hikun, Kecamatan Tanjung, Kabupaten Tabalong."
          />
          <div className="page-contact-actions">
            <a className="button primary" href={WHATSAPP_URL}>
              Chat WhatsApp <Icon name="arrow" />
            </a>
            <a className="button secondary" href={PHONE_TEL}>
              Telepon {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <Location showHeading={false} />
      </section>
    </SiteShell>
  );
}
