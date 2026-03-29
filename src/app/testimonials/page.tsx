import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Reviews | TotalGard Sharjah — What Our Clients Say",
  description:
    "Read real customer reviews for TotalGard Sharjah. Our clients love our window tinting, PPF, ceramic coating and car wrapping services at Central Mall, Sharjah.",
  alternates: { canonical: "https://totalgard.ae/testimonials" },
};

const testimonials = [
  {
    name: "Dr. Shafeeq Saeed",
    role: "Local Guide · 12 reviews",
    timeAgo: "2 months ago",
    service: "PPF & Window Tinting",
    car: "Jetour G700",
    review:
      "Excellent service from Smart Auto! They did PPF and window tinting on my new Jetour G700, and the results are flawless. Very professional team, great attention to detail, and high-quality workmanship. Clean finish, no bubbles, and delivered on time. Highly recommended for anyone looking to protect and enhance their car.",
    initials: "DS",
  },
  {
    name: "Renjith Sreekumar",
    role: "8 reviews",
    timeAgo: "6 months ago",
    service: "Window Tinting",
    car: null,
    review:
      "I had an excellent experience at Smart Auto. The car window tint 'Total Guard' which I bought from there was of superior quality with affordable rates, and just what I was looking for. The staff were particularly helpful and went above and beyond.",
    initials: "RS",
  },
  {
    name: "Jeevan George",
    role: "Local Guide · 13 reviews",
    timeAgo: "5 months ago",
    service: "PPF",
    car: null,
    review:
      "I had done PPF from Smart Auto Sharjah. Throughout the process they've kept me updated on the status and they're very professional. The job is nicely done. My car looked brand new when I picked it up from them. Special Thanks to Nikhil, Jesto and his team for their dedication and teamwork.",
    initials: "JG",
  },
  {
    name: "Shereef N",
    role: "5 reviews",
    timeAgo: "2 months ago",
    service: "Window Tinting & PPF",
    car: null,
    review:
      "Smart Auto Sharjah is now my go-to place in the UAE for professional window tinting and car paint protection film (PPF). Their team clearly explained the different tint films and heat-rejection levels, and helped me choose the best option for my needs.",
    initials: "SN",
  },
  {
    name: "Electra Arun",
    role: "4 reviews",
    timeAgo: "2 months ago",
    service: "Window Tinting & PPF",
    car: null,
    review:
      "Had a fantastic experience with Smart Auto Sharjah for both window tinting and paint protection film. The team was professional, explained all the film options clearly, and helped me choose the right tint level for UAE weather. The workmanship is excellent – clean cuts, no bubbles, and the car feels noticeably cooler now.",
    initials: "EA",
  },
  {
    name: "Nithin Varghese",
    role: "10 reviews",
    timeAgo: "7 months ago",
    service: "Polishing & Tinting",
    car: null,
    review:
      "I recently got my car polished and tinted at Smart Auto, and I couldn't be happier with the results! From start to finish, the team was professional, attentive, and truly dedicated to delivering top-quality service.",
    initials: "NV",
  },
  {
    name: "Ajit Kumar",
    role: "3 reviews",
    timeAgo: "5 months ago",
    service: "General Service",
    car: null,
    review:
      "I had an excellent experience with Smart Auto Sharjah. All the employees respond to our queries politely with a smiling face. Location is perfect. I strongly recommend Smart Auto. Their rates are comparatively good.",
    initials: "AK",
  },
  {
    name: "Manuel Felix",
    role: "Local Guide · 6 reviews",
    timeAgo: "9 months ago",
    service: "Ceramic Coating",
    car: null,
    review:
      "I had a fantastic experience with Smart Auto. Their team provided exceptional service, demonstrating great professionalism and attention to detail. The quality of their ceramic coating is top-notch, offering excellent protection.",
    initials: "MF",
  },
  {
    name: "Ibrahim Shj0",
    role: "9 reviews",
    timeAgo: "8 months ago",
    service: "Tinting, PPF & Ceramic",
    car: "RAV4 & Camry",
    review:
      "Great place for tinting, PPF and ceramic. I did tinting for my RAV4 and Camry — they offered me good price and high quality of material and nano ceramic quality. Very good team at Sharjah Central Mall.",
    initials: "IS",
  },
  {
    name: "SHAJI P JOSA",
    role: "1 review",
    timeAgo: "7 months ago",
    service: "Window Tinting",
    car: null,
    review:
      "Nothing more to say about this shop, very well maintained just inside the shopping mall. Went for a dinner and I got my car back after tinting in just 60 minutes. Clean and neat shop with many in-house facilities for a family, nice staff as well.",
    initials: "SP",
  },
  {
    name: "Adeep Maliyakkal",
    role: "5 reviews",
    timeAgo: "7 months ago",
    service: "PPF",
    car: null,
    review:
      "Smart Auto exceeded my expectations! Their PPF gave my car a stunning shine and long-lasting protection. Highly recommended for their professional service.",
    initials: "AM",
  },
  {
    name: "Saeed ALKAABI",
    role: "Local Guide · 10 reviews",
    timeAgo: "4 months ago",
    service: "General Service",
    car: null,
    review:
      "Excellent work! The staff are outstanding. Also, in the call center, there's an employee named Rose whose work is wonderful and beautiful. Thank you to the entire staff for the service.",
    initials: "SA",
  },
  {
    name: "Faisal Shakur Abbasi",
    role: "Local Guide · 48 reviews",
    timeAgo: "1 week ago",
    service: "Nano Ceramic, Tinting & PPF",
    car: null,
    review:
      "A great place for car detailing. Right from coordination to the workmanship — Nano, tinting or car PPF. Great job guys!",
    initials: "FA",
  },
  {
    name: "Aagney Dinesh",
    role: "5 reviews",
    timeAgo: "1 month ago",
    service: "General Service",
    car: null,
    review:
      "These guys are great at what they do. Thanks to Mr. Jomon.",
    initials: "AD",
  },
  {
    name: "Jesus George",
    role: "4 reviews",
    timeAgo: "2 months ago",
    service: "Tinting & PPF",
    car: null,
    review:
      "Amazing tint and PPF works. Highly satisfied with the results and overall experience.",
    initials: "JG2",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#c9a84c]">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

const serviceColors: Record<string, string> = {
  "PPF": "bg-[#1a1500] text-[#c9a84c] border-[#c9a84c]/20",
  "Window Tinting": "bg-[#001a1a] text-[#4fc0c8] border-[#4fc0c8]/20",
  "Ceramic Coating": "bg-[#001a0a] text-[#4fba7c] border-[#4fba7c]/20",
  "default": "bg-[#111] text-[#888] border-[#222]",
};

function getServiceColor(service: string) {
  if (service.includes("PPF")) return serviceColors["PPF"];
  if (service.includes("Tint")) return serviceColors["Window Tinting"];
  if (service.includes("Ceramic") || service.includes("Nano")) return serviceColors["Ceramic Coating"];
  return serviceColors["default"];
}

export default function TestimonialsPage() {
  return (
    <>
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
            <span className="text-[#333] text-xs">/</span>
            <span className="text-[#c9a84c] text-xs">Testimonials</span>
          </div>

          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 glass-gold text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full animate-pulse" />
              Verified Google Reviews
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#f5f5f5] leading-tight">
              What Our <span className="gold-text">Clients</span>
              <br />Are Saying
            </h1>
            <p className="text-[#888] mt-4 leading-relaxed text-sm max-w-lg mx-auto">
              Real reviews from real customers at TotalGard Sharjah — Central Mall.
              Over 40 five-star ratings and counting.
            </p>

            {/* Rating summary */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex flex-col items-center bg-[#111] border border-[#1e1e1e] rounded-2xl px-8 py-5">
                <span className="text-4xl font-extrabold text-[#f5f5f5]">5.0</span>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  <GoogleIcon />
                  <span className="text-[#555] text-xs">Google Rating</span>
                </div>
              </div>
              <div className="flex flex-col items-center bg-[#111] border border-[#1e1e1e] rounded-2xl px-8 py-5">
                <span className="text-4xl font-extrabold text-[#f5f5f5]">10K+</span>
                <span className="text-[#555] text-xs mt-1">Satisfied Customers</span>
                <span className="text-[#c9a84c] text-xs mt-2 font-semibold">Sharjah Central Mall</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {testimonials.map((t) => (
              <div
                key={t.name + t.timeAgo}
                className="break-inside-avoid bg-[#111111] border border-[#1e1e1e] hover:border-[#c9a84c]/20 rounded-2xl p-6 transition-colors duration-300 group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-sm flex-shrink-0">
                      {t.initials.slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-[#f5f5f5] text-sm font-semibold leading-tight">{t.name}</p>
                      <p className="text-[#444] text-[10px] mt-0.5">{t.role}</p>
                    </div>
                  </div>
                  {/* Google logo */}
                  <div className="flex-shrink-0 mt-0.5">
                    <GoogleIcon />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                  <span className="text-[#444] text-[10px] ml-2">{t.timeAgo}</span>
                </div>

                {/* Review text */}
                <p className="text-[#777] text-xs leading-relaxed group-hover:text-[#999] transition-colors">
                  "{t.review}"
                </p>

                {/* Service + Car tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className={`inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-full border ${getServiceColor(t.service)}`}>
                    {t.service}
                  </span>
                  {t.car && (
                    <span className="inline-flex items-center text-[10px] font-semibold px-2.5 py-1 rounded-full border bg-[#111] text-[#555] border-[#1e1e1e]">
                      {t.car}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google CTA */}
          <div className="mt-14 text-center">
            <p className="text-[#555] text-xs mb-4">Want to share your experience?</p>
            <a
              href="https://maps.app.goo.gl/zEF6iqXAjQncy5gU8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-gray-100 text-[#1a1a1a] font-bold text-sm px-7 py-3.5 rounded-full transition-colors shadow-lg"
            >
              <GoogleIcon />
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-16 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#f5f5f5] leading-tight">
            Ready to Join Our <span className="gold-text">Happy Clients?</span>
          </h2>
          <p className="text-[#666] text-sm mt-3 mb-8 leading-relaxed">
            Book your appointment today and experience the same 5-star service at
            TotalGard Sharjah — Central Mall.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8923d] text-[#0a0a0a] font-bold text-sm px-8 py-4 rounded-full transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=971564255770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-8 py-4 rounded-full transition-colors shadow-lg shadow-[#25D366]/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}