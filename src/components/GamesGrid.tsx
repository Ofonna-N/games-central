import useGames from "../hooks/app/useGames";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, errMsg } = useGames();
  return (
    <>
      <p>{errMsg}</p>
      <ul className="grid grid-cols-1 gap-[2rem] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
