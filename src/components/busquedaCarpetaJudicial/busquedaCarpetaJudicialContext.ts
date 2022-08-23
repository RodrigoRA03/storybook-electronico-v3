import { createContext } from "react";
import { busquedaCarpetaJudicialInterface } from "../../interfaces/busquedaCarpetaJudicial";

const defaultState: busquedaCarpetaJudicialInterface = {
    adscripcion: "",
    instancia: "",
    materia: "",
    tipoNumero: "",
    numero: "",
    anio: "",
    lstAdscripciones: [],
    lstInstancias: [],
    lstMaterias: [],
    lstTipoNumeros: []
}
export const busquedaCarpetaJudicialContext = createContext(defaultState) 