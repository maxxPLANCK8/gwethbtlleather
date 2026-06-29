export function Newsletter() {
  return (
    <section className="bg-background py-14 sm:py-16">
      <div className="container-shell max-w-3xl text-center">
        <div>
          <h2 className="text-xl font-semibold text-ink">
            Join the GWETHBTL list
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-muted">
            Receive new leather drops, care notes, and studio updates from
            @gwethbtl_leather.
          </p>
        </div>
        <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" action="#">
          <label className="sr-only" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Subscribe to our newsletter"
            className="min-h-12 flex-1 border-x-0 border-b border-t-0 border-border bg-transparent px-5 text-center text-sm text-ink placeholder:text-muted focus-visible:outline-offset-0"
          />
          <button
            type="submit"
            className="min-h-12 bg-[#5a351f] px-8 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-leather"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
