import { create } from "zustand";
import Platform from "../types/Platform";
import Genre from "../types/Genre";
import { mountStoreDevtool } from "simple-zustand-devtools";

export type GameQuery = {
  genre?: Genre | null;
  platform?: Platform | null;
  sort?: string;
  searchText?: string;
};

type QueryStore = {
  gameQuery: GameQuery;
  setGenre: (genre: GameQuery["genre"]) => void;
  setPlatform: (platform: GameQuery["platform"]) => void;
  setSort: (sort: GameQuery["sort"]) => void;
  setSearchText: (searchText: GameQuery["searchText"]) => void;
};

const useQueryStore = create<QueryStore>((set) => ({
  gameQuery: {},
  setGenre: (genre) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platform } })),
  setSort: (sort) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sort } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("queryStore", useQueryStore);
}

export default useQueryStore;
