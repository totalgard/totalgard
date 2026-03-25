import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "TotalGard Sharjah | Window Tinting, PPF & Ceramic Coating Sharjah",
  description:
    "TotalGard by Smart Auto — Sharjah's #1 automotive protection centre. Expert window tinting Sharjah, paint protection film Sharjah, nano ceramic coating Sharjah & car wrapping Sharjah. Central Mall, Sharjah, UAE. Call +971 56 425 5770.",
  keywords:
    "window tinting sharjah, car window tinting sharjah, ceramic window tint sharjah, paint protection film sharjah, PPF sharjah, nano ceramic coating sharjah, car wrapping sharjah, vinyl wrap sharjah, smart film sharjah, stone protection film sharjah, automotive protection sharjah, TotalGard sharjah",
  alternates: { canonical: "https://totalgard.ae" },
  openGraph: {
    title: "TotalGard Sharjah | Window Tinting, PPF & Ceramic Coating Sharjah",
    description:
      "Sharjah's #1 automotive protection experts. Window tinting, PPF, nano ceramic coating & car wrapping at Central Mall, Sharjah.",
    url: "https://totalgard.ae",
    siteName: "TotalGard Sharjah",
    locale: "en_AE",
    type: "website",
  },
};

const services = [
  {
    title: "Window Tinting Sharjah",
    href: "/window-tinting",
    description:
      "Professional ceramic window tinting in Sharjah. Superior heat rejection, 99% UV protection and enhanced privacy — dark from outside, crystal clear from inside.",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=600&q=80",
  },
  {
    title: "Paint Protection Film Sharjah",
    href: "/paint-protection-film",
    description:
      "Self-healing PPF in Sharjah. Protect your vehicle's paint from scratches, stone chips and road damage with the best paint protection film in Sharjah.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
  },
  {
    title: "Ceramic Coating Sharjah",
    href: "/nano-ceramic-coating",
    description:
      "Professional nano ceramic coating in Sharjah. Long-lasting gloss, hydrophobic protection and UV resistance — essential for Sharjah's extreme heat and sand.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80",
  },
  {
    title: "Car Wrapping Sharjah",
    href: "/car-wrapping",
    description:
      "Premium vinyl car wrapping in Sharjah. Full wraps, partial wraps and custom colour changes to completely transform your vehicle's appearance.",
    image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?w=600&q=80",
  },
  {
    title: "Smart Film Sharjah",
    href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah",
    description:
      "Switchable PDLC smart film in Sharjah for vehicles, offices and homes. Instant privacy at the touch of a button.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    title: "Stone Protection Film Sharjah",
    href: "/stone-protection-film",
    description:
      "Heavy-duty stone guard protection film in Sharjah. Guards vulnerable panels from gravel, chips and road debris — critical for UAE highway driving.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
  },
];

const steps = [
  {
    step: "01",
    title: "Book a Consultation",
    description:
      "Contact us via WhatsApp, phone or visit our workshop at Central Mall, Sharjah.",
  },
  {
    step: "02",
    title: "Vehicle Inspection",
    description:
      "Our certified Sharjah technicians inspect your vehicle and recommend the ideal protection solution.",
  },
  {
    step: "03",
    title: "Precision Application",
    description:
      "Using premium 3M and Global USA materials applied with meticulous care in our Sharjah workshop.",
  },
  {
    step: "04",
    title: "Quality Check & Delivery",
    description:
      "Full quality inspection before delivery. You leave TotalGard Sharjah with a perfectly protected car.",
  },
];

const testimonials = [
  {
    name: "John D.",
    text: "TotalGard Sharjah made the car wrapping process seamless and the results are stunning. Quality work, top-notch service. Couldn't be happier.",
    service: "Car Wrapping Sharjah",
  },
  {
    name: "Michael L.",
    text: "I've tried other window tinting services in Sharjah — TotalGard's expertise truly stands out. Excellent tinting, exceptional customer service. Will return.",
    service: "Window Tinting Sharjah",
  },
  {
    name: "Roy Mathew",
    text: "TotalGard Sharjah exceeded my expectations. Attention to detail and professionalism are unmatched. My car looks better than the day I bought it.",
    service: "Ceramic Coating Sharjah",
  },
  {
    name: "Ahmed K.",
    text: "Got my PPF done at TotalGard Sharjah — thoroughly impressed. The film is invisible and my car's paint looks factory fresh after months of UAE highway driving.",
    service: "PPF Sharjah",
  },
  {
    name: "Sara M.",
    text: "The smart film installation at my Sharjah office was flawless. Professional, clean and finished on time. Best smart film service in Sharjah.",
    service: "Smart Film Sharjah",
  },
  {
    name: "Khalid R.",
    text: "Best ceramic coating in Sharjah without a doubt. My car repels water, dust and the UAE heat like nothing I've seen. Worth every dirham.",
    service: "Ceramic Coating Sharjah",
  },
];

