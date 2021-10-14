import React from "react"
import {Container,Button,Card,CardGroup,Image} from "react-bootstrap"
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

function NuevoServicio() {
    return (
        <div>

            
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar fuente" align="center">
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Nuevo Servicio</h1>
            </div>

            <br />

            <div className="d-block w-100 mb-3 gap-3 centrar ">
            <CardGroup className="centrar fuente3">
                <Card className=" cardColor w-100 text-white shablack">
                <HeaderNs/>
                </Card>
                </CardGroup>
            </div>

            <div className=" w-100 gap-3 centrar" >
                
                <CardGroup>
                    <Card className=" cardColor w-100 text-white shablack centrar fuente3">
                    <TablaNs/>
                    </Card>
                </CardGroup>
               
            </div>
            
        </div>
    );
}

export default NuevoServicio;