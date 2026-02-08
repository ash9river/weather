import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/base/Button";

interface Props {
  sidebarMenu: React.ReactNode;
  panelContent?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({
  sidebarMenu,
  panelContent,
  isOpen,
  onToggle,
}: Readonly<Props>) {
  return (
    <div className="flex h-screen relative bg-transparent">
      <aside className="w-[72px] h-full border-r bg-white shrink-0 z-[110] relative">
        <nav className="flex flex-col w-full">{sidebarMenu}</nav>
      </aside>

      <div
        className={cn(
          "absolute top-0 h-full z-[100] transition-transform duration-300 ease-in-out flex left-[72px]",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <aside className="h-full bg-white shadow-xl border-r overflow-hidden w-[calc(100vw-72px)] sm:w-[390px]">
          {panelContent}
        </aside>

        <Button
          variant="outline"
          size="icon"
          onClick={onToggle}
          className={cn(
            "absolute top-1/2 -right-5 -translate-y-1/2 w-5 h-12 z-[110]",
            "bg-white border-l-0 rounded-l-none rounded-r-md shadow-md",
            "flex items-center justify-center p-0 hover:bg-muted"
          )}
        >
          {isOpen ? (
            <ChevronLeft className="size-3 text-muted-foreground" />
          ) : (
            <ChevronRight className="size-3 text-muted-foreground" />
          )}
        </Button>
      </div>
    </div>
  );
}
