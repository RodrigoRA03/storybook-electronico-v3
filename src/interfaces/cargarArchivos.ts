export interface CargarArchivosInterface {
  /**
   * id de la actuacion a la que se le cargaran los archivos
   */
  idActuacion: number;
  /**
   * propiedad que contiene el nombre con el que se visualizara el componente de carga de archivos
   */
  title?: string;
  /**
   * propiedas que contiene el nombre del campo que se va a cargar
   */
  name: string;
  /**
   * funcion que nos permite obtener el formdata para mandar a guardar los archivos
   */
  getDataFiles: (formData: any) => void;
  /**
   * pueden enviar caulquier atributo compatible con el componente de carga de archivos
   */
  [x: string]: any;
  /**
   * booleano para especificar si puede o no subir multiples archivos
   */
  multiple?: boolean;
}
