import { useParams } from "react-router-dom";
import useGame from "../hooks/app/useGame";
import Spinnner from "../components/Spinnner";
import ExpandableText from "../components/utility/expandableText/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading)
    return (
      <div className="pl-4">
        <Spinnner />
      </div>
    );
  if (error || !game) throw new Error();

  return (
    <div className="grid mt-4 md:grid-cols-2 px-[1rem]">
      <div>
        <h1 className="text-[4rem] font-bold mb-4">{game.name}</h1>
        <ExpandableText text={game.description_raw} />
        <GameAttributes game={game} />
      </div>
      <div>
        {" "}
        <GameTrailer id={game.id} />
        <GameScreenshots id={game.id.toString()} />
      </div>
    </div>
  );
};

export default GameDetailPage;
