import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Care notes, gift guides, and workshop stories from GWETHBTL Leather.",
  alternates: {
    canonical: "/blog"
  }
};

const articles = [
  {
    title: "How to care for genuine leather in Nairobi's dry and rainy seasons",
    slug: "how-to-care-for-genuine-leather-nairobi",
    author: "GWETHBTL Leather",
    date: "April 2026"
  },
  {
    title: "Choosing the right laptop tote for everyday work",
    slug: "choosing-the-right-laptop-tote",
    author: "GWETHBTL Leather",
    date: "April 2026"
  },
  {
    title: "Behind the finish: what skilled artisans look for in leather",
    slug: "behind-the-finish-what-artisans-look-for",
    author: "GWETHBTL Leather",
    date: "April 2026"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-background">
      <section className="container-shell py-14 sm:py-20">
        <div className="section-title mb-8">
          <h1 className="text-center font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
            Notes from the workshop
          </h1>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leather">
                {article.author} | {article.date}
              </p>
              <h2 className="mt-4 text-lg font-semibold leading-6 text-ink">
                <Link href={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="mt-4 text-sm leading-7 text-body">
                Full article coming soon.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
