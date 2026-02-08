import { TypographyH1, TypographyLarge } from "@shared/ui/base/Typography";

type Props = {
  currentTemp: number;
  description: string;
};

export function CurrentWeatherMainInfo({
  currentTemp,
  description,
}: Readonly<Props>) {
  return (
    <div className="space-y-1 text-left">
      <TypographyH1 className="text-6xl">{currentTemp}°</TypographyH1>
      <TypographyLarge className="text-xl text-muted-foreground font-medium">
        {description}
      </TypographyLarge>
    </div>
  );
}
