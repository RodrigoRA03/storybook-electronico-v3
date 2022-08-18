import { InputSwitch } from "primereact/inputswitch";
import { Controller, useFormContext } from "react-hook-form"
import PropTypes from 'prop-types';

export const FormInputSwitch = ({ label, handleSubmitSwitch, ...props }) => {
    const methods = useFormContext();

    return (
        <Controller
            name={props.name || ""}
            control={methods.control}
            render={({ field: { onChange, value } }) => (
                <div className="flex">
                    <span className="mr-2"><strong>{label || ''}</strong></span>
                    <InputSwitch
                        onChange={(e) => {
                            onChange(e.value);
                            handleSubmitSwitch ? handleSubmitSwitch(e.value) : onChange(e.value);
                        }}
                        checked={props.value}
                        {...props}
                        style={{ lineHeight: 1 }}
                        value={props.value}
                    />
                    <span className="ml-2">{value = props.value ? props.mensajeuno : props.mensajedos}</span>
                </div>
            )}
            rules={props.rules}
        />
    )

}

FormInputSwitch.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    mensajeuno: PropTypes.string.isRequired,
    mensajedos: PropTypes.string.isRequired
}