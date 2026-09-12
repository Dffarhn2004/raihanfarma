import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { PageNav } from "@/components/layout/page-nav";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE_URL, WHATSAPP_URL } from "@/lib/constants";
import { DOCTOR, PSYCHOLOGIST } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Jadwal Praktik Dokter & Psikologi Tanjung | Raihan Farma",
  description: `Jadwal praktik ${DOCTOR.name} (Senin–Sabtu ${DOCTOR.weekdayHours}, Minggu 19.00–21.00) dan konsultasi psikologi ${PSYCHOLOGIST.name} dengan janji di Raihan Farma, Tanjung Tabalong.`,
  keywords: [
    "jadwal dokter Tanjung",
    "jadwal psikolog Tabalong",
    "jam praktik apotek Hikun",
    "konsultasi dokter Tabalong",
    "janji psikologi Tanjung"
  ],
  alternates: { canonical: "/jadwal" },
  openGraph: {
    title: "Jadwal Praktik | Raihan Farma",
    description:
      "Lihat jadwal dokter umum dan praktik psikologi di Raihan Farma, lalu konfirmasi via WhatsApp.",
    url: `${SITE_URL}/jadwal`,
    type: "website"
  }
};

export default function JadwalPage() {
  return (
    <SiteShell>
      <section className="article-page page-jadwal">
        <div className="container">
          <PageNav secondary={{ href: WHATSAPP_URL, label: "Hubungi sekarang", external: true }} />
        </div>

        <div className="container page-jadwal-grid">
          <header className="page-jadwal-copy">
            <p className="eyebrow">JADWAL PRAKTIK</p>
            <h1>
              Rencanakan kunjungan
              <br />
              <em>dengan tenang.</em>
            </h1>
            <p className="article-lead">
              Informasi jadwal bersifat panduan awal. Konfirmasi ketersediaan dokter
              atau psikolog melalui WhatsApp sebelum berkunjung.
            </p>
            <div className="page-contact-actions">
              <a className="button primary" href={WHATSAPP_URL}>
                Konfirmasi jadwal <Icon name="arrow" />
              </a>
              <Link className="button secondary" href="/kontak">
                Lihat lokasi
              </Link>
            </div>
          </header>

          <div className="schedule-stack schedule-stack-page">
            <article className="schedule-card">
              <div className="schedule-card-head">
                <span>Dokter — {DOCTOR.name}</span>
                <span className="confirm-pill">
                  <span /> Konfirmasi
                </span>
              </div>
              <div className="schedule-row">
                <span>Senin – Sabtu</span>
                <b>{DOCTOR.weekdayHours}</b>
              </div>
              <div className="schedule-row">
                <span>Minggu</span>
                <b>19.00 - 21.00</b>
              </div>
              <p className="schedule-note">
                Jam praktik dapat berubah. Sebaiknya konfirmasi ketersediaan dokter
                sebelum berkunjung.
              </p>
              <a href={WHATSAPP_URL} className="text-link schedule-card-link">
                Tanya jadwal dokter <Icon name="arrow" />
              </a>
            </article>

            <article className="schedule-card schedule-card-soft">
              <div className="schedule-card-head">
                <span>Psikologi — {PSYCHOLOGIST.name}</span>
                <span className="confirm-pill">
                  <span /> Janji
                </span>
              </div>
              <div className="schedule-row">
                <span>Hari praktik</span>
                <b>{PSYCHOLOGIST.hoursNote}</b>
              </div>
              <p className="schedule-note">
                Jadwal konsultasi psikologi menyesuaikan ketersediaan. Hubungi
                WhatsApp untuk mengatur waktu kunjungan.
              </p>
              <a href={WHATSAPP_URL} className="text-link schedule-card-link">
                Atur janji psikologi <Icon name="arrow" />
              </a>
            </article>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
