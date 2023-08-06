import { editorState } from "@/store/editor";
import { useRecoilValue } from "recoil";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { MDXModule } from "mdx/types";
import "github-markdown-css/github-markdown-light.css";

const Preview = () => {
  const value = useRecoilValue(editorState);
  const [module, setModule] = useState<MDXModule>();

  useEffect(() => {
    const asyncFn = async () => {
      if (!value) return;
      try {
        const module = await evaluate(value, {
          ...(runtime as any),
        });
        setModule(module);
      } catch (error) {
        console.log(error);
      }
    };

    asyncFn();
  }, [value]);

  const Component = module?.default;

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className="markdown-body">{Component && <Component />}</div>
      </div>
    </div>
  );
};

export default Preview;
