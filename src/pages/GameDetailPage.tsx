import { useParams } from "react-router-dom";
import useGame from "../hooks/app/useGame";
import Spinnner from "../components/Spinnner";

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
      <p>{game.description_raw}</p>
    </div>
  );
};

export default GameDetailPage;
