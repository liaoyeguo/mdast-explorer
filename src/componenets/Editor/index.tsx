"use client";
import { editorState } from "@/store/editor";
import { default as MonacoEditor, loader } from "@monaco-editor/react";
import { useEffect, useLayoutEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "./index.module.scss";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Editor = () => {
  const [text, setText] = useRecoilState(editorState);

  const onChange = (val?: string) => {
    setText(val);
  };

  useIsomorphicLayoutEffect(() => {
    loader.config({ monaco });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <MonacoEditor
          height="100%"
          language="markdown"
          defaultValue={text}
          onChange={onChange}
          options={{
            minimap: { enabled: false },
          }}
        />
      </div>
    </div>
  );
};

export default Editor;
