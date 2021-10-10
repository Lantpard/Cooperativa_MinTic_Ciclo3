import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */

import "styles/style.css"
import {Form,Image,Table,InputGroup, Nav} from "react-bootstrap"
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';
import Guardar from 'media/guardar.png';
import Cancelar from 'media/cancelar.png';

function Acciones() {
    return (
        <div className= "d-inline-flex mx-2">
            <Nav.Link href=""style={{display:''}} >
                <Image src={Modificar} rounded width="15" height="15"/> 
            </Nav.Link> 
            <Nav.Link href="" style={{display:''}} >
                <Image src= {Eliminar} rounded width="15" height="15"/>
            </Nav.Link> 
        </div>
    );
}

export default Acciones;

