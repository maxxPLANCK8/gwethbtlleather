import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (r) => r.required()
    }),
    defineField({
      name: "handle",
      title: "Handle (e.g. @amina)",
      type: "string"
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "review",
      title: "Review",
      type: "text",
      validation: (r) => r.required().max(300)
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [1, 2, 3, 4, 5]
      },
      initialValue: 5
    }),
    defineField({
      name: "published",
      title: "Published",
      type: "boolean",
      initialValue: false
    })
  ]
});
