import Image from "next/image";
import Link from "next/link";

export function CampaignBand() {
  return (
    <section className="bg-background py-10 sm:py-14">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[22rem] overflow-hidden lg:min-h-[26rem]">
          <Image
            src="/images/gwethbtl/akinyi-laptop-tote.png"
            alt="Leather work bag styled with a light office wardrobe"
            fill
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-leather">
            Handcrafted in Kenya
          </p>
          <h2 className="font-serif text-4xl font-bold uppercase leading-none text-ink sm:text-5xl">
            Premium leather for daily work
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-body lg:mx-0">
            GWETHBTL brings skilled leather work into laptop totes, wallets,
            backpacks, messenger bags, and belts with clean stitching,
            practical interiors, and finishes made to age with use.
          </p>
          <Link
            href="/collections/laptop-totes"
            className="mx-auto mt-7 inline-flex min-h-11 w-fit items-center bg-[#5a351f] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-leather lg:mx-0"
          >
            Discover more
          </Link>
        </div>
      </div>
    </section>
  );
}
