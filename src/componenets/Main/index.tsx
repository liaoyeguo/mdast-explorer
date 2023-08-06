"use client";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import styles from "./index.module.css";
import AstTree from "../AstTree";
import dynamic from "next/dynamic";
import Preview from "../Preview";

const Editor = dynamic(() => import("../Editor"), {
  ssr: false,
});

const Main = () => {
  return (
    <PanelGroup direction="horizontal" id="layout">
      <Panel defaultSize={50} id="editor">
        <Editor />
      </Panel>
      <PanelResizeHandle className={styles.handlerHorizontal} id="handler-h" />
      <Panel id="right">
        <PanelGroup direction="vertical" id="right">
          <Panel id="preview">
            <Preview />
          </Panel>
          <PanelResizeHandle
            className={styles.handlerVertical}
            id="handler-v"
          />
          <Panel id="astTree">
            <AstTree />
          </Panel>
        </PanelGroup>
      </Panel>
    </PanelGroup>
  );
};

export default Main;
