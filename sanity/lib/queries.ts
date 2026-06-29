import type { Product, ProductBadge } from "@/lib/data";
import type { PortableTextBlock } from "@portabletext/react";
import { featuredProducts as fallbackFeaturedProducts, productOfMonth as fallbackProductOfMonth } from "@/lib/data";
import { client, hasSanityConfig } from "./client";

export type HeroSlide = {
  label: string;
  headline: string;
  subheadline: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
};

export type BlogCard = {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string;
  excerpt: string;
  image?: string;
};

export type Testimonial = {
  id: string;
  image: string;
  name: string;
  handle: string;
  review: string;
  rating: number;
};

export type BlogPost = BlogCard & {
  body?: PortableTextBlock[];
};

type SanityProduct = {
  _id: string;
  name?: string;
  slug?: { current?: string };
  price?: number;
  stockStatus?: string;
  images?: { asset?: { url?: string } }[];
  colors?: { name?: string; hex?: string }[];
  description?: string;
  featuredBlurb?: string;
};

type SanityBlogPost = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  publishedAt?: string;
  author?: string;
  excerpt?: string;
  coverImage?: { asset?: { url?: string } };
  body?: PortableTextBlock[];
};

type SanityTestimonial = {
  _id: string;
  name?: string;
  handle?: string;
  review?: string;
  rating?: number;
  photo?: { asset?: { url?: string } };
};

export const fallbackHeroSlides: HeroSlide[] = [
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
    label: "OUR STORY",
    headline: "One standard, every piece.",
    subheadline:
      "A Kenyan leather house led by Dorcas Odiembo, trusted at home and across the world.",
    cta: "Our story",
    href: "/about",
    image: "/images/gwethbtl/hero-tea-briefcase-wide.png",
    alt: "Leather work bag beside a cup of tea"
  }
];

export const fallbackBlogPosts: BlogCard[] = [
  {
    id: "how-to-care-for-genuine-leather-nairobi",
    title: "How to care for genuine leather in Nairobi's dry and rainy seasons",
    slug: "how-to-care-for-genuine-leather-nairobi",
    author: "GWETHBTL Leather",
    date: "April 2026",
    excerpt: "Full article coming soon.",
    image: "/images/gwethbtl/tea-briefcase.png"
  },
  {
    id: "choosing-the-right-laptop-tote",
    title: "Choosing the right laptop tote for everyday work",
    slug: "choosing-the-right-laptop-tote",
    author: "GWETHBTL Leather",
    date: "April 2026",
    excerpt: "Full article coming soon.",
    image: "/images/gwethbtl/green-croc-tote.png"
  },
  {
    id: "behind-the-finish-what-artisans-look-for",
    title: "Behind the finish: what skilled artisans look for in leather",
    slug: "behind-the-finish-what-artisans-look-for",
    author: "GWETHBTL Leather",
    date: "April 2026",
    excerpt: "Full article coming soon.",
    image: "/images/gwethbtl/burgundy-executive-bag.png"
  }
];

