import useGameScreenShots from "../hooks/useGameScreenshots";
import Spinnner from "./Spinnner";

type Props = {
  id: string;
};

const GameScreenshots = ({ id }: Props) => {
  const { data, error, isLoading } = useGameScreenShots(id);

  if (error || !data) return null;

  if (!data.results) return null;

  if (isLoading) return <Spinnner />;

  return (
    <ul className="grid gap-4 mt-5 md:grid-cols-2">
      {data.results.map((screenshot) => (
        <li key={screenshot.id}>
          <img src={screenshot.image}></img>
        </li>
      ))}
    </ul>
  );
};

export default GameScreenshots;
