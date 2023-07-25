import { editorState } from "@/store/editor";
import { mdxToAst } from "@/utils/ast";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import styles from "./index.module.scss";

const Preview = () => {
  const value = useRecoilValue(editorState);

  const ast = useMemo(() => {
    return mdxToAst(value || "");
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <JsonView src={ast} enableClipboard={false} />
      </div>
    </div>
  );
};

export default Preview;
