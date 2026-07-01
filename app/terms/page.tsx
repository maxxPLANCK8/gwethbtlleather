import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | GWETHBTL Leather"
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="June 2026"
      sections={[
        {
          title: "1. Agreement",
          content:
            "By accessing gwethbtlleather.co.ke and placing an order, you agree to these Terms & Conditions. Please read them carefully before purchasing."
        },
        {
          title: "2. Products",
          content:
            "All products are handcrafted in Kenya using genuine leather. Product images are as accurate as possible but slight variations in color and texture may occur due to the natural nature of leather and screen differences."
        },
        {
          title: "3. Pricing",
          content:
            "All prices are listed in Kenyan Shillings (Ksh) and are inclusive of applicable taxes. We reserve the right to change prices at any time. The price at the time of your order confirmation is the price you pay."
        },
        {
          title: "4. Orders",
          content:
            "An order is confirmed once you receive an order confirmation email or WhatsApp message from us. We reserve the right to cancel or refuse any order at our discretion, in which case a full refund will be issued."
        },
        {
          title: "5. Payment",
          content:
            "We accept M-Pesa and card payments. Payment must be made in full before an order is processed and dispatched."
        },
        {
          title: "6. Delivery",
          content:
            "We deliver across Kenya. Delivery timelines are estimates and may vary. GWETHBTL Leather is not liable for delays caused by third party courier services."
        },
        {
          title: "7. Returns & Exchanges",
          content:
            "Please refer to our Returns Policy for full details on returning or exchanging a product."
        },
        {
          title: "8. Intellectual Property",
          content:
            "All content on this website including images, copy, branding, and design is the property of GWETHBTL Leather and may not be reproduced without written permission."
        },
        {
          title: "9. Limitation of Liability",
          content:
            "GWETHBTL Leather shall not be liable for any indirect or consequential loss arising from the use of our products or website beyond the value of the original purchase."
        },
        {
          title: "10. Governing Law",
          content:
            "These terms are governed by the laws of Kenya. Any disputes shall be subject to the jurisdiction of Kenyan courts."
        },
        {
          title: "11. Contact",
          content: (
            <>
              GWETHBTL Leather, Nairobi, Kenya
              <br />
              Email: hello@gwethbtlleather.co.ke
              <br />
              WhatsApp: +254 733 406 088
            </>
          )
        }
      ]}
    />
  );
}
