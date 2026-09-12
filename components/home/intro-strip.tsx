import { Icon } from "@/components/ui/icon";

export function IntroStrip() {
  return (
    <section className="intro-strip">
      <div className="container intro-inner">
        <p>
          Teman kesehatan keluarga
          <br />
          <strong>untuk warga Tanjung.</strong>
        </p>
        <div className="intro-note">
          <span className="note-icon">
            <Icon name="heart" />
          </span>
          <span>
            Pelayanan yang hangat
            <br />
            <b>di satu lokasi yang praktis.</b>
          </span>
        </div>
      </div>
    </section>
  );
}
