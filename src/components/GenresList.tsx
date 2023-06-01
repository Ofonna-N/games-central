import useGenres, { Genre } from "../hooks/app/useGenres";
import getCroppedImageUrl from "../services/getCroppedUrlImage";
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
      <h2 className="font-bold text-[2.5rem] mb-[2rem]">Genres</h2>
      {isLoading && <Spinnner />}
      <ul className="text-[2rem] flex flex-col gap-[1rem]">
        {(data as Genre[]).map((genre) => (
          <li key={genre.id}>
            <button
              className={`hover:underline transition-all flex gap-[7px] text-left items-center ${
                selectedGenre?.id === genre.id
                  ? "underline font-semibold text-[2.1rem] object-cover"
                  : ""
              }`}
              onClick={() => onGenreSelected(genre)}
            >
              <img
                src={getCroppedImageUrl(genre.image_background)}
                className="w-[3.2rem] aspect-square rounded"
                alt=""
              />
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
