import { defineType, defineField } from "sanity";

export default defineType({
    name: "homePage",
    title: "Home Page",
    type: "document",
    fields: [
        defineField({
            name: "heroTitle",
            title: "Hero Title",
            type: "string",
        }),
        defineField({
            name: "heroDescription",
            title: "Hero Description",
            type: "text",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
});
