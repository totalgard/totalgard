"use client";

import { siteConfig } from "@/lib/siteConfig";

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export default function WhatsAppForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const phone = fd.get("phone") as string;
    const service = fd.get("service") as string;
    const car = fd.get("car") as string;
    const message = fd.get("message") as string;

    const text = [
      `Hello TotalGard Sharjah! I'd like to book an appointment.`,
      ``,
      `*Name:* ${name}`,
      `*Phone:* ${phone}`,
      `*Service Required:* ${service}`,
      `*Car Model:* ${car}`,
      `*Message:* ${message || "N/A"}`,
    ].join("\n");

    const url = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="John Smith"
            required
            className="bg-[#0d0d0d] border border-[#222] hover:border-[#2e2e2e] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#2e2e2e] transition-colors duration-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+971 50 000 0000"
            required
            className="bg-[#0d0d0d] border border-[#222] hover:border-[#2e2e2e] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#2e2e2e] transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase">
          Service Required
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="bg-[#0d0d0d] border border-[#222] hover:border-[#2e2e2e] focus:border-[#c9a84c]/50 focus:outline-none text-[#888] text-sm px-4 py-3 rounded-xl transition-colors duration-200 appearance-none cursor-pointer"
        >
          <option value="" disabled>Select a service...</option>
          <option value="Window Tinting">Window Tinting</option>
          <option value="Paint Protection Film">Paint Protection Film</option>
          <option value="Nano Ceramic Coating">Nano Ceramic Coating</option>
          <option value="Car Wrapping">Car Wrapping</option>
          <option value="Smart Film">Smart Film</option>
          <option value="Stone Protection Film">Stone Protection Film</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase">
          Car Make & Model
        </label>
        <input
          type="text"
          name="car"
          placeholder="e.g. Toyota Camry 2023"
          required
          className="bg-[#0d0d0d] border border-[#222] hover:border-[#2e2e2e] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#2e2e2e] transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] text-[#555] font-semibold tracking-[0.18em] uppercase">
          Additional Notes
        </label>
        <textarea
          name="message"
          placeholder="Any specific requirements or questions..."
          rows={4}
          className="bg-[#0d0d0d] border border-[#222] hover:border-[#2e2e2e] focus:border-[#c9a84c]/50 focus:outline-none text-[#f5f5f5] text-sm px-4 py-3 rounded-xl placeholder:text-[#2e2e2e] transition-colors duration-200 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-full font-bold text-sm transition-colors shadow-lg shadow-[#25D366]/20 mt-1"
      >
        <IconWhatsApp />
        Send Booking via WhatsApp
      </button>

      <p className="text-center text-[11px] text-[#333] leading-relaxed">
        Clicking the button will open WhatsApp with your details pre-filled.
        We typically reply within minutes.
      </p>
    </form>
  );
}