import { findCoordinatesByDistrictQueryOptions } from "./internal/api/queries/findCoordinatesByDistrictQueryOptions";
import { findCurrentCoordinatesQueryOptions } from "./internal/api/queries/findCurrentCoordinatesQueryOptions";

export type { Coordinates } from "./internal/model/types/Coordinates.types";

export const coordinate = {
  queryOptions: {
    findCoordinatesByDistrict: findCoordinatesByDistrictQueryOptions,
    findCurrentCoordinates: findCurrentCoordinatesQueryOptions,
  },
};
