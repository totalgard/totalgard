"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5,000+", label: "Cars Protected" },
  { value: "15-Year", label: "Tint Warranty" },
];

function IconArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11l-.94.94a16 16 0 0 0 5.49 5.49l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <Image
        src="/images/hero-car.jpg"
        alt="TotalGard automotive protection Sharjah"
        fill
        priority
        className="object-cover object-center opacity-25"
      />

      <div className="absolute inset-0 bg-[#0a0a0a]/78" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-[#0a0a0a]/65 to-[#0a0a0a]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="w-full text-center">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a84c]">
              TotalGard Sharjah
            </p>

            <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-[#f5f5f5] md:text-6xl lg:text-7xl">
              Premium protection
              <br />
              for every drive
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#9a9a9a] md:text-lg">
              Ceramic window tinting, paint protection film, nano ceramic coating
              and car wrapping — expertly applied in Sharjah for a clean,
              refined and long-lasting finish.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#c9a84c] px-8 py-4 text-sm font-bold text-[#0a0a0a] transition hover:opacity-90"
              >
                Get a Free Quote
                <IconArrowRight />
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-[#2b2b2b] px-8 py-4 text-sm font-semibold text-[#f5f5f5] transition hover:border-[#c9a84c]/40 hover:text-[#c9a84c]"
              >
                <IconPhone />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Stats card */}
          <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-[#1f1f1f] bg-[#111111] p-6 md:p-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center ${
                    index !== stats.length - 1 ? "md:border-r md:border-[#1f1f1f]" : ""
                  }`}
                >
                  <p className="text-3xl font-extrabold text-[#c9a84c] md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#666]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-[#1f1f1f] pt-5 text-center">
              <p className="text-xs uppercase tracking-[0.18em] text-[#5f5f5f]">
                Central Mall, Sharjah • Open Daily 10 AM – 10 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}