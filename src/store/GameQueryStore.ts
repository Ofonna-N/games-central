import { create } from "zustand";
import { Platform } from "../hooks/app/useGames";
import { Genre } from "../hooks/app/useGenres";

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
  setGenre: (genre) => set((state) => ({ gameQuery: { ...state, genre } })),
  setPlatform: (platform) =>
    set((state) => ({ gameQuery: { ...state, platform } })),
  setSort: (sort) => set((state) => ({ gameQuery: { ...state, sort } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useQueryStore;
