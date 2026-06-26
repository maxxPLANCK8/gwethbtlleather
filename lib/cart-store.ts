"use client";

import { create } from "zustand";
import type { Product } from "@/lib/data";

export type CartItem = {
  id: string;
  product: Product;
  quantity: number;
  color: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, color: string, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  subtotal: () => number;
  count: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (product, color, quantity = 1) => {
    const id = `${product.id}-${color}`;
    const existing = get().items.find((item) => item.id === id);

    if (existing) {
      set({
        isOpen: true,
        items: get().items.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      });
      return;
    }

    set({
      isOpen: true,
      items: [...get().items, { id, product, color, quantity }]
    });
  },
  removeItem: (id) =>
    set({ items: get().items.filter((item) => item.id !== id) }),
  updateQuantity: (id, quantity) =>
    set({
      items: get().items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    }),
  subtotal: () =>
    get().items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    ),
  count: () => get().items.reduce((sum, item) => sum + item.quantity, 0)
}));
