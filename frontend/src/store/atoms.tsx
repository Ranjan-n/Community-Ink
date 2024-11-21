import { atom, atomFamily, selectorFamily } from "recoil";
import { Blog } from "../hooks/useBlogs";

export const blogAtom = atomFamily<Blog | undefined, string>({
  key: "blogAtom",
  default: undefined,
});

export const loadingAtom = atom<boolean>({
  key: "loadingAtom",
  default: true,
});

export const blogsAtom = atom<Blog[]>({
  key: "blogsAtom",
  default: [],
});

export const blogDataSelector = selectorFamily<Blog | undefined, string>({
  key: "blogDataSelector",
  get:
    (id) =>
    ({ get }) => {
      const blogData = get(blogAtom(id));
      return blogData;
    },
  set:
    (id) =>
    ({ set }, newData) => {
      set(blogAtom(id), newData);
    },
});
