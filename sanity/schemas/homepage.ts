import { defineField, defineType } from "sanity";

export default defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "heroSlides",
      title: "Hero Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true }
            },
            { name: "label", title: "Label (e.g. WORK EDIT)", type: "string" },
            { name: "headline", title: "Headline", type: "string" },
            { name: "subtext", title: "Subtext", type: "string" },
            { name: "ctaText", title: "CTA Button Text", type: "string" },
            { name: "ctaLink", title: "CTA Button Link", type: "string" }
          ]
        }
      ],
      validation: (r) => r.min(1).max(5)
    }),
    defineField({
      name: "featuredProducts",
      title: "Featured Products Grid",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
      validation: (r) => r.max(4),
      description: "Pick up to 4 products to show in the homepage grid"
    }),
    defineField({
      name: "corporateLogos",
      title: "Corporate Client Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Client Name", type: "string" },
            { name: "logo", title: "Logo", type: "image" }
          ]
        }
      ]
    })
  ]
} as any);
