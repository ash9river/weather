import type { Weather } from "@entities/weather";
import { Item, ItemContent, ItemTitle } from "@shared/ui/base/Item";
import { Separator } from "@shared/ui/base/Seperator";
import { TypographyLarge, TypographySmall } from "@shared/ui/base/Typography";

type Props = {
  hour: Weather["hourly"][number];
  showSeparator: boolean;
};

export function HourlyForecastCardItem({
  hour,
  showSeparator,
}: Readonly<Props>) {
  return (
    <Item
      key={hour.time}
      variant="default"
      className="hover:bg-muted/50 transition-colors border-none rounded-none"
    >
      <ItemContent className="py-4 px-6 flex flex-row items-center justify-between w-full">
        <div className="w-24">
          <ItemTitle className="text-[15px] font-semibold">
            {hour.time}
          </ItemTitle>
        </div>
        <div className="w-24 text-right">
          <TypographyLarge>{hour.temp}°</TypographyLarge>
        </div>
      </ItemContent>
      {showSeparator && <Separator />}
    </Item>
  );
}
