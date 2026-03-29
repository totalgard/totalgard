import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import WhatsAppForm from "@/components/WhatsAppForm";

export const metadata: Metadata = {
  title: "Contact Us | TotalGard Sharjah — Automotive Protection UAE",
  description:
    "Contact TotalGard Sharjah for window tinting, PPF, ceramic coating, car wrapping and smart film. Visit us at Central Mall, Sharjah. Call +971 56 425 5770 or WhatsApp for a free quote.",
  alternates: { canonical: "https://totalgard.ae/contact-us" },
};

// ── ICONS ──
function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11l-.94.94a16 16 0 0 0 5.49 5.49l.95-.95a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0a0a0a]">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

const contactDetails = [
  {
    Icon: IconMapPin,
    label: "Office Address",
    value: "Central Mall, Sharjah, UAE",
    href: "https://maps.app.goo.gl/dzQJc3Art2K1LAs78",
    external: true,
  },
  {
    Icon: IconClock,
    label: "Working Hours",
    value: "Sun – Sat: 10:00 AM – 10:00 PM",
    href: null,
    external: false,
  },
  {
    Icon: IconPhone,
    label: "Call Us",
    value: "+971 56 425 5770",
    href: `tel:${siteConfig.phone}`,
    external: false,
  },
  {
    Icon: IconMail,
    label: "Email Us",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact TotalGard Sharjah",
  url: "https://totalgard.ae/contact-us",
  description:
    "Contact TotalGard Sharjah for automotive protection services including window tinting, PPF, ceramic coating and car wrapping.",
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
          <div className="flex items-center gap-2 mb-6">
            <Link href="/" className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">
              Home
            </Link>
            <span className="text-[#333] text-xs">/</span>
            <span className="text-[#c9a84c] text-xs">Contact Us</span>
          </div>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5] leading-tight">
              Contact <span className="gold-text">TotalGard</span>
              <br />Sharjah
            </h1>
            <p className="text-[#888] mt-4 leading-relaxed text-sm">
              Ready to protect your vehicle? Reach out and let us keep your car
              looking its best with Sharjah's most trusted protection studio.
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
                  the channels below. Our team is ready to deliver the best
                  automotive protection in the UAE.
                </p>
              </div>

              {/* Contact cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactDetails.map((c) => (
                  <div
                    key={c.label}
                    className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-5 hover:border-[#c9a84c]/30 transition-colors duration-300 group"
                  >
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.external ? "_blank" : undefined}
                        className="flex flex-col gap-4"
                      >
                        <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg shadow-[#c9a84c]/10 flex-shrink-0">
                          <c.Icon />
                        </div>
                        <div>
                          <p className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase mb-1">
                            {c.label}
                          </p>
                          <p className="text-sm text-[#888] group-hover:text-[#c9a84c] transition-colors font-medium leading-relaxed">
                            {c.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col gap-4">
                        <div className="w-10 h-10 gold-gradient rounded-xl flex items-center justify-center shadow-lg shadow-[#c9a84c]/10 flex-shrink-0">
                          <c.Icon />
                        </div>
                        <div>
                          <p className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase mb-1">
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
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-sm transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <IconWhatsApp />
                WhatsApp Us for a Free Quote
              </a>

              {/* Social */}
              <div className="bg-[#111111] border border-[#1e1e1e] rounded-2xl p-6">
                <p className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase mb-4">
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
                      className="flex-1 bg-[#161616] hover:bg-[#c9a84c]/10 border border-[#222] hover:border-[#c9a84c]/40 text-[#666] hover:text-[#c9a84c] text-xs font-bold py-2.5 rounded-xl text-center transition-all duration-200"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {/* ── end LEFT ── */}

            {/* ── RIGHT — WhatsApp Booking Form ── */}
            <div className="bg-[#111111] border border-[#1e1e1e] rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a84c] opacity-[0.04] blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-[#25D366] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#25D366]/20">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase">
                  WhatsApp Booking
                </span>
              </div>

              <h2 className="text-2xl font-extrabold text-[#f5f5f5] mt-1 mb-2">
                Book via WhatsApp
              </h2>
              <p className="text-[#666] text-xs mb-6 leading-relaxed">
                Fill in your details below and we'll open WhatsApp with everything
                pre-filled — get a reply in minutes.
              </p>

              <WhatsAppForm />
            </div>
            {/* ── end RIGHT ── */}

          </div>
          {/* ── end grid ── */}
        </div>
        {/* ── end container ── */}
      </section>
      {/* ── end MAIN CONTENT ── */}

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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.9518525218955!2d55.41463777554239!3d25.339396625926117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f599640e3e9b3%3A0xacb155b55f797862!2sSmart%20Auto%20Sharjah%20-%20Window%20Tinting%2C%20Car%20Paint%20Protection%20Film!5e0!3m2!1sen!2sae!4v1774775661068!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TotalGard Sharjah Location — Central Mall"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.app.goo.gl/dzQJc3Art2K1LAs78"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#c9a84c] text-xs font-semibold hover:underline"
            >
              Open in Google Maps →
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
                className="bg-[#111111] border border-[#1e1e1e] text-[#888] text-xs px-5 py-2.5 rounded-full hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
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