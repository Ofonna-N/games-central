import ms from "ms";
import { useQuery } from "react-query";
import APIClient, { FetchResponse } from "../../services/api-client";
import Trailer from "../../types/Trailer";

const useGameTrailer = (id: number) => {
  const client = new APIClient<Trailer>(`/games/${id}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>(
    ["trailer", id],
    client.getAll,
    {
      staleTime: ms("24"),
    }
  );
};

export default useGameTrailer;
