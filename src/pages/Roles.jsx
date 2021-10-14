import React from "react"
import {Card,CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */

import HeaderRol from "components/HeaderRol";
import TablaRol from "components/TablaRol";
import Logot3 from 'media/isotop.png';

function Roles() {
    return (
        <div>
            
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar" >
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Roles Usuarios</h1>
            </div>
            <br />
            <div className="d-block w-100 mb-3 gap-3">
            <CardGroup className="centrar fuente3">
                    <Card className=" cardColor w-100text-white shablack">
                <HeaderRol/>
                </Card>
                </CardGroup>
            </div>
            <div className="d-block w-100 mb-3 gap-3">
            <CardGroup className="centrar fuente3">
                    <Card className=" cardColor w-100text-white shablack">
                <TablaRol/>
                </Card>
                </CardGroup>
            </div>
        </div>
    );
}

export default Roles;