import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/app/useGames";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import InfiniteScroll from "react-infinite-scroll-component";

type Props = {
  gameQuery: GameQuery;
};

const GamesGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
  // console.log(selectedPlatform);
  if (error) return <p>{error.message}</p>;

  const dataLength =
    data?.pages.reduce((total, current) => current.results.length + total, 0) ||
    0;
  // console.log("data length: ", dataLength);
  // console.log("pages: ", data?.pages);
  return (
    <InfiniteScroll
      dataLength={dataLength} //This is important field to render the next data
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<p className="text-white py-[1rem]">loading...</p>}
      endMessage={
        <p className="text-yellow-500 mt-5 text-3xl">Yay! you've seen it all</p>
      }
    >
      <ul className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading &&
          Array.from({ length: 20 }).map((_, i) => (
            <li key={i}>
              <GameCardSkeleton />
            </li>
          ))}
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.results.map((game) => (
              <li key={game.id}>
                <GameCard game={game} />
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default GamesGrid;
