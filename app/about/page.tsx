import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about GWETHBTL Leather, a premium Kenyan leather brand founded by Dorcas Odiembo.",
  alternates: {
    canonical: "/about"
  }
};

const values = [
  "Premium genuine leather",
  "Handcrafted in Kenya",
  "Functional timeless design"
];

export default function AboutPage() {
  return (
    <main>
      <section className="container-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[28rem] overflow-hidden bg-surface">
          <Image
            src="/images/gwethbtl/akinyi-laptop-tote.png"
            alt="GWETHBTL artisan working on a leather bag"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leather">
            About GWETHBTL
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-none text-ink sm:text-7xl">
            Timeless Leather, Modern Lifestyle
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-body">
            Founded by Dorcas Odiembo, GWETHBTL Leather is a premium Kenyan
            leather brand creating durable, stylish pieces for work, travel,
            gifting, and everyday carry.
          </p>
          <p className="mt-4 max-w-xl text-base leading-8 text-body">
            Skilled artisans shape each laptop tote, wallet, backpack,
            messenger bag, and belt with precision and care for a growing
            community of 10,000+ clients.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex min-h-12 items-center bg-[#5a351f] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3f2616]"
          >
            Shop the collection
          </Link>
        </div>
      </section>

      <section className="bg-background-warm py-14 sm:py-16">
        <div className="container-shell grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article key={value} className="bg-white p-7">
              <h2 className="font-serif text-3xl font-semibold text-ink">
                {value}
              </h2>
              <p className="mt-4 text-sm leading-7 text-body">
                GWETHBTL pieces are made to balance polish, durability, and
                everyday function without losing the natural character of
                leather.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
