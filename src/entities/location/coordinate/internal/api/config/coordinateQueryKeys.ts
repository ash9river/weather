import type { District } from "@entities/location/district";

export const coordinateQueryKeys = {
  index: ["coordinate"],
  findByCurrentLocation: () => [
    ...coordinateQueryKeys.index,
    "current-location",
  ],
  findByDistrict: (district: District) => [
    ...coordinateQueryKeys.index,
    "district",
    district,
  ],
} as const;
