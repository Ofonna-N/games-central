import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

type GenreFetchResponse = {
  count: number;
  results: Genre[];
};

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abort = new AbortController();
    setIsLoading(true);

    apiClient
      .get<GenreFetchResponse>("/genres", {
        signal: abort.signal,
      })
      .then((response) => {
        setGenres(response.data.results);
        setErrMsg("");
        setIsLoading(false);
      })
      .catch((err) => setErrMsg((err as Error).message));

    return () => abort.abort();
  }, []);
  return { genres, errMsg, isLoading };
};

export default useGenres;
