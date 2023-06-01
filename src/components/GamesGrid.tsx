import { GameQuery } from "../App";
import useGames from "../hooks/app/useGames";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

type Props = {
  gameQuery: GameQuery;
};

const GamesGrid = ({ gameQuery }: Props) => {
  const { data, errMsg, isLoading } = useGames(gameQuery);
  // console.log(selectedPlatform);
  return (
    <>
      <p>{errMsg}</p>
      <ul className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isLoading &&
          Array.from({ length: 20 }).map((_, i) => (
            <li key={i}>
              <GameCardSkeleton />
            </li>
          ))}
        {data.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
