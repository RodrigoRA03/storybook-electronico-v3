export interface busquedaCarpetaJudicialInterface {
    children?: JSX.Element
    adscripcion: string
    instancia: string
    materia: string
    tipoNumero: string
    numero: string
    anio: string
    lstAdscripciones: any,
    lstInstancias: any,
    lstMaterias: any,
    lstTipoNumeros: any
    handleChangeProps?: (id: string) => void
}

export type Inputs = {
    cveAdscripcion: string;
    cveInstancia: string;
    cveMateria: string;
    cveTipoNumero: string;
    cveNumero: string;
    cveAnio: string;
  };