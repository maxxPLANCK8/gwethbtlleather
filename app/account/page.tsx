import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Account",
  description: "Sign in or create a GWETHBTL Leather customer account.",
  alternates: {
    canonical: "/account"
  }
};

export default function AccountPage() {
  return (
    <main className="container-shell grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-leather">
          Customer account
        </p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-none text-ink sm:text-7xl">
          Welcome back
        </h1>
        <p className="mt-5 max-w-xl text-base leading-8 text-body">
          Account checkout is ready for integration. For now, continue shopping
          GWETHBTL laptop totes, wallets, backpacks, messenger bags, and belts.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex min-h-12 items-center bg-[#5a351f] px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#3f2616]"
        >
          Continue shopping
        </Link>
      </div>
      <form className="grid gap-5 bg-white p-7 shadow-sm">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            className="min-h-12 border border-border bg-surface px-4 text-sm font-normal text-ink"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Password
          <input
            type="password"
            placeholder="Password"
            className="min-h-12 border border-border bg-surface px-4 text-sm font-normal text-ink"
          />
        </label>
        <button
          type="button"
          className="min-h-12 bg-ink px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-leather"
        >
          Sign in
        </button>
        <p className="text-sm leading-6 text-muted">
          Need an account? Customer registration will be enabled with checkout.
        </p>
      </form>
    </main>
  );
}