export const fallbackTestimonials: Testimonial[] = [
  {
    id: "amina-wanjiku",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop&q=60",
    name: "Amina Wanjiku",
    handle: "@aminaw",
    review:
      'The Executive Laptop Tote is everything. Full-grain leather, fits my 15" MacBook perfectly. Worth every shilling.',
    rating: 5
  },
  {
    id: "brian-otieno",
    image:
      "https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=200&auto=format&fit=crop&q=60",
    name: "Brian Otieno",
    handle: "@brianotieno",
    review:
      "Bought the Kwarme Messenger Bag for work trips. Three months in and it looks better than the day I got it.",
    rating: 5
  },
  {
    id: "david-kamau",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=60",
    name: "David Kamau",
    handle: "@davidkamau",
    review:
      "Gifted my whole team GWETHBTL wallets for the holidays. The corporate gifting service was seamless.",
    rating: 5
  },
  {
    id: "grace-muthoni",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=60",
    name: "Grace Muthoni",
    handle: "@gracemuthoni",
    review:
      "I was skeptical ordering online but the quality blew me away. The cognac tote is my everyday bag now.",
    rating: 5
  },
  {
    id: "kevin-mwangi",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&auto=format&fit=crop&q=60",
    name: "Kevin Mwangi",
    handle: "@kevinmwangi",
    review:
      "Nairobi heat is no joke but this leather has held up perfectly. Genuinely handcrafted -- you can tell.",
    rating: 5
  },
  {
    id: "fatuma-abdullahi",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60",
    name: "Fatuma Abdullahi",
    handle: "@fatumabd",
    review:
      "Ordered the backpack for my daughter starting campus. She gets compliments on it every single week.",
    rating: 5
  },
  {
    id: "james-kariuki",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    name: "James Kariuki",
    handle: "@jameskariuki",
    review:
      "The stitching, the smell, the weight -- this is proper leather. Not the fake stuff flooding the market.",
    rating: 5
  },
  {
    id: "lydia-chebet",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop&q=60",
    name: "Lydia Chebet",
    handle: "@lydiachebet",
    review:
      "Dorcas personally followed up after my order. That kind of care is rare. The bag is stunning too.",
    rating: 5
  }
];

const stockStatusToBadge = (status?: string): ProductBadge | undefined => {
  if (status === "new") return "NEW";
  if (status === "low_in_stock") return "LOW IN STOCK";
  if (status === "limited") return "LIMITED";
  return undefined;
};

const formatDate = (value?: string) => {
  if (!value) return "April 2026";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
  }).format(new Date(value));
};

const mapProduct = (product: SanityProduct): Product => ({
  id: product._id,
  slug: product.slug?.current ?? product._id,
  name: product.name ?? "GWETHBTL Leather Product",
  category: "Laptop Totes",
  collection: "Sanity",
  type: "Leather piece",
  price: product.price ?? 0,
  badge: stockStatusToBadge(product.stockStatus),
  colors:
    product.colors?.length
      ? product.colors.map((color) => ({
          name: color.name ?? "Leather",
          hex: color.hex ?? "#5A351F"
        }))
      : [{ name: "Leather", hex: "#5A351F" }],
  images:
    product.images
      ?.map((image) => image.asset?.url)
      .filter((url): url is string => Boolean(url)) ?? [],
  description: product.description ?? product.featuredBlurb ?? "",
  fullDescription: product.description ?? product.featuredBlurb ?? "",
  details: {
    dimensions: "See product details",
    material: "Full-grain leather",
    hardware: "Brass hardware",
    interior: "Organized interior",
    strap: "Leather carry handles"
  },
  tags: ["sanity"],
  inStock: product.stockStatus !== "out_of_stock",
  sku: product._id,
  shipping: {
    freeThreshold: 15000,
    time: "Ships within 2-3 business days from Nairobi"
  }
});

const mapBlogPost = (post: SanityBlogPost): BlogPost => ({
  id: post._id,
  title: post.title ?? "Untitled",
  slug: post.slug?.current ?? post._id,
  author: post.author ?? "GWETHBTL Leather",
  date: formatDate(post.publishedAt),
  excerpt: post.excerpt ?? "Full article coming soon.",
  image: post.coverImage?.asset?.url,
  body: post.body
});

const mapTestimonial = (testimonial: SanityTestimonial): Testimonial => ({
  id: testimonial._id,
  name: testimonial.name ?? "GWETHBTL Client",
  handle: testimonial.handle ?? "",
  review: testimonial.review ?? "",
  rating: testimonial.rating ?? 5,
  image:
    testimonial.photo?.asset?.url ??
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=60"
});

async function fetchOrFallback<T>(query: string, fallback: T, params = {}) {
  if (!hasSanityConfig) return fallback;

  try {
    const result = await client.fetch<T>(query, params, {
      next: { revalidate: 300 }
    });

    if (Array.isArray(result) && result.length === 0) return fallback;
    if (!result) return fallback;

    return result;
  } catch {
    return fallback;
  }
}

