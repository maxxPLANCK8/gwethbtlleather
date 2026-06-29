import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Information",
  description: "GWETHBTL Leather shipping information.",
  alternates: {
    canonical: "/shipping"
  }
};

export default function ShippingPage() {
  return (
    <main className="bg-background">
      <section className="container-shell py-14 text-center sm:py-20">
        <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
          Shipping Information
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-body">
          We deliver across Kenya. Orders are processed within 2–3 business
          days.
        </p>
      </section>
    </main>
  );
}
