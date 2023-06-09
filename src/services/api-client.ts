import axios, { AxiosRequestConfig } from "axios";

import { Game } from "../types/Game";

export type FetchResponse<T> = {
  count: number;
  next: string | null;
  results: T[];
};

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_RAWG_APIKEY,
  },
});

export default class APIClient<T> {
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then((res) => res.data);
  };
}
