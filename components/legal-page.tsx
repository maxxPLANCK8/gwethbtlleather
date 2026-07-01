import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content?: ReactNode;
  items?: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <main className="bg-background">
      <section className="container-shell py-14 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-leather">
            Last updated: {updated}
          </p>
          <h1 className="mt-4 font-serif text-5xl font-semibold leading-none text-ink sm:text-6xl">
            {title}
          </h1>
          <div className="mt-10 grid gap-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-ink">
                  {section.title}
                </h2>
                {section.content ? (
                  <div className="mt-4 text-sm leading-7 text-body">
                    {section.content}
                  </div>
                ) : null}
                {section.items?.length ? (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-body">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
