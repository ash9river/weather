import { TypographyMuted } from "@shared/ui/base/Typography";
import { Search, Star } from "lucide-react";

type Props = {
  type: "search" | "favorite";
};

const contentConfig = {
  search: {
    Icon: Search,
    message: "검색 결과가 없습니다.",
  },
  favorite: {
    Icon: Star,
    message: "저장한 장소가 없습니다.",
  },
};

export function SidebarNoContent({ type }: Readonly<Props>) {
  const { Icon, message } = contentConfig[type];

  return (
    <div className="py-20 text-center flex flex-col items-center gap-2">
      <Icon className="size-8 text-muted-foreground opacity-20" />
      <TypographyMuted className="text-muted-foreground opacity-60 font-bold">
        {message}
      </TypographyMuted>
    </div>
  );
}
