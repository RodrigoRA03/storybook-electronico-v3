import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormDropdown } from "../../ui/formDropdown";
import { busquedaCarpetaJudicialContext } from "../busquedaCarpetaJudicialContext";

export const CVETipoNumero = () => {
    const { lstTipoNumeros, tipoNumero, handleChangeProps } = useContext( busquedaCarpetaJudicialContext );
    const { setValue } = useFormContext();
    
    useEffect(() => {
        if(tipoNumero){
            setValue("cveTipoNumero", tipoNumero, {shouldDirty: true});
        }
    }, [tipoNumero])
  return (
    <FormDropdown
      name="cveTipoNumero"
      options={lstTipoNumeros}
      optionLabel="descTipoNumeroObtenido"
      optionValue="cveTipoNumero"
      label="Tipo de Carpeta"
      handleChangeDropdown={handleChangeProps}
    />
  );
};
