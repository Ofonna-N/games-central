import { useQuery } from "react-query";

import { Platform } from "../../types/Platform";
import APIClient, { FetchResponse } from "../../services/api-client";
import platforms from "../../data/platforms";
import ms from "ms";

const apiclient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatorms = () =>
  useQuery<FetchResponse<Platform>, Error, FetchResponse<Platform>>(
    ["platfroms"],
    apiclient.getAll,
    { initialData: platforms, staleTime: ms("24h") }
  );

export default usePlatorms;
