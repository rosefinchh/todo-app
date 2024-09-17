import { atom } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
});

export const completedTodosAtom = atom({
  key: "completedTodosAtom",
  default: [],
});
