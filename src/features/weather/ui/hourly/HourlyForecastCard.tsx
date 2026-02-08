import { Card, CardContent } from "@shared/ui/base/Card";
import { ItemGroup } from "@shared/ui/base/Item";
import { HourlyForecastCardHeader } from "./HourlyForecastCardHeader";
import { HourlyForecastCardItem } from "./HourlyForecastCardItem";
import type { Weather } from "@entities/weather";

interface HourlyForecastCardProps {
  hourlyData: Weather["hourly"];
}

export function HourlyForecastCard({ hourlyData }: HourlyForecastCardProps) {
  return (
    <Card>
      <HourlyForecastCardHeader />
      <CardContent className="p-0">
        <ItemGroup className="divide-y divide-border">
          {hourlyData?.map((hour, index) => (
            <HourlyForecastCardItem
              key={`hourly-list-${hour.time}`}
              hour={hour}
              showSeparator={index !== hourlyData.length - 1}
            />
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
