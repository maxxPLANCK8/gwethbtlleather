"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      {product.badge ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-leather">
          {product.badge}
        </p>
      ) : null}
      <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
        {product.name}
      </h1>
      <p className="mt-5 text-xl font-semibold text-ink">
        {formatPrice(product.price)}
      </p>
      <p className="mt-6 text-base leading-8 text-body">{product.description}</p>
      <fieldset className="mt-8">
        <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
          Color: <span className="text-body">{selectedColor}</span>
        </legend>
        <div className="mt-4 flex gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              aria-label={`Select ${color.name}`}
              aria-pressed={selectedColor === color.name}
              className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border bg-white"
              onClick={() => setSelectedColor(color.name)}
            >
              <span
                className={`h-7 w-7 rounded-full border ${
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
        <div className="flex h-12 w-36 items-center justify-between rounded-full border border-border bg-white px-2">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="grid min-h-9 min-w-9 place-items-center rounded-full text-ink hover:bg-surface"
            onClick={() => setQuantity((value) => Math.max(1, value - 1))}
          >
            <Minus size={16} aria-hidden />
          </button>
          <span className="font-semibold text-ink">{quantity}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            className="grid min-h-9 min-w-9 place-items-center rounded-full text-ink hover:bg-surface"
            onClick={() => setQuantity((value) => value + 1)}
          >
            <Plus size={16} aria-hidden />
          </button>
        </div>
        <button
          type="button"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-leather"
          onClick={() => addItem(product, selectedColor, quantity)}
        >
          <ShoppingBag size={17} aria-hidden />
          Add to cart
        </button>
      </div>
    </div>
  );
}
