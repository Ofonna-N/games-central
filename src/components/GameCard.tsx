import { Game } from "../hooks/app/useGames";
import CardIconsList from "./CardIconsList";
import CriticBadge from "./CriticBadge";

type Props = {
  game: Game;
  // imgSrc: string;
  // title: string;
};

const GameCard: React.FC<Props> = ({
  game: { background_image, name, parent_platforms, metacritic },
}) => {
  return (
    <div className="max-w-xl mx-auto rounded-[5px] overflow-hidden shadow-lg bg-gray-400 text-black dark:bg-dark-secondary dark:text-white">
      <img
        className="w-full"
        src={background_image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-[2.5rem] mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <CardIconsList parent_platform={parent_platforms} />
          <CriticBadge criticNo={metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
