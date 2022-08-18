import { DataTable } from "primereact/datatable";
import { classNames } from "primereact/utils";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { cambiarActualizar, saveEstatusSelected } from "../../actions/terminacionCarpetasActions";

export const DataTableTerminacionCarpetasUi = () => {
    const dispatch = useDispatch();
    const { lstHistorialEstatus, actualizar } = useSelector((state) => state.terminacionCarpetasReducer);

    const isSelectable = (value, field) => {
        let isSelectable = true;
        switch (field) {
            case "activo":
                isSelectable = value === "S";
                break;
            default:
                break;
        }
        return isSelectable;
    };

    const isRowSelectable = (event) => {
        const data = event.data;
        return isSelectable(data.activo, "activo");
    };

    const rowClass = (data) => {
        return {
            'row-success': data.activo === 'S',
            'row-error': data.activo === 'N',
        }
    }

    const rowNumTemplate = (rowData) => {
        const rowNumClassName = classNames({
            success: rowData.activo === 'S',
            error: rowData.activo === 'N',
        });
        return <div className={rowNumClassName}>{rowData.num}</div>
    }

    const rowEstatusTemplate = (rowData) => {
        const estatusClassName = classNames({
            success: rowData.activo === 'S',
            error: rowData.activo === 'N',
        });

        return (
            <>
                <div className={estatusClassName}>{rowData.descEstatus}</div>
                {
                    (rowData.descEstatus === 'TERMINADO') && (
                        <>
                            <div className="text-xs">{"Motivo de terminación: "}{rowData.descCatCarpetaTerminada}</div>
                            <div className="text-xs -mb-3">{"Fecha de Termino: "}{rowData.fechaTerminacion}</div>
                        </>
                    )
                }
            </>
        );
    };

    const rowActivoTemplate = (rowData) => {
        const rowActivoClassName = classNames({
            success: rowData.activo === 'S',
            error: rowData.activo === 'N',
            inselectable: rowData.activo === 'N',
        });
        return <div className={rowActivoClassName}>{rowData.activo}</div>
    };

    const rowFechaTemplate = (rowData) => {
        const rowAFechaClassName = classNames({
            success: rowData.activo === 'S',
            error: rowData.activo === 'N',
        });
        return <div className={rowAFechaClassName}>{rowData.fechaRegistro}</div>
    };

    const estatusEditar = (data) => {
        console.log(data);
        dispatch(cambiarActualizar(true));
        dispatch(saveEstatusSelected(data));
    }

    return (
        <DataTable
            value={lstHistorialEstatus || []}
            rowClassName={rowClass}
            isDataSelectable={isRowSelectable}
            onSelectionChange={(e) => estatusEditar(e.value)}
            selectionMode="simple"
            scroll="true"
            breakpoint="960px"
            scrollHeight="400px"
            columnResizeMode="fit"
            showGridlines
            responsiveLayout="scroll"
            emptyMessage="Sin resultados"
            onAllRowsUnselect="true"
        >
            <Column field="num" header="Num" body={rowNumTemplate} />
            <Column field="descEstatus" header="Estatus" body={rowEstatusTemplate} style={{ width: '50%' }} />
            <Column field="fechaRegistro" header="Fecha de registro" body={rowFechaTemplate} style={{ width: '30%' }} />
            <Column field="activo" header="Activo" body={rowActivoTemplate} />
        </DataTable>
    )
}