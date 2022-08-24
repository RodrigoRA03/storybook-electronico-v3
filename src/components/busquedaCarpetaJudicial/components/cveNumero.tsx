import { InputText } from "primereact/inputtext";
import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormInputText } from "../../ui/formInputText";
import { busquedaCarpetaJudicialContext } from "../busquedaCarpetaJudicialContext";

export const CVENumero = ({
  name = "cveNumero",
  label = "Número",
  disabled = false,
  ...props
}) => {
  const { numero, isDisabled } = useContext(busquedaCarpetaJudicialContext);
  const { setValue } = useFormContext();

  useEffect(() => {
    if (numero) {
      setValue(name, numero, { shouldDirty: true });
    }
  }, [numero]);

  return (
    <FormInputText
      label={label}
      name={name}
      disabled={isDisabled || disabled}
      {...props}
    />
  );
};
