import ms from "ms";
import { useQuery } from "react-query";
import APIClient from "../../services/api-client";
import { Game } from "../../types/Game";

const client = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>(["game", slug], () => client.get(slug), {
    staleTime: ms("24hr"),
  });
};

export default useGame;
