import { Game } from "../hooks/app/useGames";
import CardIconsList from "./CardIconsList";

type Props = {
  game: Game;
  // imgSrc: string;
  // title: string;
};

const GameCard: React.FC<Props> = ({
  game: { background_image, name, parent_platforms },
}) => {
  return (
    <div className="max-w-md mx-auto rounded-[5px] overflow-hidden shadow-lg bg-gray-400 text-black dark:bg-dark-secondary dark:text-white">
      <img
        className="w-full"
        src={background_image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-[2rem] mb-2">{name}</h3>
        <div>
          <CardIconsList parent_platform={parent_platforms} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
