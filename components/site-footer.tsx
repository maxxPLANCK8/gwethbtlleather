import Link from "next/link";
import { categories } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="bg-[#2f1d14] text-white">
      <div className="container-shell grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1.25fr] lg:py-16">
        <div>
          <p className="font-serif text-3xl font-bold uppercase tracking-[0.12em] text-[#b08a38]">
            GWETHBTL Leather
          </p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
            Timeless Leather, Modern Lifestyle.
            Premium Kenyan leather products for everyday work, corporate
            gifting, and travel. Handcrafted by skilled artisans and led by
            founder Dorcas Odiembo.
          </p>
          <p className="mt-5 text-xs leading-6 text-white/55">
            Nairobi, Kenya<br />
            <a
              href="https://instagram.com/gwethbtl_leather"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition hover:text-amber-600"
            >
              @gwethbtl_leather
            </a>
            <br />
            <a
              href="https://wa.me/254733460088"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition hover:text-amber-600"
            >
              WhatsApp us
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">
            Shop
          </h2>
          <ul className="mt-4 grid gap-3 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/collections/${category.slug}`} className="text-white/65 hover:text-white">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">
            Quick links
          </h2>
          <ul className="mt-4 grid gap-3 text-sm text-white/65">
            <li>
              <Link href="/shipping" className="hover:text-white">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/care-guide" className="hover:text-white">
                Care guide
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/corporate-gifting" className="hover:text-white">
                Corporate gifting
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-white">
            Newsletter
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/65">
            Subscribe for new products, care notes, and corporate leather
            gifting updates.
          </p>
          <form className="mt-5 flex">
            <label className="sr-only" htmlFor="footer-email">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Your email address"
              className="min-h-11 min-w-0 flex-1 border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/45"
            />
            <button
              type="submit"
              className="min-h-11 bg-[#8a5a1d] px-5 text-xs font-bold uppercase tracking-[0.12em] text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="container-shell py-5">
        <div className="mt-6 flex items-center justify-between border-t border-stone-700 pt-6">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} GWETHBTL Leather. All rights reserved.
          </p>
          <a
            href="https://www.planckmx.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wide text-[#b08a38] transition hover:text-[#d0a64a]"
          >
            PLANCKMX
          </a>
        </div>
      </div>
    </footer>
  );
}
