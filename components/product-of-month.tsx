"use client";

import Image from "next/image";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export function ProductOfMonth({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section className="bg-background py-14 sm:py-16 lg:py-20">
      <div className="container-shell">
        <div className="section-title mb-8">
          <h2 className="text-center text-xl font-semibold uppercase tracking-[0.08em] text-ink">
            Product of the month
          </h2>
        </div>
      </div>
      <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-white sm:aspect-[16/11] lg:aspect-[5/4]">
          <Image
            src={product.images.primary}
            alt={product.name}
            fill
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-xl lg:pl-5">
          <h3 className="text-xl font-semibold leading-tight text-ink">
            {product.name}
          </h3>
          <p className="mt-2 text-2xl font-bold text-ink">
            {formatPrice(product.price)}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-body">
            {product.description}
          </p>
          <fieldset className="mt-8">
            <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Color: <span className="text-body">{selectedColor}</span>
            </legend>
            <div className="mt-4 flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  aria-label={`Select ${color.name}`}
                  aria-pressed={selectedColor === color.name}
                  className="grid min-h-11 min-w-11 place-items-center border border-border bg-white"
                  onClick={() => setSelectedColor(color.name)}
                >
                  <span
                    className={`h-7 w-7 border ${
                      selectedColor === color.name
                        ? "ring-2 ring-ink ring-offset-2"
                        : "border-black/10"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                </button>
              ))}
            </div>
          </fieldset>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex h-12 w-36 items-center justify-between border border-border bg-white px-2">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="grid min-h-9 min-w-9 place-items-center text-ink hover:bg-surface"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              >
                <Minus size={16} aria-hidden />
              </button>
              <span className="font-semibold text-ink">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="grid min-h-9 min-w-9 place-items-center text-ink hover:bg-surface"
                onClick={() => setQuantity((value) => value + 1)}
              >
                <Plus size={16} aria-hidden />
              </button>
            </div>
            <button
              type="button"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#5a351f] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-leather"
              onClick={() => addItem(product, selectedColor, quantity)}
            >
              <ShoppingBag size={17} aria-hidden />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
