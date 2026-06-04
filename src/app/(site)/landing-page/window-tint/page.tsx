"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─── WhatsApp number ────────────────────────────────────────────────────────
const WA_NUMBER = "971564255770";

// ─── Icons ──────────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
    </svg>
  );
}

// ─── Countdown ──────────────────────────────────────────────────────────────
function CountdownBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[72px] rounded-2xl border border-[#2a2a2a] bg-[#111111] px-4 py-3 text-center">
      <div className="text-2xl font-extrabold text-[#f5f5f5]">{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a]">
        {label}
      </div>
    </div>
  );
}

function useCountdown(initialSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  const h = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const m = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const s = String(timeLeft % 60).padStart(2, "0");
  return { h, m, s };
}

// ─── Booking form ────────────────────────────────────────────────────────────
function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [tintType, setTintType] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const buildLink = () => {
    const msg = [
      `Hi TotalGard! I'd like to book a slot and claim the 15% OFF offer.`,
      ``,
      `*Name:* ${name || "—"}`,
      `*Phone:* ${phone || "—"}`,
      `*Car Make & Model:* ${car || "—"}`,
      `*Tint Type:* ${tintType || "—"}`,
      `*Preferred Time Slot:* ${timeSlot || "—"}`,
    ].join("\n");
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const inputClass =
    "w-full rounded-2xl border border-[#232323] bg-[#0d0d0d] px-4 py-3 text-sm text-[#f5f5f5] outline-none placeholder:text-[#5a5a5a] focus:border-[#c9a84c]/50 transition-colors";

  return (
    <div
      id="book-slot"
      className="relative z-10 rounded-[28px] border border-[#1e1e1e] bg-[#111111] p-6 shadow-2xl"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
          Free Slot Booking
        </p>
        <h2 className="mt-2 text-2xl font-extrabold text-[#f5f5f5]">
          Book now and claim 15% OFF
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#8a8a8a]">
          Fill in your details and our team will confirm your slot quickly.
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Car Make & Model"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          className={inputClass}
        />
        <select
          value={tintType}
          onChange={(e) => setTintType(e.target.value)}
          className="w-full rounded-2xl border border-[#232323] bg-[#0d0d0d] px-4 py-3 text-sm text-[#cfcfcf] outline-none focus:border-[#c9a84c]/50 transition-colors"
        >
          <option value="">Choose Tint Type</option>
          <option value="Standard Tint">Standard Tint</option>
          <option value="Premium Tint">Premium Tint</option>
          <option value="Nano Ceramic Tint">Nano Ceramic Tint</option>
        </select>
        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="w-full rounded-2xl border border-[#232323] bg-[#0d0d0d] px-4 py-3 text-sm text-[#cfcfcf] outline-none focus:border-[#c9a84c]/50 transition-colors"
        >
          <option value="">Preferred Time Slot</option>
          <option value="Morning (11AM–1PM)">Morning (11AM–1PM)</option>
          <option value="Afternoon (1PM–5PM)">Afternoon (1PM–5PM)</option>
          <option value="Evening (5PM–9PM)">Evening (5PM–9PM)</option>
        </select>

        <Link
          href={buildLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#25D366]/40 bg-green-600 px-6 py-4 text-sm font-bold text-[#f5f5f5] transition hover:bg-green-500 hover:border-[#25D366]"
        >
          <WhatsAppIcon />
          Get Instant Quote on WhatsApp
        </Link>

        <p className="text-center text-[11px] leading-5 text-[#666]">
          Limited-time 15% offer applies only to booked slots during the active
          campaign period.
        </p>
      </div>
    </div>
  );
}

// ─── Static WhatsApp link (used outside the form) ────────────────────────────
const staticWaLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hi, I want to claim the 15% tint offer and get an instant quote."
)}`;

// ─── Page ────────────────────────────────────────────────────────────────────
export default function TintOfferPage() {
  const { h, m, s } = useCountdown(11 * 3600 + 42 * 60 + 18);

  return (
    <main className="bg-[#0a0a0a] text-[#f5f5f5]">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
          {/* Left */}
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-[#3a2f12] bg-[#15120a] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c9a84c]">
              Limited Time Google Ads Offer
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-[#f5f5f5] md:text-6xl">
              Get 15% Off Premium Window Tinting in Sharjah
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#b8b8b8] md:text-lg">
              Book your free slot today and get an instant quote on WhatsApp.
              Premium heat rejection films, expert installation, fast
              appointments, and a premium finish.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#d5d5d5]">
              {["Same-day slots", "Premium films", "Warranty included"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#232323] bg-[#111111] px-4 py-2"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            {/* Countdown */}
            <div className="mt-8 rounded-3xl border border-[#2b2414] bg-[#12100b] p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c9a84c]">
                    Offer expires soon
                  </p>
                  <p className="mt-2 text-sm text-[#9e9e9e]">
                    Book your free slot before the timer ends to claim 15% OFF.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CountdownBox value={h} label="Hours" />
                  <CountdownBox value={m} label="Minutes" />
                  <CountdownBox value={s} label="Seconds" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={staticWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
              >
                <WhatsAppIcon />
                Get Instant Quote on WhatsApp
              </Link>
              <a
                href="#book-slot"
                className="inline-flex items-center justify-center rounded-full border border-[#c9a84c]/40 bg-transparent px-6 py-4 text-sm font-bold text-[#f5f5f5] transition hover:border-[#c9a84c] hover:bg-[#141414]"
              >
                Book Your Free Slot Now
              </a>
            </div>
          </div>

          {/* Right — controlled booking form */}
          <BookingForm />
        </div>
      </section>

      {/* ── Trust bar ────────────────────────────────────────────────────── */}
      <section className="border-b border-[#151515] bg-[#0d0d0d]">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-4 md:px-6">
          {[
            "Premium heat rejection films",
            "UV & glare protection",
            "Professional installation",
            "Warranty-backed service",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#1d1d1d] bg-[#111111] px-4 py-4 text-sm font-medium text-[#d6d6d6]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            Why drivers book now
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            More comfort, more privacy, less heat
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Reduce cabin heat",
              text: "Stay cooler during Sharjah heat with films designed for strong solar rejection.",
            },
            {
              title: "Increase privacy",
              text: "Improve privacy and reduce glare without compromising the premium look of your car.",
            },
            {
              title: "Block UV damage",
              text: "Help protect your interior from fading, cracking, and sun-related wear.",
            },
            {
              title: "Upgrade the look",
              text: "Give your vehicle a cleaner, sharper, more premium finish.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#1c1c1c] bg-[#111111] p-6"
            >
              <h3 className="text-xl font-bold text-[#f5f5f5]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#9a9a9a]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Packages ─────────────────────────────────────────────────────── */}
      <section className="border-y border-[#151515] bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
              Tint options
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Choose the right tint package
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Standard Tint",
                desc: "Affordable upgrade for everyday privacy and glare reduction.",
                points: ["Good heat reduction", "Privacy boost", "Budget-friendly"],
              },
              {
                title: "Premium Tint",
                desc: "Better comfort, stronger performance, cleaner finish.",
                points: ["Higher heat rejection", "Improved comfort", "Popular choice"],
              },
              {
                title: "Nano Ceramic Tint",
                desc: "Top-tier performance for premium heat rejection and long-term comfort.",
                points: ["Maximum heat rejection", "High clarity", "Premium finish"],
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-[28px] border border-[#242424] bg-[#111111] p-6"
              >
                <h3 className="text-2xl font-extrabold">{pkg.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#9a9a9a]">{pkg.desc}</p>
                <ul className="mt-5 space-y-3 text-sm text-[#d2d2d2]">
                  {pkg.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
                <Link
                  href={staticWaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[#c9a84c] px-5 py-3 text-sm font-bold text-[#0a0a0a] transition hover:bg-[#b8973d]"
                >
                  Get Instant Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="rounded-[32px] border border-[#2b2414] bg-[#12100b] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
                Book today
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Claim your 15% discount before the timer ends
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[#b8b08f]">
                Limited campaign slots available. Book now, confirm your free
                slot, and lock in your offer.
              </p>
            </div>
            <div className="flex gap-3">
              <CountdownBox value={h} label="Hours" />
              <CountdownBox value={m} label="Minutes" />
              <CountdownBox value={s} label="Seconds" />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={staticWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon />
              Get Instant Quote on WhatsApp
            </Link>
            <a
              href="#book-slot"
              className="inline-flex items-center justify-center rounded-full border border-[#c9a84c]/50 px-6 py-4 text-sm font-bold text-[#f5f5f5] transition hover:border-[#c9a84c]"
            >
              Book Your Free Slot Now
            </a>
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[#151515] bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
              Reviews
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              What customers say
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                quote:
                  "Huge difference in heat after tinting. The car feels much more comfortable now.",
                name: "Ahmed R.",
              },
              {
                quote:
                  "Fast service, neat finish, and booking on WhatsApp was super easy.",
                name: "Faisal K.",
              },
              {
                quote:
                  "Professional team and premium result. I booked same day and got the offer too.",
                name: "Naveed S.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-[#1f1f1f] bg-[#111111] p-6"
              >
                <p className="text-sm leading-7 text-[#d2d2d2]">
                  "{item.quote}"
                </p>
                <p className="mt-5 text-sm font-semibold text-[#c9a84c]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Common questions before booking
          </h2>
        </div>

        <div className="mt-10 grid gap-4">
          {[
            [
              "How long does tinting take?",
              "Most jobs can be completed within a few hours depending on the vehicle and tint type.",
            ],
            [
              "Do you offer warranty?",
              "Yes, tint packages can include warranty depending on the film selected.",
            ],
            [
              "Can I get same-day booking?",
              "Yes, subject to slot availability.",
            ],
            [
              "How do I claim the 15% discount?",
              "Simply book your free slot before the timer ends and mention the campaign offer.",
            ],
          ].map(([q, a]) => (
            <div
              key={q}
              className="rounded-2xl border border-[#1e1e1e] bg-[#111111] p-5"
            >
              <h3 className="text-lg font-bold text-[#f5f5f5]">{q}</h3>
              <p className="mt-2 text-sm leading-6 text-[#9a9a9a]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Mobile sticky bar ────────────────────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#2a2a2a] bg-[#0b0b0b]/95 p-3 backdrop-blur md:hidden">
        <div className="flex gap-3">
          <Link
            href={staticWaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
          >
            <WhatsAppIcon />
            WhatsApp Quote
          </Link>
          <a
            href="#book-slot"
            className="inline-flex flex-1 items-center justify-center rounded-full bg-[#c9a84c] px-4 py-3 text-sm font-bold text-[#0a0a0a]"
          >
            Book Slot
          </a>
        </div>
      </div>
    </main>
  );
}