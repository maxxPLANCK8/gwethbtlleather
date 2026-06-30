import type { Product } from "@/lib/data";
import { categories, colorHex, products as fallbackProducts } from "@/lib/data";

export function FilterSidebar({ products = fallbackProducts }: { products?: Product[] }) {
  const types = Array.from(new Set(products.map((product) => product.type)));
  const colors = Array.from(
    new Map(
      products.flatMap((product) =>
        product.colors.map((color) => [color.name, color])
      )
    ).values()
  );

  return (
    <aside className="rounded-none border border-border bg-white p-5 lg:sticky lg:top-28 lg:self-start">
      <h2 className="font-serif text-3xl font-semibold text-ink">Filters</h2>
      <div className="mt-6 grid gap-7">
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            Category
          </legend>
          <div className="mt-4 grid gap-3">
            {categories.map((category) => (
              <label key={category.slug} className="flex items-center gap-3 text-sm text-body">
                <input type="checkbox" className="h-4 w-4 accent-leather" />
                {category.name}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            Type
          </legend>
          <div className="mt-4 grid gap-3">
            {types.map((type) => (
              <label key={type} className="flex items-center gap-3 text-sm text-body">
                <input type="checkbox" className="h-4 w-4 accent-leather" />
                {type}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            Color
          </legend>
          <div className="mt-4 flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                aria-label={`Filter by ${color.name}`}
                className="grid min-h-11 min-w-11 place-items-center rounded-full border border-border"
              >
                <span
                  className="h-6 w-6 rounded-full border border-black/10"
                  style={{ backgroundColor: colorHex(color) }}
                />
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset>
          <legend className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">
            Price
          </legend>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <input
              type="number"
              min="0"
              placeholder="Min"
              className="min-h-11 border border-border bg-surface px-3 text-sm"
            />
            <input
              type="number"
              min="0"
              placeholder="Max"
              className="min-h-11 border border-border bg-surface px-3 text-sm"
            />
          </div>
        </fieldset>
      </div>
    </aside>
  );
}
