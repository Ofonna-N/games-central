import useGameTrailer from "../hooks/app/useGameTrailer";
import Spinnner from "./Spinnner";

type Props = {
  id: number;
};

const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useGameTrailer(id);

  if (isLoading) return <Spinnner />;

  if (!data?.results || error) return null;

  const firstVideo = data?.results[0];

  if (!firstVideo) return null;

  //   console.log("Trailer: ", data?.results);

  return (
    <video src={firstVideo.data[480]} poster={firstVideo.preview} controls />
  );
};

export default GameTrailer;
