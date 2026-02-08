import { weatherQueryOptions } from "./api/queries";
export type { Weather } from "./model/types/weather.types";

export const weather = {
  queryOptions: weatherQueryOptions,
} as const;
