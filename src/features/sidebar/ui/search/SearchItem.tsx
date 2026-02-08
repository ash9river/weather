import type { District } from "@entities/location/district";
import { Item, ItemSeparator } from "@shared/ui/base/Item";
import { FavoriteStarButton } from "../common/FavoriteStarButton";
import { SearchItemTitle } from "./SearchItemTitle";
import { WeatherDetailActionButton } from "../common/WeatherDetailActionButton";

type Props = {
  district: District;
  showSeparator: boolean;
};

export function SearchItem({
  district,
  showSeparator: isLast,
}: Readonly<Props>) {
  return (
    <div key={`searched-district-list-${district}`}>
      <Item variant="default" className="group h-auto py-3">
        <FavoriteStarButton district={district} />
        <SearchItemTitle title={district} />
        <WeatherDetailActionButton district={district} />
      </Item>
      {!isLast && <ItemSeparator className="mx-4" />}
    </div>
  );
}
