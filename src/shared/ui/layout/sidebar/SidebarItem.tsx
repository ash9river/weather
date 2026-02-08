import { cn } from "@shared/lib/utils";
import { Button } from "@shared/ui/base/Button";

type Props = {
  icon: React.ReactElement;
  label: string;
  className?: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function SidebarItem({
  icon,
  label,
  className,
  isActive,
  onClick,
}: Readonly<Props>) {
  return (
    <Button
      variant="ghost"
      // v4 스타일 대응: h-auto로 높이 제한을 풀고 py로 간격을 조절합니다.
      className={cn(
        "flex flex-col items-center justify-center w-full h-auto py-3 gap-1 rounded-none border-none",
        "transition-colors duration-200",
        isActive
          ? "bg-[#0068FF] text-white hover:bg-[#0058DD] hover:text-white"
          : "text-[#666] hover:bg-muted",
        className
      )}
      onClick={onClick}
    >
      {/* Lucide 아이콘 크기를 살짝 키워 가독성을 높입니다 */}
      <div
        className={cn(
          "[&_svg]:size-6",
          isActive ? "text-white" : "text-current"
        )}
      >
        {icon}
      </div>
      <span className="text-[11px] font-medium tracking-tighter">{label}</span>
    </Button>
  );
}
