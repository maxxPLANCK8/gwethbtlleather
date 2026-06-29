import Link from "next/link";

type BreadcrumbsProps = {
  collection: string;
  href: string;
  productName: string;
};

export function Breadcrumbs({ collection, href, productName }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition hover:text-leather">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-border">
          /
        </li>
        <li>
          <Link href={href} className="transition hover:text-leather">
            {collection}
          </Link>
        </li>
        <li aria-hidden className="text-border">
          /
        </li>
        <li className="text-ink" aria-current="page">
          {productName}
        </li>
      </ol>
    </nav>
  );
}
