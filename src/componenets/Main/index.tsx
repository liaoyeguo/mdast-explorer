"use client";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import styles from "./index.module.css";
import Editor from "../Editor";

const Main = () => {
  return (
    <PanelGroup direction="horizontal" id="layout">
      <Panel defaultSize={50}>
        <Editor />
      </Panel>
      <PanelResizeHandle className={styles.handler} id="handler" />
      <Panel>
        <div>12333333</div>
      </Panel>
    </PanelGroup>
  );
};

export default Main;
