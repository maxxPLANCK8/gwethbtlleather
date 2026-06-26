import Image from "next/image";
import Link from "next/link";

export function LifestyleStory() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
      <Image
        src="/images/gwethbtl/burgundy-executive-bag.png"
        alt="Leather bag detail with a woven strap"
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/40" />
      <div className="container-shell relative z-10 text-center">
        <p className="mx-auto grid h-11 w-11 place-items-center rounded-full border border-white/35 text-white">
          +
        </p>
        <h2 className="mt-8 font-serif text-4xl font-bold uppercase leading-none text-white sm:text-5xl">
          Timeless Leather, Modern Lifestyle
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/70">
          Founded by Dorcas Odiembo, GWETHBTL Leather is a premium Kenyan
          leather brand creating durable laptop totes, wallets, backpacks,
          messenger bags, and belts for 10,000+ clients.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex min-h-11 items-center border border-white/35 px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-ink"
        >
          Explore our story
        </Link>
      </div>
    </section>
  );
}
