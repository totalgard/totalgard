import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Nano Ceramic Coating Sharjah | Best Car Ceramic Coating Sharjah — Totalgard",
  description:
    "Totalgard offers the best nano ceramic coating in Sharjah. Hydrophobic, UV-resistant ceramic coating for cars. Enhanced gloss, long-lasting protection and easy maintenance. Central Mall, Sharjah, UAE. Call +971 56 425 5770.",
  keywords:
    "nano ceramic coating sharjah, ceramic coating sharjah, car ceramic coating sharjah, graphene coating sharjah, auto ceramic coating sharjah, automotive ceramic coating sharjah, ceramic coating near me sharjah, best ceramic coating sharjah",
  alternates: { canonical: "https://Totalgard.ae/nano-ceramic-coating" },
};

const benefits = [
  {
    title: "Long-Lasting Protection",
    desc: "Our ceramic nano coating forms a strong bond with the paint, providing durable protection that lasts for years — essential for Sharjah's harsh climate.",
  },
  {
    title: "Hydrophobic Properties",
    desc: "The hydrophobic nature of ceramic nano coating repels water and prevents contaminants from adhering to the surface, making it easier to clean and maintain.",
  },
  {
    title: "Enhanced Shine",
    desc: "By creating a smooth and glossy surface, ceramic nano coating enhances the shine and depth of your vehicle's paint, giving it a showroom finish.",
  },
  {
    title: "UV Resistance",
    desc: "Totalgard's ceramic nano coating provides UV protection, preventing paint fading and oxidation caused by prolonged exposure to Sharjah's intense sun.",
  },
];

const whyUs = [
  {
    title: "High-Quality Products",
    desc: "We use only the best quality nano ceramic coatings designed to provide long-lasting protection and enhance the appearance of your car. No shortcuts — only premium products at Totalgard Sharjah.",
  },
  {
    title: "Expert Application",
    desc: "Our team of skilled technicians is trained in the proper application techniques to ensure a flawless finish and maximum coverage on every vehicle in our Sharjah workshop.",
  },
  {
    title: "Enhanced Gloss & Shine",
    desc: "Our car nano ceramic coating not only protects your car's paint but also adds a deep gloss and shine — making it look brand new even after years of Sharjah's heat and dust.",
  },
  {
    title: "Easy Maintenance",
    desc: "With our nano ceramic coating, your car will be easier to clean as dirt and grime struggle to stick to the smooth hydrophobic surface — saving you time and money.",
  },
  {
    title: "Long-Term Investment",
    desc: "Investing in a car nano ceramic coating increases the resale value of your vehicle and saves you money on frequent paint touch-ups and detailing in Sharjah.",
  },
  {
    title: "Scratch & Stain Resistance",
    desc: "Totalgard's ceramic coating creates a barrier that resists minor scratches and stains from everyday driving — keeping your vehicle pristine on Sharjah's roads.",
  },
];

const coatingTypes = [
  {
    name: "Nano Ceramic Coating",
    tag: "Most Popular",
    desc: "Advanced SiO2-based ceramic coating that bonds permanently with your paint to create a hydrophobic, UV-resistant and scratch-resistant surface.",
    features: [
      "2–5 year protection",
      "Hydrophobic surface",
      "UV & oxidation protection",
      "Enhanced gloss finish",
      "Easy maintenance",
    ],
    popular: true,
  },
  {
    name: "Graphene Coating",
    tag: "Premium",
    desc: "The latest in coating technology — graphene-infused ceramic coating offering superior hardness, anti-static properties and longer durability than standard ceramic.",
    features: [
      "5+ year protection",
      "Anti-static properties",
      "Superior hardness",
      "Water spot resistance",
      "Extreme durability",
    ],
    popular: false,
  },
  {
    name: "Express Ceramic Coating",
    tag: "Quick Protection",
    desc: "A spray-on ceramic coating solution for customers wanting fast ceramic protection without the full multi-day process. Great entry-level option in Sharjah.",
    features: [
      "Same-day application",
      "6–12 month protection",
      "Hydrophobic layer",
      "Gloss enhancement",
      "Budget-friendly",
    ],
    popular: false,
  },
];

const process = [
  {
    step: "01",
    title: "Vehicle Decontamination",
    desc: "Full wash, clay bar treatment and paint decontamination to remove all surface contaminants before coating application.",
  },
  {
    step: "02",
    title: "Paint Correction",
    desc: "Machine polishing to remove swirl marks, scratches and oxidation — ensuring a perfect base for the ceramic coating.",
  },
  {
    step: "03",
    title: "Panel Wipe Down",
    desc: "IPA wipe-down of every panel to remove all polish residue and oils, ensuring maximum coating adhesion to your paint.",
  },
  {
    step: "04",
    title: "Ceramic Coating Application",
    desc: "Careful, panel-by-panel ceramic coating application by Totalgard's certified Sharjah technicians for full and even coverage.",
  },
];

