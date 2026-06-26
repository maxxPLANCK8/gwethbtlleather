"use client";

import { ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";

export function ShopAddToCartButton({
  product,
  color
}: {
  product: Product;
  color: string;
}) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      aria-label={`Add ${product.name} to cart`}
      className="grid min-h-10 min-w-10 place-items-center bg-white text-ink shadow-sm transition hover:text-leather"
      onClick={() => addItem(product, color)}
    >
      <ShoppingBag size={16} aria-hidden />
    </button>
  );
}
