import { BrandLogo } from "@/components/ui/brand-logo";
import { Icon } from "@/components/ui/icon";
import { MAPS_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/constants";

type FooterProps = {
  homeHref?: string;
};

export function Footer({ homeHref = "/" }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href={homeHref}>
            <BrandLogo size="footer" />
            <span>
              raihan<span>farma</span>
            </span>
          </a>
          <p>
            Apotek, praktik dokter umum
            <br />
            &amp; psikologi di Tanjung.
          </p>
        </div>
        <div>
          <p className="footer-title">Navigasi</p>
          <a href="/layanan">Layanan</a>
          <a href="/tim">Tim kami</a>
          <a href="/jadwal">Jadwal praktik</a>
          <a href="/artikel">Artikel kesehatan</a>
          <a href="/tentang">Tentang kami</a>
          <a href="/kontak">Kontak</a>
        </div>
        <div>
          <p className="footer-title">Hubungi kami</p>
          <a href={PHONE_TEL}>
            <Icon name="phone" /> {PHONE_DISPLAY}
          </a>
          <a href={MAPS_URL}>
            <Icon name="pin" /> Lihat lokasi
          </a>
          <p className="unverified">
            Nomor dan informasi operasional
            <br />
            perlu dikonfirmasi sebelum publikasi.
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Raihan Farma. Semua hak dilindungi.</span>
        <span>Website informasi layanan kesehatan lokal.</span>
      </div>
    </footer>
  );
}
