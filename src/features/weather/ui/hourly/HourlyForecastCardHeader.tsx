import { CardDescription, CardHeader, CardTitle } from "@shared/ui/base/Card";

export function HourlyForecastCardHeader() {
  return (
    <CardHeader className="border-b mb-0 pb-4">
      <CardTitle className="text-lg font-bold">24시간 상세 예보</CardTitle>
      <CardDescription>오늘의 시간대별 기온 변화</CardDescription>
    </CardHeader>
  );
}
