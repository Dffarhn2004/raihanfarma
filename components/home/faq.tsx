"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";
import { WHATSAPP_URL } from "@/lib/constants";
import { FAQS } from "@/lib/site-data";

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div>
          <p className="eyebrow">PERTANYAAN UMUM</p>
          <h2>
            Yang sering
            <br />
            <em>ditanyakan.</em>
          </h2>
          <p className="body-copy">Belum menemukan jawaban? Hubungi kami, kami siap membantu.</p>
          <a href={WHATSAPP_URL} className="text-link">
            Tanya melalui WhatsApp <Icon name="arrow" />
          </a>
        </div>
        <div className="faq-list">
          {FAQS.map(([q, a], i) => (
            <div className={openFaq === i ? "faq-item active" : "faq-item"} key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{q}</span>
                <Icon name="plus" />
              </button>
              {openFaq === i && <p>{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
