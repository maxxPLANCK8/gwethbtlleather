"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeImage = images[activeIndex] ?? images[0];

  const imageIndex = useMemo(
    () => new Map(images.map((image, index) => [image, index])),
    [images]
  );

  const showPrevious = () =>
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));

  const showNext = () =>
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));

  useEffect(() => {
    const handleVariantImage = (event: Event) => {
      const image = (event as CustomEvent<string>).detail;
      const nextIndex = imageIndex.get(image);

      if (typeof nextIndex === "number") {
        setActiveIndex(nextIndex);
      }
    };

    window.addEventListener("gwethbtl:variant-image", handleVariantImage);
    return () =>
      window.removeEventListener("gwethbtl:variant-image", handleVariantImage);
  }, [imageIndex]);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, images.length]);

  return (
    <div className="grid gap-4 lg:grid-cols-[5rem_1fr] lg:items-start">
      <div
        className="order-2 flex gap-3 overflow-x-auto pb-1 lg:order-1 lg:grid lg:max-h-[42rem] lg:overflow-y-auto lg:overflow-x-visible"
        aria-label={`${name} gallery thumbnails`}
      >
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            aria-label={`Show ${name} image ${index + 1}`}
            aria-pressed={activeIndex === index}
            className="relative h-24 w-20 shrink-0 overflow-hidden border bg-white transition data-[active=true]:border-leather data-[active=true]:ring-2 data-[active=true]:ring-leather data-[active=true]:ring-offset-2"
            data-active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="80px"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label={`Open larger view of ${name}`}
        className="relative order-1 aspect-[4/5] w-full overflow-hidden bg-white lg:order-2"
        onClick={() => setLightboxOpen(true)}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={activeImage}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="absolute inset-0"
          >
            <Image
              src={activeImage}
              alt={name}
              fill
              loading={activeIndex === 0 ? "eager" : "lazy"}
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            className="fixed inset-0 z-50 grid bg-white/95 p-4 backdrop-blur-sm sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`${name} image lightbox`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close image lightbox"
              className="absolute right-4 top-4 z-10 grid min-h-11 min-w-11 place-items-center rounded-full border border-border bg-white text-ink shadow-sm"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={20} aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-4 top-1/2 z-10 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-ink shadow-sm"
              onClick={showPrevious}
            >
              <ChevronLeft size={22} aria-hidden />
            </button>
            <div className="relative m-auto h-full max-h-[84vh] w-full max-w-5xl">
              <Image
                src={activeImage}
                alt={name}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-4 top-1/2 z-10 grid min-h-11 min-w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-white text-ink shadow-sm"
              onClick={showNext}
            >
              <ChevronRight size={22} aria-hidden />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
