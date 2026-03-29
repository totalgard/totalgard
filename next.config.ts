import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── FROM totalgard.ae ─────────────────────────────────────────────
      {
        source: "/category/window-tinting",
        destination: "/services/window-tinting",
        permanent: true,
      },
      {
        source: "/smart-auto-sharjah",
        destination: "/",
        permanent: true,
      },
      {
        source: "/car-window-tinting-al-nahda-sharjah",
        destination: "/services/window-tinting",
        permanent: true,
      },

      // ── FROM tint.totalgard.ae ────────────────────────────────────────
      // These come from a subdomain — handled below (see note)
      {
        source: "/about-us",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/marine-window-tinting",
        destination: "/services/window-tinting",
        permanent: true,
      },
      {
        source: "/infusion-lite-films",
        destination: "/services/window-tinting",
        permanent: true,
      },
      {
        source: "/car-window-tinting",
        destination: "/services/window-tinting",
        permanent: true,
      },
      {
        source: "/infusion-pro-films",
        destination: "/services/window-tinting",
        permanent: true,
      },
      {
        source: "/architectural-window-tinting",
        destination: "/services/window-tinting",
        permanent: true,
      },
      {
        source: "/residential-window-tinting",
        destination: "/services/window-tinting",
        permanent: true,
      },
      {
        source: "/infusion-nano-ceramic-films",
        destination: "/services/nano-ceramic-coating",
        permanent: true,
      },
      {
        source: "/infusion-nano-ceramic-reflective-films",
        destination: "/services/nano-ceramic-coating",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;