import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Image,Table,InputGroup} from "react-bootstrap"
import "styles/style.css"
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';

function TablaNs() {
    return (

    <Table striped bordered hover>
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Codigo</th>
                <th scope="col">Servicio</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>4001</td>
                <td>Tarjeta Credito</td>
                <td>
                    40000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>10</InputGroup.Text>
                    <span class="">10</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">2</th>
                <td>4007</td>
                <td>Tarjeta Debito</td>
                <td>
                    30000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>0</InputGroup.Text>
                    <span class="">0</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option value="1">Disponible</option>
                        <option selected value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">3</th>
                <td>4010</td>
                <td>Bono Sodexo</td>
                <td>
                    100000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>20</InputGroup.Text>
                    <span class="">20</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">4</th>
                <td>4011</td>
                <td>Bono Experiencias</td>
                <td>
                    300000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>10</InputGroup.Text>
                    <span class="">10</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">5</th>
                <td>4012</td>
                <td>Cdt</td>
                <td>
                    2000000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>0</InputGroup.Text>
                    <span class="">0</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option value="1">Disponible</option>
                        <option selected value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">6</th>
                <td>4015</td>
                <td>Seguro de Vida</td>
                <td>
                    60000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>30</InputGroup.Text>
                    <span class="">30</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">7</th>
                <td>4016</td>
                <td>Seguro Exequial</td>
                <td>
                    80000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>15</InputGroup.Text>
                    <span class="">15</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">8</th>
                <td>4017</td>
                <td>Bono cine 3D</td>
                <td>
                    30000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>0</InputGroup.Text>
                    <span class="">0</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option value="1">Disponible</option>
                        <option selected value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">9</th>
                <td>4018</td>
                <td>Bono Cine 2D</td>
                <td>
                    20000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>50</InputGroup.Text>
                    <span class="">50</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                </td>
                <td>
                    <Image src={Modificar} rounded width="15" height="15"/>  
                    <Image src= {Eliminar} rounded width="15" height="15"/>
                </td>
            </tr>
            <tr>
            <th scope="row">10</th>
                <td>5020</td>
                <td>Soat Motocicleta</td>
                <td>
                    400000
                </td>
                <td>
                    <InputGroup.Text id="basic-addon1" style={{display:'none'}}>7</InputGroup.Text>
                    <span class="">7</span>
                </td>
                <td>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option selected value="1">Disponible</option>
                        <option value="2">No disponible</option>
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
    );
}

export default TablaNs;
