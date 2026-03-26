import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} Sharjah | Automotive Protection Sharjah`,
    template: `%s | ${siteConfig.name} Sharjah`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: `${siteConfig.name} Sharjah`,
    title: `${siteConfig.name} Sharjah | Automotive Protection Sharjah`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} Sharjah | Automotive Protection Sharjah`,
    description: siteConfig.description,
  },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#0a0a0a] text-[#f5f5f5]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}