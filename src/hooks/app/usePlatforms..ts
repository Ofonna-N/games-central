import { useQuery } from "react-query";
import platforms from "../../data/platforms";
import useData, { FetchResponse } from "./useData";
import { Platform } from "./useGames";
import apiClient from "../../services/api-client";
// import { Platform } from "./useGames";

// const usePlatorms = () => useData<Platform>("/platforms/lists/parents");
// const usePlatorms = (): ReturnType<typeof useData> => ({
//   data: platforms,
//   errMsg: "",
//   isLoading: false,
// });

const usePlatorms = () =>
  useQuery<FetchResponse<Platform>, Error, FetchResponse<Platform>>(
    ["platforms"],
    () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data)
  );

export default usePlatorms;
