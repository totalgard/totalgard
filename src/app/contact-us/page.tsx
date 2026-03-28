import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Us | Totalgard Sharjah — Automotive Protection UAE",
  description:
    "Contact Totalgard Sharjah for window tinting, PPF, ceramic coating, car wrapping and smart film. Visit us at Central Mall, Sharjah. Call +971 56 425 5770 or WhatsApp for a free quote.",
  alternates: { canonical: "https://Totalgard.ae/contact-us" },
};

const contactDetails = [
  {
    icon: "📍",
    label: "Office Address",
    value: "Central Mall, Sharjah, UAE",
    href: "https://maps.app.goo.gl/dzQJc3Art2K1LAs78",
    external: true,
  },
  {
    icon: "🕐",
    label: "Working Hours",
    value: "Sun – Sat: 10:00 AM – 10:00 PM",
    href: null,
    external: false,
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "+971 56 425 5770",
    href: `tel:${siteConfig.phone}`,
    external: false,
  },
  {
    icon: "✉️",
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Totalgard Sharjah",
  url: "https://Totalgard.ae/contact-us",
  description:
    "Contact Totalgard Sharjah for automotive protection services including window tinting, PPF, ceramic coating and car wrapping.",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative bg-[#0a0a0a] py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c] opacity-[0.05] blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#c9a84c] opacity-[0.03] blur-[80px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span className="text-[#333] text-xs">→</span>
            <span className="text-[#c9a84c] text-xs">Contact Us</span>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5] leading-tight">
              Contact <span className="gold-text">Totalgard</span>
              <br /> Sharjah
            </h1>
            <p className="text-[#888] mt-4 leading-relaxed">
              Ready to protect your vehicle? Contact Totalgard today and let us
              keep your car looking its best.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-[#0d0d0d] py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* ── LEFT — Contact Details ── */}
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
                  Our Contact Details
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] mt-3 leading-tight">
                  We're Here to Help
                </h2>
                <p className="text-[#888] mt-3 text-sm leading-relaxed">
                  Visit us at Central Mall, Sharjah or reach out through any of
                  the channels below. Our team is ready to provide the best
                  automotive protection in the UAE.
                </p>
              </div>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((c) => (
                  <div key={c.label} className="glass rounded-2xl p-5 hover:border-[#c9a84c]/40 transition-colors duration-300 group">
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        className="flex flex-col gap-3"
                      >
                        <span className="text-2xl">{c.icon}</span>
                        <div>
                          <p className="text-xs text-[#555] font-semibold tracking-widest uppercase mb-1">
                            {c.label}
                          </p>
                          <p className="text-sm text-[#888] group-hover:text-[#c9a84c] transition-colors font-medium leading-relaxed">
                            {c.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col gap-3">
                        <span className="text-2xl">{c.icon}</span>
                        <div>
                          <p className="text-xs text-[#555] font-semibold tracking-widest uppercase mb-1">
                            {c.label}
                          </p>
                          <p className="text-sm text-[#888] font-medium leading-relaxed">
                            {c.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                target="_blank"
                className="gold-gradient text-[#0a0a0a] px-8 py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20 text-center"
              >
                WhatsApp Us for a Free Quote
              </a>

              {/* Social */}
              <div className="glass rounded-2xl p-6">
                <p className="text-xs text-[#555] font-semibold tracking-widest uppercase mb-4">
                  Follow Our Social Media
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { label: "Facebook", href: siteConfig.social.facebook },
                    { label: "Instagram", href: siteConfig.social.instagram },
                    { label: "YouTube", href: siteConfig.social.youtube },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      className="flex-1 bg-[#1a1a1a] hover:bg-[#c9a84c]/10 border border-[#222] hover:border-[#c9a84c]/40 text-[#666] hover:text-[#c9a84c] text-xs font-bold py-2.5 rounded-xl text-center transition-all duration-200"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT — Contact Form ── */}
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a84c] opacity-[0.05] blur-3xl rounded-full pointer-events-none" />

              <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
                Send Us a Message
              </span>
              <h2 className="text-2xl font-extrabold text-[#f5f5f5] mt-2 mb-6">
                Let's Safeguard Your Vehicle
              </h2>

              <form className="space-y-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#555] font-semibold tracking-widest uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      required
                      className="bg-[#111] border border-[#222] hover:border-[#333] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#333] transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#555] font-semibold tracking-widests uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="bg-[#111] border border-[#222] hover:border-[#333] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#333] transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#555] font-semibold tracking-widest uppercase">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+971 50 000 0000"
                    className="bg-[#111] border border-[#222] hover:border-[#333] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#333] transition-colors duration-200"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#555] font-semibold tracking-widest uppercase">
                    Subject
                  </label>
                  <select
                    name="subject"
                    required
                    className="bg-[#111] border border-[#222] hover:border-[#333] focus:border-[#c9a84c]/50 focus:outline-none text-[#888] text-sm px-4 py-3 rounded-xl transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="" disabled selected>
                      Select a service...
                    </option>
                    <option value="Window Tinting">Window Tinting</option>
                    <option value="Paint Protection Film">Paint Protection Film</option>
                    <option value="Nano Ceramic Coating">Nano Ceramic Coating</option>
                    <option value="Car Wrapping">Car Wrapping</option>
                    <option value="Smart Film">Smart Film</option>
                    <option value="Stone Protection Film">Stone Protection Film</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#555] font-semibold tracking-widest uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your vehicle and what you're looking for..."
                    rows={5}
                    required
                    className="bg-[#111] border border-[#222] hover:border-[#333] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#333] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full gold-gradient text-[#0a0a0a] py-4 rounded-full font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20 mt-2"
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-[#333] mt-2">
                  Or reach us directly on{" "}
                  <a
                    href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                    target="_blank"
                    className="text-[#c9a84c] hover:underline"
                  >
                    WhatsApp
                  </a>{" "}
                  for a faster response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="bg-[#0a0a0a] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
              Find Us
            </span>
            <h2 className="text-2xl font-extrabold text-[#f5f5f5] mt-2">
              Central Mall, Sharjah, UAE
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-[#1e1e1e] shadow-2xl shadow-black/50 h-[380px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.0!2d55.38!3d25.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIwJzI0LjAiTiA1NcKwMjInNDguMCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Totalgard Sharjah Location — Central Mall"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/dzQJc3Art2K1LAs78"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#c9a84c] text-xs font-semibold hover:underline"
            >
              📍 Open in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section className="bg-[#0d0d0d] py-14 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-[#555] tracking-[0.2em] uppercase mb-6">
            Our Services in Sharjah
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Window Tinting Sharjah", href: "/window-tinting" },
              { label: "Paint Protection Film Sharjah", href: "/paint-protection-film" },
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