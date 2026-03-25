import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Window Tinting Sharjah | Best Car Window Tinting Sharjah — TotalGard",
  description:
    "TotalGard offers professional car window tinting in Sharjah. Ceramic window films blocking up to 95% infrared heat and 99% UV rays. 3–10 year warranty. Central Mall, Sharjah, UAE. Call +971 56 425 5770.",
  keywords:
    "window tinting sharjah, car window tinting sharjah, ceramic window tint sharjah, best window tint sharjah, UV protection window tint sharjah, heat reduction window film sharjah, car tinting sharjah",
  alternates: { canonical: "https://totalgard.ae/window-tinting" },
};

const benefits = [
  {
    title: "UV Protection",
    desc: "Shield yourself and your passengers from harmful UV rays, safeguarding your skin and interior upholstery from Sharjah's intense sun.",
  },
  {
    title: "Heat Reduction",
    desc: "Enjoy a cooler interior by blocking out a significant amount of solar heat — blocking up to 95% of infrared heat waves for a more comfortable drive.",
  },
  {
    title: "Glare Reduction",
    desc: "Reduce glare from the sun and headlights, enhancing visibility and reducing eye strain for safer driving on Sharjah's roads.",
  },
  {
    title: "Privacy Enhancement",
    desc: "Increase privacy and security by limiting visibility into your vehicle's interior — dark outside, crystal clear from within.",
  },
];

const pricing = [
  {
    type: "Coupe",
    price: "AED 300 – 1,400",
    features: [
      "Up to 5 years warranty",
      "Up to 95% heat reduction",
      "Both sides and rear",
    ],
  },
  {
    type: "Saloon",
    price: "AED 350 – 1,700",
    features: [
      "Up to 5 years warranty",
      "Up to 95% heat reduction",
      "Both sides and rear",
    ],
    popular: true,
  },
  {
    type: "4×4 / SUV",
    price: "AED 400 – 1,900",
    features: [
      "Up to 5 years warranty",
      "Up to 95% heat reduction",
      "Both sides and rear",
    ],
  },
  {
    type: "Station Wagon",
    price: "AED 450 – 2,100",
    features: [
      "Up to 5 years warranty",
      "Up to 95% heat reduction",
      "Both sides and rear",
    ],
  },
];

const whyUs = [
  {
    title: "Expertise & Experience",
    desc: "Our team is highly trained in the latest tinting techniques and technologies. Whether you have a small car or a large SUV, our Sharjah-based experts have the skills to handle any vehicle type and recommend the most suitable tinting options for your specific needs.",
  },
  {
    title: "Quality Materials & Products",
    desc: "We only use high-quality tint films designed to last and provide optimal performance — offering excellent heat rejection, UV protection and glare reduction. A wide range of tint shades is available so you can customise the look of your vehicle while enjoying all the benefits.",
  },
  {
    title: "Professional Installation Process",
    desc: "Our experts carefully clean and prepare the windows before applying the tint film, ensuring a smooth, bubble-free finish. We take pride in our attention to detail and are committed to delivering the highest standard of workmanship on every vehicle.",
  },
  {
    title: "Customer Satisfaction",
    desc: "Customer satisfaction is our top priority. From the moment you contact us to the completion of the installation, we are here to answer your questions. We value your feedback and continuously strive to improve — our goal is to be your go-to choice for window tinting in Sharjah.",
  },
];

