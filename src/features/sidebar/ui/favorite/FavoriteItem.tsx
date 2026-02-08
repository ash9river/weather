import type { Favorite } from "@entities/location/favorite";
import { Item, ItemContent, ItemSeparator } from "@shared/ui/base/Item";
import { FavoriteStarButton } from "../common/FavoriteStarButton";
import { FavoriteItemTitle } from "./FavoriteItemTitle";
import { FavoriteItemWeatherSummary } from "./FavoriteItemWeatherSummary";
import { WeatherDetailActionButton } from "../common/WeatherDetailActionButton";

type ItemTitleProps = React.ComponentProps<typeof FavoriteItemTitle>;

type Props = {
  favorite: Favorite;
  showSeparator: boolean;
} & ItemTitleProps;

export function FavoriteItem({
  favorite,
  showSeparator,
  editingDistrict,
  setEditingDistrict,
}: Readonly<Props>) {
  return (
    <div key={`sidebar-favorite-item-${favorite.district}`}>
      <Item variant="default" className="group h-auto py-4 items-start">
        <FavoriteStarButton district={favorite.district} />

        <ItemContent className="ml-1 gap-2">
          <FavoriteItemTitle
            favorite={favorite}
            editingDistrict={editingDistrict}
            setEditingDistrict={setEditingDistrict}
          />

          <FavoriteItemWeatherSummary district={favorite.district} />
        </ItemContent>

        <WeatherDetailActionButton district={favorite.district} />
      </Item>
      {showSeparator && <ItemSeparator className="mx-4" />}
    </div>
  );
}
