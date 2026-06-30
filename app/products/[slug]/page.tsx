import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductAccordion } from "@/components/product-accordion";
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import { RelatedProducts } from "@/components/related-products";
import { StickyAddToCart } from "@/components/sticky-add-to-cart";
import { categories, primaryImage } from "@/lib/data";
import { getAllProducts, getProduct, getProductSlugs } from "@/sanity/lib/queries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const baseUrl = "https://gwethbtlleather.co.ke";

const collectionHrefFor = (categoryName: string) => {
  const category = categories.find((item) => item.name === categoryName);
  return category ? `/collections/${category.slug}` : "/shop";
};

export async function generateMetadata({
  params
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: {
      absolute: `${product.name} - GWETHBTL Leather`
    },
    description: product.description,
    alternates: {
      canonical: `${baseUrl}/products/${product.slug}`
    },
    openGraph: {
      title: `${product.name} - GWETHBTL Leather`,
      description: product.description,
      url: `${baseUrl}/products/${product.slug}`,
      images: [{ url: primaryImage(product), alt: product.name }],
      type: "website"
    }
  };
}

export async function generateStaticParams() {
  return getProductSlugs();
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const [product, products] = await Promise.all([
    getProduct(slug),
    getAllProducts()
  ]);

  if (!product) {
    notFound();
  }

  const collectionHref = collectionHrefFor(product.category);
  const related = products
    .filter(
      (item) =>
        item.id !== product.id &&
        (item.collection === product.collection || item.category === product.category)
    )
    .slice(0, 4);
  const fallbackRelated =
    related.length > 0
      ? related
      : products.filter((item) => item.id !== product.id).slice(0, 4);
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((image) =>
      image.startsWith("http") ? image : `${baseUrl}${image}`
    ),
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "GWETHBTL Leather"
    },
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/products/${product.slug}`,
      priceCurrency: "KES",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  return (
    <main className="bg-background pb-20 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <section className="container-shell grid gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:gap-12 lg:py-18">
        <ProductGallery images={product.images} name={product.name} />
        <div className="relative z-10 grid content-start gap-10 overflow-visible lg:sticky lg:top-24 lg:self-start">
          <ProductInfo product={product} collectionHref={collectionHref} />
          <div className="mt-2 block clear-both">
            <ProductAccordion product={product} />
          </div>
        </div>
      </section>
      <RelatedProducts products={fallbackRelated} />
      <StickyAddToCart product={product} />
    </main>
  );
}
