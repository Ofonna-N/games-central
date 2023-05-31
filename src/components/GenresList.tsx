import useGenres from "../hooks/app/useGenres";
import Spinnner from "./Spinnner";

const GenresList = () => {
  const { data, isLoading } = useGenres();

  return (
    <>
      {isLoading && <Spinnner />}
      <ul className="text-white text-[2rem] flex flex-col gap-[1rem]">
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
