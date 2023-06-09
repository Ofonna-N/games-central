import { useParams } from "react-router-dom";
import useGame from "../hooks/app/useGame";
import Spinnner from "../components/Spinnner";
import ExpandableText from "../components/utility/expandableText/ExpandableText";
import DefinitionList from "../components/utility/definitionList/DefinitionList";
import CriticBadge from "../components/CriticBadge";
import GameAttributes from "../components/GameAttributes";

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
    <div className="px-[1rem]">
      <h1 className="text-[4rem] font-bold">{game.name}</h1>
      <ExpandableText text={game.description_raw} />
      <GameAttributes game={game} />
    </div>
  );
};

export default GameDetailPage;