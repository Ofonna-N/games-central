import useGames from "../hooks/app/useGames";

const GamesGrid = () => {
  const { games, errMsg } = useGames();
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
