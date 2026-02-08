import { queryOptions, type DefaultError } from "@tanstack/react-query";
import type { kakaoCoordinatesResponseByDistrict } from "../../model/types/kakaoCoordinatesResponseByDistrict.types";
import type { Coordinates } from "../../model/types/Coordinates.types";
import type { District } from "../../../../district/internal/model/types/District.types";
import { coordinateQueryKeys } from "../config/coordinateQueryKeys";
import { httpClient } from "@shared/api";

export function findCoordinatesByDistrictQueryOptions(
  district: District | null
) {
  return queryOptions<
    kakaoCoordinatesResponseByDistrict,
    DefaultError,
    Coordinates
  >({
    queryKey: coordinateQueryKeys.findByDistrict(district ?? ""),

    queryFn: async ({ signal }) =>
      httpClient.kakao.get<kakaoCoordinatesResponseByDistrict>({
        url: "",
        options: {
          signal,
          config: {
            params: {
              query: district,
            },
          },
        },
      }),

    select: (data) => {
      if (!data.documents || data.documents.length === 0) {
        throw new Error("해당 주소의 위치 정보를 찾을 수 없습니다.");
      }

      const { x, y } = data.documents[0];

      return {
        lat: parseFloat(y),
        lng: parseFloat(x),
      };
    },

    enabled: !!district && district.trim().length > 0, // 주소가 있을 때만 쿼리 활성화
  });
}
