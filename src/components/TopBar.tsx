import { siteConfig } from "@/lib/siteConfig";
import { Mail, Phone, MapPin } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#080808] border-b border-[#c9a84c]/10 text-xs py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex flex-wrap gap-5 items-center">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 text-[#666] hover:text-[#c9a84c] transition-colors"
          >
            <Mail size={11} />
            {siteConfig.email}
          </a>
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-1.5 text-[#666] hover:text-[#c9a84c] transition-colors"
          >
            <Phone size={11} />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={siteConfig.googleMaps}
            target="_blank"
            className="flex items-center gap-1.5 text-[#666] hover:text-[#c9a84c] transition-colors"
          >
            <MapPin size={11} />
            {siteConfig.address}
          </a>
        </div>
        <div className="flex gap-5 items-center">
          {[
            { label: "Facebook", href: siteConfig.social.facebook },
            { label: "Instagram", href: siteConfig.social.instagram },
            { label: "YouTube", href: siteConfig.social.youtube },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              aria-label={s.label}
              className="text-[#444] hover:text-[#c9a84c] transition-colors tracking-widest uppercase"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}