import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormDropdown } from "../../ui/formDropdown";
import { busquedaCarpetaJudicialContext } from "../busquedaCarpetaJudicialContext";

export const CVEInstancia = () => {
    const { lstInstancias, instancia, handleChangeProps } = useContext( busquedaCarpetaJudicialContext );
    const { setValue } = useFormContext();
    
    useEffect(() => {
        if(instancia){
            setValue("cveInstancia", instancia, {shouldDirty: true});
        }
    }, [instancia])

  return (
    <FormDropdown
        name="cveInstancia"
        options={lstInstancias}
        optionLabel="descInstancia"
        optionValue="cveInstancia"
        label="Instancias"
        handleChangeDropdown={handleChangeProps}
    />
  );
};