import type { Coordinates } from "@entities/location/coordinate";
import type { District } from "@entities/location/district";

export const weatherQueryKeys = {
  index: ["weather"],
  findByDistrict: (district: District) => [...weatherQueryKeys.index, district],
  findByCoordinates: (coordinates: Coordinates) => [
    ...weatherQueryKeys.index,
    coordinates,
  ],
} as const;
