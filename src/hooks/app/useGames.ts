import { useQuery } from "react-query";
import { GameQuery } from "../../App";
import APIClient, { FetchResponse } from "../../services/api-client";

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

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error, FetchResponse<Game>>(
    [
      "games",
      {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
        sort: gameQuery.sort,
      },
    ],
    () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          search: gameQuery.searchText,
          sort: gameQuery.sort,
        },
      })
  );

export default useGames;
