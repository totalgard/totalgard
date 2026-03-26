"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  { label: "Window Tinting", href: "/window-tinting" },
  { label: "Paint Protection Film", href: "/paint-protection-film" },
  { label: "Nano Ceramic Coating", href: "/nano-ceramic-coating" },
  { label: "Car Wrapping", href: "/car-wrapping" },
  { label: "Smart Film", href: "/smart-film-pdlc-switchable-privacy-glass-film-sharjah" },
  { label: "Stone Protection Film", href: "/stone-protection-film" },
];

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;
  const isServiceActive = services.some((s) => pathname === s.href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a] border-b border-[#1a1a1a] shadow-xl shadow-black/60"
          : "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#151515]"
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

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen((v) => !v)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              className={`relative px-4 py-2 text-xs font-semibold tracking-wide transition-colors duration-200 rounded-full flex items-center gap-1.5 ${
                isServiceActive ? "text-[#c9a84c]" : "text-[#888] hover:text-[#f5f5f5]"
              }`}
            >
              {isServiceActive && (
                <span className="absolute inset-0 glass-gold rounded-full" />
              )}
              <span className="relative z-10">Services</span>
              <svg
                className={`relative z-10 w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown — fully solid */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-[#111111] border border-[#222] rounded-2xl p-2 shadow-2xl shadow-black/80">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors duration-200 ${
                      isActive(s.href)
                        ? "text-[#c9a84c] bg-[#c9a84c]/5"
                        : "text-[#888] hover:text-[#f5f5f5] hover:bg-[#1e1e1e]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                        isActive(s.href) ? "bg-[#c9a84c]" : "bg-[#333]"
                      }`}
                    />
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Static links */}
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
        </div>

        {/* ── DESKTOP CTA ── */}
        <div className="hidden lg:flex items-center gap-3">
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
              className={`block h-px bg-[#888] transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px] bg-[#c9a84c]" : ""
              }`}
            />
            <span
              className={`block h-px bg-[#888] transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-[#888] transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px] bg-[#c9a84c]" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Fully solid background — no transparency */}
        <div className="border-t border-[#1a1a1a] bg-[#0d0d0d] px-4 py-3 space-y-1">

          {/* Mobile Services accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                isServiceActive
                  ? "text-[#c9a84c] bg-[#c9a84c]/5 border border-[#c9a84c]/20"
                  : "text-[#888] hover:text-[#f5f5f5] hover:bg-[#1a1a1a]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    isServiceActive ? "bg-[#c9a84c]" : "bg-[#333]"
                  }`}
                />
                Services
              </div>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180" : ""
                }`}
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
                mobileServicesOpen ? "max-h-80" : "max-h-0"
              }`}
            >
              <div className="pl-4 pt-1 space-y-1">
                {services.map((s) => (
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

          {/* Static mobile links */}
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

          {/* Mobile CTA */}
          <div className="pt-3 border-t border-[#1a1a1a] mt-2 flex gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex-1 bg-[#1a1a1a] text-[#888] text-xs py-3 rounded-full text-center font-bold hover:text-[#c9a84c] transition-colors border border-[#222]"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
              target="_blank"
              className="flex-1 gold-gradient text-[#0a0a0a] text-xs py-3 rounded-full text-center font-bold hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
            >
              Free Quote
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}