export async function getHeroSlides() {
  const slides = await fetchOrFallback<
    {
      label?: string;
      headline?: string;
      subtext?: string;
      ctaText?: string;
      ctaLink?: string;
      image?: { asset?: { url?: string } };
    }[]
  >(
    `*[_type == "homepage"][0].heroSlides {
      label, headline, subtext, ctaText, ctaLink,
      image { asset->{ url }, hotspot }
    }`,
    []
  );

  if (!slides.length) return fallbackHeroSlides;

  return slides.map((slide, index) => ({
    label: slide.label ?? fallbackHeroSlides[index]?.label ?? "GWETHBTL",
    headline: slide.headline ?? fallbackHeroSlides[index]?.headline ?? "",
    subheadline:
      slide.subtext ?? fallbackHeroSlides[index]?.subheadline ?? "",
    cta: slide.ctaText ?? fallbackHeroSlides[index]?.cta ?? "Shop now",
    href: slide.ctaLink ?? fallbackHeroSlides[index]?.href ?? "/shop",
    image: slide.image?.asset?.url ?? fallbackHeroSlides[index]?.image ?? "",
    alt: slide.headline ?? fallbackHeroSlides[index]?.alt ?? "GWETHBTL Leather"
  }));
}

export async function getFeaturedProducts() {
  const products = await fetchOrFallback<SanityProduct[]>(
    `*[_type == "homepage"][0].featuredProducts[]->{
      _id, name, slug, price, stockStatus,
      images[]{ asset->{ url }, hotspot },
      colors[]{ name, hex },
      description
    }`,
    []
  );

  if (!products.length) return fallbackFeaturedProducts;
  return products.map(mapProduct).filter((product) => product.images.length);
}

export async function getProductOfMonth() {
  const product = await fetchOrFallback<SanityProduct | null>(
    `*[_type == "product" && featured == true][0]{
      _id, name, slug, price, stockStatus, featuredBlurb, description,
      images[]{ asset->{ url }, hotspot },
      colors[]{ name, hex }
    }`,
    null
  );

  if (!product) return fallbackProductOfMonth;

  const mapped = mapProduct(product);
  if (!mapped.images.length) return fallbackProductOfMonth;

  return {
    ...mapped,
    description:
      product.featuredBlurb ?? product.description ?? mapped.description
  };
}

export async function getRecentBlogPosts(limit?: number) {
  const posts = await fetchOrFallback<SanityBlogPost[]>(
    `*[_type == "post" && published == true] | order(publishedAt desc)${
      limit ? `[0...${limit}]` : ""
    }{
      _id, title, slug, publishedAt, author, excerpt,
      coverImage{ asset->{ url }, hotspot }
    }`,
    []
  );

  if (!posts.length) return limit ? fallbackBlogPosts.slice(0, limit) : fallbackBlogPosts;
  return posts.map(mapBlogPost);
}

export async function getBlogPost(slug: string) {
  const post = await fetchOrFallback<SanityBlogPost | null>(
    `*[_type == "post" && slug.current == $slug && published == true][0]{
      _id, title, slug, author, publishedAt, body, excerpt,
      coverImage{ asset->{ url }, hotspot }
    }`,
    null,
    { slug }
  );

  if (!post) {
    const fallback = fallbackBlogPosts.find((item) => item.slug === slug);
    return fallback ? { ...fallback, body: [] } : null;
  }

  return mapBlogPost(post);
}

export async function getBlogSlugs() {
  const posts = await fetchOrFallback<{ slug: string }[]>(
    `*[_type == "post" && published == true]{ "slug": slug.current }`,
    []
  );

  if (!posts.length) {
    return fallbackBlogPosts.map((post) => ({ slug: post.slug }));
  }

  return posts;
}

export async function getTestimonials() {
  const testimonials = await fetchOrFallback<SanityTestimonial[]>(
    `*[_type == "testimonial" && published == true]{
      _id, name, handle, review, rating,
      photo{ asset->{ url }, hotspot }
    }`,
    []
  );

  if (!testimonials.length) return fallbackTestimonials;
  return testimonials.map(mapTestimonial);
}
