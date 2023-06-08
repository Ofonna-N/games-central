import useQueryStore from "../store/GameQueryStore";

const GameHeading = () => {
  const platform = useQueryStore((state) => state.gameQuery.platform);
  const genre = useQueryStore((state) => state.gameQuery.genre);

  return (
    <h1 className="text-white font-bold text-[3rem]">
      {platform?.name || ""} {genre?.name || ""} Games
    </h1>
  );
};

export default GameHeading;
