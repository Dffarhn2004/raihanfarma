import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Raihan Farma",
    short_name: "Raihan Farma",
    description:
      "Apotek, praktik dokter umum, dan praktik psikologi di Hikun, Tanjung, Tabalong.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f766e",
    lang: "id",
    icons: [
      {
        src: "/icons/icon-48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/icons/icon-96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
