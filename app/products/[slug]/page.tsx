import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageGallery } from "@/components/image-gallery";
import { ProductCard } from "@/components/product-card";
import { ProductPurchasePanel } from "@/components/product-purchase-panel";
import { products } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return {};
  }

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/products/${product.slug}`
    },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.images.primary, alt: product.name }]
    }
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 3);

  return (
    <main>
      <section className="container-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:py-20">
        <ImageGallery images={product.images.gallery} name={product.name} />
        <ProductPurchasePanel product={product} />
      </section>
      <section className="container-shell pb-16 sm:pb-20">
        <h2 className="mb-8 font-serif text-4xl font-semibold text-ink">
          Related products
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
