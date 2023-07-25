"use client";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import styles from "./index.module.css";
import Editor from "../Editor";
import Preview from "../Preview";

const Main = () => {
  return (
    <PanelGroup direction="horizontal" id="layout">
      <Panel defaultSize={50}>
        <Editor />
      </Panel>
      <PanelResizeHandle className={styles.handler} id="handler" />
      <Panel>
        <Preview />
      </Panel>
    </PanelGroup>
  );
};

export default Main;