const faqs = [
  {
    q: "Where can I get the best window tinting in Sharjah?",
    a: "TotalGard at Central Mall, Sharjah is widely regarded as Sharjah's top window tinting specialist. We use premium 3M and Global USA ceramic window films providing superior heat rejection, UV protection and privacy.",
  },
  {
    q: "What is the best window tint for cars in Sharjah's heat?",
    a: "Ceramic window film is the best choice for Sharjah's extreme heat. TotalGard's ceramic window tint rejects up to 85% infrared heat and 99% UV rays while maintaining clear visibility from inside.",
  },
  {
    q: "Where can I get PPF (Paint Protection Film) in Sharjah?",
    a: "TotalGard at Central Mall, Sharjah offers professional PPF installation using self-healing paint protection film. Our Sharjah PPF service protects your paint from scratches and chips for 5 to 10 years.",
  },
  {
    q: "Is ceramic coating worth it for cars in Sharjah?",
    a: "Absolutely. Sharjah's harsh sun, sand and heat make nano ceramic coating essential. TotalGard's ceramic coating provides a hydrophobic layer repelling water, dust and UV damage.",
  },
  {
    q: "How much does car wrapping cost in Sharjah?",
    a: "Car wrapping prices in Sharjah vary by vehicle size and wrap type. Contact TotalGard at +971 56 425 5770 for a free quote.",
  },
  {
    q: "How long does ceramic coating last in Sharjah?",
    a: "TotalGard's nano ceramic coating in Sharjah lasts 2 to 5 years depending on grade. Application takes 1 to 2 days at our Central Mall workshop.",
  },
  {
    q: "Does window tinting block heat in Sharjah?",
    a: "Yes. TotalGard's ceramic window films reject up to 85% infrared heat, dramatically reducing cabin temperature in Sharjah's extreme summers while reducing AC load.",
  },
  {
    q: "How do I contact TotalGard in Sharjah?",
    a: "TotalGard is at Central Mall, Sharjah, UAE. Call +971 56 425 5770, WhatsApp us, or email info@totalgard.ae. Open 7 days a week.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": "https://totalgard.ae/#business",
      name: "TotalGard Sharjah — Smart Auto",
      alternateName: ["Smart Auto Sharjah", "TotalGard UAE", "Window Tinting Sharjah"],
      description:
        "TotalGard is Sharjah's premier automotive protection centre offering window tinting, PPF, nano ceramic coating and car wrapping in Sharjah, UAE.",
      url: "https://totalgard.ae",
      telephone: "+971564255770",
      email: "info@totalgard.ae",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Central Mall",
        addressLocality: "Sharjah",
        addressRegion: "Sharjah",
        addressCountry: "AE",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "25.3573",
        longitude: "55.3930",
      },
      openingHours: "Mo-Su 09:00-21:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
      areaServed: { "@type": "City", name: "Sharjah" },
      sameAs: [
        "https://www.facebook.com/profile.php?id=100063549502114",
        "https://www.instagram.com/totalgarduae/",
        "https://www.youtube.com/@smartautouae",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Automotive Protection Services Sharjah",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, areaServed: "Sharjah" },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "WebSite",
      "@id": "https://totalgard.ae/#website",
      url: "https://totalgard.ae",
      name: "TotalGard Sharjah",
      description: "Sharjah's premier automotive protection centre.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroSection />

      {/* ── TRUST BAR ── */}
      <section className="relative bg-[#0a0a0a] border-b border-[#1e1e1e] py-5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#c9a84c]/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6">
          {[
            "10+ Years in Sharjah",
            "5000+ Cars Protected",
            "4.9 Star Rated",
            "100% Satisfaction Guarantee",
            "Same Day Service Sharjah",
            "Central Mall, Sharjah",
          ].map((t, i) => (
            <span
              key={t}
              className="flex items-center gap-3 text-[#555] text-xs tracking-widest font-medium uppercase"
            >
              {i !== 0 && <span className="w-1 h-1 bg-[#c9a84c] rounded-full" />}
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#0a0a0a] py-28" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Services in Sharjah
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Complete Automotive Protection
              <br className="hidden md:block" /> in Sharjah, UAE
            </h2>
            <p className="text-[#888] mt-4 max-w-2xl mx-auto text-base leading-relaxed">
              From ceramic window tinting Sharjah to full car wrapping Sharjah,
              TotalGard provides every automotive protection service under one
              roof at Central Mall, Sharjah.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group glass rounded-3xl overflow-hidden hover:border-[#c9a84c]/40 hover:shadow-2xl hover:shadow-[#c9a84c]/5 transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={`${s.title} — TotalGard Sharjah UAE`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-white font-bold text-base tracking-tight">
                    {s.title}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[#888] text-sm leading-relaxed">{s.description}</p>
                  <span className="inline-flex items-center gap-2 mt-5 text-[#c9a84c] text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="bg-[#0d0d0d] py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=80"
              alt="TotalGard Smart Auto Sharjah workshop — best automotive protection in Sharjah UAE"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#c9a84c]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 glass-gold rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-extrabold gold-text">10+</p>
              <p className="text-xs text-[#888] font-semibold tracking-widest uppercase mt-0.5">
                Years Serving Sharjah
              </p>
            </div>
          </div>
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              About TotalGard Sharjah
            </span>
            <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Sharjah's Most Trusted
              <br /> Automotive Protection Centre
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              TotalGard by Smart Auto has been Sharjah's go-to automotive
              protection specialist for over 10 years. Located at Central Mall,
              Sharjah, we lead in window tinting Sharjah, PPF Sharjah, nano
              ceramic coating Sharjah, and car wrapping Sharjah.
            </p>
            <p className="text-[#888] mt-3 leading-relaxed">
              Every vehicle enters our Sharjah workshop with the same level of
              precision care — backed by premium 3M and Global USA materials,
              certified technicians, and a 100% satisfaction guarantee.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {[
                "3M & Global USA Materials",
                "Sharjah Certified Technicians",
                "Precision Application",
                "Customization Options",
                "Durability Guarantee",
                "Quick Turnaround",
                "100% Satisfaction",
                "Free Consultation",
              ].map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-[#888]">
                  <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="inline-block mt-10 gold-gradient text-[#0a0a0a] px-9 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Book a Free Consultation in Sharjah
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#0a0a0a] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Our Process
            </span>
            <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4">
              How TotalGard Sharjah Works
            </h2>
            <p className="text-[#888] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              A seamless, transparent process from booking to delivery at our
              Central Mall, Sharjah workshop.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <div key={s.step} className="relative text-center group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gradient-to-r from-[#c9a84c]/20 to-transparent z-0" />
                )}
                <div className="relative z-10 w-16 h-16 gold-gradient text-[#0a0a0a] rounded-full flex items-center justify-center text-lg font-extrabold mx-auto shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                  {s.step}
                </div>
                <h3 className="font-bold text-[#f5f5f5] mt-5 text-sm">{s.title}</h3>
                <p className="text-[#666] text-xs mt-2 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WINDOW TINT PERFORMANCE ── */}
      <section className="bg-[#0d0d0d] py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Window Tint Performance — Sharjah
            </span>
            <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              The Best Window Tint
              <br /> for Sharjah's Climate
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              Sharjah's extreme heat demands the best window tinting available.
              TotalGard's ceramic window tinting in Sharjah drastically reduces
              cabin heat, blocks UV radiation, and prevents interior fading —
              using only 3M and Global USA ceramic films.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { label: "Cool Comfort — Heat Rejection", value: 50, desc: "Reduces interior cabin temperature in Sharjah's heat" },
                { label: "Infrared Defense", value: 85, desc: "Blocks infrared rays causing heat buildup in parked cars" },
                { label: "UV Armor — UV Rejection", value: 99, desc: "Protects skin and interior from Sharjah's intense UV" },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#888] font-medium">{bar.label}</span>
                    <span className="text-[#c9a84c] font-bold">{bar.value}%</span>
                  </div>
                  <div className="w-full bg-[#1e1e1e] rounded-full h-2">
                    <div className="gold-gradient h-2 rounded-full" style={{ width: `${bar.value}%` }} />
                  </div>
                  <p className="text-xs text-[#444] mt-1">{bar.desc}</p>
                </div>
              ))}
            </div>
            <Link
              href="/window-tinting"
              className="inline-flex items-center gap-2 mt-10 glass-gold text-[#c9a84c] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#c9a84c]/10 transition-colors"
            >
              Window Tinting Sharjah →
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1600705722908-bfd6a3fc8b04?w=800&q=80"
              alt="Best ceramic window tinting Sharjah UAE — TotalGard heat and UV protection"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Premium Brands — Sharjah
            </span>
            <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4">
              We Use Only the Best Materials
            </h2>
            <p className="text-[#888] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              TotalGard Sharjah exclusively sources from the world's most trusted
              automotive protection brands — quality and longevity guaranteed.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                name: "3M",
                desc: "Window Films, PPF & Automotive Solutions",
                detail:
                  "3M is the global leader in automotive window films and paint protection. TotalGard Sharjah uses 3M's certified range for window tinting and PPF — trusted by professionals worldwide for over 80 years.",
              },
              {
                name: "Global USA",
                desc: "Premium Ceramic Window Films",
                detail:
                  "Global Window Films by Madico offers advanced ceramic nano-technology window film. Used by TotalGard Sharjah for superior heat rejection and UV protection — perfect for UAE's intense climate.",
              },
            ].map((b) => (
              <div
                key={b.name}
                className="flex-1 min-w-[280px] max-w-sm glass rounded-3xl p-10 hover:border-[#c9a84c]/40 hover:shadow-xl hover:shadow-[#c9a84c]/5 transition-all duration-300 group"
              >
                <p className="text-5xl font-extrabold text-[#f5f5f5] group-hover:gold-text transition-colors">
                  {b.name}
                </p>
                <p className="text-xs text-[#c9a84c] font-semibold tracking-[0.15em] uppercase mt-2">
                  {b.desc}
                </p>
                <div className="w-8 h-px bg-gradient-to-r from-[#c9a84c] to-transparent mt-5 mb-4" />
                <p className="text-sm text-[#888] leading-relaxed">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="bg-[#0d0d0d] py-28 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
            Watch Us Work
          </span>
          <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4">
            See TotalGard Sharjah in Action
          </h2>
          <p className="text-[#888] mt-4 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
            Watch our certified Sharjah technicians protect and transform
            vehicles at our Central Mall workshop.
          </p>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50 aspect-video glass">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=smartautouae"
              title="TotalGard Smart Auto Sharjah — Window Tinting PPF and Ceramic Coating Videos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#0a0a0a] py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Customer Reviews — Sharjah
            </span>
            <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4">
              What Sharjah Customers Say
            </h2>
            <p className="text-[#888] mt-4 max-w-lg mx-auto text-sm leading-relaxed">
              Hundreds of satisfied customers across Sharjah trust TotalGard
              for professional window tinting, PPF, ceramic coating and car
              wrapping.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="glass rounded-3xl p-7 hover:border-[#c9a84c]/40 transition-colors duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#c9a84c] text-base">★</span>
                  ))}
                </div>
                <p className="text-[#888] text-sm leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-[#1e1e1e] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#f5f5f5] text-sm">{t.name}</p>
                    <p className="text-xs text-[#444] mt-0.5">Verified Customer — Sharjah</p>
                  </div>
                  <span className="text-xs glass-gold text-[#c9a84c] font-semibold px-3 py-1.5 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="bg-[#0d0d0d] py-28 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Find Us in Sharjah
            </span>
            <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4">
              Visit TotalGard — Central Mall, Sharjah
            </h2>
            <p className="text-[#888] mt-4 text-sm">
              Easy access and ample parking at Central Mall, Sharjah, UAE.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/50 h-[420px] glass">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0!2d55.393!3d25.357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIxJzI1LjMiTiA1NcKwMjMnMzQuOCJF!5e0!3m2!1sen!2sae!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="TotalGard Smart Auto — Central Mall Sharjah Location Map"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm">
            <a href={siteConfig.googleMaps} target="_blank" className="text-[#c9a84c] font-semibold hover:underline">
              Get Directions to TotalGard Sharjah →
            </a>
            <a href={`tel:${siteConfig.phone}`} className="text-[#555] hover:text-[#c9a84c] transition-colors">
              {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-[#555] hover:text-[#c9a84c] transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0a0a0a] py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              FAQ — Sharjah
            </span>
            <h2 className="text-4xl font-extrabold text-[#f5f5f5] mt-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#888] mt-4 text-sm leading-relaxed">
              Your questions about window tinting Sharjah, PPF Sharjah, ceramic
              coating Sharjah and car wrapping Sharjah — answered by TotalGard's
              experts.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="glass rounded-3xl p-7 hover:border-[#c9a84c]/40 transition-colors duration-300"
              >
                <h3 className="font-bold text-[#f5f5f5] text-sm">{f.q}</h3>
                <p className="text-[#888] text-sm mt-2.5 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-[#0a0a0a] py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent pointer-events-none" />
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c9a84c] opacity-[0.06] blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#c9a84c]/60 text-xs font-semibold tracking-[0.2em] uppercase">
            Sharjah's #1 Automotive Protection
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 leading-tight">
            <span className="text-[#f5f5f5]">Ready to Protect</span>
            <br />
            <span className="gold-text">Your Vehicle in Sharjah?</span>
          </h2>
          <p className="mt-5 text-base text-[#888] max-w-xl mx-auto leading-relaxed">
            Visit TotalGard at Central Mall, Sharjah or contact us today for a
            free consultation on window tinting, PPF, ceramic coating or car
            wrapping in Sharjah.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="gold-gradient text-[#0a0a0a] px-10 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity shadow-xl shadow-[#c9a84c]/20"
            >
              WhatsApp TotalGard Sharjah
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="glass text-[#f5f5f5] px-10 py-4 rounded-full font-bold text-base hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <p className="mt-8 text-xs text-[#2a2a2a] tracking-widest uppercase">
            Central Mall, Sharjah, UAE — Open 7 Days a Week
          </p>
        </div>
      </section>
    </>
  );
}