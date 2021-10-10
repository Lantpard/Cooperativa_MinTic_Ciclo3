import React from "react"
import {Container,Card,CardGroup,Image} from "react-bootstrap"
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
import Estado from "components/Estado";
import Logot3 from 'media/logot3.png';

function ModificacionVenta() {
    return (
        <div>
            <BarNav/>
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar fuente" align="center">
                <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Modificación Venta</h1>
            </div>
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3">
            <div className="w-100">
            <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    
                    <Card.Body>
                    <HeaderFact/>
                    <TablaFac/>
                    <FooterFact/>
                    </Card.Body>
                </Card>
                </CardGroup>
                </div>
                <div className="d-block w-75 mb-3 gap-3">
                <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    
                    <Card.Body>

                    <Estado/>
                    </Card.Body>
                </Card>
                </CardGroup>
                    <br />
                    <br />

                    <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    
                    <Card.Body>
                    <Service/>
                    </Card.Body>
                </Card>
                </CardGroup>
                </div>
                
            </div>
        </div>
    );
}

export default ModificacionVenta;