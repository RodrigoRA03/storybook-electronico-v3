import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TextAreaSintesisProps } from "../../interfaces/anexosForm";
import { FormInputTextarea } from "../ui/formTextArea";
import AnexosFormContext from "./AnexosContext";

export const TextAreaSintesis = ({
  name = "sintesis",
  label = "sintesis",
  placeholder = "",
  disabled = false,
  ...props
}: TextAreaSintesisProps) => {
  const { sintesis, formDisabled } = useContext(AnexosFormContext);
  const { setValue } = useFormContext();

  useEffect(() => {
    if (sintesis) {
      setValue(name, sintesis, { shouldDirty: true });
    }
  }, [sintesis]);

  return (
    <div className="w-full mt-4">
      <FormInputTextarea
        name={name}
        label={label}
        disabled={disabled || formDisabled}
        {...props}
      />
    </div>
  );
};
