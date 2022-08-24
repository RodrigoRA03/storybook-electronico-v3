import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  busquedaCarpetaJudicialInterface,
  Inputs,
} from "../../interfaces/busquedaCarpetaJudicial";
import { busquedaCarpetaJudicialContext } from "./busquedaCarpetaJudicialContext";

export const BusquedaCarpetaJudicial = ({
  children,
  adscripcion,
  instancia,
  materia,
  tipoNumero,
  numero,
  anio,
  lstAdscripciones,
  lstInstancias,
  lstMaterias,
  lstTipoNumeros,
  isDisabled = false,
  getAdscripcionSelected,
  getInstanciaSelected,
  getMateriaSelected,
  getTipoNumeroSelected,
  getDataForm,
}: busquedaCarpetaJudicialInterface) => {
  const methods = useForm<Inputs>();
  const { Provider } = busquedaCarpetaJudicialContext;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getDataForm && getDataForm(data);
  };

  return (
    <Provider
      value={{
        adscripcion,
        instancia,
        materia,
        tipoNumero,
        numero,
        anio,
        lstAdscripciones,
        lstInstancias,
        lstMaterias,
        lstTipoNumeros,
        isDisabled,
        getAdscripcionSelected,
        getInstanciaSelected,
        getMateriaSelected,
        getTipoNumeroSelected,
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </Provider>
  );
};
