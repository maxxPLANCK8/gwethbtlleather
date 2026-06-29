import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

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
  const article = articles.find((item) => item.slug === slug);

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
          Full article coming soon.
        </p>
      </article>
    </main>
  );
}
