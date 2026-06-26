import Link from "next/link";

export const metadata = {
  title: "Cart",
  description: "Review your GWETHBTL Leather cart."
};

export default function CartPage() {
  return (
    <main className="container-shell py-16 sm:py-20">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-leather">
        Cart
      </p>
      <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-7xl">
        Your cart
      </h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-body">
        The desktop cart opens as a drawer from the header. This page is ready
        for the mobile/full checkout flow once payment integration is selected.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white"
      >
        Continue shopping
      </Link>
    </main>
  );
}
