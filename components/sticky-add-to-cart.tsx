"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { QuantityStepper } from "@/components/quantity-stepper";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

type StickyAddToCartProps = {
  product: Product;
};

export function StickyAddToCart({ product }: StickyAddToCartProps) {
  const [visible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);
  const defaultColor = product.colors[0]?.name ?? "Default";

  useEffect(() => {
    const target = document.getElementById("main-add-to-cart");

    if (!target) {
      return;
    }

    const updateVisibility = () => {
      const rect = target.getBoundingClientRect();
      setVisible(rect.top < 0 && rect.bottom < 0);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white px-4 py-3 shadow-[0_-18px_40px_rgba(29,23,19,0.12)] transition lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-auto grid max-w-xl grid-cols-[1fr_auto] items-center gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-ink">{product.name}</p>
          <p className="text-sm font-bold text-leather">{formatPrice(product.price)}</p>
        </div>
        <div className="flex items-center gap-2">
          <QuantityStepper
            value={quantity}
            min={1}
            max={10}
            onChange={setQuantity}
            className="h-11 w-28 rounded-none"
            buttonClassName="min-h-8 min-w-8"
          />
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#8B4513] px-4 text-xs font-bold uppercase tracking-[0.12em] text-white"
            onClick={() => addItem(product, defaultColor, quantity)}
          >
            <ShoppingBag size={16} aria-hidden />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
