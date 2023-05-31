import { create } from "zustand";
import createThemeSlice, { ThemeSlice } from "./createThemeSlice";

const useStore = create<ThemeSlice>((...a) => ({
  ...createThemeSlice(...a),
}));

export default useStore;
