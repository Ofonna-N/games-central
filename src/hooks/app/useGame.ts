import ms from "ms";
import { useQuery } from "react-query";
import APIClient from "../../services/api-client";
import { Game } from "./useGames";

const client = new APIClient("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>(["game", slug], () => client.get(slug), {
    staleTime: ms("24hr"),
  });
};

export default useGame;
