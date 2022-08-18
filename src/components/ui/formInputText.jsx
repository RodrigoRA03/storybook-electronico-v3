import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import { InputText } from "primereact/inputtext";

export const FormInputText = ({ label, ...props }) => {
  const methods = useFormContext();
  const { control, errors } = methods;

  return (
    <Controller
      name={props.name || ""}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className={props.className}>
          <span className="p-float-label ">
            <InputText
              onChange={(e) => onChange(e.target.value)}
              {...props}
              {...methods.register(props.name)}
              label={label}
              value={value || ""}
            />
            <label
              htmlFor={props.label || ""}
              className="ml-2"
              style={{ fontFamily: "inherit" }}
            >
              {label}
            </label>
          </span>
          <ErrorMessage
            errors={errors}
            name={props.name}
            render={({ message }) => (
              <small className="p-error">{message}</small>
            )}
          />
        </div>
      )}
      rules={props.rules}
    />
  );
};

FormInputText.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};
