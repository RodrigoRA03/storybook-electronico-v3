import { ToggleButton } from "primereact/togglebutton";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export const FormToggleButton = ({ label, handleSubmitToggle, ...props }) => {
  const methods = useFormContext();
  //const { libro, setLibro } = useState(false);
  return (
    <Controller
      name={props.name || ""}
      control={methods.control}
      render={({ field: { onChange, value } }) => (
        <ToggleButton
          onChange={(e) => {
            onChange(e.value);
            handleSubmitToggle
              ? handleSubmitToggle(e.value)
              : onChange(e.value);
          }}
          checked={value}
          {...props}
          onIcon="pi pi-book"
          offIcon="pi pi-align-justify"
          onLabel="Libro"
          offLabel="Tabla"
        />
      )}
      rules={props.rules}
    />
  );
};

FormToggleButton.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  //   onLabel: PropTypes.string,
  //   offLabel: PropTypes.string,
  //   rules: PropTypes.object,
};
