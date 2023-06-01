import useData from "./useData";
import { Platform } from "./useGames";

// export type Genre = {
//   id: number;
//   name: string;
//   image_background: string;
//   slug: string;
// };

const usePlatorms = () => useData<Platform>("/platforms");

export default usePlatorms;
