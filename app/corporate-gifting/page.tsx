import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Gifting",
  description: "Corporate gifting from GWETHBTL Leather.",
  alternates: {
    canonical: "/corporate-gifting"
  }
};

export default function CorporateGiftingPage() {
  return (
    <main className="bg-background">
      <section className="container-shell py-14 text-center sm:py-20">
        <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
          Corporate Gifting
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-body">
          Branded leather gifts and employee essentials handcrafted to your
          brief. Get in touch to discuss your order.
        </p>
      </section>
    </main>
  );
}
