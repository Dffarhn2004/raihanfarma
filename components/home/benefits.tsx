import { Icon } from "@/components/ui/icon";
import type { IconName } from "@/components/ui/icon";
import { BENEFITS } from "@/lib/site-data";

type BenefitsProps = {
  showHeading?: boolean;
};

export function Benefits({ showHeading = true }: BenefitsProps) {
  return (
    <section id="tentang" className="section why-section">
      <div className="container">
        {showHeading ? (
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">MENGAPA RAIHAN FARMA</p>
              <h2>
                Satu langkah kecil
                <br />
                <em>untuk hidup lebih sehat.</em>
              </h2>
            </div>
            <p>Hadir lebih dekat dengan kebutuhan kesehatan masyarakat Tanjung dan sekitarnya.</p>
          </div>
        ) : null}
        <div className="benefit-grid">
          {BENEFITS.map(([icon, title, desc]) => (
            <div className="benefit" key={title}>
              <div className="benefit-icon">
                <Icon name={icon as IconName} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
