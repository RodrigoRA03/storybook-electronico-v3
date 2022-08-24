import PropTypes from "prop-types";
import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TextAreaNotasProps } from "../../interfaces/anexosForm";
import { FormInputTextarea } from "../ui/formTextArea";
import AnexosFormContext from "./AnexosContext";

export const TextAreaNotas = ({
  name = "notas",
  label = "Notas",
  placeholder = "",
  disabled = false,
  ...props
}: TextAreaNotasProps) => {
  const { notas, formDisabled } = useContext(AnexosFormContext);
  const { setValue } = useFormContext();

  useEffect(() => {
    if (notas) {
      setValue(name, notas, { shouldDirty: true });
    }
  }, [notas]);

  return (
    <FormInputTextarea
      name={name}
      label={label}
      disabled={disabled || formDisabled}
      {...props}
    />
  );
};
