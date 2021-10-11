import React from "react"
import {Container, Card, CardGroup,Image} from "react-bootstrap"
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
import Logot3 from 'media/isotop.png';

function EstadoVentas() {
    return (
        <div>
            <BarNav/>
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar" align="center">
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Estado Ventas</h1>
            </div>
            <br />

            <CardGroup>
                <Card className=" cardColor w-100 text-white shablack fuente3">
                    <HeaderEstadoV/>
                </Card>
            </CardGroup>
            
            <CardGroup>
                <Card className=" cardColor w-100 text-white shablack fuente3">
                    <TablaEstaV/>
                </Card>
            </CardGroup>
            
        </div>
    );
}

export default EstadoVentas;