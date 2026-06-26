import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-shell grid min-h-[60svh] place-items-center py-20 text-center">
      <div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-leather">
          Not found
        </p>
        <h1 className="font-serif text-5xl font-semibold text-ink">
          This page is not in the atelier.
        </h1>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-ink px-7 text-sm font-semibold uppercase tracking-[0.14em] text-white"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
