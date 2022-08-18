import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { TextAreaNotas } from "../../../components/anexosForm";

export default {
  title: "Componentes Generales/AnexosForm/Inputs",
  component: TextAreaNotas,
} as ComponentMeta<typeof TextAreaNotas>;

const template: ComponentStory<typeof TextAreaNotas> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <TextAreaNotas {...args} />
    </FormProvider>
  );
};

export const FormNotas = template.bind({});
FormNotas.args = {
  name: "notas",
  label: "Notas",
  placeholder: "",
  disabled: false,
  rules: {
    required: {
      value: true,
      message: "El campo notas es requerido",
    },
  },
};
