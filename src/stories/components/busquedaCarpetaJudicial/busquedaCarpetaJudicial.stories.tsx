import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BusquedaCarpetaComponent2 } from "../../../components/busquedaCarpetaJudicial";

export default {
  title:
    "Componentes Generales/BusquedaCarpetaJudicial/BusquedaCarpetaJudicialComponent12",
  component: BusquedaCarpetaComponent2,
} as ComponentMeta<typeof BusquedaCarpetaComponent2>;

const template: ComponentStory<typeof BusquedaCarpetaComponent2> = (args) => {
  return (
    <>
      <div className="p-fluid mt-3">
        <div className="card">
          <BusquedaCarpetaComponent2 {...args}>
            <div className="grid">
              <div className="col-12 sm:col-12 md:col-12 lg:col-12 xl:col-12 mb-2">
                <BusquedaCarpetaComponent2.Adscripcion />
              </div>
              <div className="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6 mb-2">
                <BusquedaCarpetaComponent2.Instancia />
              </div>
              <div className="col-12 sm:col-6 md:col-6 lg:col-6 xl:col-6 mb-2">
                <BusquedaCarpetaComponent2.Materia/>
              </div>
              <div className="col-12 sm:col-3 md:col-3 lg:col-3 xl:col-3">
                <BusquedaCarpetaComponent2.TipoNumero/>
              </div>
              <div className="col-12 sm:col-3 md:col-3 lg:col-3 xl:col-3">
                <BusquedaCarpetaComponent2.Numero/>
              </div>
              <div className="col-12 sm:col-3 md:col-3 lg:col-3 xl:col-3">
                <BusquedaCarpetaComponent2.Anio/>
              </div>
              <div className="col-12 sm:col-3 md:col-3 lg:col-3 xl:col-3">
                <BusquedaCarpetaComponent2.ButtonBuscar/>
              </div>

            </div>
          </BusquedaCarpetaComponent2>
        </div>
      </div>
    </>
  );
};

export const FormBusquedaCarpetaJudicial = template.bind({});
FormBusquedaCarpetaJudicial.args = {
  lstAdscripciones: [
    { IdJuzgado: 1, DesJuz: "JUZGADO PRUEBA" },
    { IdJuzgado: 2, DesJuz: "JUZGADO TEST" },
  ],
  lstInstancias: [
    { cveInstancia: 1, descInstancia: "JUZGADO PRUEBA" },
    { cveInstancia: 2, descInstancia: "JUZGADO TEST" },
  ],
  lstMaterias: [
    { cveMateria: 1, descMateria: "JUZGADO PRUEBA" },
    { cveMateria: 2, descMateria: "JUZGADO TEST" },
  ],
  lstTipoNumeros: [
    { cveTipoNumero: 1, descTipoNumeroObtenido: "JUZGADO PRUEBA" },
    { cveTipoNumero: 2, descTipoNumeroObtenido: "JUZGADO TEST" },
  ],
  getAdscripcionSelected(value) {
    alert(value);
  },
  getInstanciaSelected(value) {
    alert(value);
  },
  getMateriaSelected(value) {
    alert(value);
  },
  getTipoNumeroSelected(value) {
    alert(value);
  },
  getDataForm(data) {
    alert(JSON.stringify(data, null, 2));
  },
};
