import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {FormControl,Image,Table,InputGroup} from "react-bootstrap"
import "styles/style.css"
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';
import Acciones from "./Acciones";

function TablaNs() {

    



    return (

    <Table striped bordered hover className="borde-rad centrar">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Codigo</th>
                <th scope="col">Servicio</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
            </tr>
        </thead>
        <tbody id="FtBody">
            <tr>
                <th scope="row">1</th>
                <td>4001</td>
                <td>Tarjeta Credito</td>
                <td>
                    1000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>1</InputGroup.Text>
                    <span class="">1</span>
                </td>
                <td>
                    1000
                    <Acciones/>
                </td>
            </tr>
            <tr>
            <th scope="row">2</th>
                <td>4007</td>
                <td>Tarjeta Debito</td>
                <td>
                    2000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>2</InputGroup.Text>
                    <span class="">2</span>
                </td>
                <td>
                    4000
                    <Acciones/>
                </td>
            </tr>
            <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
    </tbody>
    </Table>
    );
}

export default TablaNs;
