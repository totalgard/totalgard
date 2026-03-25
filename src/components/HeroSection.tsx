"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5000+", label: "Cars Protected" },
  { value: "99%", label: "UV Rejection" },
  { value: "100%", label: "Satisfaction" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative bg-[#0a0a0a] overflow-hidden min-h-[92vh] flex items-center">

      {/* Golden glow blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#c9a84c] opacity-[0.07] blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#c9a84c] opacity-[0.05] blur-[100px]" />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-[#f0d080] opacity-[0.03] blur-[80px]" />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Vertical line accents */}
      <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/20 to-transparent z-0 pointer-events-none" />
      <div className="absolute top-0 right-[40%] w-px h-full bg-gradient-to-b from-transparent via-[#c9a84c]/10 to-transparent z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-40 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
              <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
                Sharjah's Premier Automotive Protection
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-8 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="text-[#f5f5f5]">Protect &</span>
              <br />
              <span className="text-[#f5f5f5]">Elevate </span>
              <span className="gold-text">Your</span>
              <br />
              <span className="gold-text">Vehicle.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 text-[#888] text-lg max-w-lg leading-relaxed font-light"
            >
              TotalGard by Smart Auto Sharjah — the UAE's trusted automotive
              protection specialist offering ceramic window tinting, PPF, nano
              ceramic coating, and car wrapping with 10+ years of precision
              expertise in Sharjah.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}`}
                target="_blank"
                className="gold-gradient text-[#0a0a0a] px-9 py-4 rounded-full font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-[#c9a84c]/20"
              >
                Get a Free Quote
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="glass text-[#f5f5f5] px-9 py-4 rounded-full font-semibold text-base hover:border-[#c9a84c]/40 hover:text-[#c9a84c] transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-6 text-xs text-[#444] tracking-[0.2em] uppercase"
            >
              Central Mall, Sharjah, UAE
            </motion.p>
          </div>

          {/* Right — Glass stats card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="hidden md:block"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#c9a84c] opacity-[0.08] blur-3xl rounded-full pointer-events-none" />

              <p className="text-xs text-[#c9a84c] tracking-[0.2em] uppercase font-semibold mb-6">
                TotalGard Sharjah — At a Glance
              </p>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="glass-gold rounded-2xl p-5 text-center">
                    <p className="text-3xl font-extrabold gold-text">{s.value}</p>
                    <p className="text-xs text-[#666] mt-1 tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 glass-gold rounded-2xl p-5">
                {[
                  { label: "UV Rejection Rate", value: 99 },
                  { label: "Infrared Defense", value: 85 },
                  { label: "Heat Rejection", value: 50 },
                ].map((bar, i) => (
                  <div key={bar.label} className={i !== 0 ? "mt-4" : ""}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-[#888] font-medium">{bar.label}</p>
                      <p className="text-xs text-[#c9a84c] font-bold">{bar.value}%</p>
                    </div>
                    <div className="w-full bg-[#1e1e1e] rounded-full h-1.5">
                      <div
                        className="gold-gradient h-1.5 rounded-full"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-3 glass-gold rounded-2xl px-5 py-3">
                <div className="w-2 h-2 bg-[#c9a84c] rounded-full animate-pulse" />
                <p className="text-xs text-[#888]">
                  <span className="text-[#c9a84c] font-semibold">Open Now</span>{" "}
                  — Central Mall, Sharjah
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="md:hidden mt-12 pt-8 border-t border-[#1e1e1e] grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass-gold rounded-2xl p-4 text-center">
              <p className="text-2xl font-extrabold gold-text">{s.value}</p>
              <p className="text-xs text-[#666] mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
    </section>
  );
}