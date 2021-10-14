import React from "react"
import { Card, CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */

import HeaderEstadoV from "components/HeaderEstadoV";
import TablaEstaV from "components/TablaEstaV";

import Logot3 from 'media/isotop.png';

function EstadoVentas() {
    return (
        <div>
            
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