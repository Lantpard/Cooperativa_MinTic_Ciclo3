import React from "react"
import {Container} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import BarNav from "components/BarNav";
import Client from "components/Cliente";
import Service from "components/Servicio";
import TablaFac from "components/TablaFac";
import FooterFact from "components/FooterFact";
import HeaderFact from "components/HeaderFact";
import HeaderEstadoV from "components/HeaderEstadoV";
import TablaEstaV from "components/TablaEstaV";
import HeaderNs from "components/HeaderNs";
import TablaNs from "components/TablaNs";
import HeaderSer from "components/HeaderSer";
import HeaderRol from "components/HeaderRol";
import TablaRol from "components/TablaRol";


function EstadoVentas() {
    return (
        <div>
            <BarNav/>
            <br />
            <div className="d-block w-100 mb-3 gap-3 centrar fuente" align="center">
                <h1>Estado Ventas</h1>
            </div>
            <br />
            <div className="d-block w-100 mb-3 gap-3">
                <HeaderEstadoV/>
            </div>
            <div className="d-block w-100 mb-3 gap-3 borde">
                <TablaEstaV/>
            </div>
        </div>
    );
}

export default EstadoVentas;