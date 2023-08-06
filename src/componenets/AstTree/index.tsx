import { editorState } from "@/store/editor";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import styles from "./index.module.scss";
import { mdxToAst } from "@/utils/ast";

const getJsonSafely = (value: string): [object, any] => {
  try {
    return [mdxToAst(value), undefined];
  } catch (error) {
    console.error(error);
    return [{}, error];
  }
};

const AstTree = () => {
  const value = useRecoilValue(editorState);
  const [localVal, setLocalVal] = useState(getJsonSafely(value || "")[0]);

  useEffect(() => {
    const [json, error] = getJsonSafely(value || "");
    if (!error) setLocalVal(json);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <JsonView src={localVal} enableClipboard={false} />
      </div>
    </div>
  );
};

export default AstTree;
