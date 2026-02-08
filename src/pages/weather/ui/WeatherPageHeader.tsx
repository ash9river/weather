import { TypographyH1, TypographyMuted } from "@shared/ui/base/Typography";

type Props = {
  title: string;
};

const formattedDate = new Date().toLocaleDateString("ko-KR", {
  month: "long",
  day: "numeric",
  weekday: "long",
});

export function WeatherPageHeader({ title }: Readonly<Props>) {
  return (
    <div className="flex items-end justify-between pb-6 border-b border-border">
      <div className="space-y-1 text-left">
        <TypographyH1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-left">
          {title}
        </TypographyH1>

        <TypographyMuted className="text-sm font-medium">
          {formattedDate}
        </TypographyMuted>
      </div>
    </div>
  );
}
