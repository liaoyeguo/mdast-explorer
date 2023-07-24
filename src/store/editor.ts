import { atom } from "recoil";

export const editorState = atom<string | undefined>({
  key: "editorState",
  default: "",
});
