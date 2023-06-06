import { useQuery } from "react-query";
import genres from "../../data/genres";
import apiClient from "../../services/api-client";
import useData, { FetchResponse } from "./useData";

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

const useGenres = () =>
  useQuery(["genres"], () =>
    apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data)
  );

export default useGenres;
