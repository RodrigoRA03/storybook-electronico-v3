import { InputText } from "primereact/inputtext";
import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
// import { InputTextCveNumeroProps } from "../../../interfaces/anexosForm";
import { FormInputText } from "../../ui/formInputText";
import { busquedaCarpetaJudicialContext } from "../busquedaCarpetaJudicialContext";

export const CVEAnio = ({
  name = "cveAnio",
  label = "Año",
  disabled = false,
  ...props
}) => {
  const { anio, handleChangeProps } = useContext(
    busquedaCarpetaJudicialContext
  );
  const { setValue } = useFormContext();

  useEffect(() => {
    if (anio) {
      setValue(name, anio, { shouldDirty: true });
    }
  }, [anio]);

  return (
      <FormInputText label={label} name={name} disabled={disabled} {...props} />
  );
};
