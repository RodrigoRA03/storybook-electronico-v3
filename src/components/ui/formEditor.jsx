import { Controller, useFormContext } from "react-hook-form"
import { Editor } from 'primereact/editor';


export const FormEditor = ({...props}) => {
    const methods = useFormContext();
    return(
        <>
         <Controller
           name={props.name || ""}
           control={methods.control}
           render={({ field:{onChange, value}}) => (
                <Editor 
                   {...props}
                   style={{height:'320px'}} 
                   value={value || ''} 
                   onTextChange={(e) => onChange(e.htmlValue)} 
                />
              )}
         />
        </>
    )
}