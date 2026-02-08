import { ItemContent, ItemTitle } from "@shared/ui/base/Item";

type Props = {
  title: string;
};

export function SearchItemTitle({ title }: Readonly<Props>) {
  return (
    <ItemContent className="ml-1">
      <ItemTitle className="text-[15px] font-semibold">{title}</ItemTitle>
    </ItemContent>
  );
}
