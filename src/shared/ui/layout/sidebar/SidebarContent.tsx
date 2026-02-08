import { Button } from "@shared/ui/base/Button";
import { FavoriteSidebarContent } from "@features/sidebar/ui/favorite/FavoriteSidebarContent";
import { SearchSidebarContent } from "@features/sidebar/ui/search/SearchSidebarContent";
import { X } from "lucide-react";

interface Props {
  category: "search" | "favorite";
  onClose: () => void;
}

export function SidebarContent({ category, onClose }: Readonly<Props>) {
  return (
    <div className="flex flex-col size-full bg-white shadow-sm overflow-hidden text-left">
      <div className="px-4 pt-4 pb-0 flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {category === "search" ? "검색" : "저장한 장소"}
        </h2>

        <Button
          variant="ghost"
          size="icon"
          className="size-8"
          onClick={onClose}
        >
          <X className="size-5 sm:hidden" />
        </Button>
      </div>

      {category === "search" ? (
        <SearchSidebarContent />
      ) : (
        <FavoriteSidebarContent />
      )}
    </div>
  );
}
