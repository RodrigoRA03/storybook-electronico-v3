import { SelectButton } from "primereact/selectbutton";
import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

export const FormSelectButton = ({ label, handleSubmitSelect, ...props }) => {
    const methods = useFormContext();

    return (
        <Controller
            name={props.name || ""}
            control={methods.control}
            render={({ field: { onChange, value } }) => (
                <SelectButton
                    onChange={(e) => {
                        onChange(e.value);
                        handleSubmitSelect ? handleSubmitSelect(e.value) : onChange(e.value);
                    }
                    }
                    value={value}
                    {...props}
                />
            )}
            rules={props.rules}
        />        
    )
}

FormSelectButton.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
}