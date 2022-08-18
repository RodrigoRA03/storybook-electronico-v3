import { ErrorMessage } from "@hookform/error-message";
import { Calendar } from "primereact/calendar";
import { Controller, useFormContext } from "react-hook-form";

export const FormInputTime = ({ label, name, ...props }) => {
  const { control, errors } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div>
          <span className="p-float-label ">
            <Calendar
              {...props}
              id="time"
              onChange={() => onChange()}
              value={value || ""}
            />
            <label htmlFor={name}>{label}</label>
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
