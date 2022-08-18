import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { AnexosFormInterfaces, Inputs } from "../../interfaces/anexosForm";
import AnexosFormContext from "./AnexosContext";

export const AnexosForm = ({
  children,
  getDataForm,
  sintesis = "",
  notas = "",
  formDisabled = false,
}: AnexosFormInterfaces) => {
  const { Provider } = AnexosFormContext;
  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    getDataForm(data);
  };

  return (
    <Provider
      value={{
        sintesis,
        notas,
        formDisabled,
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="m-8">
          {children}
        </form>
      </FormProvider>
    </Provider>
  );
};
