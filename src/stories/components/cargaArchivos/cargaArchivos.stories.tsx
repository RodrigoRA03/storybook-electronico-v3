import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CargaArchivos } from "../../../components/cargaArchivos/cargaArchivos";

export default {
  title: "Componentes Generales/Carga de Archivos/carga de archivos",
  component: CargaArchivos,
} as ComponentMeta<typeof CargaArchivos>;

const template: ComponentStory<typeof CargaArchivos> = (args) => {
  return <CargaArchivos {...args} />;
};

export const cargaArchivos = template.bind({});
cargaArchivos.args = {
  idActuacion: 1,
  title: "Carga de Archivos",
  getDataFiles(data) {
    console.log(data);
  },
  multiple: true,
  name: "Archivos[]",
  uploadLabel: "Subir Archivo",
  chooseLabel: "Cargar Archivo",
  cancelLabel: "Cancelar",
  customUpload: true,
  accept: "application/pdf",
  maxFileSize: 1000000,
  emptyTemplate: <p className="m-0">Arrastre y suelte los archivos aquí.</p>,
};
