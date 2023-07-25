import { editorState } from '@/store/editor';
import { mdxToAst } from '@/utils/ast';
import { useEffect, useState } from 'react';
import {
  useRecoilValue,
} from 'recoil';

const Preview = () => {
  const value = useRecoilValue(editorState)
  const [json, setJson] = useState<any>()

  useEffect(() => {
    (async () => {
      const ast = mdxToAst(value || "")
      console.log({ ast })
      setJson(ast)
    })();
  }, [value])
  return <div>{value}</div>
}

export default Preview
export default Preview