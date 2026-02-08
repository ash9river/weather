import { Spinner } from "@shared/ui/base/Spinner";
import { TypographyMuted } from "@shared/ui/base/Typography";

export function WeatherLoading() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <Spinner className="size-10 text-blue-500" />
      <TypographyMuted className="font-medium text-base">
        날씨 정보를 가져오는 중...
      </TypographyMuted>
    </div>
  );
}
