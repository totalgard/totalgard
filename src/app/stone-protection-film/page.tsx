import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Stone Protection Film Sharjah | Marble & Stone Surface Protection — TotalGard",
  description:
    "TotalGard offers professional stone protection film installation in Sharjah. Transparent polyurethane film protecting marble, glass and stone countertops from scratches, stains and damage. Residential and commercial. Call +971 56 425 5770.",
  keywords:
    "stone protection film sharjah, marble protection film sharjah, stone surface protection sharjah, countertop protection film sharjah, stone film installation sharjah, marble protection sharjah, surface protection film sharjah",
  alternates: { canonical: "https://totalgard.ae/stone-protection-film" },
};

const benefits = [
  {
    title: "Enhanced Durability",
    desc: "Creates a strong protective layer that shields stone surfaces from scratches, stains and etching from acidic substances — extending the life of your investment.",
  },
  {
    title: "Ease of Cleaning",
    desc: "Treated surfaces are less porous and resist grime and dirt — requiring only mild detergents and water. Maintaining pristine stone has never been easier.",
  },
  {
    title: "Preserved Aesthetics",
    desc: "Stone protection films are virtually invisible once applied — enhancing the natural colour and shine of your stone without altering its appearance.",
  },
  {
    title: "Increased Lifespan",
    desc: "Significantly reduces the need for costly repairs or replacements — protecting your investment in quality stone surfaces for years to come.",
  },
  {
    title: "Impact Resistance",
    desc: "Polyurethane film absorbs shocks and minimises damage from accidental impacts — critical in high-traffic residential and commercial spaces in Sharjah.",
  },
  {
    title: "UV Protection",
    desc: "UV stabilizers integrated into the film prevent discoloration and degradation of stone surfaces caused by Sharjah's intense sun exposure.",
  },
];

const applications = [
  {
    title: "Kitchen Countertops",
    desc: "Protect marble and granite kitchen countertops from spills, cuts, stains and daily culinary hazards — keeping them looking brand new.",
    icon: "🍽️",
  },
  {
    title: "Bathroom Surfaces",
    desc: "Shield bathroom marble and stone from water stains, soap scum and cosmetic damage — easy to clean and maintain.",
    icon: "🚿",
  },
  {
    title: "Outdoor Patios",
    desc: "Protect outdoor stone surfaces from Sharjah's harsh weather, UV rays, heat and environmental damage — preserving vibrant aesthetics.",
    icon: "🌿",
  },
  {
    title: "Restaurant Countertops",
    desc: "High-traffic commercial countertops protected against spills, scratches and heavy daily use — lower maintenance costs and better aesthetics.",
    icon: "🏪",
  },
  {
    title: "Hotel & Hospitality",
    desc: "Preserve the luxury appearance of marble surfaces in hotels, lobbies and spa areas across Sharjah and UAE.",
    icon: "🏨",
  },
  {
    title: "Office & Commercial",
    desc: "Protect marble flooring and stone surfaces in commercial buildings — easier cleaning, fewer repairs and prolonged surface life.",
    icon: "🏢",
  },
];

const materials = [
  {
    name: "Polyurethane Film",
    tag: "Primary Material",
    desc: "The gold standard for stone protection. Exceptional durability, flexibility and impact resistance — absorbs shocks and resists scratches and stains.",
    features: [
      "Shock absorption technology",
      "Superior scratch resistance",
      "UV stabilizers integrated",
      "Self-healing properties",
      "Virtually invisible finish",
    ],
    popular: true,
  },
  {
    name: "Polyethylene Film",
    tag: "Lightweight Option",
    desc: "A lightweight alternative offering solid protection against moisture and minor scratches. Suitable for lower-impact stone surfaces.",
    features: [
      "Moisture protection",
      "Minor scratch resistance",
      "Lightweight application",
      "Easy installation",
      "Cost-effective option",
    ],
    popular: false,
  },
  {
    name: "Vinyl Film",
    tag: "Versatile",
    desc: "Popular for ease of application and variety of available finishes. Suitable for surfaces requiring moderate protection and a specific aesthetic look.",
    features: [
      "Easy application",
      "Multiple finish options",
      "Moderate protection",
      "Removable without damage",
      "Variety of textures",
    ],
    popular: false,
  },
];

const installationSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "TotalGard's experts assess your stone surfaces — type, condition, environment — to determine the appropriate film and extent of preparation required.",
  },
  {
    step: "02",
    title: "Surface Cleaning & Prep",
    desc: "Professional-grade cleaning to ensure the stone is free from dirt, debris and previous coatings — primed for optimal film adhesion.",
  },
  {
    step: "03",
    title: "Precision Film Application",
    desc: "Meticulous alignment and application of the protection film by TotalGard's trained professionals — cut and fitted with advanced tools, zero bubbles.",
  },
  {
    step: "04",
    title: "Quality Inspection",
    desc: "Thorough post-installation inspection to confirm the film is applied correctly and meets TotalGard's highest performance standards in Sharjah.",
  },
];

const maintenanceTips = [
  "Use pH-neutral cleaners specifically designed for stone surfaces — avoid acidic or abrasive products",
  "Clean with soft microfiber cloths to minimise scratches and effectively remove dust and debris",
  "Wipe up spills promptly — especially acidic substances like lemon juice or wine on marble",
  "Use coasters under glasses and placemats under dishes to protect from heat and moisture",
  "Avoid harsh chemicals — a mild soap and warm water solution is sufficient for routine cleaning",
  "For deeper cleaning, consult a professional familiar with the protective film for best results",
];

const misconceptions = [
  {
    myth: "Stone film prevents ALL damage",
    truth:
      "Stone protection films significantly reduce the risk of scratches, stains and minor impacts — but they are not impervious to every form of damage. They are a protective layer, not an absolute barrier.",
  },
  {
    myth: "Film ruins the look of your stone",
    truth:
      "High-quality stone protection films from TotalGard are virtually invisible once applied — actually enhancing the natural beauty and colour of your stone rather than detracting from it.",
  },
  {
    myth: "DIY installation is just as good",
    truth:
      "Professional installation is strongly recommended. TotalGard's skilled technicians ensure optimal adhesion, precision cutting and a bubble-free result that DIY simply cannot match.",
  },
];

const testimonials = [
  {
    name: "Restaurant Owner, Sharjah",
    quote:
      "After TotalGard's stone protection film installation, we noticed a significant reduction in damage from spills and scratches. Lower maintenance costs and our countertops always look great — the long-lasting protection exceeded our expectations.",
    type: "Commercial",
  },
  {
    name: "Residential Client, Sharjah",
    quote:
      "Since applying the stone protection film on our outdoor patio, cleaning has become effortless. Previous sealants were disappointing, but TotalGard's film proved to be an effective solution against harsh weather while keeping the stone vibrant.",
    type: "Residential",
  },
  {
    name: "Facility Manager, Office Building Sharjah",
    quote:
      "Dramatic improvements in the durability of our marble flooring after TotalGard's installation. Easier cleaning, reduced frequency of repairs — a great investment in protecting our high-quality materials.",
    type: "Commercial",
  },
];

