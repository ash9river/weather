import type { Coordinates } from "@entities/location/coordinate";

export const weatherEndpoint = {
  /**
   * 주소 기반 날씨 검색
   * @param district "서울특별시-종로구-청운동"
   */
  byDistrict: (district: string) => `?q=${district}`,
  /**
   * 위경도 좌표 기반
   * @description OpenWeatherMap API에서는 경도가 lon
   */
  byCoordinates: (coordinates: Coordinates) => {
    return `?lat=${coordinates.lat}&lon=${coordinates.lng}`;
  },
} as const;
