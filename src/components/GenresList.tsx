import useGenres, { Genre } from "../hooks/app/useGenres";
import Spinnner from "./Spinnner";

type Prop = {
  selectedGenre: Genre | null;
  onGenreSelected: (genre: Genre) => void;
};

const GenresList = ({ selectedGenre, onGenreSelected }: Prop) => {
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
              className={`hover:underline transition-all ${
                selectedGenre?.id === genre.id
                  ? "underline font-bold text-[2.3rem]"
                  : ""
              }`}
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
