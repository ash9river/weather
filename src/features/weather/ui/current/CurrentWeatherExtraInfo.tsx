import { CurrentWeatherStat } from "./CurrentWeatherStat";

type Props = {
  maxTemp: number;
  minTemp: number;
};

export function CurrentWeatherExtraInfo({ maxTemp, minTemp }: Readonly<Props>) {
  return (
    <div className="grid grid-cols-2 gap-8 border-t border-slate-100 md:border-t-0 md:border-l pt-6 md:pt-0 md:pl-8 w-full md:w-auto text-left">
      <CurrentWeatherStat label="최고" value={maxTemp} variant="high" />
      <CurrentWeatherStat label="최저" value={minTemp} variant="low" />
    </div>
  );
}
