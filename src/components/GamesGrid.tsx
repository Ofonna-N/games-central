import useGames from "../hooks/app/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = () => {
  const { games, errMsg, isLoading } = useGames();

  return (
    <>
      <p>{errMsg}</p>
      <ul className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {isLoading &&
          Array.from({ length: 20 }).map((_, i) => (
            <li key={i}>
              <GameCardSkeleton />
            </li>
          ))}
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default GamesGrid;
