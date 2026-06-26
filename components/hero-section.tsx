"use client";

import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const slides = [
  {
    label: "GWETHBTL",
    headline: "Handcrafted in Kenya. Designed for the world.",
    subheadline:
      "Premium leather bags and accessories made by skilled artisans for modern work, travel, and everyday carry.",
    cta: "Shop signature pieces",
    href: "/collections/laptop-totes",
    image: "/images/gwethbtl/hero-burgundy-bag-wide.png",
    alt: "Burgundy leather executive bag on a wooden desk"
  },
  {
    label: "WORK EDIT",
    headline: "The executive standard.",
    subheadline:
      "Laptop totes, messenger bags, wallets, backpacks, and belts with practical interiors and a polished finish.",
    cta: "Explore work bags",
    href: "/collections/messenger-bags",
    image: "/images/gwethbtl/hero-green-tote-wide.png",
    alt: "Green leather tote on a polished desk"
  },
  {
    label: "10,000+ CLIENTS",
    headline: "10,000 clients. One standard.",
    subheadline:
      "A Kenyan leather house led by Dorcas Odiembo, trusted by clients at home and across the world.",
    cta: "Our story",
    href: "/about",
    image: "/images/gwethbtl/hero-tea-briefcase-wide.png",
    alt: "Leather work bag beside a cup of tea"
  }
];

export function HeroSection() {
  const [reducedMotion, setReducedMotion] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);

    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);

    return () => media.removeEventListener("change", updateMotionPreference);
  }, []);

  const autoplay = useMemo(
    () =>
      reducedMotion
        ? undefined
        : Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true
          }),
    [reducedMotion]
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 20,
      watchDrag: true
    },
    autoplay ? [autoplay] : []
  );

  const updateSelected = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    updateSelected();
    emblaApi.on("select", updateSelected);
    emblaApi.on("reInit", updateSelected);

    return () => {
      emblaApi.off("select", updateSelected);
      emblaApi.off("reInit", updateSelected);
    };
  }, [emblaApi, updateSelected]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section
      className="group relative isolate -mt-16 h-screen min-h-screen overflow-hidden bg-black pt-16 lg:-mt-14 lg:pt-14"
      aria-label="Featured leather collections"
    >
      <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
        <div className="flex h-full opacity-0" aria-hidden="true">
          {slides.map((slide) => (
            <div key={slide.headline} className="h-full min-w-0 flex-[0_0_100%]" />
          ))}
        </div>
      </div>

      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.headline}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              selectedIndex === index ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            aria-hidden={selectedIndex !== index}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.42)_50%,rgba(0,0,0,0.14)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_52%,transparent_0%,rgba(0,0,0,0.24)_52%,rgba(0,0,0,0.74)_100%)]" />
          </div>
        ))}
      </div>

      <div className="container-shell pointer-events-none absolute inset-x-0 top-0 z-20 flex h-full min-h-screen items-center">
        <div className="pointer-events-auto max-w-[37.5rem] pt-16 sm:pt-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-[#c99b48]">
            {slides[selectedIndex].label}
          </p>
          <h1 className="text-balance font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[0.94] text-white">
            {slides[selectedIndex].headline}
          </h1>
          <p className="mt-6 max-w-[35rem] text-base leading-8 text-white/90 sm:text-lg">
            {slides[selectedIndex].subheadline}
          </p>
          <Link
            href={slides[selectedIndex].href}
            className="mt-8 inline-flex min-h-12 items-center justify-center bg-[#5a351f] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3f2616] active:translate-y-px"
          >
            {slides[selectedIndex].cta}
          </Link>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous hero slide"
        onClick={scrollPrev}
        className="absolute left-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-ink opacity-0 shadow-sm transition hover:bg-white group-hover:opacity-100 md:grid"
      >
        <ChevronLeft size={22} aria-hidden />
      </button>
      <button
        type="button"
        aria-label="Next hero slide"
        onClick={scrollNext}
        className="absolute right-5 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/92 text-ink opacity-0 shadow-sm transition hover:bg-white group-hover:opacity-100 md:grid"
      >
        <ChevronRight size={22} aria-hidden />
      </button>

      <div className="absolute inset-x-0 bottom-7 z-30 flex justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`Go to hero slide ${index + 1}`}
            aria-current={selectedIndex === index ? "true" : undefined}
            onClick={() => scrollTo(index)}
            className={`h-2.5 w-2.5 rounded-full border border-white transition ${
              selectedIndex === index ? "bg-white" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
