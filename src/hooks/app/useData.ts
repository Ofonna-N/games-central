import { useState, useEffect } from "react";
import apiClient from "../../services/api-client";
import { AxiosRequestConfig } from "axios";

type FetchResponse<T> = {
  count: number;
  results: T[];
};

const useData = <T>(
  endPoint: string,
  config?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [errMsg, setErrMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const abort = new AbortController();
      setIsLoading(true);

      apiClient
        .get<FetchResponse<T>>(endPoint, {
          signal: abort.signal,
          ...config,
        })
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false);
        })
        .catch((err) => {
          // console.log(err);
          if (err.message == "canceled") return;
          setErrMsg((err as Error).message);
        });

      return () => abort.abort();
    },
    deps ? [...deps] : []
  );
  return { data, errMsg, isLoading };
};

export default useData;
