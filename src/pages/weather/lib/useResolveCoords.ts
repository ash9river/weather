import { coordinate } from "@entities/location/coordinate";
import type { District } from "@entities/location/district";
import { useQuery } from "@tanstack/react-query";

export function useResolveCoords(districtParam: District | null) {
  // 검색된 행정구역으로 좌표 가져옴
  const { data: searchCoords, isPending: isSearchLoading } = useQuery(
    coordinate.queryOptions.findCoordinatesByDistrict(districtParam)
  );

  const isSearchEmpty = !districtParam || districtParam.trim().length === 0;

  // 행정구역이 검색되지 않았을시 내 좌표 가져옴
  const { data: currentCoords, isPending: isGeoLoading } = useQuery(
    coordinate.queryOptions.findCurrentCoordinates(isSearchEmpty)
  );

  const finalCoords = searchCoords ?? currentCoords;

  return {
    coords: finalCoords ?? null,
    isLoading: isSearchEmpty ? isGeoLoading : isSearchLoading,
  };
}
