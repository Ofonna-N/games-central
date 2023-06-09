import { useQuery } from "react-query";

import APIClient, { FetchResponse } from "../../services/api-client";
import genres from "../../data/genres";
import ms from "ms";
import { Genre } from "../../types/Genre";

const apiclient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error, FetchResponse<Genre>>(
    ["genres"],
    apiclient.getAll,
    { initialData: genres, staleTime: ms("24h") }
  );

export default useGenres;
