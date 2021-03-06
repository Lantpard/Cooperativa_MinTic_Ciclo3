import React from "react"
import {Card,CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */

import Service from "components/Servicio";
import TablaFac from "components/TablaFac";
import FooterEfact from "components/FooterEfact";
import HeaderFact from "components/HeaderFact";

import Estado from "components/Estado";
import Logot3 from 'media/isotop.png';

function ModificacionVenta() {
    return (
        <div>
            
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
                    <FooterEfact/>
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