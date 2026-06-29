"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { formatPrice, primaryImage } from "@/lib/data";
import { useCartStore } from "@/lib/cart-store";
import { useFocusTrap } from "@/lib/use-focus-trap";

export function MiniCart() {
  const drawerRef = useRef<HTMLElement>(null);
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();

  useFocusTrap(drawerRef, isOpen, closeCart);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-ink/28 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      <button
        type="button"
        aria-label="Close cart overlay"
        className="absolute inset-0 h-full w-full cursor-default"
        onClick={closeCart}
      />
      <motion.aside
        ref={drawerRef}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="absolute right-0 top-0 flex h-full w-full max-w-[30rem] flex-col bg-white shadow-2xl"
      >
        <div className="flex h-20 items-center justify-between border-b border-border px-5 sm:px-7">
          <h2 id="cart-title" className="font-serif text-3xl font-semibold text-ink">
            Cart
          </h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={closeCart}
            className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border text-ink"
          >
            <X size={18} aria-hidden />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <p className="font-serif text-3xl font-semibold text-ink">
                  Your cart is empty.
                </p>
                <p className="mt-3 text-sm text-body">
                  Add a work bag, tote, or travel piece to begin.
                </p>
              </div>
            </div>
          ) : (
            <ul className="grid gap-5">
              {items.map((item) => (
                <li key={item.id} className="grid grid-cols-[6rem_1fr] gap-4">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                    <Image
                      src={primaryImage(item.product)}
                      alt={item.product.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-ink">{item.product.name}</p>
                        <p className="mt-1 text-sm text-muted">{item.color}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${item.product.name}`}
                        className="grid min-h-10 min-w-10 place-items-center rounded-full text-muted hover:bg-surface hover:text-burgundy"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={17} aria-hidden />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex h-10 items-center rounded-full border border-border">
                        <button
                          type="button"
                          aria-label={`Decrease ${item.product.name} quantity`}
                          className="grid min-h-10 min-w-10 place-items-center"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus size={14} aria-hidden />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-ink">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase ${item.product.name} quantity`}
                          className="grid min-h-10 min-w-10 place-items-center"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus size={14} aria-hidden />
                        </button>
                      </div>
                      <p className="font-semibold text-ink">
                        {formatPrice(item.product.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-border p-5 sm:p-7">
          <div className="flex items-center justify-between text-base font-semibold text-ink">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal())}</span>
          </div>
          <Link
            href="/cart"
            onClick={closeCart}
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-leather"
          >
            Checkout
          </Link>
        </div>
      </motion.aside>
    </div>
  );
}
