import type { District } from "@entities/location/district";
import { useFavoriteStore } from "@entities/location/favorite";
import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/base/Button";
import { ItemMedia } from "@shared/ui/base/Item";
import { Star } from "lucide-react";

type Props = {
  district: District;
};

export function FavoriteStarButton({ district }: Readonly<Props>) {
  const toggleFavorite = useFavoriteStore((state) => state.toggleFavorite);
  const favorites = useFavoriteStore((state) => state.favorites);

  const isFavorite = favorites.some(
    (favorite) => favorite.district === district
  );

  return (
    <ItemMedia>
      <Button
        variant="ghost"
        size="icon"
        className="size-9 hover:bg-yellow-50 rounded-full shrink-0"
        onClick={() => toggleFavorite(district)}
      >
        <Star
          className={cn(
            "size-5 transition-all",
            isFavorite
              ? "fill-yellow-400 text-yellow-400 scale-110"
              : "text-muted-foreground/30 hover:text-muted-foreground"
          )}
        />
      </Button>
    </ItemMedia>
  );
}
