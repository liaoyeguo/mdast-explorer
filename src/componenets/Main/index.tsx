"use client";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import styles from "./index.module.css";
import AstTree from "../AstTree";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("../Editor"), {
  ssr: false,
});

const Main = () => {
  return (
    <PanelGroup direction="horizontal" id="layout">
      <Panel defaultSize={50} id="editor">
        <Editor />
      </Panel>
      <PanelResizeHandle className={styles.handler} id="handler" />
      <PanelGroup direction="horizontal">
        <Panel id="preview">
          <div>12</div>
        </Panel>
        <PanelResizeHandle className={styles.handler} id="handler" />
        <Panel id="astTree">
          <AstTree />
        </Panel>
      </PanelGroup>
    </PanelGroup>
  );
};

export default Main;
