import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

type Game = {
  id: number;
  name: string;
};

type GameFetchResponse = {
  count: number;
  results: Game[];
};

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    apiClient
      .get<GameFetchResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => setErrMsg((err as Error).message));
  }, []);
  return { games, errMsg };
};

export default useGames;
