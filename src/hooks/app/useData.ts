import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abort = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endPoint, {
        signal: abort.signal,
      })
      .then((response) => {
        setData(response.data.results);
        setErrMsg("");
        setIsLoading(false);
      })
      .catch((err) => setErrMsg((err as Error).message));

    return () => abort.abort();
  }, []);
  return { data, errMsg, isLoading };
};

export default useData;
