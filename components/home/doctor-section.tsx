import { Icon } from "@/components/ui/icon";
import { DOCTOR_IMAGE, WHATSAPP_URL } from "@/lib/constants";
import { DOCTOR, PSYCHOLOGIST } from "@/lib/site-data";

type DoctorSectionProps = {
  showHeading?: boolean;
};

export function DoctorSection({ showHeading = true }: DoctorSectionProps) {
  return (
    <section id="tim" className="section doctor-section">
      <div className="container">
        {showHeading ? (
          <div className="section-heading">
            <div>
              <p className="eyebrow">TIM KAMI</p>
              <h2>
                Perawatan yang
                <br />
                <em>dimulai dari mendengar.</em>
              </h2>
            </div>
            <p>
              Temui dokter umum dan psikolog di Raihan Farma untuk kebutuhan
              kesehatan fisik maupun mental keluarga Anda.
            </p>
          </div>
        ) : null}

        <div className="team-grid">
          <article className="team-card">
            <div className="doctor-image team-visual">
              <div className="image-label">
                <span>PROFIL DOKTER</span>
                <b>{DOCTOR.name}</b>
              </div>
              <img
                className="doctor-photo"
                src={DOCTOR_IMAGE}
                alt={`${DOCTOR.name} — Dokter Umum Raihan Farma`}
              />
            </div>
            <div className="team-body">
              <p className="profile-name">{DOCTOR.name}</p>
              <p className="profile-role">{DOCTOR.role}</p>
              <p className="team-blurb">{DOCTOR.blurb}</p>
              <a className="button primary small" href={WHATSAPP_URL}>
                Tanya jadwal dokter <Icon name="arrow" />
              </a>
            </div>
          </article>

          <article className="team-card">
            <div className="team-visual psychologist-visual" aria-hidden="true">
              <div className="image-label">
                <span>PROFIL PSIKOLOG</span>
                <b>{PSYCHOLOGIST.name}</b>
              </div>
              <div className="psychologist-monogram">
                <span>S</span>
              </div>
            </div>
            <div className="team-body">
              <p className="profile-name">{PSYCHOLOGIST.name}</p>
              <p className="profile-role">{PSYCHOLOGIST.role}</p>
              <p className="team-blurb">{PSYCHOLOGIST.blurb}</p>
              <a className="button primary small" href={WHATSAPP_URL}>
                Tanya jadwal psikologi <Icon name="arrow" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
