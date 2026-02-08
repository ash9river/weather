import { Card, CardContent } from "@shared/ui/base/Card";
import { CurrentWeatherCardHeader } from "./CurrentWeatherCardHeader";
import { CurrentWeatherExtraInfo } from "./CurrentWeatherExtraInfo";
import { CurrentWeatherMainInfo } from "./CurrentWeatherMainInfo";
import type { Weather } from "@entities/weather";
import type { District } from "@entities/location/district";

type Props = {
  district: District;
  data: Weather;
};

export function CurrentWeatherCard({ district, data }: Readonly<Props>) {
  return (
    <Card className="shadow-sm bg-white">
      <CurrentWeatherCardHeader district={district} />
      <CardContent className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 gap-8">
        <CurrentWeatherMainInfo
          currentTemp={data.currentTemp}
          description={data.description}
        />
        <CurrentWeatherExtraInfo
          maxTemp={data.maxTemp}
          minTemp={data.minTemp}
        />
      </CardContent>
    </Card>
  );
}
