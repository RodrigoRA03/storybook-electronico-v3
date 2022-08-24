import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AnexosFormComponent } from "../../../components/anexosForm";

export default {
  title: "Componentes Generales/AnexosForm/AnexosComponent",
  component: AnexosFormComponent,
} as ComponentMeta<typeof AnexosFormComponent>;

const template: ComponentStory<typeof AnexosFormComponent> = (args) => {
  return (
    <AnexosFormComponent {...args}>
      <div className="grid">
        <div className="col-12">
          <AnexosFormComponent.Notas />
        </div>
        <div className="col-12">
          <AnexosFormComponent.Sintesis />
        </div>
        <div className="col-6">
          <AnexosFormComponent.ButtonReset />
        </div>
        <div className="col-6">
          <AnexosFormComponent.ButtonSubmit />
        </div>
      </div>
    </AnexosFormComponent>
  );
};

export const FormAnexos = template.bind({});
FormAnexos.args = {
  sintesis: "",
  notas: "",
  formDisabled: false,
  getDataForm(data) {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  },
};
