import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Image,Table,InputGroup, Nav, Button} from "react-bootstrap"
import "styles/style.css"
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';
import Guardar from 'media/guardar.png';
import Cancelar from 'media/cancelar.png';
import Acciones from 'components/Acciones'
import {database} from 'firebase'

import { getAuth } from "firebase/auth";




let listaser = []



function TablaGs() {

    const contendorTarea = document.getElementById('table-body')

    async function listarServicios(){

        listaser= await leerServicios();
        listaser.forEach(function(elemento, indice, array){
            console.log(indice+1,elemento.Servicio, elemento.Precio);


                


            
        })


                const auth = getAuth();
                const user = auth.currentUser;

                console.log(user.displayName);
                console.log(user.email);







    }
    

    async function leerServicios(){
        const Servicios = []
        const respuesta = await database.collection('Servicios').get()

        
        respuesta.forEach(function(item){
            //console.log(item.data());
            Servicios.push(item.data())
            /* console.log(Servicios)
            console.log(Servicios.length)  */

            /* for(var i=0;i<Servicios.length;++i){
                console.log(i+1,Servicios[i].Servicio, Servicios[i].Estado)
                
                
            } */

            



            /* console.log(Servicios[0].Codigo)
            console.log(Servicios[0].Estado)
            console.log(Servicios[0].Cantidad)
            console.log(Servicios[0].Servicio)
            console.log(Servicios[0].Precio) */
            
        })
        return Servicios

        
    }
    
    

    




    return (
        
    <>
    <div className="d-block centrar w-100 p-3 gap-3 ">
    <Table striped bordered hover className="borde-rad">
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                    <span class="">Disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option value="1">Disponible</option>
                        <option selected value="2">No disponible</option>
                    </Form.Select>
                    <span class="">No disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                    <span class="">Disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                    <span class="">Disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option value="1">Disponible</option>
                        <option selected value="2">No disponible</option>
                    </Form.Select>
                    <span class="">No disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                    <span class="">Disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                    <span class="">Disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option value="1">Disponible</option>
                        <option selected value="2">No disponible</option>
                    </Form.Select>
                    <span class="">No disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option selected value="1">Disponible</option>
                        <option  value="2">No disponible</option>
                    </Form.Select>
                    <span class="">Disponible</span>
                </td>
                <td>
                    <Acciones/>
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
                    <Form.Select className= "w-50" aria-label="Default select example" style={{display:'none'}} disabled>
                        <option selected value="1">Disponible</option>
                        <option value="2">No disponible</option>
                    </Form.Select>
                    <span class="">Disponible</span>
                </td>
                <td>
                    <Acciones/>
                </td>
            </tr>


            {/* ingresar datos en la tabla */}

            {/* 
            
            {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.personaje}</td>
                  <td>{dato.anime}</td>
                  <td>
                    <Acciones/>
                  </td>
                </tr>
              ))} 
              
              */}


            <tr>
                <th></th>
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
            </tr>
            <tr>
                <th></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
    </tbody>
    </Table>
    <div id="table-body"></div>
    </div>

    
    </>
    );
}

export default TablaGs;
