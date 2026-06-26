"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFocusTrap } from "@/lib/use-focus-trap";

const STORAGE_KEY = "gwethbtl_campaign_dismissed";

export function CampaignModal() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) {
      return;
    }

    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  }, []);

  useFocusTrap(dialogRef, open, dismiss);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/45 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="campaign-title"
    >
      <motion.div
        ref={dialogRef}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative grid max-h-[90svh] w-full max-w-2xl overflow-auto bg-[#fff8f0] shadow-2xl sm:grid-cols-[0.9fr_1.1fr]"
      >
        <button
          type="button"
          aria-label="Close campaign"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 grid min-h-11 min-w-11 place-items-center bg-white text-ink shadow-sm"
        >
          <X size={18} aria-hidden />
        </button>
        <div className="relative min-h-64 sm:min-h-full">
          <Image
            src="/images/gwethbtl/tea-briefcase.png"
            alt="Structured leather work bag in warm light"
            fill
            sizes="(max-width: 640px) 100vw, 38vw"
            className="object-cover"
          />
        </div>
        <div className="p-8 sm:p-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-leather">
            GWETHBTL studio
          </p>
          <h2
            id="campaign-title"
            className="font-serif text-4xl font-bold leading-none text-ink"
          >
            Timeless leather, modern lifestyle.
          </h2>
          <p className="mt-5 text-base leading-7 text-body">
            Join 10,000+ clients choosing handcrafted Kenyan leather for work,
            travel, gifting, and everyday carry.
          </p>
          <Link
            href="/collections/laptop-totes"
            onClick={dismiss}
            className="mt-7 inline-flex min-h-11 items-center bg-[#5a351f] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-leather"
          >
            Shop work bags
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
