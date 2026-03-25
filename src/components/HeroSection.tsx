"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0a0a0a]">

      {/* ── BACKGROUND IMAGE ── */}
      <Image
        src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&q=85"
        alt="TotalGard automotive protection Sharjah"
        fill
        className="object-cover opacity-30"
        priority
      />

      {/* ── GRADIENT OVERLAY ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />

      {/* ── CONTENT ── */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
            Sharjah's Premier Automotive Protection
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
            <span className="text-[#f5f5f5]">Protect &</span>
            <br />
            <span className="text-[#f5f5f5]">Elevate </span>
            <span className="gold-text">Your</span>
            <br />
            <span className="gold-text">Vehicle.</span>
          </h1>

          {/* Subtext */}
          <p className="text-[#888] text-lg leading-relaxed font-light max-w-lg mb-10">
            TotalGard by Smart Auto Sharjah — the UAE's trusted automotive
            protection specialist. Ceramic tinting, PPF, nano ceramic coating
            and car wrapping with 10+ years of precision expertise.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="gold-gradient text-[#0a0a0a] px-9 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Get a Free Quote
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="glass text-[#f5f5f5] px-9 py-4 rounded-full font-semibold text-sm hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Location */}
          <p className="text-xs text-[#444] tracking-[0.2em] uppercase">
            📍 Central Mall, Sharjah, UAE
          </p>

        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "5,000+", label: "Cars Protected" },
              { value: "99%", label: "UV Rejection" },
              { value: "100%", label: "Satisfaction" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`py-5 px-6 text-center ${
                  i !== 3 ? "border-r border-[#1e1e1e]" : ""
                } ${i >= 2 ? "hidden md:block" : ""}`}
              >
                <p className="text-xl font-extrabold gold-text">{s.value}</p>
                <p className="text-xs text-[#555] mt-0.5 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}