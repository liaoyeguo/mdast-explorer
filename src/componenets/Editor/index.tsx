"use client";
import { editorState } from "@/store/editor";
import { default as MonacoEditor, useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

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
    <div style={{ height: "100%" }}>
      <MonacoEditor
        height="100%"
        language="markdown"
        defaultValue={text}
        onChange={onChange}
      />
    </div>
  );
};

export default Editor;
