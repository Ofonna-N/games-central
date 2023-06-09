import { useInfiniteQuery } from "react-query";

import APIClient, { FetchResponse } from "../../services/api-client";
import ms from "ms";
import { GameQuery } from "../../store/GameQueryStore";
import { Game } from "../../types/Game";

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
