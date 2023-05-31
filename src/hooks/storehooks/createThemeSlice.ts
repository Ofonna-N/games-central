import { StateCreator } from "zustand";

export interface ThemeSlice {
  isDark: boolean;
  setTheme: (isDark: boolean) => void;
}

const createThemeSlice: StateCreator<ThemeSlice, [], [], ThemeSlice> = (
  set
) => ({
  isDark: false,
  setTheme: (isDark) => set(() => ({ isDark: isDark })),
});

export default createThemeSlice;
