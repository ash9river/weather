import { TypographySmall, TypographyH1 } from "@shared/ui/base/Typography";
import { cn } from "@shared/lib/utils";

type Props = {
  label: string;
  value: string | number;
  variant?: "default" | "high" | "low";
  className?: string;
};

export function CurrentWeatherStat({
  label,
  value,
  variant = "default",
  className,
}: Readonly<Props>) {
  const valueColors = {
    default: "text-slate-900",
    high: "text-orange-500",
    low: "text-blue-500",
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <TypographySmall className="uppercase text-muted-foreground tracking-wider block mb-1">
        {label}
      </TypographySmall>
      <TypographyH1 className={cn("leading-none", valueColors[variant])}>
        {value}°
      </TypographyH1>
    </div>
  );
}
