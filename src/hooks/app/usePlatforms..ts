import platforms from "../../data/platforms";
import useData from "./useData";
// import { Platform } from "./useGames";

// const usePlatorms = () => useData<Platform>("/platforms");
const usePlatorms = (): ReturnType<typeof useData> => ({
  data: platforms,
  errMsg: "",
  isLoading: false,
});

export default usePlatorms;
