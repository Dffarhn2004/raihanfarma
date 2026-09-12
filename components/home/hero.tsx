"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Icon } from "@/components/ui/icon";
import { WHATSAPP_URL } from "@/lib/constants";
import { HEALTH_ICONS } from "@/lib/site-data";

export function Hero() {
  const [activeHealthIcon, setActiveHealthIcon] = useState(0);

  return (
    <section id="beranda" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> APOTEK · DOKTER UMUM · PSIKOLOGI
          </p>
          <h1>
            Kesehatan Anda,
            <br />
            <em>lebih dekat.</em>
          </h1>
          <p className="hero-lead">
            Konsultasi dokter umum, praktik psikologi, dan kebutuhan obat di
            Raihan Farma — satu tempat yang mudah dijangkau.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={WHATSAPP_URL}>
              Daftar via WhatsApp <Icon name="arrow" />
            </a>
            <a className="button secondary" href="/jadwal">
              Lihat jadwal praktik
            </a>
          </div>
          <div className="trust-row">
            <span>
              <Icon name="check" /> Dokter umum
            </span>
            <span>
              <Icon name="check" /> Apotek
            </span>
            <span>
              <Icon name="check" /> Psikologi
            </span>
          </div>
        </div>
        <div className="hero-visual health-visual" aria-label="Layanan kesehatan Raihan Farma">
          <div className="health-aura aura-one" />
          <div className="health-aura aura-two" />
          <div className="health-particle particle-one" />
          <div className="health-particle particle-two" />
          <div className="health-particle particle-three" />
          <div className="health-orbit orbit-outer" />
          <div className="health-orbit orbit-inner" />
          <div className="health-center">
            <BrandLogo size="hero" priority />
            <span className="center-wordmark">
              raihan<em>farma</em>
            </span>
            <span className="center-tagline">Kesehatan lebih dekat</span>
            <svg className="heartbeat" viewBox="0 0 150 28" aria-hidden="true">
              <path d="M2 15h34l8-11 12 22 10-17 8 6h74" />
            </svg>
          </div>
          {HEALTH_ICONS.map((item, index) => (
            <button
              key={item.title}
              className={`health-node node-${index + 1}${activeHealthIcon === index ? " active" : ""}`}
              onMouseEnter={() => setActiveHealthIcon(index)}
              onFocus={() => setActiveHealthIcon(index)}
              onClick={() => setActiveHealthIcon(index)}
              aria-label={`${item.title}: ${item.detail}`}
              type="button"
            >
              <Icon name={item.icon} />
              <span>{item.title}</span>
            </button>
          ))}
          <div className="health-caption" aria-live="polite">
            <span className="caption-spark">
              <Icon name="check" />
            </span>
            <span>
              <small>{HEALTH_ICONS[activeHealthIcon].title}</small>
              <strong>{HEALTH_ICONS[activeHealthIcon].detail}</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
