export interface AnexosFormInterfaces {
  children: JSX.Element;
  /**
   * Función para recoger los datos del formulario al hacer submit
   */
  getDataForm: (data: Inputs) => void;
  /**
   * parametro que setea el input de sintesis
   */
  sintesis: string;
  /**
   * parametro que setea el input de notas
   */
  notas: string;
  /**
   * parametro que deshabilita inputs y botones de forma global en el formulario
   */
  formDisabled: boolean;
}

export interface TextAreaSintesisProps {
  /**
   * parametro que se asiganara al nombre del input
   */
  name?: string;
  /**
   * parametro que se asiganará a la etiqueta <label></label>
   */
  label?: string;
  /**
   * parametro que se mostrara como una descripcion de textarea
   */
  placeholder?: string;
  /**
   * parametro que deshabilita solo el textarea
   */
  disabled?: boolean;
  /**
   * Reglas de validación para el textarea, consultar documentacion de react-hook-form
   */
  rules?: object;
}

export interface TextAreaNotasProps {
  /**
   * parametro que se asiganara al nombre del textarea <TextArea name="Nombre que asignaste">
   */
  name?: string;
  /**
   * parametro que se asiganará a la etiqueta <label></label>
   */
  label?: string;
  /**
   * parametro que se mostrara como una descripcion de textarea
   */
  placeholder?: string;
  /**
   * parametro que deshabilita solo el textarea
   */
  disabled?: boolean;
  /**
   * Reglas de validación para el textarea, consultar documentacion de react-hook-form
   */
  rules?: object;
}

export type Inputs = {
  sintesis: string;
  notas: string;
};
