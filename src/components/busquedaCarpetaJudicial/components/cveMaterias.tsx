import { useContext, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormDropdown } from "../../ui/formDropdown";
import { busquedaCarpetaJudicialContext } from "../busquedaCarpetaJudicialContext";

export const CVEMateria = () => {
    const { lstMaterias, materia, isDisabled, getMateriaSelected } = useContext(
      busquedaCarpetaJudicialContext
    );
    const { setValue } = useFormContext();

    useEffect(() => {
      if (materia) {
        setValue("cveMateria", materia, { shouldDirty: true });
      }
    }, [materia]);

    return (
      <FormDropdown
        name="cveMateria"
        options={lstMaterias}
        optionLabel="descMateria"
        optionValue="cveMateria"
        label="Materias"
        handleChangeDropdown={getMateriaSelected}
        disabled={isDisabled}
      />
    );
};