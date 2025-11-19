import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const Document = defineDocumentType(() => ({
  name: "Document",
  filePathPattern: `documents/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    author: { type: "string", required: true },
    year: { type: "string", required: true },
    license: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: true },
    description: { type: "string", required: true },
    source: { type: "string", required: true },
    file: { type: "string", required: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("documents/", ""),
    },
  },
}));

const rehypePrettyCodeOptions = {
  theme: "one-dark-pro",
  keepBackground: false,
};

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Document],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});
