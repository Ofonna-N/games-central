import { GameQuery } from "../App";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  return (
    <h1 className="text-white font-bold text-[3rem]">
      {gameQuery.platform?.name || ""} {gameQuery.genre?.name || ""} Games
    </h1>
  );
};

export default GameHeading;
