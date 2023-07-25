"use client";
import { editorState } from "@/store/editor";
import { default as MonacoEditor, useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "./index.module.scss";

const Editor = () => {
  const monaco = useMonaco();

  const [text, setText] = useRecoilState(editorState);

  const onChange = (val?: string) => {
    setText(val);
  };

  useEffect(() => {
    // monaco?.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }, [monaco]);

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
