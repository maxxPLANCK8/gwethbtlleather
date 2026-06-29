import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Save GWETHBTL Leather pieces you love.",
  alternates: {
    canonical: "/wishlist"
  }
};

export default function WishlistPage() {
  return (
    <main className="bg-background">
      <section className="container-shell py-14 text-center sm:py-20">
        <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
          Your Wishlist
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-body">
          Save pieces you love. Sign in to keep your wishlist across devices.
        </p>
      </section>
    </main>
  );
}
