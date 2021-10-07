import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {FormControl,Image,Table,InputGroup,Nav} from "react-bootstrap"
import "styles/style.css"
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';

function TablaEstaV() {
    return (

    <Table striped bordered hover>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Numero Factura</th>
                <th scope="col">Id Cliente</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Total</th>
                <th scope="col">Id Vendedor</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>001</td>
                <td>1234567</td>
                <td>Pepito Perez</td>
                <td>Solicitud para xxx</td>
                <td>
                    1000
                </td>
                <td>11234</td>
                <td>Entregado</td>
                <td>
                    <div className="d-inline-flex gap-1 centrar">
                        <Nav.Link href="/ModificacionVenta">
                            <Image src={Modificar} rounded width="15" height="15"/>
                        </Nav.Link>  
                        <Image src= {Eliminar} rounded width="15" height="15"/>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>002</td>
                <td>9874561</td>
                <td>Juan Acosta</td>
                <td>Solicitud para aaaa</td>
                <td>
                    2000
                </td>
                <td>11234</td>
                <td>Cancelado</td>
                <td>
                    <div className="d-inline-flex gap-1 centrar">
                        <Nav.Link to="">
                            <Image src={Modificar} rounded width="15" height="15"/>
                        </Nav.Link>  
                        <Image src= {Eliminar} rounded width="15" height="15"/>
                    </div>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>003</td>
                <td>6655486</td>
                <td>Margarita Ramirez</td>
                <td>Solicitud para bbb</td>
                <td>
                    3000
                </td>
                <td>5678</td>
                <td>En proceso</td>
                <td>
                    <div className="d-inline-flex gap-1 centrar">
                        <Nav.Link to="">
                            <Image src={Modificar} rounded width="15" height="15"/>
                        </Nav.Link>  
                        <Image src= {Eliminar} rounded width="15" height="15"/>
                    </div>
                </td>
            </tr>
            <tr>
            <th scope="row">4</th>
                <td>004</td>
                <td>1234567</td>
                <td>Pepito Perez</td>
                <td>Solicitud para ccc</td>
                <td>
                    1000
                </td>
                <td>19032</td>
                <td>Entregado</td>
                <td>
                    <div className="d-inline-flex gap-1 centrar">
                        <Nav.Link to="">
                            <Image src={Modificar} rounded width="15" height="15"/>
                        </Nav.Link>  
                        <Image src= {Eliminar} rounded width="15" height="15"/>
                    </div>
                </td>
            </tr>
            <tr>
            <th scope="row">5</th>
                <td>005</td>
                <td>8877441</td>
                <td>Camilo Perez</td>
                <td>Solicitud para dddd</td>
                <td>
                    2000
                </td>
                <td>5679</td>
                <td>Cancelada</td>
                <td>
                    <div className="d-inline-flex gap-1 centrar">
                        <Nav.Link to="">
                            <Image src={Modificar} rounded width="15" height="15"/>
                        </Nav.Link>  
                        <Image src= {Eliminar} rounded width="15" height="15"/>
                    </div>
                </td>
            </tr>
            <tr>    
                <th scope="row">6</th>
                <td>006</td>
                <td>2345879</td>
                <td>Paula Triana</td>
                <td>Solicitud para eee</td>
                <td>
                    1000
                </td>
                <td>19032</td>
                <td>En proceso</td>
                <td>
                    <div className="d-inline-flex gap-1 centrar">
                        <Nav.Link to="">
                            <Image src={Modificar} rounded width="15" height="15"/>
                        </Nav.Link>  
                        <Image src= {Eliminar} rounded width="15" height="15"/>
                    </div>
                </td>
            </tr>
            <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
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
                <td></td>
                <td></td>
                <td></td>
            </tr>
    </tbody>
    </Table>
    );
}

export default TablaEstaV;
