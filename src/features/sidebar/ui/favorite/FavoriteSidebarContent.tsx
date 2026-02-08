import { useState } from "react";
import { ItemGroup } from "@shared/ui/base/Item";
import { useFavoriteStore } from "@entities/location/favorite";
import { SidebarNoContent } from "../common/SidebarNoContent";
import type { District } from "@entities/location/district";
import { FavoriteItem } from "./FavoriteItem";

export function FavoriteSidebarContent() {
  const favorites = useFavoriteStore((state) => state.favorites);

  const [editingDistrict, setEditingDistrict] = useState<District | null>(null);

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar p-4 mt-2">
      <ItemGroup>
        {favorites.length > 0 ? (
          favorites.map((favorite, index) => (
            <FavoriteItem
              key={`favorite-list-${favorite.district}-${index}`}
              favorite={favorite}
              showSeparator={index != favorites.length - 1}
              editingDistrict={editingDistrict}
              setEditingDistrict={setEditingDistrict}
            />
          ))
        ) : (
          <SidebarNoContent type="favorite" />
        )}
      </ItemGroup>
    </div>
  );
}
