import React, { useRef } from "react";
import { Card } from "primereact/card";
import { FileUpload } from "primereact/fileupload";
import { CargarArchivosInterface } from "../../interfaces/cargarArchivos";

export const CargaArchivos = ({
  idActuacion,
  title,
  name,
  getDataFiles,
  ...props
}: CargarArchivosInterface) => {
  const fileUpload = useRef<FileUpload>(null);

  const handleUploadFiles = async (invoiceFile: any) => {
    let formData = new FormData();
    formData.append("idActuacion", idActuacion.toString());
    for (let i = 0; i < invoiceFile.files.length; i++) {
      formData.append("archivos[]", invoiceFile.files[i]);
    }

    fileUpload.current!.clear();

    getDataFiles(formData);
  };

  return (
    <Card title={title}>
      <div className="grid">
        <div className="col-12">
          <FileUpload
            ref={fileUpload}
            name={name}
            uploadHandler={handleUploadFiles}
            {...props}
          />
        </div>
      </div>
    </Card>
  );
};
