import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Shipping Information | GWETHBTL Leather"
};

export default function ShippingPage() {
  return (
    <LegalPage
      title="Shipping Information"
      updated="June 2026"
      sections={[
        {
          title: "1. Delivery Within Nairobi",
          content:
            "Orders within Nairobi are delivered within 2-3 business days. Same-day or next-day delivery may be available for select locations - contact us on WhatsApp to confirm."
        },
        {
          title: "2. Delivery Across Kenya",
          content:
            "We deliver to all counties across Kenya via trusted courier partners. Delivery outside Nairobi typically takes 3-5 business days depending on location."
        },
        {
          title: "3. Shipping Costs",
          content:
            "Shipping costs are calculated at checkout based on your delivery location. We occasionally offer free shipping on orders above a certain amount - check our homepage for current promotions."
        },
        {
          title: "4. Order Processing",
          content:
            "Orders are processed within 1-2 business days after payment confirmation. You will receive an order confirmation via email or WhatsApp once your order is dispatched."
        },
        {
          title: "5. Tracking",
          content:
            "Once your order is dispatched, we will share tracking information via WhatsApp or email so you can monitor your delivery."
        },
        {
          title: "6. Delays",
          content:
            "GWETHBTL Leather is not responsible for delays caused by third party courier services, adverse weather, or circumstances beyond our control. We will however do our best to keep you informed."
        },
        {
          title: "7. Corporate & Bulk Orders",
          content:
            "For corporate or bulk orders requiring special delivery arrangements, please contact us directly at hello@gwethbtlleather.co.ke or via WhatsApp."
        }
      ]}
    />
  );
}
