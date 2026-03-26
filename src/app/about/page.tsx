import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Us | TotalGard Sharjah — Automotive Protection UAE",
  description:
    "Learn about TotalGard by Smart Auto Sharjah — the UAE's trusted automotive protection specialists with 10+ years of expertise in window tinting, PPF, ceramic coating and car wrapping at Central Mall, Sharjah.",
  alternates: { canonical: "https://totalgard.ae/about" },
};

// ── INLINE SVG ICONS ──
function IconTrophy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}

function IconMicroscope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#0a0a0a]">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#c9a84c] flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// ── DATA ──
const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "5,000+", label: "Cars Protected" },
  { value: "50,000+", label: "UAE Customers Served" },
  { value: "100%", label: "Satisfaction Guaranteed" },
];

const values = [
  {
    Icon: IconTrophy,
    title: "Excellence",
    desc: "We use only the world's leading brands and premium materials — never cutting corners on quality. Every vehicle we touch gets the best.",
  },
  {
    Icon: IconMicroscope,
    title: "Expertise",
    desc: "Our certified technicians are trained in the latest application techniques — ensuring flawless results on every single vehicle.",
  },
  {
    Icon: IconHandshake,
    title: "Trust",
    desc: "Transparent pricing, honest recommendations and a commitment to doing what's right for your vehicle and your budget — always.",
  },
  {
    Icon: IconShield,
    title: "Protection",
    desc: "We are passionate about protecting your investment. Sharjah's harsh climate demands the best — and that's exactly what we deliver.",
  },
];

