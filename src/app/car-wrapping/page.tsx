import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Car Wrapping Sharjah | Professional Car Wrap Sharjah — Totalgard",
  description:
    "Totalgard offers professional car wrapping in Sharjah. Full wraps, partial wraps, colour changes and car graphics. Premium vinyl materials, stunning results. Central Mall, Sharjah, UAE. Call +971 56 425 5770.",
  keywords:
    "car wrapping sharjah, car wrap sharjah, vinyl wrap sharjah, colour change wrap sharjah, car graphics sharjah, vehicle wrap sharjah, full car wrap sharjah, partial car wrap sharjah, car decals sharjah",
  alternates: { canonical: "https://Totalgard.ae/car-wrapping" },
};

const benefits = [
  {
    title: "Customization",
    desc: "Transform the appearance of your vehicle with endless colour, texture and design options — from gloss and matte to satin, chrome and custom prints.",
  },
  {
    title: "Protection",
    desc: "Shield your vehicle's original paint from scratches, chips and UV damage with a high-quality vinyl wrap applied by Totalgard's Sharjah experts.",
  },
  {
    title: "Versatility",
    desc: "Change the look of your vehicle temporarily or create eye-catching advertising displays. Wraps can be removed without damaging original paint.",
  },
  {
    title: "Affordability",
    desc: "Achieve a high-quality finish at a fraction of the cost of a traditional paint job — car wrapping in Sharjah is the smart choice for a fresh look.",
  },
];

const graphicsBenefits = [
  {
    title: "Endless Customization",
    desc: "Car graphics offer endless options — unique designs, patterns and images tailored to your personal style or branding needs in Sharjah.",
  },
  {
    title: "Fully Removable",
    desc: "Car graphics are removable, allowing you to change or update your vehicle's appearance as desired without damaging the original paint.",
  },
  {
    title: "Easy Maintenance",
    desc: "Car graphics are easy to maintain and clean — requiring only mild soap and water to keep them looking fresh and vibrant.",
  },
  {
    title: "Paint Protection",
    desc: "High-quality vinyl materials provide an additional layer of protection for your vehicle's paint, shielding it from scratches, chips and UV damage.",
  },
];

const wrapTypes = [
  {
    name: "Full Car Wrap",
    tag: "Maximum Impact",
    desc: "Complete vehicle transformation — every panel wrapped in your chosen colour or design. The ultimate way to change your car's appearance in Sharjah.",
    features: [
      "Complete colour change",
      "All panels covered",
      "Gloss, matte or satin finish",
      "Custom design available",
      "Original paint fully protected",
    ],
    popular: false,
  },
  {
    name: "Colour Change Wrap",
    tag: "Most Popular",
    desc: "Transform your car's colour entirely with a premium vinyl wrap. A stunning, cost-effective alternative to a full respray — fully reversible.",
    features: [
      "Full colour transformation",
      "100+ colour options",
      "Gloss, matte, satin, chrome",
      "Reversible — no permanent change",
      "Protects original factory paint",
    ],
    popular: true,
  },
  {
    name: "Partial Wrap",
    tag: "Great Value",
    desc: "Wrap specific panels, roof, bonnet or accents for a striking two-tone look. A popular choice for Sharjah customers wanting a unique style on a budget.",
    features: [
      "Selective panel coverage",
      "Roof, bonnet, mirrors",
      "Racing stripes available",
      "Cost-effective option",
      "Fast turnaround",
    ],
    popular: false,
  },
  {
    name: "Car Graphics & Decals",
    tag: "Brand & Style",
    desc: "Racing stripes, vibrant decals, logos and full branding graphics. Perfect for personal style or business advertising across Sharjah and UAE.",
    features: [
      "Custom design & print",
      "Business branding",
      "Racing stripes & accents",
      "High-quality vinyl print",
      "Fully removable",
    ],
    popular: false,
  },
];

