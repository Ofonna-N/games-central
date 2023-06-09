import { Game } from "../types/Game";
import CriticBadge from "./CriticBadge";
import DefinitionList from "./utility/definitionList/DefinitionList";

type Props = {
  game: Game;
};

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="grid grid-cols-2 mt-[2rem] gap-4">
      <DefinitionList
        title={"Platforms"}
        detail={game.parent_platforms.map((p) => p.platform.name)}
      />
      <DefinitionList
        title={"Meta Score"}
        detail={[<CriticBadge criticNo={game.metacritic} />]}
      />
      <DefinitionList
        title={"Genres"}
        detail={game.genres.map((genre) => genre.name)}
      />
      <DefinitionList
        title={"Publishers"}
        detail={game.publishers.map((p) => p.name)}
      />
    </div>
  );
};

export default GameAttributes;
