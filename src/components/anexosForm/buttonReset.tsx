import { Button } from "primereact/button";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import AnexosFormContext from "./AnexosContext";

export const ButtonReset = () => {
  const { reset } = useFormContext();
  const { formDisabled } = useContext(AnexosFormContext);

  const handleResetClick = () => {
    reset({
      sintesis: "",
      notas: "",
    });
  };
  return (
    <Button
      label="limpiar"
      type="button"
      onClick={handleResetClick}
      disabled={formDisabled}
    />
  );
};