const finishTypes = [
  { name: "Gloss", desc: "Classic high-shine finish that enhances your car's colour depth and presence." },
  { name: "Matte", desc: "Premium flat finish for a stealthy, sophisticated and unique look on Sharjah's roads." },
  { name: "Satin", desc: "The perfect blend between gloss and matte — elegant and distinctive." },
  { name: "Chrome", desc: "Mirror-like metallic finish for maximum visual impact and attention." },
  { name: "Carbon Fibre", desc: "Adds a sporty carbon fibre texture aesthetic to any panel or full wrap." },
  { name: "Custom Print", desc: "Fully custom digital print wraps — unlimited design possibilities for branding or personal style." },
];

const process = [
  {
    step: "01",
    title: "Design Consultation",
    desc: "Discuss your vision, colour preferences and design goals with Totalgard's Sharjah team. We'll help you find the perfect wrap solution.",
  },
  {
    step: "02",
    title: "Surface Preparation",
    desc: "Full vehicle wash, decontamination and panel preparation to ensure perfect vinyl adhesion and a flawless, bubble-free result.",
  },
  {
    step: "03",
    title: "Precision Wrap Application",
    desc: "Our certified Sharjah wrap technicians apply your chosen vinyl film with meticulous precision — panel by panel, edge to edge.",
  },
  {
    step: "04",
    title: "Quality Inspection",
    desc: "Full post-wrap quality check before delivery. You leave Totalgard Sharjah with a perfectly wrapped vehicle and full aftercare instructions.",
  },
];

