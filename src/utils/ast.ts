import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";

import { unified } from "unified";

export const mdxToAst = (content: string) => {
  return unified().use(remarkMdx).use(remarkParse).parse(content);
};
