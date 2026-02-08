import { useRef } from "react";
import { Button } from "../base/Button";
import { ButtonGroup } from "../base/ButtonGroup";
import { Field, FieldLabel } from "../base/Field";
import { Input } from "../base/Input";

type Props = {
  id: string;
  label?: string;
  onButtonClick: (value: string) => void;
  placeholder?: string;
  buttonText: string;
};

export function InputField({
  id,
  label,
  onButtonClick,
  placeholder,
  buttonText,
}: Readonly<Props>) {
  const inputRef = useRef<HTMLInputElement>(null);

  function onAction() {
    const value = inputRef.current?.value ?? "";
    onButtonClick(value);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onAction();
    }
  }

  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      <ButtonGroup>
        <Input
          id={id}
          placeholder={placeholder}
          ref={inputRef}
          onKeyDown={onKeyDown}
        />
        <Button variant="outline" onClick={() => onAction()}>
          {buttonText}
        </Button>
      </ButtonGroup>
    </Field>
  );
}