const faqs = [
  {
    q: "How much does car wrapping cost in Sharjah?",
    a: "Car wrapping prices in Sharjah vary based on vehicle size, wrap type, film brand and design complexity. Totalgard offers competitive car wrapping prices in Sharjah. Contact us at +971 56 425 5770 or WhatsApp us for a free quote.",
  },
  {
    q: "How long does a car wrap last in Sharjah's heat?",
    a: "A professionally installed car wrap from Totalgard Sharjah typically lasts 5 to 7 years. We use premium vinyl films specifically rated for UAE's extreme heat and UV conditions — they won't fade, bubble or peel prematurely.",
  },
  {
    q: "Will car wrapping damage my original paint in Sharjah?",
    a: "No. A professionally installed car wrap by Totalgard actually protects your original paint from UV, scratches and stone chips. When removed correctly, the original factory paint is preserved in perfect condition.",
  },
  {
    q: "How long does car wrapping take in Sharjah?",
    a: "A full car wrap at Totalgard Sharjah typically takes 3 to 5 days depending on vehicle size and design complexity. Partial wraps and graphics can often be completed in 1 to 2 days at our Central Mall, Sharjah workshop.",
  },
  {
    q: "Can I wrap my car a different colour in Sharjah?",
    a: "Absolutely. Colour change wrapping is one of the most popular services at Totalgard Sharjah. With 100+ colour options including gloss, matte, satin and chrome — you can completely transform your car's colour without permanent paint changes.",
  },
  {
    q: "Can car graphics be used for business advertising in Sharjah?",
    a: "Yes. Totalgard Sharjah provides professional car graphics and fleet branding services for businesses across Sharjah and UAE. Turn your vehicle into a powerful moving advertisement with our custom-designed vinyl graphics.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://Totalgard.ae/car-wrapping/#service",
      name: "Car Wrapping Sharjah",
      description:
        "Professional car wrapping in Sharjah. Full wraps, colour changes, partial wraps and car graphics using premium vinyl materials.",
      provider: { "@id": "https://Totalgard.ae/#business" },
      areaServed: { "@type": "City", name: "Sharjah" },
      url: "https://Totalgard.ae/car-wrapping",
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

export default function CarWrappingPage() {
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
              <span className="text-[#c9a84c] text-xs">Car Wrapping Sharjah</span>
            </div>
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              Professional Car Wrapping in Sharjah
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-[#f5f5f5]">Car Wrapping</span>
              <br />
              <span className="gold-text">Sharjah</span>
            </h1>
            <p className="mt-5 text-[#888] text-lg leading-relaxed">
              Totalgard specialises in professional car wrapping services in
              Sharjah — seamlessly blending{" "}
              <span className="text-[#c9a84c] font-semibold">
                creativity, expertise and top-quality materials
              </span>{" "}
              to produce stunning results. Whether a custom design, colour
              change or business graphics — we deliver a flawless finish that
              commands attention on the road.
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
              Central Mall, Sharjah, UAE — Precision Wrap Studio
            </p>
          </div>

          {/* Image card */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl shadow-black/50">
            <Image
              src="/images/car-wrap-1.webp"
              alt="Professional car wrapping Sharjah — Totalgard vinyl wrap colour change UAE"
              fill
              className="object-cover opacity-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">100+</p>
                <p className="text-xs text-[#888] mt-0.5">Colours</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">5–7yr</p>
                <p className="text-xs text-[#888] mt-0.5">Durability</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">0%</p>
                <p className="text-xs text-[#888] mt-0.5">Paint Damage</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>

      {/* ── OVERVIEW & BENEFITS ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3 leading-tight">
              Elevate Your Vehicle's Style
              <br />
              <span className="gold-text">with Totalgard Car Wrapping</span>
            </h2>
            <p className="text-[#888] mt-4 max-w-3xl mx-auto leading-relaxed">
              Car wrapping is a transformative process that empowers individuals
              to express their unique style, safeguard their vehicle's exterior,
              or effectively promote their business through captivating visuals.
              With Totalgard, your car wrapping project will be executed with
              precision and attention to detail — resulting in a flawless finish
              that commands attention on Sharjah's roads.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* ── WRAP TYPES ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Wrap Options
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Car Wrapping Options in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              From full colour changes to custom graphics — Totalgard Sharjah
              has the perfect car wrapping solution for your vehicle and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wrapTypes.map((w) => (
              <div
                key={w.name}
                className={`glass rounded-3xl p-7 relative overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 flex flex-col ${w.popular ? "border-[#c9a84c]/30" : ""}`}
              >
                {w.popular && (
                  <>
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[#c9a84c] opacity-[0.07] blur-3xl rounded-full pointer-events-none" />
                    <span className="absolute top-4 right-4 glass-gold text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  </>
                )}
                <span
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit ${w.popular ? "glass-gold text-[#c9a84c]" : "bg-[#1e1e1e] text-[#555]"}`}
                >
                  {w.tag}
                </span>
                <h3 className="text-lg font-extrabold text-[#f5f5f5] mt-4">{w.name}</h3>
                <p className="text-[#888] text-sm mt-3 leading-relaxed flex-1">{w.desc}</p>
                <div className="w-8 h-px bg-gradient-to-r from-[#c9a84c] to-transparent my-4" />
                <ul className="space-y-2">
                  {w.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#888]">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                  target="_blank"
                  className={`mt-6 w-full text-center py-3 rounded-full font-bold text-sm transition-opacity block ${w.popular ? "gold-gradient text-[#0a0a0a] hover:opacity-90 shadow-lg shadow-[#c9a84c]/20" : "glass text-[#c9a84c] hover:border-[#c9a84c]/40"}`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINISH TYPES ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Finish Options
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Vinyl Wrap Finishes in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Totalgard offers a wide range of premium vinyl wrap finishes to
              suit every style, preference and budget.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {finishTypes.map((f, i) => (
              <div
                key={f.name}
                className="glass rounded-3xl p-5 hover:border-[#c9a84c]/40 transition-all duration-300 group text-center"
              >
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-xs">{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-xs group-hover:text-[#c9a84c] transition-colors">
                  {f.name}
                </h3>
                <p className="text-[#666] text-xs mt-1.5 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAR GRAPHICS ── */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Car Graphics Sharjah
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Professional Car Graphics
              <br />
              <span className="gold-text">& Branding in Sharjah</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              Car graphics are a dynamic form of vehicle customisation that
              allows individuals and businesses to make a bold statement on
              Sharjah's roads. At Totalgard, we offer professional car graphics
              services — from sleek racing stripes and vibrant decals to full
              branding and fleet graphics.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              Whether you're looking for subtle accents or a full vehicle wrap
              for your business, our car graphics solutions are fully
              customisable. Trust Totalgard to transform your vehicle into a
              powerful marketing tool or a personalised work of art.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {graphicsBenefits.map((g) => (
                <div
                  key={g.title}
                  className="glass rounded-2xl p-5 hover:border-[#c9a84c]/40 transition-colors duration-300 group"
                >
                  <div className="w-7 h-7 gold-gradient rounded-lg flex items-center justify-center mb-3 shadow-md shadow-[#c9a84c]/20">
                    <span className="text-[#0a0a0a] font-extrabold text-xs">✓</span>
                  </div>
                  <h3 className="font-bold text-[#f5f5f5] text-xs group-hover:text-[#c9a84c] transition-colors">
                    {g.title}
                  </h3>
                  <p className="text-[#666] text-xs mt-1.5 leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="inline-block mt-8 gold-gradient text-[#0a0a0a] px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Get Car Graphics Quote
            </a>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl shadow-black/50">
            <Image
              src="/images/car-wrapping.webp"
              alt="Car graphics and branding Sharjah — Totalgard professional vehicle graphics UAE"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-gold rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-xl font-extrabold gold-text">Custom</p>
              <p className="text-xs text-[#888] font-semibold tracking-widest uppercase mt-0.5">
                Design & Print
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              How We Wrap Your Car in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              A precise, quality-driven process from consultation to delivery at
              our Central Mall, Sharjah wrap studio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {process.map((p, i) => (
              <div key={p.step} className="relative text-center group">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#c9a84c]/20 to-transparent z-0" />
                )}
                <div className="relative z-10 w-16 h-16 gold-gradient text-[#0a0a0a] rounded-full flex items-center justify-center text-lg font-extrabold mx-auto shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                  {p.step}
                </div>
                <h3 className="font-bold text-[#f5f5f5] mt-5 text-sm">{p.title}</h3>
                <p className="text-[#666] text-xs mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY Totalgard ── */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl shadow-black/50">
            <Image
              src="/images/car-wrap.webp"
              alt="Totalgard car wrapping workshop Sharjah — professional vinyl wrap UAE"
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
              Why Totalgard Sharjah
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Sharjah's Leading
              <br /> Car Wrapping Studio
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              At Totalgard, we specialize in professional car wrapping services
              that seamlessly blend creativity, expertise and top-quality
              materials. Whether you're enhancing your vehicle's aesthetic
              appeal, protecting its original paint or creating eye-catching
              graphics for branding purposes — our team is dedicated to
              exceeding your expectations.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "10+ years of professional car wrapping in Sharjah",
                "Premium vinyl films rated for UAE's extreme heat",
                "100+ colour and finish options available",
                "Certified wrap technicians — bubble-free guaranteed",
                "Custom design and print services in Sharjah",
                "Business fleet graphics and branding specialists",
                "Original paint 100% preserved under the wrap",
                "Fully removable — no permanent commitment",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#888]">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full mt-1.5 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="inline-block mt-8 gold-gradient text-[#0a0a0a] px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Book Car Wrapping in Sharjah
            </a>
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
              Car Wrapping Sharjah — FAQ
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
            <span className="text-[#f5f5f5]">Transform Your Vehicle</span>
            <br />
            <span className="gold-text">with Car Wrapping in Sharjah</span>
          </h2>
          <p className="mt-4 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            Contact Totalgard Sharjah today for a free consultation and quote on
            car wrapping, colour changes or car graphics. Central Mall, Sharjah
            — open 7 days a week.
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
              { label: "Smart Film Sharjah", href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah" },
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