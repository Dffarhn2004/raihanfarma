import { Icon } from "@/components/ui/icon";
import { WHATSAPP_URL } from "@/lib/constants";

type ServicesProps = {
  showHeading?: boolean;
};

export function Services({ showHeading = true }: ServicesProps) {
  return (
    <section id="layanan" className="section services-section">
      <div className="container">
        {showHeading ? (
          <div className="section-heading">
            <div>
              <p className="eyebrow">LAYANAN UTAMA</p>
              <h2>
                Yang Anda butuhkan,
                <br />
                <em>lebih sederhana.</em>
              </h2>
            </div>
            <p>
              Mulai dari konsultasi dokter, praktik psikologi, hingga kebutuhan
              obat — semua terhubung dalam satu alur pelayanan yang mudah.
            </p>
          </div>
        ) : null}
        <div className="service-grid">
          <article className="service-card featured">
            <div className="service-icon">
              <Icon name="doctor" />
            </div>
            <p className="card-kicker">PRAKTIK DOKTER UMUM</p>
            <h3>
              Konsultasi
              <br />
              Dokter Umum
            </h3>
            <p>
              Konsultasi dan pemeriksaan berbagai keluhan kesehatan bersama
              dokter umum Raihan Farma.
            </p>
            <a href="/jadwal" className="text-link">
              Lihat jadwal <Icon name="arrow" />
            </a>
            <span className="card-number">01</span>
          </article>
          <article className="service-card">
            <div className="service-icon light">
              <Icon name="heart" />
            </div>
            <p className="card-kicker">PRAKTIK PSIKOLOGI</p>
            <h3>
              Konsultasi
              <br />
              Psikologi
            </h3>
            <p>
              Praktik psikologi bersama Saudah, S. Psi Psikolog untuk dukungan kesehatan
              mental yang lebih dekat.
            </p>
            <a href="/tim" className="text-link">
              Kenali psikolog <Icon name="arrow" />
            </a>
            <span className="card-number">02</span>
          </article>
          <article className="service-card">
            <div className="service-icon amber">
              <Icon name="pill" />
            </div>
            <p className="card-kicker">APOTEK</p>
            <h3>
              Kebutuhan Obat
              <br />& Resep
            </h3>
            <p>
              Pelayanan kebutuhan obat dan resep dengan pendampingan tenaga
              kefarmasian.
            </p>
            <a href={WHATSAPP_URL} className="text-link">
              Hubungi apotek <Icon name="arrow" />
            </a>
            <span className="card-number">03</span>
          </article>
        </div>
      </div>
    </section>
  );
}
