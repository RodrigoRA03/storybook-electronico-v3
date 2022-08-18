import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export const DataTableUi = ({
  arrayDataList,
  arrayColumns,
  actionButtonsDataTable,
  ...props
}) => {
  return (
    <DataTable {...props} value={arrayDataList}>
      {arrayColumns.map(({ field, header, ...properties }, index) => {
        return (
          <Column key={index} field={field} header={header} {...properties} />
        );
      })}
      <Column
        body={actionButtonsDataTable}
        exportable={false}
        style={{ minWidth: "8rem" }}
      />
    </DataTable>
  );
};
