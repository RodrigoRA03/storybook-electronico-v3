import { createContext } from "react";

const defaultState = {
    sintesis:"",
    notas:"",
    formDisabled:false
}

const AnexosFormContext = createContext(defaultState);
export default AnexosFormContext;
