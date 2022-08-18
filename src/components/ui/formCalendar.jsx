import React, { useState } from "react";
import { addLocale } from "primereact/api";
import { Calendar } from "primereact/calendar";
import { ErrorMessage } from "@hookform/error-message";
import { Controller, useFormContext } from "react-hook-form";
import { Dropdown } from "primereact/dropdown";
import PropTypes from "prop-types";

export const FormCalendar = ({ handleChangeCalendar, ...props }) => {
  const methods = useFormContext();

  const [fecha, setFecha] = useState(new Date());

  const monthTemplate = (e) => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
      />
    );
  };

  const yearTemplate = (e) => {
    return (
      <Dropdown
        value={e.value}
        options={e.options}
        onChange={(event) => e.onChange(event.originalEvent, event.value)}
        style={{ lineHeight: 1 }}
      />
    );
  };

  addLocale("es", {
    firstDayOfWeek: 1,
    dayNames: [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ],
    dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
    dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
    monthNames: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    monthNamesShort: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    today: "Hoy",
    clear: "Limpiar",
  });
  const { control, errors } = methods;
  return (
    <>
      <Controller
        name={props.name || ""}
        control={control}
        render={({ field: { onChange, value } }) => (
          <div>
            <span className="p-float-label ">
              <Calendar
                {...props}
                value={value || props.value}
                onChange={(e) => {
                  setFecha(e.value);
                  onChange(e.value);
                  handleChangeCalendar && handleChangeCalendar(e.value);
                }}
                locale="es"
                monthNavigatorTemplate={monthTemplate}
                yearNavigatorTemplate={yearTemplate}
                
                showIcon
              />
              <label htmlFor={props.label || ""} className="ml-1 -mt-1">
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

FormCalendar.propTypes = {
  name: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  monthNavigator: PropTypes.bool,
  yearNavigator: PropTypes.bool,
  yearRange: PropTypes.string,
  showButtonBar: PropTypes.bool,
};
