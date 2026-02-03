import { findWeatherByDistrictQueryOptions } from "./findWeatherByDistrictQueryOptions";
import { findWeatherByCoordinatesQueryOptions } from "./findWeatherByCoordinatesQueryOptions";

export const weatherQueryOptions = {
  findByDistrict: findWeatherByDistrictQueryOptions,
  findByCoordinates: findWeatherByCoordinatesQueryOptions,
} as const;
