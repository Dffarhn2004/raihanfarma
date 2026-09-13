import type { IconName } from "@/components/ui/icon";

export const NAV_LINKS = [
  ["Layanan", "/layanan"],
  ["Tim", "/tim"],
  ["Jadwal", "/jadwal"],
  ["Artikel", "/artikel"],
  ["Tentang", "/tentang"],
  ["Kontak", "/kontak"]
] as const;

export const HEALTH_ICONS = [
  { icon: "doctor" as IconName, title: "Konsultasi Dokter", detail: "Pemeriksaan kesehatan umum" },
  { icon: "pill" as IconName, title: "Pelayanan Apotek", detail: "Kebutuhan obat & resep" },
  { icon: "heart" as IconName, title: "Praktik Psikologi", detail: "Konsultasi bersama psikolog" },
  { icon: "shield" as IconName, title: "Mudah & Terarah", detail: "Informasi layanan yang jelas" }
];

export const FAQS = [
  [
    "Apakah Raihan Farma melayani konsultasi dokter?",
    "Ya. Raihan Farma menyediakan layanan praktik dokter umum untuk konsultasi dan pemeriksaan berbagai keluhan kesehatan umum."
  ],
  [
    "Apakah ada praktik psikologi di Raihan Farma?",
    "Ya. Raihan Farma juga membuka praktik psikologi bersama Saudah, S. Psi Psikolog. Jadwal konsultasi dapat dikonfirmasi melalui WhatsApp."
  ],
  [
    "Apakah Raihan Farma menyediakan rawat inap?",
    "Tidak. Pelayanan di Raihan Farma meliputi praktik dokter umum, praktik psikologi, pelayanan rawat jalan, serta apotek."
  ],
  [
    "Di mana lokasi Raihan Farma?",
    "Apotek Raihan Farma beralamat di Jl. Basuki Rahmat No.29 RT.03, Hikun, Kecamatan Tanjung, Kabupaten Tabalong, Kalimantan Selatan 71571."
  ],
  [
    "Bagaimana cara mendaftar konsultasi?",
    "Hubungi kami melalui WhatsApp untuk menanyakan jadwal dan pendaftaran konsultasi dokter atau psikologi. Anda juga dapat datang langsung ke lokasi."
  ],
  [
    "Apakah perlu membuat janji terlebih dahulu?",
    "Untuk memastikan ketersediaan dokter atau psikolog, sebaiknya konfirmasi jadwal terlebih dahulu melalui WhatsApp."
  ]
] as const;

export const BENEFITS = [
  ["doctor", "Dokter umum", "Konsultasi langsung bersama dokter umum."],
  ["heart", "Praktik psikologi", "Konsultasi psikologi bersama Saudah, S. Psi Psikolog."],
  ["pill", "Apotek dalam satu lokasi", "Penuhi kebutuhan obat tanpa berpindah tempat."],
  ["pin", "Lokasi mudah dijangkau", "Berada di Hikun, Tanjung, Kabupaten Tabalong."]
] as const;

export const SCHEDULE_DAYS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"] as const;

export const DOCTOR = {
  name: "dr. H. Syaifullah, MM",
  role: "Dokter Umum",
  weekdayHours: "16.00 – 21.00",
  blurb: "Konsultasi dan pemeriksaan kesehatan umum bagi anak, dewasa, dan keluarga."
} as const;

export const PSYCHOLOGIST = {
  name: "Saudah, S. Psi Psikolog",
  role: "Psikolog",
  hoursNote: "Dengan janji",
  blurb: "Konsultasi psikologi untuk individu dan keluarga di Raihan Farma."
} as const;
