import { DOCTOR_IMAGE, LOGO_PATH, MAPS_URL, SITE_URL } from "@/lib/constants";
import { DOCTOR, FAQS, PSYCHOLOGIST } from "@/lib/site-data";

export function PharmacyJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: "Raihan Farma",
        alternateName: ["Apotek Raihan Farma", "Raihan Farma Tanjung Tabalong"],
        url: SITE_URL,
        inLanguage: "id-ID",
        publisher: { "@id": `${SITE_URL}/#business` }
      },
      {
        "@type": ["Pharmacy", "MedicalBusiness", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: "Apotek Raihan Farma",
        alternateName: "Raihan Farma",
        url: SITE_URL,
        description:
          "Apotek Raihan Farma di Hikun, Tanjung, Tabalong melayani kebutuhan obat, praktik dokter umum, dan praktik psikologi bersama Saudah, S. Psi Psikolog.",
        logo: `${SITE_URL}${LOGO_PATH}`,
        image: `${SITE_URL}${LOGO_PATH}`,
        telephone: "+6285247092025",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jl. Basuki Rahmat No.29 RT.03, Hikun",
          addressLocality: "Tanjung",
          addressRegion: "Kalimantan Selatan",
          postalCode: "71571",
          addressCountry: "ID"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -2.143437,
          longitude: 115.3892257
        },
        hasMap: MAPS_URL,
        areaServed: [
          "Tanjung",
          "Tabalong",
          "Hikun",
          "Kalimantan Selatan"
        ],
        knowsAbout: [
          "Apotek",
          "Praktik dokter umum",
          "Praktik psikologi",
          "Konsultasi kesehatan mental"
        ],
        availableService: [
          {
            "@type": "MedicalTherapy",
            name: "Praktik dokter umum",
            description: "Konsultasi dan pemeriksaan kesehatan umum."
          },
          {
            "@type": "Service",
            name: "Praktik psikologi",
            description:
              "Konsultasi psikologi bersama Saudah, S. Psi Psikolog untuk individu dan keluarga.",
            provider: { "@id": `${SITE_URL}/#psikolog` }
          },
          {
            "@type": "Service",
            name: "Pelayanan apotek",
            description: "Pelayanan obat dan resep dengan pendampingan kefarmasian."
          }
        ],
        employee: [
          { "@id": `${SITE_URL}/#dokter` },
          { "@id": `${SITE_URL}/#psikolog` }
        ]
      },
      {
        "@type": "Physician",
        "@id": `${SITE_URL}/#dokter`,
        name: DOCTOR.name,
        jobTitle: DOCTOR.role,
        image: `${SITE_URL}${DOCTOR_IMAGE}`,
        worksFor: { "@id": `${SITE_URL}/#business` },
        medicalSpecialty: "GeneralPractice"
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#psikolog`,
        name: PSYCHOLOGIST.name,
        jobTitle: PSYCHOLOGIST.role,
        description: PSYCHOLOGIST.blurb,
        worksFor: { "@id": `${SITE_URL}/#business` },
        knowsAbout: [
          "Praktik psikologi",
          "Konsultasi psikologi",
          "Kesehatan mental"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
