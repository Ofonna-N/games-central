import { useQuery } from "react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import ms from "ms";
import { Screenshot } from "../types/Screenshot";

const useGameScreenShots = (id: string) => {
  const client = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery<FetchResponse<Screenshot>, Error>(
    ["screenshots", id],
    client.getAll,
    { staleTime: ms("24h") }
  );
};

export default useGameScreenShots;
