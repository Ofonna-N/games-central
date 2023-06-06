import { useQuery } from "react-query";
import { GameQuery } from "../../App";
import useData, { FetchResponse } from "./useData";
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
  rating: number;
};

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sort,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>(["games"], () =>
    apiClient
      .get<FetchResponse<Game>>("/games", {
        params: {
          ...gameQuery,
        },
      })
      .then((res) => res.data)
  );

export default useGames;
