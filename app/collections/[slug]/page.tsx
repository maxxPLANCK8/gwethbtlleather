import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FilterSidebar } from "@/components/filter-sidebar";
import { ProductCard } from "@/components/product-card";
import { categories } from "@/lib/data";
import { getAllProducts } from "@/sanity/lib/queries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `/collections/${category.slug}`
    }
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const products = await getAllProducts();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const collectionProducts = products.filter(
    (product) => product.category === category.name
  );
  const visibleProducts =
    collectionProducts.length > 0 ? collectionProducts : products;

  return (
    <main className="bg-background-warm">
      <section className="container-shell py-12 sm:py-16 lg:py-20">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-leather">
          Collection
        </p>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-7xl">
              {category.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-body">
              {category.description}
            </p>
          </div>
          <label className="flex max-w-xs items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink">
            Sort
            <select className="min-h-11 border border-border bg-white px-4 text-sm normal-case tracking-normal text-body">
              <option>Featured</option>
              <option>Price low to high</option>
              <option>Newest</option>
            </select>
          </label>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[18rem_1fr]">
          <FilterSidebar products={products} />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
