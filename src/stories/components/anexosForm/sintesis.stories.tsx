import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TextAreaSintesis } from "../../../components/anexosForm";

export default {
  title: "Componentes Generales/AnexosForm/Inputs",
  component: TextAreaSintesis,
} as ComponentMeta<typeof TextAreaSintesis>;

const template: ComponentStory<typeof TextAreaSintesis> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <TextAreaSintesis {...args} />
    </FormProvider>
  );
};

export const FormSintesis = template.bind({});
FormSintesis.args = {
  name: "sintesis",
  label: "Sintesis",
  placeholder: "",
  disabled: false,
  rules: {
    required: {
      value: true,
      message: "El campo sintesis es requerido",
    },
  },
};