const services = [
  { label: "Window Tinting", href: "/window-tinting", desc: "Advanced ceramic and nano-carbon window films" },
  { label: "Paint Protection Film", href: "/paint-protection-film", desc: "Self-healing TPU film for ultimate paint protection" },
  { label: "Nano Ceramic Coating", href: "/nano-ceramic-coating", desc: "Hydrophobic, UV-resistant coating that lasts years" },
  { label: "Car Wrapping", href: "/car-wrapping", desc: "Full wraps, colour changes and custom graphics" },
  { label: "Smart Film", href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah", desc: "PDLC switchable privacy glass film" },
  { label: "Stone Protection Film", href: "/stone-protection-film", desc: "Transparent protection for marble and stone surfaces" },
];

const timeline = [
  {
    year: "2014",
    title: "Founded in Sharjah",
    desc: "Smart Auto opened its doors in Sharjah with a simple mission — bring world-class automotive protection to UAE car owners.",
  },
  {
    year: "2017",
    title: "TotalGard Brand Launched",
    desc: "The TotalGard brand was established — a dedicated automotive protection division specialising in window tinting, PPF and ceramic coatings.",
  },
  {
    year: "2020",
    title: "Central Mall Flagship",
    desc: "TotalGard opened its flagship location at Central Mall, Sharjah — the most spacious, family-friendly car care centre in the UAE.",
  },
  {
    year: "2024",
    title: "50,000+ Customers",
    desc: "Trusted by over 50,000 car enthusiasts across Sharjah and the UAE — cementing TotalGard's position as the #1 automotive protection brand.",
  },
];

const whyUs = [
  "Authorised dealers and certified installers for leading global brands",
  "10+ years of hands-on experience with all vehicle types",
  "State-of-the-art studio at Central Mall, Sharjah — open 7 days",
  "Only premium, UAE climate-tested materials used",
  "Transparent pricing — no hidden fees, ever",
  "Trained and certified technicians for every service",
  "Trusted by 50,000+ car enthusiasts across the UAE",
  "100% satisfaction guarantee on every job",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About TotalGard Sharjah",
  url: "https://totalgard.ae/about",
  description:
    "TotalGard by Smart Auto Sharjah — 10+ years of automotive protection expertise in window tinting, PPF, ceramic coating and car wrapping.",
  mainEntity: {
    "@type": "AutoBodyShop",
    name: "TotalGard by Smart Auto Sharjah",
    url: "https://totalgard.ae",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Central Mall",
      addressLocality: "Sharjah",
      addressCountry: "AE",
    },
    foundingDate: "2014",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 20 },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9a84c] opacity-[0.06] blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link href="/" className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span className="text-[#333] text-xs">/</span>
            <span className="text-[#c9a84c] text-xs">About Us</span>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
                About TotalGard
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
                <span className="text-[#f5f5f5]">Sharjah's Most</span>
                <br />
                <span className="text-[#f5f5f5]">Trusted </span>
                <span className="gold-text">Car</span>
                <br />
                <span className="gold-text">Protection</span>
                <span className="text-[#f5f5f5]"> Brand.</span>
              </h1>
              <p className="mt-6 text-[#888] text-lg leading-relaxed">
                TotalGard is the automotive protection division of{" "}
                <span className="text-[#c9a84c] font-semibold">Smart Auto Sharjah</span>{" "}
                — the UAE's premier destination for window tinting, paint
                protection film, nano ceramic coating and car wrapping. With
                10+ years of expertise and 50,000+ satisfied customers across
                Sharjah and the UAE, we are the name you can trust.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                  target="_blank"
                  className="gold-gradient text-[#0a0a0a] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
                >
                  Get a Free Quote
                </a>
                <Link
                  href="/contact-us"
                  className="glass text-[#f5f5f5] px-8 py-4 rounded-full font-semibold text-sm hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl shadow-black/50">
              <Image
                src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80"
                alt="TotalGard Sharjah automotive protection workshop — Smart Auto UAE"
                fill
                className="object-cover opacity-70"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                {[
                  { value: "10+", label: "Years" },
                  { value: "50K+", label: "Customers" },
                  { value: "#1", label: "In Sharjah" },
                ].map((s) => (
                  <div key={s.label} className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                    <p className="text-xl font-extrabold gold-text">{s.value}</p>
                    <p className="text-xs text-[#888] mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0d0d0d] py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-3xl p-6 text-center hover:border-[#c9a84c]/40 transition-colors duration-300">
                <p className="text-3xl md:text-4xl font-extrabold gold-text">{s.value}</p>
                <p className="text-xs text-[#555] mt-2 tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=800&q=80"
              alt="TotalGard story — Smart Auto Sharjah automotive protection UAE"
              fill
              className="object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/10 to-transparent" />
          </div>
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              A Decade of Protecting
              <br />
              <span className="gold-text">UAE's Finest Vehicles</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              TotalGard was born from a passion for automotive excellence and a
              deep understanding of the challenges UAE car owners face. Sharjah's
              intense UV radiation, extreme heat and dusty conditions are
              unforgiving on vehicle paintwork — and we built TotalGard to be
              the answer.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              As the automotive protection division of Smart Auto — one of the
              UAE's most trusted car care groups — TotalGard combines decades
              of collective expertise with the world's leading protection brands.
              From our flagship studio at Central Mall, Sharjah, we serve
              thousands of car owners across the UAE every year.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              Whether it's a daily driver or a luxury supercar — every vehicle
              that enters TotalGard receives the same meticulous attention to
              detail and the same commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              How TotalGard Grew to
              <br />
              <span className="gold-text">Become Sharjah's #1</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((t, i) => (
              <div key={t.year} className="relative group">
                {i < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[4rem] right-0 h-px bg-gradient-to-r from-[#c9a84c]/30 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 gold-gradient text-[#0a0a0a] rounded-full flex items-center justify-center font-extrabold text-xs shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                    {t.year}
                  </div>
                  <h3 className="font-bold text-[#f5f5f5] mt-5 text-sm">{t.title}</h3>
                  <p className="text-[#666] text-xs mt-2 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              What Drives Everything
              <br />
              <span className="gold-text">We Do at TotalGard</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass rounded-3xl p-7 hover:border-[#c9a84c]/40 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                {/* SVG Icon */}
                <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                  <v.Icon />
                </div>
                <h3 className="font-bold text-[#f5f5f5] group-hover:text-[#c9a84c] transition-colors">
                  {v.title}
                </h3>
                <p className="text-[#888] text-sm mt-2 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Complete Automotive Protection
              <br />
              <span className="gold-text">Services in Sharjah</span>
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Every service we offer is designed to protect and enhance your
              vehicle — using only the best materials and the most precise
              application techniques available in Sharjah.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-all duration-300 group flex items-center gap-5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                {/* SVG Arrow Icon */}
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                  <IconArrowRight />
                </div>
                <div>
                  <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                    {s.label}
                  </h3>
                  <p className="text-[#666] text-xs mt-1">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Why Choose TotalGard
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              The TotalGard Difference
              <br />
              <span className="gold-text">in Sharjah</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              There are plenty of car protection services in Sharjah — but
              TotalGard stands apart. We combine genuine expertise, premium
              materials and an obsession with quality that has earned us the
              trust of 50,000+ UAE car owners.
            </p>
            <ul className="mt-6 space-y-3">
              {whyUs.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-[#888]">
                  {/* SVG Check Icon */}
                  <IconCheck />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
              alt="TotalGard team Sharjah — trusted automotive protection UAE"
              fill
              className="object-cover opacity-65"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-gold rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-2xl font-extrabold gold-text">UAE's #1</p>
              <p className="text-xs text-[#888] font-semibold tracking-widest uppercase mt-0.5">
                Car Protection Studio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0d0d0d] py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <span className="text-[#c9a84c]/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Ready to Protect Your Vehicle?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            <span className="text-[#f5f5f5]">Visit TotalGard at</span>
            <br />
            <span className="gold-text">Central Mall, Sharjah</span>
          </h2>
          <p className="mt-4 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            Walk in or book an appointment. Our team is ready to assess your
            vehicle and recommend the best protection solution for Sharjah's
            demanding climate.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="gold-gradient text-[#0a0a0a] px-9 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-xl shadow-[#c9a84c]/20"
            >
              WhatsApp for Free Quote
            </a>
            <Link
              href="/contact-us"
              className="glass text-[#f5f5f5] px-9 py-4 rounded-full font-bold text-sm hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          <p className="mt-6 text-xs text-[#2a2a2a] tracking-widest uppercase">
            Open 7 Days — Sun to Sat: 10:00 AM – 10:00 PM
          </p>
        </div>
      </section>
    </>
  );
}