const faqs = [
  {
    q: "Is window tinting legal in Sharjah?",
    a: "Yes, window tinting is legal in Sharjah and across the UAE. TotalGard ensures all window tinting is fully compliant with UAE traffic regulations regarding tint darkness levels.",
  },
  {
    q: "How long does window tinting take in Sharjah?",
    a: "Professional window tinting at TotalGard Sharjah typically takes 2 to 4 hours depending on vehicle type. Most jobs are completed same-day at our Central Mall, Sharjah workshop.",
  },
  {
    q: "How long does window tint last in UAE heat?",
    a: "TotalGard's ceramic window films are designed to last 3 to 10 years in UAE conditions. Our films are heat-stable and won't bubble, peel or fade in Sharjah's extreme climate.",
  },
  {
    q: "Can I wash my car after window tinting in Sharjah?",
    a: "We recommend waiting 3 to 5 days after window tinting before washing your car. This allows the film adhesive to fully cure. TotalGard's team will provide full aftercare instructions after your appointment.",
  },
  {
    q: "What tint shade is best for Sharjah?",
    a: "In Sharjah, we recommend 35% or darker for maximum heat rejection. TotalGard will advise the ideal shade based on your vehicle, preferences and UAE legal requirements.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://totalgard.ae/window-tinting/#service",
      name: "Window Tinting Sharjah",
      description:
        "Professional ceramic car window tinting in Sharjah. Blocks up to 95% infrared heat and 99% UV rays. 3M and Global USA films. 3–10 year warranty.",
      provider: { "@id": "https://totalgard.ae/#business" },
      areaServed: { "@type": "City", name: "Sharjah" },
      url: "https://totalgard.ae/window-tinting",
      offers: [
        { "@type": "Offer", name: "Coupe Window Tinting Sharjah", price: "300", priceCurrency: "AED" },
        { "@type": "Offer", name: "Saloon Window Tinting Sharjah", price: "350", priceCurrency: "AED" },
        { "@type": "Offer", name: "SUV Window Tinting Sharjah", price: "400", priceCurrency: "AED" },
        { "@type": "Offer", name: "Station Wagon Window Tinting Sharjah", price: "450", priceCurrency: "AED" },
      ],
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

export default function WindowTintingPage() {
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
              <Link href="/" className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">Home</Link>
              <span className="text-[#333] text-xs">→</span>
              <span className="text-[#c9a84c] text-xs">Window Tinting Sharjah</span>
            </div>
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              Ceramic Window Films — Dark Outside, Clear Within
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-[#f5f5f5]">Window</span>
              <br />
              <span className="text-[#f5f5f5]">Tinting </span>
              <span className="gold-text">Sharjah</span>
            </h1>
            <p className="mt-5 text-[#888] text-lg leading-relaxed">
              TotalGard offers top-tier window tinting services in Sharjah,
              enhancing both the style and functionality of your vehicle.
              Blocking up to{" "}
              <span className="text-[#c9a84c] font-semibold">
                95% of infrared heat waves
              </span>{" "}
              and{" "}
              <span className="text-[#c9a84c] font-semibold">
                99% of harmful UV rays
              </span>{" "}
              — backed by warranties of 3 to 10 years.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                target="_blank"
                className="gold-gradient text-[#0a0a0a] px-8 py-4 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
              >
                Get Our Price
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="glass text-[#f5f5f5] px-8 py-4 rounded-full font-semibold hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <p className="mt-5 text-xs text-[#444] tracking-widest uppercase">
              Central Mall, Sharjah, UAE — Same Day Service Available
            </p>
          </div>

          {/* Stats card */}
          <div className="relative rounded-3xl overflow-hidden h-[420px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80"
              alt="Professional window tinting Sharjah — TotalGard ceramic window film UAE"
              fill
              className="object-cover opacity-75"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex gap-3">
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-xl font-extrabold gold-text">95%</p>
                <p className="text-xs text-[#888] mt-0.5">Infrared Blocked</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-xl font-extrabold gold-text">99%</p>
                <p className="text-xs text-[#888] mt-0.5">UV Rejected</p>
              </div>
              <div className="flex-1 glass-gold rounded-2xl px-4 py-3 text-center">
                <p className="text-xl font-extrabold gold-text">10yr</p>
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              Ceramic Window Films
              <br />
              <span className="gold-text">Dark Outside, Clear Within</span>
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              TotalGard offers top-tier window tinting services, enhancing both
              the style and functionality of your vehicle. Our premium tint
              films elevate your car's appearance while delivering essential
              benefits — UV protection, heat reduction, glare reduction and
              enhanced privacy.
            </p>
            <p className="text-[#888] mt-4 leading-relaxed">
              With a wide range of colours and styles, meticulously engineered
              for comfort and elegance, our window tinting service ensures
              optimal interior temperature control and privacy. Utilising
              cutting-edge sun control technology backed by durable warranties
              ranging from 3 to 10 years, TotalGard guarantees superior
              performance even in Sharjah's harshest climate.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { val: "95%", label: "Infrared Heat Blocked" },
                { val: "99%", label: "UV Rays Rejected" },
                { val: "10yr", label: "Max Warranty" },
                { val: "10+", label: "Years in Sharjah" },
              ].map((s) => (
                <div key={s.label} className="glass-gold rounded-2xl p-4 text-center">
                  <p className="text-2xl font-extrabold gold-text">{s.val}</p>
                  <p className="text-xs text-[#666] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {benefits.map((b) => (
              <div key={b.title} className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300 group flex gap-5 items-start">
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#f5f5f5] text-sm group-hover:text-[#c9a84c] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-[#888] text-xs mt-1.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY TOTALGARD ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Your Trusted Source for Professional
              <br /> Car Window Tinting in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
              When it comes to car window tinting in Sharjah, TotalGard is the
              name you can trust. With years of experience and a team of skilled
              professionals, we are dedicated to providing high-quality window
              tinting services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="glass rounded-3xl p-8 hover:border-[#c9a84c]/40 transition-colors duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a84c] opacity-0 group-hover:opacity-[0.04] blur-2xl rounded-full transition-opacity duration-500 pointer-events-none" />
                <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-[#c9a84c]/20">
                  <span className="text-[#0a0a0a] font-extrabold text-sm">★</span>
                </div>
                <h3 className="font-bold text-[#f5f5f5] mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {w.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#c9a84c] opacity-[0.04] blur-[80px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-3">
              Car Window Tinting Prices in Sharjah
            </h2>
            <p className="text-[#888] mt-3 max-w-xl mx-auto text-sm leading-relaxed">
              Transparent, competitive pricing for professional window tinting
              in Sharjah. Price varies by film grade chosen.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((p) => (
              <div
                key={p.type}
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
                <p className="text-[#888] text-xs tracking-widest uppercase font-semibold">
                  {p.type}
                </p>
                <p className="text-2xl font-extrabold gold-text mt-2 leading-tight">
                  {p.price}
                </p>
                <div className="w-8 h-px bg-gradient-to-r from-[#c9a84c] to-transparent my-4" />
                <ul className="space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#888]">
                      <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                  target="_blank"
                  className={`mt-6 w-full text-center py-3 rounded-full font-bold text-sm transition-opacity block ${p.popular ? "gold-gradient text-[#0a0a0a] hover:opacity-90 shadow-lg shadow-[#c9a84c]/20" : "glass text-[#c9a84c] hover:border-[#c9a84c]/40"}`}
                >
                  Get Our Price
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#444] mt-6">
            Prices vary based on film grade selected. Contact us for an exact quote for your vehicle in Sharjah.
          </p>
        </div>
      </section>

      {/* ── PERFORMANCE BARS ── */}
      <section className="bg-[#0a0a0a] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Film Performance
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#f5f5f5] mt-4 leading-tight">
              The Best Window Tint
              <br /> for Sharjah's Climate
            </h2>
            <p className="text-[#888] mt-5 leading-relaxed">
              Sharjah's extreme summer heat demands the very best window tinting
              technology. TotalGard's ceramic films are engineered to handle
              UAE's harsh climate — keeping your car cool, protecting your
              interior and blocking harmful radiation.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { label: "Infrared Heat Rejection", value: 95, desc: "Blocks 95% of infrared heat waves keeping your cabin cool in Sharjah's summers" },
                { label: "UV Ray Rejection", value: 99, desc: "Blocks 99% of harmful UV rays protecting skin and car interior" },
                { label: "Glare Reduction", value: 80, desc: "Significantly reduces sun and headlight glare on Sharjah roads" },
                { label: "Privacy Enhancement", value: 90, desc: "Dark from outside — crystal clear from inside for full privacy" },
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
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-2xl shadow-black/50">
            <Image
              src="https://images.unsplash.com/photo-1600705722908-bfd6a3fc8b04?w=800&q=80"
              alt="Best ceramic window tinting Sharjah UAE — TotalGard heat and UV protection performance"
              fill
              className="object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0d0d0d] py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">FAQ</span>
            <h2 className="text-3xl font-extrabold text-[#f5f5f5] mt-3">
              Window Tinting Sharjah — FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="glass rounded-3xl p-6 hover:border-[#c9a84c]/40 transition-colors duration-300">
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
            Contact TotalGard Sharjah
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4">
            <span className="text-[#f5f5f5]">Get Your Car Tinted</span>
            <br />
            <span className="gold-text">in Sharjah Today</span>
          </h2>
          <p className="mt-4 text-[#888] text-sm max-w-lg mx-auto leading-relaxed">
            If you are looking for professional car window tinting in Sharjah,
            look no further than TotalGard. Contact us today to schedule an
            appointment or to learn more about our window tinting services.
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
              { label: "Paint Protection Film Sharjah", href: "/paint-protection-film" },
              { label: "Ceramic Coating Sharjah", href: "/nano-ceramic-coating" },
              { label: "Car Wrapping Sharjah", href: "/car-wrapping" },
              { label: "Smart Film Sharjah", href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah" },
              { label: "Stone Protection Film Sharjah", href: "/stone-protection-film" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="glass text-[#888] text-xs px-5 py-2.5 rounded-full hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}