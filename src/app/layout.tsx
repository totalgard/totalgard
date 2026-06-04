// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import ChatbotWrapper from "@/components/ChatbotWrapper";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Automotive Protection Dubai & Sharjah`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:    siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type:        "website",
    locale:      "en_AE",
    url:         siteConfig.url,
    siteName:    siteConfig.name,
    title:       `${siteConfig.name} | Automotive Protection Dubai & Sharjah`,
    description: siteConfig.description,
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${siteConfig.name} | Automotive Protection Dubai & Sharjah`,
    description: siteConfig.description,
  },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0a0a0a] text-[#f5f5f5]`}>

        {/* GTM */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P66NVQXD');`,
          }}
        />

        {children}

        <ChatbotWrapper />

        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P66NVQXD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

      </body>
    </html>
  )
}