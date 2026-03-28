import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Smart Film Sharjah | PDLC Switchable Privacy Glass Film Sharjah — Totalgard",
  description:
    "Totalgard offers PDLC switchable privacy glass film (smart film) in Sharjah. Control transparency at the touch of a button. Blocks 98% UV rays. Residential and commercial smart film installation in Sharjah, UAE. Call +971 56 425 5770.",
  keywords:
    "smart film sharjah, PDLC film sharjah, switchable glass film sharjah, privacy glass film sharjah, smart glass sharjah, switchable privacy glass sharjah, smart film installation sharjah, smart window film sharjah",
  alternates: { canonical: "https://Totalgard.ae/smart-film-pdlc-switchable-privacy-glass-film-sharjah" },
};

const benefits = [
  {
    title: "Privacy On Demand",
    desc: "Control transparency at the touch of a button — switch from crystal clear to fully opaque instantly for privacy whenever you need it.",
  },
  {
    title: "98% UV Protection",
    desc: "Blocks up to 98% of harmful UVA, UVB and UVC rays — protecting your furniture, artwork and interiors from fading in Sharjah's intense sun.",
  },
  {
    title: "Energy Efficient",
    desc: "Reduces solar heat gain and lowers air conditioning costs — a smart investment for homes and businesses in Sharjah's hot climate.",
  },
  {
    title: "Easy Maintenance",
    desc: "Superior hygienic properties and far easier to maintain than traditional curtains and blinds — simply wipe clean with a soft damp cloth.",
  },
  {
    title: "Smart Home Integration",
    desc: "Seamlessly integrates with existing smart home systems. Control via Bluetooth or a mobile app — manual or fully automatic operation.",
  },
  {
    title: "Long-Lasting Protection",
    desc: "Durable PDLC smart film engineered for long-term performance in Sharjah's climate — resistant to heat, humidity and UV degradation.",
  },
];

const useCases = [
  {
    title: "Office & Conference Rooms",
    desc: "Make boardrooms and meeting spaces private on demand — switch to opaque during sensitive discussions, then back to clear for an open feel.",
    icon: "🏢",
  },
  {
    title: "Residential Bathrooms",
    desc: "Replace frosted glass or curtains with smart film. Clear for natural light, opaque for privacy — with no permanent modification to your glass.",
    icon: "🏠",
  },
  {
    title: "Bedroom & Living Room",
    desc: "Control natural light and privacy in living spaces. Smart film lets you enjoy an open, bright room or full privacy at the touch of a button.",
    icon: "🛋️",
  },
  {
    title: "Commercial Storefronts",
    desc: "Transform shop windows into dynamic display surfaces. Switch between transparent and opaque for product displays or private events.",
    icon: "🏪",
  },
  {
    title: "Healthcare & Clinics",
    desc: "Instant privacy for consultation rooms and treatment areas — hygienic, easy to clean and far superior to traditional curtains in medical settings.",
    icon: "🏥",
  },
  {
    title: "Hotel & Hospitality",
    desc: "Add a premium smart experience to hotel rooms, lobbies and spa areas. Switchable privacy glass elevates any luxury interior in Sharjah.",
    icon: "🏨",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Film OFF — Opaque",
    desc: "When power is off, the PDLC liquid crystals are randomly scattered — creating a frosted, fully private opaque appearance.",
  },
  {
    step: "02",
    title: "Film ON — Clear",
    desc: "When power is applied, the liquid crystals align instantly — turning the glass completely transparent and allowing full light transmission.",
  },
  {
    step: "03",
    title: "Manual Control",
    desc: "A simple wall switch, remote control or touch panel allows instant switching between transparent and opaque at any time.",
  },
  {
    step: "04",
    title: "Smart App Control",
    desc: "Bluetooth connectivity and a mobile app interface allow you to control smart film settings from your phone — anywhere, anytime.",
  },
];

