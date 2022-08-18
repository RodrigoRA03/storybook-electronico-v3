import { AnexosForm as AnexosFormHOC } from "./anexosForm";
import { ButtonReset } from "./buttonReset";
import { ButtonSubmit } from "./buttonSubmit";
import { TextAreaNotas } from "./textAreaNotas";
import { TextAreaSintesis } from "./textAreaSintesis";

export { TextAreaNotas } from "./textAreaNotas";
export { TextAreaSintesis } from "./textAreaSintesis";
export { ButtonSubmit } from "./buttonSubmit";

export const AnexosFormComponent = Object.assign(AnexosFormHOC, {
  Notas: TextAreaNotas,
  Sintesis: TextAreaSintesis,
  ButtonSubmit,
  ButtonReset
});
