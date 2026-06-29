import { defineField, defineType } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required()
    }),
    defineField({
      name: "price",
      title: "Price (Ksh)",
      type: "number",
      validation: (r) => r.required()
    }),
    defineField({
      name: "stockStatus",
      title: "Stock Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Low in Stock", value: "low_in_stock" },
          { title: "Limited", value: "limited" },
          { title: "In Stock", value: "in_stock" }
        ]
      },
      initialValue: "in_stock"
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Laptop Totes", value: "laptop-totes" },
          { title: "Wallets", value: "wallets" },
          { title: "Backpacks", value: "backpacks" },
          { title: "Messenger Bags", value: "messenger-bags" },
          { title: "Belts", value: "belts" }
        ]
      },
      validation: (r) => r.required()
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (r) => r.min(1)
    }),
    defineField({
      name: "colors",
      title: "Color Variants",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Color Name", type: "string" },
            { name: "hex", title: "Hex Code", type: "string" }
          ]
        }
      ]
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text"
    }),
    defineField({
      name: "featured",
      title: "Featured (Product of the Month)",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "featuredBlurb",
      title: "Featured Blurb",
      type: "text",
      description: "Short description shown in the Product of the Month section"
    })
  ]
});