const faqs = [
  {
    q: "What is nano ceramic coating and why do I need it in Sharjah?",
    a: "Nano ceramic coating is a liquid polymer that bonds with your car's paint to form a protective layer. In Sharjah's harsh climate — extreme UV, heat, dust and sand — ceramic coating is essential to protect and preserve your vehicle's paint.",
  },
  {
    q: "How long does ceramic coating last in Sharjah?",
    a: "Totalgard's nano ceramic coating in Sharjah typically lasts 2 to 5 years depending on the grade chosen. Graphene coatings can last 5+ years. Proper maintenance extends the coating's life significantly.",
  },
  {
    q: "Is ceramic coating worth it in Sharjah's heat?",
    a: "Absolutely. Sharjah's intense UV radiation and heat accelerate paint oxidation and fading. Totalgard's ceramic coating creates a UV-resistant, hydrophobic barrier that keeps your car looking new for years — saving money on repainting and detailing.",
  },
  {
    q: "How long does ceramic coating application take in Sharjah?",
    a: "Full nano ceramic coating at Totalgard Sharjah takes 1 to 2 days including paint correction, decontamination and coating application. The vehicle then needs 24–48 hours of curing time.",
  },
  {
    q: "What is the difference between ceramic coating and PPF in Sharjah?",
    a: "Ceramic coating enhances shine, adds UV resistance and creates a hydrophobic surface — but does not protect against physical impact like stone chips. PPF provides physical protection against chips and scratches. Totalgard recommends combining both for ultimate protection in Sharjah.",
  },
  {
    q: "What is graphene coating and how is it better than ceramic?",
    a: "Graphene coating is the next evolution of ceramic coating — infused with graphene for superior hardness, anti-static properties, water spot resistance and longer durability. Totalgard Sharjah offers both nano ceramic and graphene coating options.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://Totalgard.ae/nano-ceramic-coating/#service",
      name: "Nano Ceramic Coating Sharjah",
      description:
        "Totalgard offers the best nano ceramic coating in Sharjah. Hydrophobic, UV-resistant ceramic and graphene coatings for long-lasting paint protection.",
      provider: { "@id": "https://Totalgard.ae/#business" },
      areaServed: { "@type": "City", name: "Sharjah" },
      url: "https://Totalgard.ae/nano-ceramic-coating",
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

export default function NanoCeramicCoatingPage() {
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
              <span className="text-[#c9a84c] text-xs">Nano Ceramic Coating Sharjah</span>
            </div>
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              Elevating Protection & Shine
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-[#f5f5f5]">Nano Ceramic</span>
              <br />
              <span className="text-[#f5f5f5]">Coating </span>
              <span className="gold-text">Sharjah</span>
            </h1>
            <p className="mt-5 text-[#888] text-lg leading-relaxed">
              Totalgard's nano ceramic coating forms a{" "}
              <span className="text-[#c9a84c] font-semibold">
                durable, transparent hydrophobic layer
              </span>{" "}
              that bonds with your paint — protecting against UV rays, bird
              droppings and road grime while enhancing your vehicle's shine and
              making maintenance effortless in Sharjah's harsh climate.
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
              Central Mall, Sharjah, UAE — Expert Application Guaranteed
            </p>
          </div>

          {/* Image + stat badges */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl shadow-black/50">
            <Image
              src="/images/nano-ceramic-2.webp"
              alt="Nano ceramic coating Sharjah — Totalgard best car ceramic coating UAE"
              fill
              className="object-cover opacity-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">5yr+</p>
                <p className="text-xs text-[#888] mt-0.5">Protection</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">9H</p>
                <p className="text-xs text-[#888] mt-0.5">Hardness</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">100%</p>
                <p className="text-xs text-[#888] mt-0.5">Hydrophobic</p>
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
              Ceramic Nano Coating —
              <br />
              <span className="gold-text">Elevating Protection & Shine</span>
            </h2>
            <p className="text-[#888] mt-4 max-w-3xl mx-auto leading-relaxed">
              Nano ceramic coating is an innovative protective solution
              engineered to safeguard and enhance the exterior surfaces of
              vehicles. Totalgard's nano ceramic coating forms a durable and
              transparent layer that bonds with the paint, creating a hydrophobic
              and dirt-repellent surface — providing long-lasting protection
              against environmental hazards such as UV rays, bird droppings and
              road grime while enhancing your vehicle's shine.
            </p>
          </div>

          {/* Key Benefits */}
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

      {/* ── COATING TYPES ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Coating Options
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Ceramic Coating Options in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              From standard nano ceramic to advanced graphene coatings —
              Totalgard Sharjah offers the right protection level for every
              vehicle and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coatingTypes.map((c) => (
              <div
                key={c.name}
                className={`glass rounded-3xl p-8 relative overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 flex flex-col ${c.popular ? "border-[#c9a84c]/30" : ""}`}
              >
                {c.popular && (
                  <>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c] opacity-[0.06] blur-3xl rounded-full pointer-events-none" />
                    <span className="absolute top-4 right-4 glass-gold text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  </>
                )}
                <span
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit ${c.popular ? "glass-gold text-[#c9a84c]" : "bg-[#1e1e1e] text-[#555]"}`}
                >
                  {c.tag}
                </span>
                <h3 className="text-xl font-extrabold text-[#f5f5f5] mt-4">{c.name}</h3>
                <p className="text-[#888] text-sm mt-3 leading-relaxed flex-1">{c.desc}</p>
                <div className="w-8 h-px bg-gradient-to-r from-[#c9a84c] to-transparent my-5" />
                <ul className="space-y-2">
                  {c.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#888]">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                  target="_blank"
                  className={`mt-6 w-full text-center py-3 rounded-full font-bold text-sm transition-opacity block ${c.popular ? "gold-gradient text-[#0a0a0a] hover:opacity-90 shadow-lg shadow-[#c9a84c]/20" : "glass text-[#c9a84c] hover:border-[#c9a84c]/40"}`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLICATION PROCESS ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              How We Apply Ceramic Coating
              <br /> in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Totalgard's certified technicians follow a meticulous multi-step
              process to ensure maximum coating adhesion and a flawless finish.
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
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Why Choose Totalgard
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              The Best Car Nano Ceramic Coating
              <br /> in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              At Totalgard, we understand the importance of protecting your car
              from Sharjah's harsh elements, UV rays and everyday wear and tear.
              Our nano ceramic coating provides a strong, durable barrier that
              shields your vehicle's paint from scratches, stains and fading.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w) => (
              <div
                key={w.title}
                className="glass rounded-3xl p-7 hover:border-[#c9a84c]/40 transition-colors duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-sm">★</span>
                </div>
                <h3 className="font-bold text-[#f5f5f5] mb-2 group-hover:text-[#c9a84c] transition-colors text-sm">
                  {w.title}
                </h3>
                <p className="text-[#888] text-xs leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISUAL COMPARISON ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl shadow-black/50">
            <Image
              src="/images/nano-ceramic.webp"
              alt="Totalgard nano ceramic coating results Sharjah — deep gloss and hydrophobic finish"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-gold rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-2xl font-extrabold gold-text">Showroom</p>
              <p className="text-xs text-[#888] font-semibold tracking-widest uppercase mt-0.5">
                Finish Guaranteed
              </p>
            </div>
          </div>
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              The Totalgard Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Experience the Best Ceramic
              <br />
              <span className="gold-text">Coating in Sharjah</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              Don't settle for anything less than the best car nano ceramic
              coating in Sharjah. With our advanced technology and expertise, we
              provide top-notch car protection solutions that will keep your
              vehicle looking sleek and shiny for years to come.
            </p>
            <div className="mt-8 space-y-5">
              {[
                { label: "Paint Hardness", value: 90, desc: "9H hardness rating — highly scratch resistant" },
                { label: "Hydrophobic Effect", value: 98, desc: "Water beads off instantly — self-cleaning surface" },
                { label: "UV Protection", value: 95, desc: "Prevents fading and oxidation from Sharjah's sun" },
                { label: "Gloss Enhancement", value: 85, desc: "Deep showroom shine restored and preserved" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#888] font-medium">{bar.label}</span>
                    <span className="text-[#c9a84c] font-bold">{bar.value}%</span>
                  </div>
                  <div className="w-full bg-[#1e1e1e] rounded-full h-2">
                    <div
                      className="gold-gradient h-2 rounded-full"
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                  <p className="text-xs text-[#444] mt-1">{bar.desc}</p>
                </div>
              ))}
            </div>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="inline-block mt-8 gold-gradient text-[#0a0a0a] px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Book Ceramic Coating in Sharjah
            </a>
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
              Ceramic Coating Sharjah — FAQ
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
            <span className="text-[#f5f5f5]">Give Your Car the</span>
            <br />
            <span className="gold-text">Ultimate Protection in Sharjah</span>
          </h2>
          <p className="mt-4 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            Don't settle for anything less than the best car nano ceramic
            coating in Sharjah. Contact Totalgard today to schedule an
            appointment and give your car the protection it deserves.
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
              { label: "Car Wrapping Sharjah", href: "/car-wrapping" },
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