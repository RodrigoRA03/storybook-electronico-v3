import { Button } from "primereact/button";
import { useContext } from "react";
import AnexosFormContext from "./AnexosContext";
interface ButtonSubmitProps {
  label?: string;
}

export const ButtonSubmit = ({ label = "Guardar" }: ButtonSubmitProps) => {
  const { formDisabled } = useContext(AnexosFormContext);
  return <Button label={label} type="submit" disabled={formDisabled} />;
};
