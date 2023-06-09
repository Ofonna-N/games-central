import ms from "ms";
import { useQuery } from "react-query";
import APIClient from "../../services/api-client";
import { Game } from "../../types/Game";

const useGame = (slug: string) => {
  const client = new APIClient<Game>("/games/" + slug);
  return useQuery<Game, Error>(["game", slug], client.get, {
    staleTime: ms("24hr"),
  });
};

export default useGame;
