import React from 'react';
// import { Link } from 'react-router-dom';

export const Error = () => {

    return (
        <div className="exception-body error">

            <div className="exception-content">
                <div className="exception-title">Acceso Denegado</div>
                <div className="exception-detail">No cuentas con permisos</div>
                {/* <Link to="">Regresar</Link> */}
            </div>
        </div>
    );
}
