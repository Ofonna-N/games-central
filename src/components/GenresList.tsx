import useGenres, { Genre } from "../hooks/app/useGenres";
import Spinnner from "./Spinnner";

type Prop = {
  onGenreSelected: (genre: Genre) => void;
};

const GenresList = ({ onGenreSelected }: Prop) => {
  const { data, isLoading } = useGenres();

  //   const onGenreSelected = (genre: Genre) => {
  //     console.log(genre);
  //   };

  return (
    <>
      {isLoading && <Spinnner />}
      <ul className="text-white text-[2rem] flex flex-col gap-[1rem]">
        {data.map((genre) => (
          <li key={genre.id}>
            <button
              className="hover:underline"
              onClick={() => onGenreSelected(genre)}
            >
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
