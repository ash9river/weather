import type { District } from "@entities/location/district";
import { useWeatherByDistrictQuery } from "@features/weather/api/useWeatherByDistrictQuery";
import { ItemDescription } from "@shared/ui/base/Item";
import { TypographyP, TypographySmall } from "@shared/ui/base/Typography";

type Props = {
  district: District;
};

export function FavoriteItemWeatherSummary({ district }: Readonly<Props>) {
  const {
    data: weather,
    isPending,
    isFetching,
    isError,
  } = useWeatherByDistrictQuery(district);

  if (isPending || (isFetching && !weather)) {
    return <TypographyP className="leading-none mt-4!">로딩중...</TypographyP>;
  }
  if (isError) {
    return (
      <TypographyP className="leading-none mt-0.5!">
        해당 장소의 정보가 제공되지 않습니다.
      </TypographyP>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <TypographyP className="leading-2">
        {weather?.description}, {weather?.currentTemp}°
      </TypographyP>
      <ItemDescription className="text-[11px] flex gap-2">
        <TypographySmall className="text-red-500">
          최고: {weather?.maxTemp}°
        </TypographySmall>
        <TypographySmall className="text-blue-500">
          최저: {weather?.minTemp}°
        </TypographySmall>
      </ItemDescription>
    </div>
  );
}
