import type { District } from "@entities/location/district";
import { CardHeader } from "@shared/ui/base/Card";
import { TypographyH4, TypographyMuted } from "@shared/ui/base/Typography";

type Props = {
  district: District;
};

export function CurrentWeatherCardHeader({ district }: Readonly<Props>) {
  return (
    <CardHeader className="pb-2 text-left">
      <TypographyH4 className="text-blue-600 text-sm font-bold tracking-widest uppercase">
        Current Weather
      </TypographyH4>
      <TypographyMuted>{district}의 현재 날씨 정보</TypographyMuted>
    </CardHeader>
  );
}
