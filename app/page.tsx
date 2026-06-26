import Image from "next/image";
import Link from "next/link";
import { CampaignBand } from "@/components/campaign-band";
import { HeroSection } from "@/components/hero-section";
import { LifestyleStory } from "@/components/lifestyle-story";
import { Newsletter } from "@/components/newsletter";
import { ProductCard } from "@/components/product-card";
import { ProductOfMonth } from "@/components/product-of-month";
import { featuredProducts, productOfMonth } from "@/lib/data";

const corporateLogos = [
  {
    name: "EDOMX",
    image: "https://thongeleather.com/assets/img/client/edom.webp"
  },
  {
    name: "Fair Trade",
    image: "https://thongeleather.com/assets/img/client/fair-trade.webp"
  },
  {
    name: "SAMSUNG",
    image: "https://thongeleather.com/assets/img/client/samsung.webp"
  },
  {
    name: "Microsoft",
    image: "https://thongeleather.com/assets/img/client/microsoft.webp"
  },
  {
    name: "Studio Fit",
    image: "https://thongeleather.com/assets/img/client/studio-fit.webp"
  },
  {
    name: "AAB",
    image: "https://thongeleather.com/assets/img/client/aab.webp"
  }
];

const articles = [
  {
    title: "How to care for genuine leather in Nairobi's dry and rainy seasons",
    image: "/images/gwethbtl/tea-briefcase.png"
  },
  {
    title: "Choosing the right laptop tote for everyday work",
    image: "/images/gwethbtl/green-croc-tote.png"
  },
  {
    title: "Behind the finish: what skilled artisans look for in leather",
    image: "/images/gwethbtl/burgundy-executive-bag.png"
  }
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="container-shell py-12 sm:py-14">
        <div className="section-title mb-8">
          <h2 className="text-center text-xl font-semibold text-ink">
            Leather bags, wallets, and everyday essentials
          </h2>
        </div>
        <p className="mx-auto mb-9 max-w-3xl text-center text-xs leading-6 text-muted">
          Laptop totes, wallets, backpacks, messenger bags, and belts made for
          a modern lifestyle. Every piece is cut from genuine leather and
          finished by skilled Kenyan artisans.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-flex min-h-11 items-center bg-[#5a351f] px-8 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-leather"
          >
            View the collection
          </Link>
        </div>
      </section>
      <ProductOfMonth product={productOfMonth} />
      <LifestyleStory />
      <CampaignBand />
      <section id="corporate" className="container-shell py-12 sm:py-16">
        <div className="section-title mb-5">
          <h2 className="text-center text-xl font-semibold text-ink">
            Corporate leather, made in Kenya
          </h2>
        </div>
        <p className="mx-auto max-w-3xl text-center text-xs leading-6 text-muted">
          Branded leather gifts, employee essentials, and client keepsakes
          produced with the same GWETHBTL standard trusted by 10,000+ clients.
        </p>
        <div className="mx-auto mt-9 grid max-w-3xl grid-cols-2 gap-5 text-center sm:grid-cols-3">
          {corporateLogos.map((logo) => (
            <div
              key={logo.name}
              className="grid min-h-16 place-items-center px-4"
            >
              <Image
                src={logo.image}
                alt={`${logo.name} logo`}
                width={140}
                height={64}
                className="max-h-14 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </section>
      <section id="articles" className="container-shell pb-14 sm:pb-20">
        <div className="section-title mb-5">
          <h2 className="text-center text-xl font-semibold text-ink">
            Notes from the workshop
          </h2>
        </div>
        <p className="mx-auto mb-9 max-w-2xl text-center text-xs leading-6 text-muted">
          Care notes, gift guides, and behind-the-scenes stories from the
          GWETHBTL Leather studio.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title}>
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold leading-5 text-ink">
                {article.title}
              </h3>
              <p className="mt-2 text-xs text-muted">
                By GWETHBTL Leather | April 2026
              </p>
              <Link
                href="/collections/wallets"
                className="mt-4 inline-flex min-h-10 items-center bg-[#5a351f] px-5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-leather"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
