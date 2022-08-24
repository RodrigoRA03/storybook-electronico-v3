import { Button } from "primereact/button";
import { useContext } from "react";
import { busquedaCarpetaJudicialContext } from "../busquedaCarpetaJudicialContext";

export const ButtonSubmitCarpetaJudicial = ({ disabled }: any) => {
  const { isDisabled } = useContext(busquedaCarpetaJudicialContext);

  return (
    <Button label={"Buscar"} type="submit" disabled={isDisabled || disabled} />
  );
}; 