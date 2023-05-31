import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

type GameFetchResponse = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const abort = new AbortController();

    apiClient
      .get<GameFetchResponse>("/games", {
        signal: abort.signal,
      })
      .then((response) => {
        setGames(response.data.results);
        setErrMsg("");
      })
      .catch((err) => setErrMsg((err as Error).message));

    return () => abort.abort();
  }, []);
  return { games, errMsg };
};

export default useGames;
