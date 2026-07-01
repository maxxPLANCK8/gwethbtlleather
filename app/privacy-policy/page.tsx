import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | GWETHBTL Leather"
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="June 2026"
      sections={[
        {
          title: "1. Who We Are",
          content:
            "GWETHBTL Leather is a Kenyan leather goods brand based in Nairobi, Kenya, founded by Dorcas Odiembo. We sell premium leather laptop totes, wallets, backpacks, messenger bags, and belts through our website at gwethbtlleather.co.ke."
        },
        {
          title: "2. Information We Collect",
          content:
            "We collect the following information when you place an order, create an account, or contact us:",
          items: [
            "Full name and email address",
            "Delivery address and phone number",
            "Payment information (processed securely - we do not store card details)",
            "Order history and preferences",
            "Communications you send us via WhatsApp, email, or our contact form"
          ]
        },
        {
          title: "3. How We Use Your Information",
          content: "We use your information to:",
          items: [
            "Process and fulfill your orders",
            "Send order confirmations and delivery updates",
            "Respond to your enquiries",
            "Send newsletters and product updates (only if you have subscribed)",
            "Improve our website and services"
          ]
        },
        {
          title: "4. Data Protection - Kenya Data Protection Act 2019",
          content:
            "We comply with the Kenya Data Protection Act 2019. Your personal data is processed lawfully, stored securely, and not shared with third parties except where necessary to fulfill your order (e.g. delivery partners)."
        },
        {
          title: "5. Cookies",
          content:
            "Our website uses essential cookies to ensure the site functions correctly. We may also use analytics cookies to understand how visitors use our site. You can disable cookies in your browser settings."
        },
        {
          title: "6. Third Party Services",
          content:
            "We use the following third party services which may process your data:",
          items: [
            "Vercel (website hosting)",
            "Sanity (content management)",
            "Payment processors for order fulfillment",
            "WhatsApp for customer communication"
          ]
        },
        {
          title: "7. Your Rights",
          content:
            "Under the Kenya Data Protection Act 2019, you have the right to:",
          items: [
            "Access the personal data we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your data",
            "Withdraw consent for marketing communications at any time",
            "To exercise any of these rights, contact us at: hello@gwethbtlleather.co.ke"
          ]
        },
        {
          title: "8. Contact",
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
