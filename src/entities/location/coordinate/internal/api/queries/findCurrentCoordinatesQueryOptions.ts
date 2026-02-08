import { queryOptions } from "@tanstack/react-query";
import type { Coordinates } from "../../model/types/Coordinates.types";
import { coordinateQueryKeys } from "../config/coordinateQueryKeys";
import { getCurrentLocation } from "../../model/services/getCurrentLocation";

export function findCurrentCoordinatesQueryOptions(enabled?: boolean) {
  return queryOptions<Coordinates>({
    queryKey: coordinateQueryKeys.findByCurrentLocation(),
    queryFn: getCurrentLocation,
    enabled,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    retry: 1,
  });
}
