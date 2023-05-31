import useGenres from "../hooks/app/useGenres";

const GenresList = () => {
  const { genres, errMsg } = useGenres();

  return (
    <>
      <p>{errMsg}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
