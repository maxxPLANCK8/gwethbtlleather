import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/data";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="container-shell pb-16 sm:pb-20">
      <h2 className="mb-8 font-serif text-4xl font-semibold text-ink">
        You may also like
      </h2>
      <div className="-mx-4 flex gap-5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="w-64 shrink-0 sm:w-auto">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
