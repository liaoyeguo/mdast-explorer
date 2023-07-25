import remarkParse from "remark-parse"
import { unified } from "unified"

export const mdxToAst =  (content:string) => {
    return unified().use(remarkParse).parse(content)
}