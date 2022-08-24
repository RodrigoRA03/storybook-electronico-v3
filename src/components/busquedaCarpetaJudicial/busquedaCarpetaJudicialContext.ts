import { createContext } from "react";
import { busquedaCarpetaJudicialInterface } from "../../interfaces/busquedaCarpetaJudicial";

const defaultState: busquedaCarpetaJudicialInterface = {
  adscripcion: 1,
  instancia: 1,
  materia: 1,
  tipoNumero: 1,
  numero: 5,
  anio: 2020,
  isDisabled: false,
  lstAdscripciones: [],
  lstInstancias: [],
  lstMaterias: [],
  lstTipoNumeros: [],
};
export const busquedaCarpetaJudicialContext = createContext(defaultState) 