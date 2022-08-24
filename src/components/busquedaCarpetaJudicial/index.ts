import { BusquedaCarpetaJudicial as BusquedaCarpetaJudicialHOC2 } from "./busquedaCarpetaJudicial";
import { ButtonSubmitCarpetaJudicial } from "./components/buttonSubmit";
import { CVEAdscripcion } from "./components/cveAdscripcion";
import { CVEAnio } from "./components/cveAnio";
import { CVEInstancia } from "./components/cveInstancia";
import { CVEMateria } from "./components/cveMaterias";
import { CVENumero } from "./components/cveNumero";
import { CVETipoNumero } from "./components/cveTipoNumero";

export const BusquedaCarpetaComponent2 = Object.assign(
    BusquedaCarpetaJudicialHOC2,
    { 
        Adscripcion: CVEAdscripcion,
        Instancia: CVEInstancia,
        Materia: CVEMateria,
        TipoNumero: CVETipoNumero,
        Numero: CVENumero,
        Anio: CVEAnio,
        ButtonBuscar: ButtonSubmitCarpetaJudicial
        

    }
)

