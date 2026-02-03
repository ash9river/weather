import type { District } from "@entities/location/district";

export const coordinateQueryKeys = {
  index: ["coordinate"],
  findByDistrict: (district: District) => [
    ...coordinateQueryKeys.index,
    district,
  ],
} as const;
