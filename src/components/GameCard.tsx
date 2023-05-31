import { Game } from "../hooks/app/useGames";
import getCroppedImageUrl from "../services/getCroppedUrlImage";
import CardIconsList from "./CardIconsList";
import CriticBadge from "./CriticBadge";
import GameCardWrapper from "./GameCardWrapper";

type Props = {
  game: Game;
  // imgSrc: string;
  // title: string;
};

const GameCard: React.FC<Props> = ({
  game: { background_image, name, parent_platforms, metacritic },
}) => {
  return (
    <GameCardWrapper>
      <img
        className="w-full"
        src={getCroppedImageUrl(background_image)}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-[2.5rem] mb-2">{name}</h3>
        <div className="flex justify-between items-center">
          <CardIconsList parent_platform={parent_platforms} />
          <CriticBadge criticNo={metacritic} />
        </div>
      </div>
    </GameCardWrapper>
  );
};

export default GameCard;
