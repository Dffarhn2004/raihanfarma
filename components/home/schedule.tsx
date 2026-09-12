import { Icon } from "@/components/ui/icon";
import { WHATSAPP_URL } from "@/lib/constants";
import { DOCTOR, PSYCHOLOGIST } from "@/lib/site-data";

type ScheduleProps = {
  showHeading?: boolean;
};

function ScheduleCards() {
  return (
    <>
      <div className="schedule-card">
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
      </div>
      <div className="schedule-card schedule-card-soft">
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
          Jadwal konsultasi psikologi menyesuaikan ketersediaan. Hubungi WhatsApp
          untuk mengatur waktu kunjungan.
        </p>
        <a href={WHATSAPP_URL} className="text-link schedule-card-link">
          Atur janji psikologi <Icon name="arrow" />
        </a>
      </div>
    </>
  );
}

export function Schedule({ showHeading = true }: ScheduleProps) {
  if (!showHeading) {
    return (
      <section id="jadwal" className="section schedule-section schedule-standalone">
        <div className="container">
          <div className="schedule-stack schedule-stack-page">
            <ScheduleCards />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="jadwal" className="section schedule-section">
      <div className="container schedule-grid">
        <div>
          <p className="eyebrow">JADWAL PRAKTIK</p>
          <h2>
            Rencanakan kunjungan
            <br />
            <em>Anda dengan tenang.</em>
          </h2>
          <p className="body-copy">
            Jadwal di bawah merupakan informasi awal. Silakan konfirmasi melalui
            WhatsApp sebelum berkunjung, terutama untuk praktik psikologi.
          </p>
          <a href={WHATSAPP_URL} className="text-link">
            Konfirmasi jadwal <Icon name="arrow" />
          </a>
        </div>
        <div className="schedule-stack">
          <ScheduleCards />
        </div>
      </div>
    </section>
  );
}
