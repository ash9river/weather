import type { Coordinates } from "@entities/location/coordinate";
import { queryOptions, type DefaultError } from "@tanstack/react-query";
import { weatherQueryKeys } from "../config/weatherQueryKeys";
import { httpClient } from "@shared/api";
import { weatherEndpoint } from "../config/weatherEndpoint";
import { mapWeatherResponseToData } from "../mapper/mapWeatherResponseToData";
import type { WeatherResponse } from "../../model/types/weatherResponse.types";
import type { Weather } from "../../model/types/weather.types";

export function findWeatherByCoordinatesQueryOptions(
  coordinates: Coordinates | null
) {
  return queryOptions<WeatherResponse, DefaultError, Weather>({
    queryKey: weatherQueryKeys.findByCoordinates(coordinates!),
    queryFn: async ({ signal }) =>
      httpClient.weather.get({
        url: weatherEndpoint.byCoordinates(coordinates!),
        options: {
          signal,
        },
      }),
    select: (response) => mapWeatherResponseToData(response),
    enabled: coordinates !== null,
  });
}
