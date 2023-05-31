import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

type Game = {
  id: number;
  name: string;
};

type GameFetchResponse = {
  count: number;
  results: Game[];
};

const GamesGrid = () => {
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

  return (
    <>
      <p>{errMsg}</p>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