const installationSteps = [
  {
    step: "01",
    title: "Site Survey",
    desc: "Totalgard's team visits your Sharjah property to assess the glass surfaces, dimensions and electrical requirements for smart film installation.",
  },
  {
    step: "02",
    title: "Glass Preparation",
    desc: "Thorough cleaning and preparation of all glass surfaces to ensure optimal PDLC film adhesion and a bubble-free, flawless result.",
  },
  {
    step: "03",
    title: "Smart Film Application",
    desc: "Precise, professional application of the PDLC smart film by Totalgard's certified Sharjah installers — panel by panel with care.",
  },
  {
    step: "04",
    title: "Electrical Connection",
    desc: "Wiring and connection of the smart film to your power supply, switch or smart home system — full testing and handover in Sharjah.",
  },
];

const faqs = [
  {
    q: "What is PDLC smart film and how does it work?",
    a: "PDLC (Polymer Dispersed Liquid Crystal) smart film is a switchable privacy glass film that transitions from frosted/opaque to fully transparent with the application of electrical current. When power is off the film appears opaque; when switched on the crystals align and the glass becomes clear instantly.",
  },
  {
    q: "Where can smart film be installed in Sharjah?",
    a: "Totalgard's smart film can be installed on any existing glass surface in Sharjah — office partitions, conference rooms, residential windows, bathroom glass, shop fronts, hotel rooms and more. It's suitable for both residential and commercial properties.",
  },
  {
    q: "How much UV does smart film block?",
    a: "Totalgard's PDLC smart film blocks up to 98% of harmful UVA, UVB and UVC rays — protecting interiors from fading and reducing solar heat gain in Sharjah's intense climate.",
  },
  {
    q: "Can smart film integrate with smart home systems in Sharjah?",
    a: "Yes. Totalgard's smart film integrates seamlessly with existing smart home systems through Bluetooth connectivity and a dedicated mobile app. You can control transparency from your phone or automate it based on time of day.",
  },
  {
    q: "Is smart film easy to maintain in Sharjah?",
    a: "Smart film is far easier to maintain than traditional curtains or blinds. Regular cleaning with a soft damp cloth is all that's needed. It also offers superior hygienic properties — ideal for Sharjah's dusty environment and medical or hospitality settings.",
  },
  {
    q: "Can smart film be installed on existing glass in Sharjah?",
    a: "Yes. Totalgard's PDLC smart film is applied directly to existing glass surfaces without requiring glass replacement — making it a highly cost-effective privacy and design solution for properties in Sharjah.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://Totalgard.ae/smart-film-pdlc-switchable-privacy-glass-film-sharjah/#service",
      name: "Smart Film Sharjah — PDLC Switchable Privacy Glass Film",
      description:
        "Totalgard offers PDLC switchable smart film installation in Sharjah. Control transparency at the touch of a button. Blocks 98% UV rays. Residential and commercial installation.",
      provider: { "@id": "https://Totalgard.ae/#business" },
      areaServed: { "@type": "City", name: "Sharjah" },
      url: "https://Totalgard.ae/smart-film-pdlc-switchable-privacy-glass-film-sharjah",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function SmartFilmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden py-28 md:py-36">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a84c] opacity-[0.07] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full" />
        </div>
        <div
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-6">
              <Link href="/" className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">
                Home
              </Link>
              <span className="text-[#333] text-xs">→</span>
              <span className="text-[#c9a84c] text-xs">Smart Film Sharjah</span>
            </div>
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              PDLC Switchable Privacy Glass Film
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-[#f5f5f5]">Smart Film</span>
              <br />
              <span className="gold-text">Sharjah</span>
            </h1>
            <p className="mt-5 text-[#888] text-lg leading-relaxed">
              Totalgard brings revolutionary{" "}
              <span className="text-[#c9a84c] font-semibold">
                PDLC switchable privacy glass film
              </span>{" "}
              to Sharjah. Control glass transparency at the touch of a button —
              ensuring privacy without sacrificing natural light. Perfect for
              residential and commercial spaces across Sharjah and UAE.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                target="_blank"
                className="gold-gradient text-[#0a0a0a] px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
              >
                Get a Free Quote
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="glass text-[#f5f5f5] px-8 py-4 rounded-full font-semibold hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <p className="mt-5 text-xs text-[#444] tracking-widest uppercase">
              Central Mall, Sharjah, UAE — Residential & Commercial
            </p>
          </div>

          {/* Image + stat badges */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Smart film PDLC switchable privacy glass Sharjah — Totalgard smart film installation UAE"
              fill
              className="object-cover opacity-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">98%</p>
                <p className="text-xs text-[#888] mt-0.5">UV Blocked</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">0.01s</p>
                <p className="text-xs text-[#888] mt-0.5">Switch Speed</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">Smart</p>
                <p className="text-xs text-[#888] mt-0.5">App Control</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Transform Your Space with
              <br />
              <span className="gold-text">Switchable Smart Film</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              Smart film technology represents a significant advancement in
              interior design — offering unparalleled versatility and
              functionality. PDLC (Polymer Dispersed Liquid Crystal) film allows
              users to control transparency with ease, transitioning glass from
              clear to opaque with the simple touch of a button.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              Such ease of use has made it an ideal choice for individuals and
              businesses in Sharjah seeking privacy without sacrificing natural
              light. Totalgard's smart film also blocks harmful UV and infrared
              rays, protects interiors and contributes to lower energy costs —
              making it a smart investment for any property in Sharjah, UAE.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { val: "98%", label: "UV Rays Blocked" },
                { val: "PDLC", label: "Technology" },
                { val: "Smart", label: "App & BT Control" },
                { val: "Both", label: "Residential & Commercial" },
              ].map((s) => (
                <div key={s.label} className="glass-gold rounded-2xl p-4 text-center">
                  <p className="text-xl font-extrabold gold-text">{s.val}</p>
                  <p className="text-xs text-[#666] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glass rounded-3xl p-5 hover:border-[#c9a84c]/40 transition-colors duration-300 group flex gap-4 items-start"
              >
                <div className="w-9 h-9 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-xs">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-[#888] text-xs mt-1 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              How PDLC Smart Film Works
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Understanding the revolutionary liquid crystal technology behind
              Totalgard's smart film in Sharjah.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {howItWorks.map((h, i) => (
              <div key={h.step} className="relative text-center group">
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#c9a84c]/20 to-transparent z-0" />
                )}
                <div className="relative z-10 w-16 h-16 gold-gradient text-[#0a0a0a] rounded-full flex items-center justify-center text-sm font-extrabold mx-auto shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                  {h.step}
                </div>
                <h3 className="font-bold text-[#f5f5f5] mt-5 text-sm">{h.title}</h3>
                <p className="text-[#666] text-xs mt-2 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual toggle illustration */}
          <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="glass rounded-3xl p-8 text-center border-[#1e1e1e] relative overflow-hidden">
              <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
              <div className="w-16 h-16 bg-[#1e1e1e] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚪</span>
              </div>
              <p className="text-[#888] text-xs tracking-widest uppercase font-semibold">Power OFF</p>
              <p className="text-2xl font-extrabold text-[#f5f5f5] mt-2">Opaque</p>
              <p className="text-[#666] text-xs mt-2">Frosted — full privacy</p>
            </div>
            <div className="glass-gold rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-10 blur-2xl rounded-full pointer-events-none" />
              <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#c9a84c]/20">
                <span className="text-3xl">🔆</span>
              </div>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase font-semibold">Power ON</p>
              <p className="text-2xl font-extrabold gold-text mt-2">Transparent</p>
              <p className="text-[#888] text-xs mt-2">Crystal clear — full light</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Where Smart Film is Used
              <br /> in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Totalgard's PDLC smart film is perfect for both residential and
              commercial spaces across Sharjah and the UAE.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="glass rounded-3xl p-7 hover:border-[#c9a84c]/40 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#c9a84c]/20 text-xl">
                  {u.icon}
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                  {u.title}
                </h3>
                <p className="text-[#888] text-xs mt-2 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SMART HOME INTEGRATION ── */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Smart film smart home integration Sharjah — PDLC Bluetooth mobile app control UAE"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-gold rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-xl font-extrabold gold-text">Bluetooth</p>
              <p className="text-xs text-[#888] font-semibold tracking-widest uppercase mt-0.5">
                & App Controlled
              </p>
            </div>
          </div>
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Smart Home Integration
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Control Your Smart Film
              <br />
              <span className="gold-text">From Your Phone</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              Totalgard's switchable privacy glass film seamlessly integrates
              with existing smart home systems — enhancing both convenience and
              functionality. The glass film operates either manually or
              automatically, accommodating various user preferences and needs.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              Bluetooth connectivity allows homeowners to operate the smart film
              with their mobile devices. An intuitive mobile app interface
              grants users the ability to adjust settings with a simple tap —
              whether opting for complete transparency or switching to a frosted
              appearance for privacy.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "Manual wall switch or remote control included",
                "Bluetooth connectivity for wireless control",
                "Dedicated mobile app — iOS and Android compatible",
                "Integrate with existing smart home automation",
                "Schedule transparency based on time of day",
                "Adjustable tint levels for optimal light control",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-[#888]">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full mt-1.5 flex-shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTALLATION PROCESS ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Installation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Smart Film Installation Process
              <br /> in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Totalgard's professional smart film installation in Sharjah is
              recommended over DIY — precision is paramount, especially in
              commercial settings. Our certified installers ensure optimal
              adhesion, functionality and longevity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {installationSteps.map((s, i) => (
              <div key={s.step} className="relative text-center group">
                {i < installationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#c9a84c]/20 to-transparent z-0" />
                )}
                <div className="relative z-10 w-16 h-16 gold-gradient text-[#0a0a0a] rounded-full flex items-center justify-center text-sm font-extrabold mx-auto shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                  {s.step}
                </div>
                <h3 className="font-bold text-[#f5f5f5] mt-5 text-sm">{s.title}</h3>
                <p className="text-[#666] text-xs mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Maintenance note */}
          <div className="mt-14 glass rounded-3xl p-8 md:p-10 max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c] opacity-[0.05] blur-3xl rounded-full pointer-events-none" />
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c9a84c]/20 text-xl">
                🧹
              </div>
              <div>
                <h3 className="font-bold text-[#f5f5f5] mb-2">
                  Smart Film Maintenance in Sharjah
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  Once installed, maintaining Totalgard's smart film is simple —
                  far easier than traditional curtains and blinds. Regular
                  cleaning with a soft, damp cloth is typically sufficient to
                  remove dust and stains without causing damage. Avoid abrasive
                  cleaners or rough materials that may scratch the surface. Its
                  superior hygienic properties make it the ideal choice for
                  Sharjah's dusty climate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-[#f5f5f5] mt-3">
              Smart Film Sharjah — FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300"
              >
                <h3 className="font-bold text-[#f5f5f5] text-sm">{f.q}</h3>
                <p className="text-[#888] text-sm mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c9a84c] opacity-[0.05] blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-[#c9a84c]/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Contact Totalgard Sharjah
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            <span className="text-[#f5f5f5]">Upgrade Your Space with</span>
            <br />
            <span className="gold-text">Smart Film in Sharjah</span>
          </h2>
          <p className="mt-4 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            Contact Totalgard Sharjah today for a free smart film consultation
            and quote. Residential and commercial smart film installation across
            Sharjah and UAE.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="gold-gradient text-[#0a0a0a] px-9 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-xl shadow-[#c9a84c]/20"
            >
              WhatsApp for Free Quote
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="glass text-[#f5f5f5] px-9 py-4 rounded-full font-bold hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <p className="mt-6 text-xs text-[#2a2a2a] tracking-widest uppercase">
            Central Mall, Sharjah — Open 7 Days a Week
          </p>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section className="bg-[#0d0d0d] py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-[#555] tracking-[0.2em] uppercase mb-8">
            Explore Other Services in Sharjah
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Window Tinting Sharjah", href: "/window-tinting" },
              { label: "Paint Protection Film Sharjah", href: "/paint-protection-film" },
              { label: "Ceramic Coating Sharjah", href: "/nano-ceramic-coating" },
              { label: "Car Wrapping Sharjah", href: "/car-wrapping" },
              { label: "Stone Protection Film Sharjah", href: "/stone-protection-film" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="glass text-[#888] text-xs px-5 py-2.5 rounded-full hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}