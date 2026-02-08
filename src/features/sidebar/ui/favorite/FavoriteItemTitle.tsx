import type { District } from "@entities/location/district";
import { useFavoriteStore, type Favorite } from "@entities/location/favorite";
import { Button } from "@shared/ui/base/Button";
import { ItemTitle } from "@shared/ui/base/Item";
import { Pencil } from "lucide-react";
import { useRef } from "react";
import { FavoriteItemNameEditor } from "./FavoriteItemNameEditor";

type Props = {
  favorite: Favorite;
  editingDistrict: District | null;
  setEditingDistrict: (district: District | null) => void;
};

export function FavoriteItemTitle({
  favorite,
  editingDistrict,
  setEditingDistrict,
}: Readonly<Props>) {
  const updateName = useFavoriteStore((state) => state.updateName);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleEditStart = (district: District, currentName: string) => {
    if (inputRef.current) {
      inputRef.current.value = currentName;
    }
    setEditingDistrict(district);
  };

  const handleEditSave = (district: District) => {
    updateName(district, inputRef.current?.value ?? null);
    setEditingDistrict(district);
  };

  return (
    <>
      {editingDistrict === favorite.district ? (
        <FavoriteItemNameEditor
          inputRef={inputRef}
          onSave={() => handleEditSave(favorite.district)}
          onClose={() => setEditingDistrict(null)}
        />
      ) : (
        <div className="flex items-center gap-2 group/title">
          <ItemTitle className="text-[15px] font-semibold">
            {favorite.name ?? favorite.district}
          </ItemTitle>
          <Button
            variant="ghost"
            size="icon"
            className="size-6 opacity-0 group-hover/title:opacity-100 transition-opacity"
            onClick={() =>
              handleEditStart(
                favorite.district,
                favorite.name ?? favorite.district
              )
            }
          >
            <Pencil className="size-3 text-muted-foreground" />
          </Button>
        </div>
      )}
    </>
  );
}
