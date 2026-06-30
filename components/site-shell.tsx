"use client";

import { usePathname } from "next/navigation";
import { CampaignModal } from "@/components/campaign-modal";
import { MiniCart } from "@/components/mini-cart";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SitePreloader } from "@/components/site-preloader";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <SitePreloader />
      <SiteHeader />
      {children}
      <SiteFooter />
      <MiniCart />
      <CampaignModal />
      <WhatsAppFloat />
    </>
  );
}
