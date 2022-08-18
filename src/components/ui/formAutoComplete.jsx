import { AutoComplete } from "primereact/autocomplete";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import { classNames } from "primereact/utils";
import { ErrorMessage } from "@hookform/error-message";

export const FormAutoComplete = ({
  handleChangeAutoComplete,
  itemsList,
  ...props
}) => {
  const methods = useFormContext();
  const { control, errors } = methods;
  return (
    <>
      <Controller
        name={props.name}
        control={methods.control}
        render={({ field: { onChange, value }, fieldState }) => (
          <div>
            <span className="p-float-label ">
              <AutoComplete
                value={value || ""}
                onChange={(e) => {
                  onChange(e.value);
                  handleChangeAutoComplete && handleChangeAutoComplete(e.value);
                }}
                {...props}
              />
              <label
                htmlFor={props.label || ""}
                className="ml-1 -mt-1"
                style={{ fontFamily: "inherit" }}
              >
                {props.label}
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
    </>
  );
};

FormAutoComplete.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  itemsList: PropTypes.array.isRequired,
  rules: PropTypes.object,
  dropdown: PropTypes.bool,
  forceSelection: PropTypes.bool,
  ariaLabel: PropTypes.string,
  placeholder: PropTypes.string,
  field: PropTypes.string,
};
