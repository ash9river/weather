import { Card, CardContent } from "@shared/ui/base/Card";
import { TypographyLarge } from "@shared/ui/base/Typography";
import { AlertCircle } from "lucide-react";

export function NoWeatherDataFallback() {
  return (
    <Card className="border-dashed bg-muted/10 shadow-none">
      <CardContent className="flex flex-col items-center justify-center py-20">
        <AlertCircle className="size-10 text-muted-foreground/50 mb-4" />
        <TypographyLarge>
          해당 장소의 날씨 정보가 제공되지 않습니다.
        </TypographyLarge>
      </CardContent>
    </Card>
  );
}
