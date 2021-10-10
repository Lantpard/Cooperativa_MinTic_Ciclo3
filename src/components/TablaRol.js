import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Image,Table,InputGroup} from "react-bootstrap"
import "styles/style.css"
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';

function TablaRol() {
    return (
        <div className="d-block centrar w-100 p-3 gap-3 ">
    <Table striped bordered hover className="borde-rad">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Perfil</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>1234</td>
                <td>scrion@gmail.com</td>
                <td>Antonio Ardila</td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Vendedor</option>
                        <option value="2">Administrador</option>
                    </Form.Select>
                </td>
                <td>
                    <Form.Select className= "w-75" aria-label="Default select example">
                        <option value="1">Autorizado</option>
                        <option selected value="2">No autorizado</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>3982</td>
                <td>lantpard@gmail.com</td>
                <td>Leonardo Perez</td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option  value="1">Vendedor</option>
                        <option selected value="2">Administrador</option>
                    </Form.Select>
                </td>
                <td>
                    <Form.Select className= "w-75" aria-label="Default select example">
                        <option selected value="1">Autorizado</option>
                        <option value="2">No autorizado</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>0994</td>
                <td>camilo26perez@gmail.com</td>
                <td>Antonio Ardila</td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option  value="1">Vendedor</option>
                        <option selected value="2">Administrador</option>
                    </Form.Select>
                </td>
                <td>
                    <Form.Select className= "w-75" aria-label="Default select example">
                        <option selected value="1">Autorizado</option>
                        <option value="2">No autorizado</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>5678</td>
                <td>Paulirris@gmail.com</td>
                <td>Paula Triana</td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Vendedor</option>
                        <option value="2">Administrador</option>
                    </Form.Select>
                </td>
                <td>
                    <Form.Select className= "w-75" aria-label="Default select example">
                        <option selected value="1">Autorizado</option>
                        <option  value="2">No autorizado</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
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
    </div>
    );
}

export default TablaRol;
