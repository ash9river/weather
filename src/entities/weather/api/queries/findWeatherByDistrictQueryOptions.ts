import type { District } from "@entities/location/district";
import { type DefaultError, queryOptions } from "@tanstack/react-query";
import { weatherQueryKeys } from "../config/weatherQueryKeys";
import { httpClient } from "@shared/api";
import { weatherEndpoint } from "../config/weatherEndpoint";
import { mapWeatherResponseToData } from "../mapper/mapWeatherResponseToData";
import type { WeatherResponse } from "../../model/types/weatherResponse.types";
import type { Weather } from "../../model/types/weather.types";

export function findWeatherByDistrictQueryOptions(district: District) {
  return queryOptions<WeatherResponse, DefaultError, Weather>({
    queryKey: weatherQueryKeys.findByDistrict(district),
    queryFn: async ({ signal }) =>
      httpClient.weather.get({
        url: weatherEndpoint.byDistrict(district),
        options: {
          signal,
        },
      }),
    select: (response) => mapWeatherResponseToData(response),
  });
}
