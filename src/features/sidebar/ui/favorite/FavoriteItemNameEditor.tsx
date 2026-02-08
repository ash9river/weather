import { Button } from "@shared/ui/base/Button";
import { Input } from "@shared/ui/base/Input";
import { Check, X } from "lucide-react";
import type { Ref } from "react";

type Props = {
  inputRef: Ref<HTMLInputElement>;
  onSave: () => void;
  onClose: () => void;
};

export function FavoriteItemNameEditor({
  inputRef,
  onSave,
  onClose,
}: Readonly<Props>) {
  return (
    <div className="flex items-center gap-2">
      <Input ref={inputRef} className="h-8 text-sm" autoFocus />
      <Button size="icon-sm" onClick={onSave}>
        <Check className="size-3" />
      </Button>
      <Button size="icon-sm" variant="ghost" onClick={onClose}>
        <X className="size-3" />
      </Button>
    </div>
  );
}
