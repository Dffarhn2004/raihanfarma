import { Icon } from "@/components/ui/icon";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function MobileCta() {
  return (
    <div className="mobile-cta">
      <a href={PHONE_TEL}>
        <Icon name="phone" /> Telepon
      </a>
      <a href={WHATSAPP_URL}>
        <Icon name="check" /> Daftar WhatsApp
      </a>
    </div>
  );
}
