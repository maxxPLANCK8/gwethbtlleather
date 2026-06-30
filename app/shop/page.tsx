import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Grid2X2, Heart, List, Search } from "lucide-react";
import { ShopAddToCartButton } from "@/components/shop-add-to-cart-button";
import { categories, colorHex, formatPrice, primaryImage } from "@/lib/data";
import { getAllProducts } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop GWETHBTL Leather laptop totes, wallets, backpacks, messenger bags, and belts handcrafted in Kenya.",
  alternates: {
    canonical: "/shop"
  }
};

export default async function ShopPage() {
  const products = await getAllProducts();
  const shopProducts = products.map((product) => ({
    ...product,
    listId: product.id,
    displayName: product.name
  }));
  const colors = Array.from(
    new Map(
      products.flatMap((product) =>
        product.colors.map((color) => [color.name, color])
      )
    ).values()
  );
  const productTypes = Array.from(new Set(products.map((product) => product.type)));
  const featured = products.slice(0, 3);

  return (
    <main className="bg-background">
      <section className="relative isolate min-h-[22rem] overflow-hidden">
        <Image
          src="/images/gwethbtl/hero-green-tote-wide.png"
          alt="GWETHBTL leather laptop bag detail"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/48" />
        <div className="container-shell relative z-10 flex min-h-[22rem] flex-col items-center justify-center pt-12 text-center">
          <h1 className="font-serif text-5xl font-semibold leading-none text-white sm:text-6xl">
            Shop
          </h1>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/78">
            GWETHBTL / Shop
          </p>
        </div>
      </section>

      <section className="container-shell py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <div>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted">
                Showing 1-12 of {shopProducts.length} results
              </p>
              <div className="flex items-center gap-3 text-ink">
                <button
                  type="button"
                  aria-label="Grid view"
                  className="grid min-h-10 min-w-10 place-items-center border border-border bg-white transition hover:text-leather"
                >
                  <Grid2X2 size={16} aria-hidden />
                </button>
                <button
                  type="button"
                  aria-label="List view"
                  className="grid min-h-10 min-w-10 place-items-center border border-border bg-white transition hover:text-leather"
                >
                  <List size={17} aria-hidden />
                </button>
              </div>
            </div>

            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {shopProducts.map((product) => (
                <article key={product.listId} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={primaryImage(product)}
                        alt={product.displayName}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </Link>
                    {product.badge ? (
                      <span className="absolute right-3 top-3 bg-[#5a351f] px-2 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                        {product.badge}
                      </span>
                    ) : null}
                    <div className="absolute bottom-3 right-3 grid translate-x-2 gap-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      <button
                        type="button"
                        aria-label={`Add ${product.displayName} to wishlist`}
                        className="grid min-h-10 min-w-10 place-items-center bg-white text-ink shadow-sm transition hover:text-leather"
                      >
                        <Heart size={16} aria-hidden />
                      </button>
                      <ShopAddToCartButton
                        product={product}
                        color={product.colors[0]?.name ?? "Default"}
                      />
                      <Link
                        href={`/products/${product.slug}`}
                        aria-label={`Search ${product.displayName}`}
                        className="grid min-h-10 min-w-10 place-items-center bg-white text-ink shadow-sm transition hover:text-leather"
                      >
                        <Search size={16} aria-hidden />
                      </Link>
                    </div>
                  </div>
                  <h2 className="mt-4 text-sm font-semibold leading-5 text-ink">
                    <Link href={`/products/${product.slug}`}>
                      {product.displayName}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm font-bold text-ink">
                    {formatPrice(product.price)}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-2 inline-flex border-b border-ink text-xs font-semibold text-ink transition hover:border-leather hover:text-leather"
                  >
                    View Product
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <aside className="grid content-start gap-10 lg:sticky lg:top-24 lg:self-start">
            <section>
              <h2 className="text-xl font-semibold text-ink">
                Product Categories
              </h2>
              <details className="mt-5" open>
                <summary className="cursor-pointer list-none text-sm font-semibold text-leather">
                  Categories
                </summary>
                <ul className="mt-4 grid gap-3 text-sm text-body">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        href={`/collections/${category.slug}`}
                        className="transition hover:text-leather"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Product Types
              </h2>
              <details className="mt-5" open>
                <summary className="cursor-pointer list-none text-sm font-semibold text-leather">
                  Types
                </summary>
                <ul className="mt-4 grid gap-3 text-sm text-body">
                  {productTypes.map((type) => (
                    <li key={type}>
                      <Link href="/shop" className="transition hover:text-leather">
                        {type}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Filter By Price
              </h2>
              <div className="mt-5 h-1 bg-border">
                <div className="h-full w-2/3 bg-[#5a351f]" />
              </div>
              <div className="mt-5 flex items-center gap-4">
                <button
                  type="button"
                  className="min-h-10 bg-ink px-5 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-leather"
                >
                  Filter
                </button>
                <p className="text-xs font-semibold text-muted">
                  Price : KES 0 - KES 35,000
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Choose Color
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    aria-label={`Choose ${color.name}`}
                    className="h-4 w-4 rounded-full border border-black/15"
                    style={{ backgroundColor: colorHex(color) }}
                  />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-ink">
                Featured Products
              </h2>
              <div className="mt-5 grid gap-4">
                {featured.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    className="grid grid-cols-[4.5rem_1fr] gap-3"
                  >
                    <span className="relative aspect-square overflow-hidden bg-surface">
                      <Image
                        src={primaryImage(product)}
                        alt={product.name}
                        fill
                        sizes="72px"
                        className="object-cover"
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold leading-5 text-ink">
                        {product.name}
                      </span>
                      <span className="mt-1 block text-sm font-bold text-ink">
                        {formatPrice(product.price)}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
