import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leather Care Guide",
  description: "Tips and guidance for caring for your GWETHBTL Leather piece.",
  alternates: {
    canonical: "/care-guide"
  }
};

export default function CareGuidePage() {
  return (
    <main className="bg-background">
      <section className="container-shell py-14 text-center sm:py-20">
        <h1 className="font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
          Leather Care Guide
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-body">
          Tips and guidance on keeping your GWETHBTL piece in excellent
          condition.
        </p>
      </section>
    </main>
  );
}
