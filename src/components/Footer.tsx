import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  { label: "Window Tinting Sharjah", href: "/window-tinting" },
  { label: "Paint Protection Film Sharjah", href: "/paint-protection-film" },
  { label: "Nano Ceramic Coating Sharjah", href: "/nano-ceramic-coating" },
  { label: "Car Wrapping Sharjah", href: "/car-wrapping" },
  { label: "Smart Film Sharjah", href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah" },
  { label: "Stone Protection Film Sharjah", href: "/stone-protection-film" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] pt-16 pb-8 text-sm relative">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p className="font-extrabold text-xl mb-3">
            <span className="text-[#f5f5f5]">Total</span>
            <span className="gold-text">Gard</span>
          </p>
          <p className="text-xs text-[#444] leading-relaxed">
            Sharjah's premier automotive protection centre. Window tinting,
            PPF, ceramic coating and car wrapping specialists at Central Mall,
            Sharjah, UAE.
          </p>
          <div className="flex gap-5 mt-5">
            {[
              { label: "Facebook", href: siteConfig.social.facebook },
              { label: "Instagram", href: siteConfig.social.instagram },
              { label: "YouTube", href: siteConfig.social.youtube },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs tracking-widest uppercase"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-[#f5f5f5] font-semibold mb-4 text-xs tracking-widest uppercase">
            Services in Sharjah
          </p>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-[#f5f5f5] font-semibold mb-4 text-xs tracking-widest uppercase">
            Quick Links
          </p>
          <ul className="space-y-2.5">
            {[
              { label: "Blog", href: "/blog" },
              { label: "Contact Us", href: "/contact-us" },
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms-conditions" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[#f5f5f5] font-semibold mb-4 text-xs tracking-widest uppercase">
            Contact TotalGard Sharjah
          </p>
          <ul className="space-y-3 text-xs">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#444] hover:text-[#c9a84c] transition-colors"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-[#444] hover:text-[#c9a84c] transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.googleMaps}
                target="_blank"
                className="text-[#444] hover:text-[#c9a84c] transition-colors leading-relaxed"
              >
                Central Mall, Sharjah, UAE
              </a>
            </li>
            <li className="text-[#333]">Open 7 Days — 9AM to 9PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-[#1a1a1a] flex flex-wrap justify-between gap-3 text-xs text-[#2a2a2a]">
        <p>
          ©2025 TotalGard Sharjah. All Rights Reserved.{" "}
          <a
            href="https://smartautouae.com"
            target="_blank"
            className="hover:text-[#c9a84c] transition-colors"
          >
            Smart Auto Sharjah
          </a>
        </p>
        <p>
          Window Tinting Sharjah · PPF Sharjah · Ceramic Coating Sharjah ·
          Car Wrapping Sharjah
        </p>
      </div>
    </footer>
  );
}