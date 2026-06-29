import type { Metadata } from "next";
import Link from "next/link";
import { getRecentBlogPosts } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Blog",
  description: "Care notes, gift guides, and workshop stories from GWETHBTL Leather.",
  alternates: {
    canonical: "/blog"
  }
};

export default async function BlogPage() {
  const articles = await getRecentBlogPosts();

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
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
