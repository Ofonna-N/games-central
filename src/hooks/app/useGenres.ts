import { useQuery } from "react-query";
import genres from "../../data/genres";

import APIClient, { FetchResponse } from "../../services/api-client";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
  slug: string;
};

// const useGenres = () => useData<Genre>("/genres");
// const useGenres = (): ReturnType<typeof useData> => ({
//   data: genres,
//   errMsg: "",
//   isLoading: false,
// });

const apiclient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>(
    ["genres"],
    apiclient.getAll
  );

export default useGenres;
