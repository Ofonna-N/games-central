import { Link } from "react-router-dom";
import Game from "../types/Game";
import getCroppedImageUrl from "../services/getCroppedUrlImage";
import CardIconsList from "./CardIconsList";
import CriticBadge from "./CriticBadge";
import GameCardWrapper from "./GameCardWrapper";
import { AiFillStar } from "react-icons/ai";

type Props = {
  game: Game;
  // imgSrc: string;
  // title: string;
};

const GameCard: React.FC<Props> = ({
  game: { background_image, name, parent_platforms, metacritic, rating, slug },
}) => {
  return (
    <GameCardWrapper>
      <Link to={`games/${slug}`}>
        <img
          className="w-full"
          src={getCroppedImageUrl(background_image)}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-[1rem]">
            <CardIconsList parent_platform={parent_platforms} />
            <CriticBadge criticNo={metacritic} />
          </div>
          <h3 className="font-bold text-[2.5rem] mb-2">{name}</h3>
          <ul className="flex text-yellow-500">
            {Array.from({ length: Math.floor(rating) }).map((_, i) => (
              <li key={i}>
                <AiFillStar />
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </GameCardWrapper>
  );
};

export default GameCard;
