import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Paint Protection Film Sharjah | Best PPF Sharjah — Totalgard",
  description:
    "Totalgard offers the best paint protection film (PPF) in Sharjah. Transparent, self-healing PPF shielding your car from chips, scratches and environmental damage. Central Mall, Sharjah, UAE. Call +971 56 425 5770.",
  keywords:
    "paint protection film sharjah, PPF sharjah, car paint protection sharjah, self healing PPF sharjah, clear bra sharjah, best PPF sharjah, car protection film sharjah, ppf automotive sharjah",
  alternates: { canonical: "https://Totalgard.ae/paint-protection-film" },
};

const benefits = [
  {
    title: "Protection",
    desc: "Shield your vehicle's paint from chips, scratches and stains caused by everyday driving hazards, preserving its resale value.",
  },
  {
    title: "Durability",
    desc: "Our premium paint protection film is engineered to withstand the rigors of daily use, offering long-lasting protection without compromising appearance.",
  },
  {
    title: "Invisibility",
    desc: "Totalgard's paint protection film is virtually invisible once applied, allowing your vehicle's original paint colour and finish to shine through.",
  },
  {
    title: "Ease of Maintenance",
    desc: "Enjoy effortless maintenance with PPF — easily cleaned with soap and water, helping to keep your vehicle looking pristine.",
  },
];

const coverageAreas = [
  {
    area: "Front Bumper",
    desc: "Protect from flying gravel, bug acids and tar",
  },
  {
    area: "Front Fender",
    desc: "Protect from flying gravel, bug acids and tar",
  },
  {
    area: "Hood / Bonnet",
    desc: "Protect from bird droppings and tree sap",
  },
  {
    area: "Car Roof",
    desc: "Protect from bird droppings and tree sap",
  },
  {
    area: "Side Mirror",
    desc: "Protect from flying gravel, bug acids and tar",
  },
  {
    area: "Door",
    desc: "Protect handle cavities and edges from rings, keys, belt buckles and purses",
  },
  {
    area: "Rocker Panel",
    desc: "Protect from sand and stones kicked up by tires",
  },
  {
    area: "Rear Bumper",
    desc: "Protect from flying gravel, bug acids and tar",
  },
];

const packages = [
  {
    name: "Wear & Tear Coverage",
    tag: "Entry Level",
    areas: [
      "Door edge guards",
      "Trunk ledge",
      "Door handles",
    ],
    popular: false,
  },
  {
    name: "Partial Coverage",
    tag: "Great Value",
    areas: [
      "Partial front hood and fenders",
      "Front bumper",
      "Side mirrors",
      "Door edge guards, trunk ledge, door cups",
    ],
    popular: false,
  },
  {
    name: "Full Front Coverage",
    tag: "Most Popular",
    areas: [
      "Full hood and full fenders",
      "Front bumper",
      "Side mirrors",
      "Door edge guards, trunk ledge, door handles",
    ],
    popular: true,
  },
  {
    name: "Full Vehicle Coverage",
    tag: "Maximum Protection",
    areas: [
      "Covers every painted surface of the vehicle",
      "Gloss or Matte finish available",
      "Self-healing technology",
      "Hydrophobic coating",
    ],
    popular: false,
  },
];

const filmTypes = [
  { name: "Gloss PPF", desc: "Crystal clear finish preserving your car's original shine with maximum protection." },
  { name: "Matte PPF", desc: "Transform your car's look with a premium matte finish while protecting the paint." },
  { name: "Self-Healing PPF", desc: "Minor scratches disappear on their own when exposed to heat — stay flawless." },
  { name: "Carbon Fiber PPF", desc: "Adds a carbon fiber aesthetic while delivering full paint protection." },
  { name: "Hydrophobic PPF", desc: "Water-repelling technology keeps your car cleaner for longer in Sharjah's dusty climate." },
];

