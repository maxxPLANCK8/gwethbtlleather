import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Returns & Exchanges | GWETHBTL Leather"
};

export default function ReturnsPage() {
  return (
    <LegalPage
      title="Returns & Exchanges"
      updated="June 2026"
      sections={[
        {
          title: "1. Our Policy",
          content:
            "We want you to love your GWETHBTL piece. If you are not satisfied with your purchase, you may request a return or exchange within 7 days of receiving your order."
        },
        {
          title: "2. Conditions for Return",
          content:
            "To be eligible for a return or exchange, your item must:",
          items: [
            "Be unused and in the same condition you received it",
            "Include all original packaging and tags",
            "Be accompanied by proof of purchase (order confirmation)",
            "Items that show signs of use, damage caused after delivery, or items purchased on sale are not eligible for return."
          ]
        },
        {
          title: "3. How to Initiate a Return",
          content: "Contact us within 7 days of delivery via:",
          items: [
            "Email: hello@gwethbtlleather.co.ke",
            "WhatsApp: +254 733 406 088",
            "Include your order number, reason for return, and photos of the item. We will respond within 2 business days with return instructions."
          ]
        },
        {
          title: "4. Return Shipping",
          content:
            "The cost of return shipping is the responsibility of the customer unless the item received was defective or incorrect."
        },
        {
          title: "5. Refunds",
          content:
            "Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. Approved refunds are processed within 5-7 business days via the original payment method."
        },
        {
          title: "6. Exchanges",
          content:
            "If you would like to exchange your item for a different color or product of equal value, contact us within 7 days of delivery. Exchanges are subject to stock availability."
        },
        {
          title: "7. Defective or Incorrect Items",
          content:
            "If you received a defective or incorrect item, contact us immediately and we will arrange a replacement or full refund at no cost to you."
        }
      ]}
    />
  );
}
