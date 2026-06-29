import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogSlugs } from "@/sanity/lib/queries";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getBlogSlugs();
}

export async function generateMetadata({
  params
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogPost(slug);

  if (!article) {
    return {
      title: "Article"
    };
  }

  return {
    title: article.title,
    alternates: {
      canonical: `/blog/${article.slug}`
    }
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = await getBlogPost(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-background">
      <article className="container-shell max-w-3xl py-14 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leather">
          {article.author} | {article.date}
        </p>
        <h1 className="mt-5 font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
          {article.title}
        </h1>
        <p className="mt-7 text-base leading-8 text-body">
          {article.excerpt}
        </p>
        {article.body?.length ? (
          <div className="prose prose-stone mt-8 max-w-none text-body">
            <PortableText value={article.body} />
          </div>
        ) : null}
      </article>
    </main>
  );
}
