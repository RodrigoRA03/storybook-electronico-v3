export interface busquedaCarpetaJudicialInterface {
  children?: JSX.Element;
  /**
   *
   *id de la carpeta judicial que se seteará en el input juzgado
   *
   */
  adscripcion?: number;
  /**
   *
   *id que se seteará en el input instancia
   *
   */
  instancia?: number;
  /**
   *
   *id que se seteará en el input materia
   *
   */
  materia?: number;
  /**
   *
   *id que se seteará en el input tipo carpeta
   *
   */
  tipoNumero?: number;
  /**
   *
   *id que se seteará en el input numero
   *
   */
  numero?: number;
  /**
   *
   *id que se seteará en el input anio
   *
   */
  anio?: number;
  /**
   *
   *Arreglo de opciones para el dropdown carpeta judicial
   *
   */
  lstAdscripciones: any;
  /**
   *
   *arreglo de opciones para el dropdown instancias
   *
   */
  lstInstancias: any;
  /**
   *
   *arreglo de opciones para el dropdown materias
   *
   */
  lstMaterias: any;
  /**
   *
   *arreglo de opciones para el dropdown tipo carpetas
   *
   */
  lstTipoNumeros: any;
  /**
   *
   *boleano que deshabilita los input del formulario
   *
   */
  isDisabled?: boolean;
  /**
   *
   *función que retornara el cveAdcripcion del juzgado seleccionado
   *
   */
  getAdscripcionSelected?: (value: number) => void;
  /**
   *
   *función que retornara el cveInstancia de la instancia seleccionada
   *
   */
  getInstanciaSelected?: (value: number) => void;
  /**
   *
   *función que retornara el cveMateria de la materia seleccionada
   *
   */
  getMateriaSelected?: (value: number) => void;
  /**
   *
   *función que retornara el cveTipoNumero del tipo de carpeta seleccionado
   *
   */
  getTipoNumeroSelected?: (value: number) => void;
  /**
   *
   * Funcion que obtiene los datos del formulario al hacer submit
   *
   */
  getDataForm?: (data: Inputs) => void;
}

export type Inputs = {
    cveAdscripcion: string;
    cveInstancia: string;
    cveMateria: string;
    cveTipoNumero: string;
    cveNumero: string;
    cveAnio: string;
  };