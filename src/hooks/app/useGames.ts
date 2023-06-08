import { useInfiniteQuery } from "react-query";

import APIClient, { FetchResponse } from "../../services/api-client";
import ms from "ms";
import { GameQuery } from "../../store/GameQueryStore";

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

const useGames = (gameQuery: GameQuery) => {
  const queryParam = {
    genres: gameQuery.genre?.id,
    parent_platforms: gameQuery.platform?.id,
    search: gameQuery.searchText,
    sort: gameQuery.sort,
  };

  return useInfiniteQuery<FetchResponse<Game>, Error, FetchResponse<Game>>(
    ["games", queryParam],
    ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: { ...queryParam, page: pageParam },
      }),
    {
      getNextPageParam: (lastPage, allpages) =>
        lastPage.next ? allpages.length + 1 : undefined,
      // undefined,
      staleTime: ms("24h"),
    }
  );
};

export default useGames;
