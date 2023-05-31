import useGenres from "../hooks/app/useGenres";

const GenresList = () => {
  const { data, errMsg } = useGenres();

  return (
    <>
      <p>{errMsg}</p>
      <ul className="text-white text-[2rem] flex flex-col gap-[1rem]">
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenresList;
