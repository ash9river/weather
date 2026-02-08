import { coordinate } from "@entities/location/coordinate";
import type { District } from "@entities/location/district";
import { weather } from "@entities/weather";
import { useQuery } from "@tanstack/react-query";

export function useWeatherByDistrictQuery(district: District) {
  const { data: searchCoords } = useQuery(
    coordinate.queryOptions.findCoordinatesByDistrict(district)
  );

  const finalCoords = searchCoords ?? null;

  return useQuery(weather.queryOptions.findByCoordinates(finalCoords));
}