const faqs = [
  {
    q: "What is Paint Protection Film (PPF) and why do I need it in Sharjah?",
    a: "PPF is a clear, self-healing polyurethane film applied to your car's paint surface. In Sharjah and the UAE, roads are full of stone chips, sand and debris that damage paint. Totalgard's PPF provides an invisible shield that protects your car for years.",
  },
  {
    q: "How long does PPF last in UAE conditions?",
    a: "Totalgard's PPF in Sharjah is engineered to withstand UAE's extreme heat without yellowing, bubbling or peeling — typically lasting 7 to 10 years depending on the grade and coverage chosen.",
  },
  {
    q: "Is PPF worth it for my car in Sharjah?",
    a: "Absolutely. Sharjah's roads, dust and heat are harsh on car paint. PPF is a one-time investment that saves thousands in paint repairs and preserves your car's resale value. Totalgard offers competitive PPF pricing.",
  },
  {
    q: "Can PPF be removed without damaging paint?",
    a: "Yes. Totalgard's professionally installed PPF can be removed cleanly without damaging the underlying paint — one of the key advantages of PPF for paint protection in Sharjah.",
  },
  {
    q: "How long does PPF installation take in Sharjah?",
    a: "PPF installation at Totalgard Sharjah takes 1 to 3 days depending on coverage area. Full body PPF takes longer while partial packages can often be completed same day at our Central Mall, Sharjah workshop.",
  },
  {
    q: "What is the difference between Gloss and Matte PPF?",
    a: "Gloss PPF preserves your car's original shiny finish while matte PPF gives your vehicle a premium satin/matte appearance. Both provide the same level of paint protection. Totalgard Sharjah offers both options.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://Totalgard.ae/paint-protection-film/#service",
      name: "Paint Protection Film Sharjah",
      description:
        "Totalgard offers the best paint protection film (PPF) in Sharjah. Self-healing, invisible PPF shielding paint from chips, scratches and environmental damage.",
      provider: { "@id": "https://Totalgard.ae/#business" },
      areaServed: { "@type": "City", name: "Sharjah" },
      url: "https://Totalgard.ae/paint-protection-film",
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

export default function PPFPage() {
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
              <span className="text-[#c9a84c] text-xs">Paint Protection Film Sharjah</span>
            </div>
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              Anti-Ageing Paint Protection Film
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-[#f5f5f5]">Paint Protection</span>
              <br />
              <span className="text-[#f5f5f5]">Film </span>
              <span className="gold-text">Sharjah</span>
            </h1>
            <p className="mt-5 text-[#888] text-lg leading-relaxed">
              Totalgard offers the best paint protection film in Sharjah. Our
              transparent and durable PPF serves as an{" "}
              <span className="text-[#c9a84c] font-semibold">
                invisible shield
              </span>{" "}
              against chips, scratches and environmental damage — ensuring your
              vehicle maintains its flawless finish for years to come.
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
              Central Mall, Sharjah, UAE — 10+ Years Experience
            </p>
          </div>

          {/* Image card */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
              alt="Best paint protection film PPF Sharjah — Totalgard self-healing car paint protection UAE"
              fill
              className="object-cover opacity-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">Self</p>
                <p className="text-xs text-[#888] mt-0.5">Healing</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">100%</p>
                <p className="text-xs text-[#888] mt-0.5">Invisible</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-lg font-extrabold gold-text">10yr</p>
                <p className="text-xs text-[#888] mt-0.5">Warranty</p>
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
              Preserving Your Vehicle's
              <br />
              <span className="gold-text">Pristine Finish</span>
            </h2>
            <p className="text-[#888] mt-4 max-w-3xl mx-auto leading-relaxed">
              Totalgard offers the best paint protection film in Sharjah. Our
              PPF solution is meticulously engineered to provide unparalleled
              protection — the top choice for drivers in Sharjah looking to
              safeguard their investment and drive with confidence knowing their
              vehicle is protected by the best.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300 group"
              >
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

      {/* ── COVERAGE AREAS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Protection Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Solving the 8 Core Problems
              <br /> of Car Paint Damage in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Totalgard's anti-ageing PPF protects every vulnerable area of your
              vehicle from the hazards of Sharjah's roads and climate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coverageAreas.map((c) => (
              <div
                key={c.area}
                className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300 group"
              >
                <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center mb-3 shadow-md shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-xs">●</span>
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                  {c.area}
                </h3>
                <p className="text-[#888] text-xs mt-1.5 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COVERAGE PACKAGES ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              PPF Packages
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Clear Bra Coverage Options
              <br /> in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Whether you apply PPF to your whole car or just areas prone to
              nicks and scratches, we have the right coverage option at various
              price points.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`glass rounded-3xl p-7 relative overflow-hidden hover:border-[#c9a84c]/40 transition-all duration-300 flex flex-col ${p.popular ? "border-[#c9a84c]/30" : ""}`}
              >
                {p.popular && (
                  <>
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[#c9a84c] opacity-[0.07] blur-3xl rounded-full pointer-events-none" />
                    <span className="absolute top-4 right-4 glass-gold text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                      Popular
                    </span>
                  </>
                )}
                <span
                  className={`text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit ${p.popular ? "glass-gold text-[#c9a84c]" : "bg-[#1e1e1e] text-[#555]"}`}
                >
                  {p.tag}
                </span>
                <h3 className="text-lg font-extrabold text-[#f5f5f5] mt-4">
                  {p.name}
                </h3>
                <div className="w-8 h-px bg-gradient-to-r from-[#c9a84c] to-transparent my-4" />
                <ul className="space-y-2.5 flex-1">
                  {p.areas.map((area) => (
                    <li key={area} className="flex items-start gap-2 text-xs text-[#888]">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full mt-0.5 flex-shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                  target="_blank"
                  className={`mt-6 w-full text-center py-3 rounded-full font-bold text-sm transition-opacity block ${p.popular ? "gold-gradient text-[#0a0a0a] hover:opacity-90 shadow-lg shadow-[#c9a84c]/20" : "glass text-[#c9a84c] hover:border-[#c9a84c]/40"}`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILM TYPES ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Film Types
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              PPF Options Available in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Totalgard offers a full range of paint protection film types to
              suit every style and protection requirement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {filmTypes.map((f, i) => (
              <div
                key={f.name}
                className={`glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-all duration-300 group relative overflow-hidden ${i === 2 ? "border-[#c9a84c]/25" : ""}`}
              >
                {i === 2 && (
                  <div className="absolute top-0 right-0 w-20 h-20 bg-[#c9a84c] opacity-[0.06] blur-2xl rounded-full pointer-events-none" />
                )}
                <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center mb-4 shadow-md shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-xs">{i + 1}</span>
                </div>
                <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                  {f.name}
                </h3>
                <p className="text-[#888] text-xs mt-2 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY Totalgard ── */}
      <section className="bg-[#0d0d0d] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[460px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80"
              alt="Totalgard PPF installation workshop Sharjah — best paint protection film UAE"
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
              The Best Car Paint Protection
              <br /> Film in Sharjah
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              When it comes to keeping your car looking brand new, Totalgard is
              the go-to provider for the best car paint protection film in
              Sharjah. Our high-quality film is designed to shield your vehicle
              from scratches, chips and other forms of damage — ensuring it
              retains its pristine appearance for years to come.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              At Totalgard, we understand that every car is unique. Our team of
              experts will work closely with you to determine the best PPF
              solution for your car, ensuring a perfect fit and maximum
              protection. We guarantee a flawless installation every time.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Best PPF brands available in Sharjah",
                "Virtually invisible — no visual compromise",
                "Self-healing technology included",
                "10+ years of professional PPF installation in Sharjah",
                "Flawless, bubble-free application guaranteed",
                "Full warranty on all PPF packages",
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
              Book PPF in Sharjah
            </a>
          </div>
        </div>
      </section>

      {/* ── BOOK NOW FORM ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Book Now
            </span>
            <h2 className="text-3xl font-extrabold text-[#f5f5f5] mt-3">
              Safeguard Your Vehicle
              <br />
              <span className="gold-text">with Totalgard PPF Sharjah</span>
            </h2>
            <p className="text-[#888] mt-3 text-sm leading-relaxed">
              Send us a message and let's protect your vehicle with Totalgard's
              expertise in Sharjah.
            </p>
          </div>
          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="glass rounded-3xl p-8 space-y-5"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c] opacity-[0.04] blur-3xl rounded-full pointer-events-none" />
            <div>
              <label className="text-xs text-[#666] tracking-widest uppercase block mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#333] focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] tracking-widest uppercase block mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#333] focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] tracking-widest uppercase block mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f5f5f5] text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-[#666] tracking-widest uppercase block mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your vehicle and the PPF package you're interested in..."
                className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#333] focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full gold-gradient text-[#0a0a0a] py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Send Message
            </button>
            <p className="text-center text-xs text-[#444]">
              Or WhatsApp us directly for a faster response
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="w-full glass text-[#c9a84c] py-3.5 rounded-full font-bold text-sm hover:border-[#c9a84c]/40 transition-colors block text-center"
            >
              WhatsApp Totalgard Sharjah
            </a>
          </form>
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
              PPF Sharjah — FAQ
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
            <span className="text-[#f5f5f5]">Don't Settle for Less —</span>
            <br />
            <span className="gold-text">Get the Best PPF in Sharjah</span>
          </h2>
          <p className="mt-4 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            Trust Totalgard to provide you with the finest car paint protection
            film in Sharjah. Contact us today to learn more and schedule an
            appointment at Central Mall, Sharjah.
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
              { label: "Ceramic Coating Sharjah", href: "/nano-ceramic-coating" },
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