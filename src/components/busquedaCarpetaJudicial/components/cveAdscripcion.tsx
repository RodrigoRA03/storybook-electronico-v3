import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormDropdown } from "../../ui/formDropdown";
import { busquedaCarpetaJudicialContext } from "../busquedaCarpetaJudicialContext";

export const CVEAdscripcion = () => {
    const {
      lstAdscripciones,
      adscripcion,
      isDisabled,
      getAdscripcionSelected,
    } = useContext(busquedaCarpetaJudicialContext);
    const { setValue } = useFormContext();

    useEffect(() => {
      if (adscripcion) {
        setValue("cveAdscripcion", adscripcion, { shouldDirty: true });
      }
    }, [adscripcion]);

    return (
      <FormDropdown
        name="cveAdscripcion"
        options={lstAdscripciones}
        optionLabel="DesJuz"
        optionValue="IdJuzgado"
        label="Juzgado"
        handleChangeDropdown={getAdscripcionSelected}
        disabled={isDisabled}
      />
    );
};
