import { Icon } from "@/components/ui/icon";
import { MAPS_EMBED_URL, MAPS_URL, WHATSAPP_URL } from "@/lib/constants";

type LocationProps = {
  showHeading?: boolean;
};

export function Location({ showHeading = true }: LocationProps) {
  return (
    <section id="kontak" className="location-section">
      <div className="container location-panel">
        <div className="map-embed">
          <iframe
            src={MAPS_EMBED_URL}
            title="Lokasi Apotek Raihan Farma di Google Maps"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="location-copy">
          {showHeading ? (
            <>
              <p className="eyebrow">TEMUKAN RAIHAN FARMA</p>
              <h2>
                Kami ada
                <br />
                <em>di dekat Anda.</em>
              </h2>
            </>
          ) : null}
          <p className="address">
            Apotek Raihan Farma
            <br />
            Jl. Basuki Rahmat No.29 RT.03
            <br />
            Hikun, Kecamatan Tanjung
            <br />
            Kabupaten Tabalong, Kalimantan Selatan 71571
          </p>
          <div className="location-actions">
            <a className="button primary small" href={MAPS_URL} target="_blank" rel="noreferrer">
              Petunjuk arah <Icon name="arrow" />
            </a>
            <a className="button secondary small" href={WHATSAPP_URL}>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
