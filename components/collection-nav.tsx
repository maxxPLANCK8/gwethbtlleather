import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/data";

export function CollectionNav() {
  return (
    <section className="border-y border-border bg-white">
      <div className="container-shell grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/collections/${category.slug}`}
            className="group flex min-h-36 flex-col justify-between border-b border-border py-6 sm:border-r lg:border-b-0 lg:px-6 first:lg:pl-0 last:border-r-0 last:lg:pr-0"
          >
            <span className="flex items-center justify-between gap-4">
              <span className="font-serif text-3xl font-semibold text-ink">
                {category.name}
              </span>
              <ArrowUpRight
                size={20}
                className="text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-leather"
                aria-hidden
              />
            </span>
            <span className="mt-6 max-w-xs text-sm leading-6 text-body">
              {category.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
