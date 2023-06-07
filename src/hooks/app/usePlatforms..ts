import { useQuery } from "react-query";

import { Platform } from "./useGames";
import APIClient, { FetchResponse } from "../../services/api-client";

// import { Platform } from "./useGames";

// const usePlatorms = () => useData<Platform>("/platforms/lists/parents");
// const usePlatorms = (): ReturnType<typeof useData> => ({
//   data: platforms,
//   errMsg: "",
//   isLoading: false,
// });
const apiclient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatorms = () =>
  useQuery<FetchResponse<Platform>, Error, FetchResponse<Platform>>(
    ["platfroms"],
    apiclient.getAll
  );

export default usePlatorms;
