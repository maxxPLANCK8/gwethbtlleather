"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { QuantityStepper } from "@/components/quantity-stepper";
import type { Product, ProductBadge } from "@/lib/data";
import { colorHex, formatPrice } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

type ProductInfoProps = {
  product: Product;
  collectionHref: string;
};

const badgeClassName: Record<ProductBadge, string> = {
  NEW: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  "LOW IN STOCK": "bg-amber-50 text-amber-700 ring-amber-200",
  LIMITED: "bg-red-50 text-red-700 ring-red-200"
};

export function ProductInfo({ product, collectionHref }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name ?? "Default");
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] ?? "");
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState("");
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeout = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const handleColorSelect = (colorName: string, image?: string) => {
    setSelectedColor(colorName);

    if (image) {
      window.dispatchEvent(
        new CustomEvent("gwethbtl:variant-image", {
          detail: image
        })
      );
    }
  };

  const handleAddToCart = () => {
    setAdding(true);
    addItem(product, selectedColor, quantity);
    setToast(`Added to cart - ${product.name}`);
    window.setTimeout(() => setAdding(false), 350);
  };

  return (
    <section className="relative z-20 block" aria-labelledby="product-title">
      <Breadcrumbs
        collection={product.category}
        href={collectionHref}
        productName={product.name}
      />

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <h1
          id="product-title"
          className="max-w-xl font-serif font-semibold leading-none text-ink"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          {product.name}
        </h1>
        {product.badge ? (
          <span
            className={`rounded-full px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] ring-1 ${badgeClassName[product.badge]}`}
          >
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="mt-5 flex flex-wrap items-baseline gap-3">
        {product.compareAtPrice ? (
          <span className="text-base font-semibold text-muted line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        ) : null}
        <p className="text-2xl font-bold text-leather">
          {formatPrice(product.price)}
        </p>
      </div>

      <p className="mt-6 max-w-xl text-base leading-8 text-body">
        {product.description}
      </p>

      <fieldset className="mt-8">
        <legend className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
          Color: <span className="text-ink">{selectedColor}</span>
        </legend>
        <div className="mt-4 flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              type="button"
              aria-label={`Select ${color.name}`}
              aria-pressed={selectedColor === color.name}
              className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border bg-white"
              onClick={() => handleColorSelect(color.name, color.image)}
            >
              <span
                className={`h-7 w-7 rounded-full border border-black/10 ${
                  selectedColor === color.name
                    ? "ring-2 ring-leather ring-offset-2"
                    : ""
                }`}
                style={{ backgroundColor: colorHex(color) }}
              />
            </button>
          ))}
        </div>
      </fieldset>

      {product.sizes?.length ? (
        <fieldset className="mt-7">
          <legend className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
            Size
          </legend>
          <div className="mt-4 flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                type="button"
                aria-pressed={selectedSize === size}
                className="min-h-11 border border-border bg-white px-5 text-sm font-semibold text-ink transition hover:border-leather data-[active=true]:border-leather data-[active=true]:bg-leather data-[active=true]:text-white"
                data-active={selectedSize === size}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <QuantityStepper value={quantity} min={1} max={10} onChange={setQuantity} />
        <button
          id="main-add-to-cart"
          type="button"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 bg-[#8B4513] px-7 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#6B3410] disabled:cursor-wait disabled:opacity-75"
          disabled={!product.inStock || adding}
          onClick={handleAddToCart}
        >
          <ShoppingBag size={17} aria-hidden />
          {adding ? "Adding" : product.inStock ? "Add to cart" : "Sold out"}
        </button>
      </div>

      <button
        type="button"
        aria-pressed={wishlist}
        className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink transition hover:text-leather"
        onClick={() => setWishlist((value) => !value)}
      >
        <Heart
          size={18}
          aria-hidden
          className={wishlist ? "fill-burgundy text-burgundy" : ""}
        />
        {wishlist ? "Remove from wishlist" : "Add to wishlist"}
      </button>

      <div className="mt-6 grid gap-2 border-t border-border pt-5 text-sm leading-6 text-body">
        <p>Free shipping on orders over {formatPrice(product.shipping.freeThreshold)}</p>
        <p>{product.shipping.time}</p>
      </div>

      {toast ? (
        <div
          className="fixed right-4 top-20 z-50 max-w-[calc(100vw-2rem)] bg-ink px-4 py-3 text-sm font-semibold text-white shadow-xl"
          role="status"
        >
          {toast}
        </div>
      ) : null}
    </section>
  );
}
