import { atom } from "recoil";

export const todosAtom = atom({
  key: "todosAtom",
  default: [],
});

export const todoTitleAtom = atom({
  key: "todoTitleAtom",
  default: "",
});

export const todoDescriptionAtom = atom({
  key: "todoDescriptionAtom",
  default: "",
});
