import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gwethbtlleather.co.ke";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    ...["shop", "about", "account", "cart"].map((path) => ({
      url: `${base}/${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "shop" ? 0.9 : 0.6
    })),
    ...categories.map((category) => ({
      url: `${base}/collections/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...products.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
