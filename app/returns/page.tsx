import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description: "GWETHBTL Leather returns and exchanges information.",
  alternates: {
    canonical: "/returns"
  }
};

export default function ReturnsPage() {
  return (
    <main className="bg-background">
      <section className="container-shell py-14 text-center sm:py-20">
        <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
          Returns & Exchanges
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-body">
          We want you to love your piece. Contact us within 7 days of delivery
          to arrange a return or exchange.
        </p>
      </section>
    </main>
  );
}
