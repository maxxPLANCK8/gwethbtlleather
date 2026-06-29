"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/lib/cart-store";
import { categories, primaryImage, products } from "@/lib/data";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openCart = useCartStore((state) => state.openCart);
  const count = useCartStore((state) => state.count());

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-background/90 backdrop-blur-xl">
      <div className="container-shell grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-14 lg:grid-cols-[1fr_auto_1fr]">
        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center border border-border text-ink lg:hidden"
          aria-label="Open navigation"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={20} aria-hidden />
        </button>
        <Link href="/" className="shrink-0 text-left">
          <span className="block font-serif text-xl font-bold uppercase tracking-[0.18em] text-ink">
            GWETHBTL
          </span>
          <span className="block text-[0.54rem] font-semibold uppercase tracking-[0.42em] text-leather">
            Leather
          </span>
        </Link>
        <nav className="hidden items-center justify-center gap-7 lg:flex" aria-label="Primary">
          <Link href="/" className="text-xs font-semibold text-ink transition hover:text-leather">
            Home
          </Link>
          <Link href="/about" className="text-xs font-semibold text-ink transition hover:text-leather">
            About
          </Link>
          <div className="group/shop">
            <Link
              href="/shop"
              className="inline-flex min-h-14 items-center gap-1 text-xs font-semibold text-ink transition hover:text-leather"
            >
              Shop
              <ChevronDown
                size={13}
                className="transition group-hover/shop:rotate-180"
                aria-hidden
              />
            </Link>
            <div className="invisible absolute inset-x-0 top-full z-30 opacity-0 shadow-[0_24px_60px_rgba(29,23,19,0.14)] transition duration-200 group-hover/shop:visible group-hover/shop:opacity-100 group-focus-within/shop:visible group-focus-within/shop:opacity-100">
              <div className="container-shell grid min-h-64 grid-cols-[1fr_1fr_1.2fr] bg-white">
                <div className="px-8 py-8">
                  <h2 className="text-sm font-semibold text-ink">
                    Product Categories
                  </h2>
                  <ul className="mt-6 grid gap-4 text-sm text-body">
                    <li>
                      <Link href="/shop" className="transition hover:text-leather">
                        All Categories
                      </Link>
                    </li>
                    {categories.slice(0, 4).map((category) => (
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
                </div>
                <div className="px-8 py-8">
                  <h2 className="text-sm font-semibold text-ink">
                    Other Shop Pages
                  </h2>
                  <ul className="mt-6 grid gap-4 text-sm text-body">
                    <li>
                      <Link href="/wishlist" className="transition hover:text-leather">
                        Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link href="/cart" className="transition hover:text-leather">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="/account" className="transition hover:text-leather">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link href="/account" className="transition hover:text-leather">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
                <Link
                  href={`/products/${products[0].slug}`}
                  className="relative min-h-64 overflow-hidden bg-surface"
                >
                  <Image
                    src={primaryImage(products[0])}
                    alt={products[0].name}
                    fill
                    sizes="33vw"
                    className="object-contain p-8 transition duration-500 group-hover/shop:scale-105"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Link href="/#articles" className="text-xs font-semibold text-ink transition hover:text-leather">
            Blog
          </Link>
          <Link
            href="/#corporate"
            className="text-xs font-semibold text-ink transition hover:text-leather"
          >
            Corporate Sales
          </Link>
        </nav>
        <div className="flex items-center justify-end gap-1">
          <button
            type="button"
            aria-label="Search products"
            className="hidden min-h-11 min-w-11 place-items-center text-ink transition hover:bg-surface sm:grid"
          >
            <Search size={19} aria-hidden />
          </button>
          <Link
            href="/account"
            aria-label="Account"
            className="hidden min-h-11 min-w-11 place-items-center text-ink transition hover:bg-surface sm:grid"
          >
            <User size={19} aria-hidden />
          </Link>
          <button
            type="button"
            aria-label={`Open cart with ${count} items`}
            className="relative grid min-h-11 min-w-11 place-items-center text-ink transition hover:bg-surface"
            onClick={openCart}
          >
            <ShoppingBag size={20} aria-hidden />
            {count > 0 ? (
              <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center bg-burgundy px-1 text-[0.68rem] font-semibold text-white">
                {count}
              </span>
            ) : null}
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div className="fixed inset-0 z-50 bg-white lg:hidden" role="dialog" aria-modal="true">
          <div className="container-shell flex h-20 items-center justify-between">
            <span className="font-serif text-2xl font-semibold text-ink">
              GWETHBTL
            </span>
            <button
              type="button"
              className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border text-ink"
              aria-label="Close navigation"
              onClick={() => setMenuOpen(false)}
            >
              <X size={20} aria-hidden />
            </button>
          </div>
          <nav className="container-shell grid gap-2 py-8" aria-label="Mobile">
            <Link
              href="/"
              className="border-b border-border py-5 font-serif text-4xl font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="border-b border-border py-5 font-serif text-4xl font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/shop"
              className="border-b border-border py-5 font-serif text-4xl font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/#articles"
              className="border-b border-border py-5 font-serif text-4xl font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#corporate"
              className="border-b border-border py-5 font-serif text-4xl font-semibold text-ink"
              onClick={() => setMenuOpen(false)}
            >
              Corporate Sales
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
