import { SidebarItem } from "./SidebarItem";
import { Home, Search, Star } from "lucide-react";

type Category = "search" | "favorite" | "home";

type Props = {
  currentCategory: "search" | "favorite";
  onSideBarItemClick: (name: Category) => void;
};

export function SidebarMenu({
  currentCategory,
  onSideBarItemClick,
}: Readonly<Props>) {
  return (
    <>
      <SidebarItem
        icon={<Home />}
        label="내 주변 날씨"
        onClick={() => onSideBarItemClick("home")}
      />
      <div className="h-[1px] w-full bg-gray-200 " />
      <SidebarItem
        icon={<Search />}
        label="검색"
        isActive={currentCategory === "search"}
        onClick={() => onSideBarItemClick("search")}
      />
      <SidebarItem
        icon={<Star />}
        label="즐겨찾기"
        isActive={currentCategory === "favorite"}
        onClick={() => onSideBarItemClick("favorite")}
      />
    </>
  );
}
