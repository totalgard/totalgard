"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

const navLinks = [
  { label: "Window Tinting", href: "/window-tinting" },
  { label: "Paint Protection Film", href: "/paint-protection-film" },
  { label: "Nano Ceramic Coating", href: "/nano-ceramic-coating" },
  { label: "Car Wrapping", href: "/car-wrapping" },
];

const otherServices = [
  { label: "Smart Film", href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah" },
  { label: "Stone Protection Film", href: "/stone-protection-film" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [mobileOtherOpen, setMobileOtherOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOtherOpen(false);
    setMobileOtherOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isOtherActive = otherServices.some((s) => pathname === s.href);

  return (
    <>
      {/* ── TOP BAR ── */}
      <div className="bg-[#080808] border-b border-[#1a1a1a] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 text-[#555] text-xs hover:text-[#c9a84c] transition-colors group"
            >
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              FOR SUPPORT:&nbsp;
              <span className="text-[#888] group-hover:text-[#c9a84c]">{siteConfig.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-[#555] text-xs hover:text-[#c9a84c] transition-colors group"
            >
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              FOR HELPLINE:&nbsp;
              <span className="text-[#888] group-hover:text-[#c9a84c]">{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={siteConfig.googleMaps}
              target="_blank"
              className="flex items-center gap-2 text-[#555] text-xs hover:text-[#c9a84c] transition-colors group"
            >
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              VISIT US:&nbsp;
              <span className="text-[#888] group-hover:text-[#c9a84c]">Central Mall, Sharjah-UAE</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.facebook}
              target="_blank"
              aria-label="Facebook"
              className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs font-semibold tracking-widest uppercase"
            >
              FB
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              aria-label="Instagram"
              className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs font-semibold tracking-widest uppercase"
            >
              IG
            </a>
            <a
              href={siteConfig.youtube}
              target="_blank"
              aria-label="YouTube"
              className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs font-semibold tracking-widest uppercase"
            >
              YT
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#1a1a1a] shadow-2xl shadow-black/50"
            : "bg-[#0a0a0a] border-b border-[#151515]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="w-8 h-8 gold-gradient rounded-lg flex items-center justify-center shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform duration-300">
                <span className="text-[#0a0a0a] font-extrabold text-xs tracking-tight">TG</span>
              </div>
              <div className="absolute inset-0 gold-gradient rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[#f5f5f5] font-extrabold text-sm tracking-wide">
                TOTAL<span className="gold-text">GARD</span>
              </span>
              <span className="text-[#444] text-[9px] tracking-[0.2em] uppercase mt-0.5">
                Sharjah, UAE
              </span>
            </div>
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                  isActive(link.href)
                    ? "text-[#c9a84c]"
                    : "text-[#888] hover:text-[#f5f5f5]"
                }`}
              >
                {isActive(link.href) && (
                  <span className="absolute inset-0 glass-gold rounded-full" />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}

            {/* Other Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOtherOpen((v) => !v)}
                onBlur={() => setTimeout(() => setOtherOpen(false), 150)}
                className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full flex items-center gap-1.5 ${
                  isOtherActive
                    ? "text-[#c9a84c]"
                    : "text-[#888] hover:text-[#f5f5f5]"
                }`}
              >
                {isOtherActive && (
                  <span className="absolute inset-0 glass-gold rounded-full" />
                )}
                <span className="relative z-10">Other Services</span>
                <svg
                  className={`relative z-10 w-3 h-3 transition-transform duration-200 ${otherOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {otherOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass rounded-2xl p-2 shadow-2xl shadow-black/50 border border-[#c9a84c]/10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-[#1a1a1a] border-l border-t border-[#c9a84c]/10" />
                  {otherServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold transition-colors duration-200 ${
                        isActive(s.href)
                          ? "text-[#c9a84c] bg-[#c9a84c]/5"
                          : "text-[#888] hover:text-[#f5f5f5] hover:bg-[#1e1e1e]"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isActive(s.href) ? "bg-[#c9a84c]" : "bg-[#333]"
                        }`}
                      />
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact-us"
              className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full ${
                isActive("/contact-us")
                  ? "text-[#c9a84c]"
                  : "text-[#888] hover:text-[#f5f5f5]"
              }`}
            >
              {isActive("/contact-us") && (
                <span className="absolute inset-0 glass-gold rounded-full" />
              )}
              <span className="relative z-10">Contact Us</span>
            </Link>
          </div>

          {/* ── DESKTOP CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="glass text-[#888] text-xs px-4 py-2.5 rounded-full hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-colors font-semibold"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="gold-gradient text-[#0a0a0a] text-xs px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Free Quote
            </a>
          </div>

          {/* ── MOBILE HAMBURGER ── */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden glass w-10 h-10 rounded-xl flex items-center justify-center hover:border-[#c9a84c]/40 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-4">
              <span
                className={`block h-px bg-[#888] transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2 bg-[#c9a84c]" : ""
                }`}
              />
              <span
                className={`block h-px bg-[#888] transition-all duration-300 ${
                  mobileOpen ? "opacity-0 w-0" : "w-full"
                }`}
              />
              <span
                className={`block h-px bg-[#888] transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2 bg-[#c9a84c]" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {/* ── MOBILE MENU ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#1a1a1a] bg-[#0a0a0a] px-6 py-4 space-y-1">

            {/* Mobile top info */}
            <div className="flex flex-col gap-2 pb-4 border-b border-[#1a1a1a] mb-3">
              <a href={`tel:${siteConfig.phone}`} className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">
                📞 {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">
                ✉️ {siteConfig.email}
              </a>
              <a href={siteConfig.googleMaps} target="_blank" className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors">
                📍 Central Mall, Sharjah-UAE
              </a>
            </div>

            {/* Main nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-[#c9a84c] bg-[#c9a84c]/5 border border-[#c9a84c]/20"
                    : "text-[#888] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isActive(link.href) ? "bg-[#c9a84c]" : "bg-[#333]"
                  }`}
                />
                {link.label}
              </Link>
            ))}

            {/* Mobile Other Services accordion */}
            <div>
              <button
                onClick={() => setMobileOtherOpen((v) => !v)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  isOtherActive
                    ? "text-[#c9a84c] bg-[#c9a84c]/5 border border-[#c9a84c]/20"
                    : "text-[#888] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      isOtherActive ? "bg-[#c9a84c]" : "bg-[#333]"
                    }`}
                  />
                  Other Services
                </div>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${mobileOtherOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileOtherOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="pl-4 pt-1 space-y-1">
                  {otherServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                        isActive(s.href)
                          ? "text-[#c9a84c] bg-[#c9a84c]/5"
                          : "text-[#777] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full flex-shrink-0 ${
                          isActive(s.href) ? "bg-[#c9a84c]" : "bg-[#2a2a2a]"
                        }`}
                      />
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact-us"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                isActive("/contact-us")
                  ? "text-[#c9a84c] bg-[#c9a84c]/5 border border-[#c9a84c]/20"
                  : "text-[#888] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  isActive("/contact-us") ? "bg-[#c9a84c]" : "bg-[#333]"
                }`}
              />
              Contact Us
            </Link>

            {/* Mobile CTA buttons */}
            <div className="flex gap-3 pt-4 border-t border-[#1a1a1a] mt-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex-1 glass text-[#888] text-xs py-3 rounded-full text-center font-bold hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-colors"
              >
                Call Us
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                target="_blank"
                className="flex-1 gold-gradient text-[#0a0a0a] text-xs py-3 rounded-full text-center font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
              >
                Free Quote
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-6 pt-3 pb-1">
              <a href={siteConfig.facebook} target="_blank" className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs font-bold tracking-widest uppercase">
                Facebook
              </a>
              <a href={siteConfig.instagram} target="_blank" className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs font-bold tracking-widest uppercase">
                Instagram
              </a>
              <a href={siteConfig.youtube} target="_blank" className="text-[#444] hover:text-[#c9a84c] transition-colors text-xs font-bold tracking-widest uppercase">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}