import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MiniCart } from "@/components/mini-cart";
import { CampaignModal } from "@/components/campaign-modal";
import { SitePreloader } from "@/components/site-preloader";

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
  weight: ["500", "600", "700"]
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gwethbtlleather.co.ke"),
  title: {
    default: "GWETHBTL Leather",
    template: "%s | GWETHBTL Leather"
  },
  description:
    "Premium Kenyan leather bags, wallets, backpacks, messenger bags, and belts handcrafted by skilled artisans.",
  openGraph: {
    title: "GWETHBTL Leather",
    description:
      "Premium Kenyan leather bags, wallets, backpacks, messenger bags, and belts handcrafted by skilled artisans.",
    url: "https://gwethbtlleather.co.ke",
    siteName: "GWETHBTL Leather",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "GWETHBTL Leather editorial product arrangement"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${editorial.variable} ${body.variable}`}>
      <body>
        <SitePreloader />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MiniCart />
        <CampaignModal />
      </body>
    </html>
  );
}