const faqs = [
  {
    q: "What is stone protection film and what surfaces does it protect?",
    a: "Stone protection film is a transparent polyurethane film applied to marble, granite, glass and natural stone surfaces to protect them from scratches, stains, UV damage and daily wear. TotalGard installs stone protection film on countertops, bathroom surfaces, outdoor patios, marble flooring and more across Sharjah.",
  },
  {
    q: "Will stone protection film change the appearance of my stone in Sharjah?",
    a: "No. TotalGard's high-quality stone protection films are virtually invisible once applied. Rather than altering your stone's appearance, the film enhances its natural colour and shine — preserving and accentuating the original beauty of your surfaces.",
  },
  {
    q: "How long does stone protection film last in Sharjah's climate?",
    a: "TotalGard's polyurethane stone protection films are engineered to withstand Sharjah's harsh climate including extreme heat, UV radiation and humidity. With proper maintenance, the film provides long-lasting protection — significantly extending the life of your stone surfaces.",
  },
  {
    q: "Is professional installation necessary for stone protection film in Sharjah?",
    a: "Yes. Professional installation is strongly recommended. TotalGard's certified technicians ensure precise cutting, proper surface preparation and optimal film adhesion — guaranteeing a bubble-free, flawless result that performs effectively over time.",
  },
  {
    q: "How do I maintain stone surfaces after film installation in Sharjah?",
    a: "Use pH-neutral cleaners and soft microfiber cloths for routine cleaning. Avoid acidic or abrasive products. Wipe spills promptly. TotalGard's team provides full aftercare guidance after every installation in Sharjah.",
  },
  {
    q: "Is stone protection film suitable for commercial properties in Sharjah?",
    a: "Absolutely. TotalGard's stone protection film is ideal for restaurants, hotels, offices and commercial establishments in Sharjah with high-traffic stone surfaces. It protects against heavy daily use while maintaining an inviting aesthetic and reducing maintenance costs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://totalgard.ae/stone-protection-film/#service",
      name: "Stone Protection Film Sharjah",
      description:
        "TotalGard offers professional stone protection film installation in Sharjah for marble, glass and stone surfaces. Residential and commercial.",
      provider: { "@id": "https://totalgard.ae/#business" },
      areaServed: { "@type": "City", name: "Sharjah" },
      url: "https://totalgard.ae/stone-protection-film",
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

export default function StoneProtectionFilmPage() {
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
              <span className="text-[#c9a84c] text-xs">Stone Protection Film Sharjah</span>
            </div>
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              Marble, Glass & Stone Surface Protection
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-[#f5f5f5]">Stone Protection</span>
              <br />
              <span className="text-[#f5f5f5]">Film </span>
              <span className="gold-text">Sharjah</span>
            </h1>
            <p className="mt-5 text-[#888] text-lg leading-relaxed">
              TotalGard offers professional stone protection film installation
              in Sharjah — an{" "}
              <span className="text-[#c9a84c] font-semibold">
                advanced transparent barrier
              </span>{" "}
              protecting marble, glass and natural stone surfaces from
              scratches, stains and damage. Preserving the beauty and structural
              integrity of your stone for years to come.
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

          {/* Image card */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Stone protection film Sharjah — TotalGard marble and stone surface protection UAE"
              fill
              className="object-cover opacity-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">100%</p>
                <p className="text-xs text-[#888] mt-0.5">Invisible</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">UV+</p>
                <p className="text-xs text-[#888] mt-0.5">Protected</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">Both</p>
                <p className="text-xs text-[#888] mt-0.5">Res. & Comm.</p>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3 leading-tight">
              Preserve Your Stone Surfaces
              <br />
              <span className="gold-text">in Sharjah</span>
            </h2>
            <p className="text-[#888] mt-4 max-w-3xl mx-auto leading-relaxed">
              Stone protection film is an advanced solution designed to
              safeguard surfaces such as marble, glass and natural stone
              countertops. This innovative product acts as a transparent
              barrier — protecting against scratches, stains and various types
              of damage from everyday use, while preserving the aesthetic
              quality and structural integrity of your surfaces in both
              residential and commercial settings across Sharjah.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-sm">✓</span>
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                  {b.title}
                </h3>
                <p className="text-[#888] text-xs mt-2 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATIONS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Where We Install Stone Protection
              <br /> Film in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              TotalGard's stone protection film is ideal for a wide range of
              residential and commercial applications across Sharjah and UAE.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((a) => (
              <div
                key={a.title}
                className="glass rounded-3xl p-7 hover:border-[#c9a84c]/40 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                <div className="w-12 h-12 gold-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#c9a84c]/20 text-xl">
                  {a.icon}
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                  {a.title}
                </h3>
                <p className="text-[#888] text-xs mt-2 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILM MATERIALS ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Materials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Stone Protection Film Materials
              <br /> Used by TotalGard Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              TotalGard uses only the highest quality stone protection film
              materials — engineered to withstand Sharjah's harsh climate and
              heavy daily use.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((m) => (
              <div
                key={m.name}
                className={`glass rounded-3xl p-8 relative overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 flex flex-col ${m.popular ? "border-[#c9a84c]/30" : ""}`}
              >
                {m.popular && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c] opacity-[0.06] blur-3xl rounded-full pointer-events-none" />
                    <span className="absolute top-4 right-4 glass-gold text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      Recommended
                    </span>
                  </>
                )}
                <span
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit ${m.popular ? "glass-gold text-[#c9a84c]" : "bg-[#1e1e1e] text-[#555]"}`}
                >
                  {m.tag}
                </span>
                <h3 className="text-xl font-extrabold text-[#f5f5f5] mt-4">{m.name}</h3>
                <p className="text-[#888] text-sm mt-3 leading-relaxed flex-1">{m.desc}</p>
                <div className="w-8 h-px bg-gradient-to-r from-[#c9a84c] to-transparent my-5" />
                <ul className="space-y-2">
                  {m.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#888]">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                  target="_blank"
                  className={`mt-6 w-full text-center py-3 rounded-full font-bold text-sm transition-opacity block ${m.popular ? "gold-gradient text-[#0a0a0a] hover:opacity-90 shadow-lg shadow-[#c9a84c]/20" : "glass text-[#c9a84c] hover:border-[#c9a84c]/40"}`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSTALLATION PROCESS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Installation Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              How TotalGard Installs Stone
              <br /> Protection Film in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              A meticulous 4-step professional installation process designed to
              ensure your stone surfaces receive the utmost care and maximum
              protection.
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
        </div>
      </section>

      {/* ── WHY TOTALGARD ── */}
      <section className="bg-[#0d0d0d] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
              alt="TotalGard stone protection film installation Sharjah — marble and countertop protection UAE"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-gold rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-2xl font-extrabold gold-text">10+</p>
              <p className="text-xs text-[#888] font-semibold tracking-widest uppercase mt-0.5">
                Years in Sharjah
              </p>
            </div>
          </div>
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Why TotalGard Sharjah
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Sharjah's Leading Stone
              <br />
              <span className="gold-text">Protection Film Specialists</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              TotalGard has emerged as a leading choice for stone protection
              film in Sharjah — renowned for exceptional expertise, high-quality
              materials and a commitment to customer satisfaction. Our team is
              well-versed in various stone types and the specific requirements
              for effective protection.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              We are transparent about pricing and services — providing clear
              information that helps customers make informed decisions. Our
              personalized approach has fostered a loyal customer base with
              numerous positive testimonials from across Sharjah and UAE.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Extensive experience with all stone types — marble, granite, glass and more",
                "High-quality polyurethane films engineered for Sharjah's climate",
                "Personalized solutions tailored to each client's specific needs",
                "Skilled technicians dedicated to precision and care",
                "Transparent pricing with no hidden costs",
                "Trusted by residential and commercial clients across Sharjah",
                "Full aftercare guidance provided post-installation",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#888]">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              What Our Sharjah Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass rounded-3xl p-7 hover:border-[#c9a84c]/40 transition-colors duration-300 group relative overflow-hidden flex flex-col"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${t.type === "Commercial" ? "glass-gold text-[#c9a84c]" : "bg-[#1e1e1e] text-[#555]"}`}
                  >
                    {t.type}
                  </span>
                  <span className="text-[#c9a84c] text-lg">❝</span>
                </div>
                <p className="text-[#888] text-sm leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="mt-5 pt-4 border-t border-[#1e1e1e]">
                  <p className="text-[#f5f5f5] text-xs font-bold">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISCONCEPTIONS ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Myth vs Fact
            </span>
            <h2 className="text-3xl font-extrabold text-[#f5f5f5] mt-3">
              Common Misconceptions About
              <br /> Stone Protection Film
            </h2>
          </div>
          <div className="space-y-5">
            {misconceptions.map((m) => (
              <div
                key={m.myth}
                className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300 grid md:grid-cols-2 gap-5"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-[#1e1e1e] rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#555] mt-0.5">
                    ✗
                  </span>
                  <div>
                    <p className="text-xs text-[#555] tracking-widest uppercase font-semibold mb-1">
                      Myth
                    </p>
                    <p className="text-[#888] text-sm">{m.myth}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 gold-gradient rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-[#0a0a0a] mt-0.5 shadow-md shadow-[#c9a84c]/20">
                    ✓
                  </span>
                  <div>
                    <p className="text-xs text-[#c9a84c] tracking-widest uppercase font-semibold mb-1">
                      Fact
                    </p>
                    <p className="text-[#888] text-sm leading-relaxed">{m.truth}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAINTENANCE TIPS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Aftercare
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Maintenance Tips for
              <br />
              <span className="gold-text">Protected Stone Surfaces</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              After TotalGard's professional stone protection film installation
              in Sharjah, proper maintenance ensures the longevity of your
              marble, glass and stone countertops — preserving their aesthetic
              appeal and functionality for years.
            </p>
            <ul className="mt-6 space-y-3">
              {maintenanceTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-sm text-[#888]">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full mt-1.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[440px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
              alt="Stone protection film maintenance Sharjah — TotalGard protected marble countertop UAE"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-gold rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-xl font-extrabold gold-text">Easy Clean</p>
              <p className="text-xs text-[#888] font-semibold tracking-widest uppercase mt-0.5">
                Just Wipe & Go
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              FAQ
            </span>
            <h2 className="text-3xl font-extrabold text-[#f5f5f5] mt-3">
              Stone Protection Film Sharjah — FAQ
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
            Get Started with TotalGard Sharjah
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            <span className="text-[#f5f5f5]">Protect Your Stone Surfaces</span>
            <br />
            <span className="gold-text">in Sharjah Today</span>
          </h2>
          <p className="mt-4 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            Reach out to TotalGard Sharjah for a free consultation and quote on
            stone protection film installation. Residential and commercial
            properties across Sharjah and UAE. We frequently offer special
            promotions — ask about ongoing deals when you contact us.
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
              { label: "Smart Film Sharjah", href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah" },
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