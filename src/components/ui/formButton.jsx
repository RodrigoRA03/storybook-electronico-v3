import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import { Button } from "primereact/button";

export const FormButton = ({ label, ...props }) => {
  const methods = useFormContext();
  return (
      <Button
        {...methods.register(props.name)}
        //Mostrar el texto del botón en color blanco
        label={label}
        style={{ color: "white", fontFamily: "Nunito" }}
        id={props.name || ""}
        {...props}
      />
  );
};

FormButton.prototype = {
  label: PropTypes.string,
  className: PropTypes.string,
};
