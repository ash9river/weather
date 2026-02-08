import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { weather } from "@entities/weather";
import { CurrentWeatherCard } from "@features/weather/ui/current/CurrentWeatherCard";
import { HourlyForecastCard } from "@features/weather/ui/hourly/HourlyForecastCard";
import { WeatherPageHeader } from "./WeatherPageHeader";
import { NoWeatherDataFallback } from "./NoWeatherDataFallback";
import type { District } from "@entities/location/district";
import { useResolveCoords } from "../lib/useResolveCoords";
import { WeatherLoading } from "./WeatherLoading";

export function WeatherMainPage() {
  const [searchParams] = useSearchParams();

  const districtParam = searchParams.get("district") as District | null;

  const { coords, isLoading: isCoordsLoading } =
    useResolveCoords(districtParam);

  const { data: weatherData, isLoading } = useQuery(
    weather.queryOptions.findByCoordinates(coords ?? null)
  );

  if (isLoading || isCoordsLoading) {
    return <WeatherLoading />;
  }

  return (
    <div className="p-6 max-w-3xl h-full mx-auto space-y-8 text-left gap-6">
      <WeatherPageHeader title={districtParam ?? "내 주변 날씨"} />
      {weatherData ? (
        <>
          <CurrentWeatherCard
            district={districtParam ?? "내 위치"}
            data={weatherData}
          />
          <HourlyForecastCard hourlyData={weatherData.hourly} />
        </>
      ) : (
        <NoWeatherDataFallback />
      )}
    </div>
  );
}
