import { Controller, useFormContext } from "react-hook-form";
import { InputTextarea } from "primereact/inputtextarea";
import { ErrorMessage } from "@hookform/error-message";
import PropTypes from "prop-types";

export const FormInputTextarea = ({ label, ...props }: any) => {
  const methods = useFormContext();
  const {
    control,
    formState: { errors },
  } = methods;

  return (
    <>
      <Controller
        name={props.name}
        control={control}
        render={({ field }: any) => (
          <div>
            <span className="p-float-label ">
              <InputTextarea
                {...field}
                {...props}
                rows={5}
                className="w-full"
                autoResize
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
              render={({ message }: any) => (
                <small className="p-error">{message.errorMessage}</small>
              )}
            />
          </div>
        )}
        rules={props.rules}
      />
    </>
  );
};

FormInputTextarea.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  // className: PropTypes.string,
};
