import type { District } from "@entities/location/district";
import { useSidePanelStore } from "@features/sidebar/model/useSidePanelStore";
import { Button } from "@shared/ui/base/Button";
import { ItemActions } from "@shared/ui/base/Item";
import { Link } from "react-router-dom";

type Props = {
  district: District;
};

export function WeatherDetailActionButton({ district }: Readonly<Props>) {
  const closePanel = useSidePanelStore((state) => state.closePanel);
  return (
    <ItemActions className="self-center">
      <Button
        asChild
        variant="outline"
        className="hover:bg-gray-100"
        onClick={() => closePanel()}
      >
        <Link to={`?district=${district}`}>날씨 보기</Link>
      </Button>
    </ItemActions>
  );
}
