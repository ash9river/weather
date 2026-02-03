import type { District } from "@entities/location/district";

export type Favorite = {
  district: District;
  name: string | null;
};
