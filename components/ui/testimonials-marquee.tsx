"use client";

import React from "react";
import type { Testimonial } from "@/sanity/lib/queries";

const StarIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="#B8860B"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Card = ({ card }: { card: Testimonial }) => (
  <div className="mx-4 w-72 shrink-0 rounded-lg border border-stone-100 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
    <div className="flex items-center gap-3">
      <img
        className="size-10 rounded-full object-cover"
        src={card.image}
        alt={card.name}
      />
      <div className="flex flex-col">
        <p className="text-sm font-medium text-stone-900">{card.name}</p>
        <span className="text-xs text-stone-400">{card.handle}</span>
      </div>
    </div>
    <div className="mt-3 flex gap-0.5">
      {[...Array(card.rating || 5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
    </div>
    <p className="mt-2 text-sm leading-relaxed text-stone-600">
      {card.review}
    </p>
  </div>
);

function MarqueeRow({
  data,
  reverse = false,
  speed = 30
}: {
  data: Testimonial[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = React.useMemo(() => [...data, ...data], [data]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-stone-50 to-transparent" />
      <div
        className="flex min-w-[200%]"
        style={{
          animation: `marqueeScroll ${speed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {doubled.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-stone-50 to-transparent" />
    </div>
  );
}

export default function TestimonialsMarquee({
  testimonials
}: {
  testimonials: Testimonial[];
}) {
  const midpoint = Math.ceil(testimonials.length / 2);
  const rowOne = testimonials.slice(0, midpoint);
  const rowTwo = testimonials.slice(midpoint);

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <section className="bg-stone-50 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs uppercase tracking-widest text-amber-700">
            Client Stories
          </p>
          <h2 className="text-2xl font-semibold text-stone-900">
            Trusted by leather lovers across Kenya
          </h2>
          <p className="mt-2 text-sm text-stone-500">
            Real reviews from real clients
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <MarqueeRow data={rowOne} reverse={false} speed={30} />
          <MarqueeRow data={rowTwo.length ? rowTwo : rowOne} reverse speed={30} />
        </div>
      </section>
    </>
  );
}
