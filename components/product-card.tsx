"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/data";
import { colorHex, formatPrice, hoverImage, primaryImage } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const defaultColor = product.colors[0]?.name ?? "Default";

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <Image
            src={primaryImage(product)}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="image-lift object-cover"
          />
          <Image
            src={hoverImage(product)}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover opacity-0 transition duration-500 group-hover:opacity-100"
          />
        </Link>
        {product.badge ? (
          <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ink shadow-sm">
            {product.badge}
          </span>
        ) : null}
        <div className="absolute bottom-3 right-3 flex translate-y-3 flex-col gap-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            aria-label={`Add ${product.name} to wishlist`}
            className="grid min-h-11 min-w-11 place-items-center bg-white text-ink shadow-sm transition hover:text-burgundy"
          >
            <Heart size={18} aria-hidden />
          </button>
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="grid min-h-11 min-w-11 place-items-center bg-white text-ink shadow-sm transition hover:text-leather"
            onClick={() => addItem(product, defaultColor)}
          >
            <ShoppingBag size={18} aria-hidden />
          </button>
          <Link
            href={`/products/${product.slug}`}
            aria-label={`Quick view ${product.name}`}
            className="grid min-h-11 min-w-11 place-items-center bg-white text-ink shadow-sm transition hover:text-leather"
          >
            <Eye size={18} aria-hidden />
          </Link>
        </div>
      </div>
      <div className="mt-3 text-center">
        <h3 className="text-sm font-semibold text-ink">
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
        </h3>
        <p className="mt-1 text-xs font-bold text-ink">
          {formatPrice(product.price)}
        </p>
        <div className="mt-2 flex justify-center gap-2" aria-label={`${product.name} colors`}>
          {product.colors.map((color) => (
            <span
              key={color.name}
              title={color.name}
              className="h-3 w-3 border border-black/10"
              style={{ backgroundColor: colorHex(color) }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
