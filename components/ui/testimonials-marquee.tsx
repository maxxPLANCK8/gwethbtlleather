"use client";

import React from "react";

type TestimonialT = {
  image: string;
  name: string;
  handle: string;
  review: string;
};

const TESTIMONIALS_ROW1: TestimonialT[] = [
  {
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=60",
    name: "Amina Wanjiku",
    handle: "@aminaw",
    review:
      "The Executive Laptop Tote is everything. Full-grain leather, fits my 15\" MacBook perfectly. Worth every shilling."
  },
  {
    image:
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=200&auto=format&fit=crop&q=60",
    name: "Brian Otieno",
    handle: "@brianotieno",
    review:
      "Bought the Kwarme Messenger Bag for work trips. Three months in and it looks better than the day I got it."
  },
  {
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60",
    name: "David Kamau",
    handle: "@davidkamau",
    review:
      "Gifted my whole team GWETHBTL wallets for the holidays. The corporate gifting service was seamless."
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60",
    name: "Grace Muthoni",
    handle: "@gracemuthoni",
    review:
      "I was skeptical ordering online but the quality blew me away. The cognac tote is my everyday bag now."
  }
];

const TESTIMONIALS_ROW2: TestimonialT[] = [
  {
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&auto=format&fit=crop&q=60",
    name: "Kevin Mwangi",
    handle: "@kevinmwangi",
    review:
      "Nairobi heat is no joke but this leather has held up perfectly. Genuinely handcrafted -- you can tell."
  },
  {
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    name: "Fatuma Abdullahi",
    handle: "@fatumabd",
    review:
      "Ordered the backpack for my daughter starting campus. She gets compliments on it every single week."
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    name: "James Kariuki",
    handle: "@jameskariuki",
    review:
      "The stitching, the smell, the weight -- this is proper leather. Not the fake stuff flooding the market."
  },
  {
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop&q=60",
    name: "Lydia Chebet",
    handle: "@lydiachebet",
    review:
      "Dorcas personally followed up after my order. That kind of care is rare. The bag is stunning too."
  }
];

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

const Card = ({ card }: { card: TestimonialT }) => (
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
      {[...Array(5)].map((_, i) => (
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
  data: TestimonialT[];
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

export default function TestimonialsMarquee() {
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
          <MarqueeRow data={TESTIMONIALS_ROW1} reverse={false} speed={30} />
          <MarqueeRow data={TESTIMONIALS_ROW2} reverse speed={30} />
        </div>
      </section>
    </>
  );
}
