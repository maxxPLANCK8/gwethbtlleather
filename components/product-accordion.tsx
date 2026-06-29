"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/data";
import { formatPrice } from "@/lib/data";

type ProductAccordionProps = {
  product: Product;
};

export function ProductAccordion({ product }: ProductAccordionProps) {
  const [openSection, setOpenSection] = useState("description");
  const reduceMotion = useReducedMotion();
  const sections = [
    {
      id: "description",
      title: "Description",
      content: <p>{product.fullDescription}</p>
    },
    {
      id: "details",
      title: "Details",
      content: (
        <dl className="grid gap-3 sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-ink">Dimensions</dt>
            <dd>{product.details.dimensions}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Material</dt>
            <dd>{product.details.material}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Hardware</dt>
            <dd>{product.details.hardware}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Interior</dt>
            <dd>{product.details.interior}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Strap</dt>
            <dd>{product.details.strap}</dd>
          </div>
        </dl>
      )
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content: (
        <div className="grid gap-3">
          <p>{product.shipping.time}.</p>
          <p>Free shipping applies on orders over {formatPrice(product.shipping.freeThreshold)}.</p>
          <p>Returns are accepted within 30 days when the piece is unused and in original condition.</p>
          <a href="/about" className="font-semibold text-leather underline-offset-4 hover:underline">
            Leather care instructions
          </a>
        </div>
      )
    }
  ];

  return (
    <div className="relative z-10 isolate clear-both block overflow-hidden divide-y divide-border border-y border-border">
      {sections.map((section) => {
        const isOpen = openSection === section.id;

        return (
          <section key={section.id} className="relative block">
            <button
              type="button"
              aria-expanded={isOpen}
              className="relative z-20 flex min-h-16 w-full items-center justify-between gap-4 bg-background text-left"
              onClick={() => setOpenSection(isOpen ? "" : section.id)}
            >
              <span className="font-serif text-2xl font-semibold text-ink">
                {section.title}
              </span>
              {isOpen ? <Minus size={18} aria-hidden /> : <Plus size={18} aria-hidden />}
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="relative z-10 block clear-both overflow-hidden"
                >
                  <div className="relative z-10 block pb-6 text-sm leading-7 text-body">
                    {section.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </section>
        );
      })}
    </div>
  );
}
