import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"
import {database} from 'firebase'

import { getAuth } from "firebase/auth";

/* import {handleFormulario,editar,handleGuardarEditar, handleDeshacer} from "pages/NuevaVenta" */




let listaser = []


function Service() {

    /* const contendorTarea = document.getElementById('table-body') */

    async function listarServicios(){

        listaser= await leerServicios();
        listaser.forEach(function(elemento, indice, array){
            console.log(indice+1,elemento.Servicio, elemento.Precio, elemento.Codigo,elemento.doc);
            

           
            
        })


                const auth = getAuth();
                const user = auth.currentUser;

                console.log(user.displayName);
                console.log(user.email);







    }
    

    async function leerServicios(){
        const Servicios = []
        const respuesta = await database.collection('Servicios').get()
        console.log(respuesta)

        
        respuesta.forEach(function(item){
            Servicios.push(item.data())
        })
        return Servicios
    }


    return (
        <div>
            <button
                className="btn btn-primary btn-sm mx-5"
                onClick={() => listarServicios()}>
                Buscar
            </button>
    <Form >
        <div name="servicio" className="d-block w-100 p-3 gap-3 centrar">
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formCodigo">
                <Form.Label>Codigo</Form.Label>
                <Form.Control className="borde-rad" id="fCodigo"type="number" placeholder="Codigo"  />
            </Form.Group>
                
            </div>
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formServicio">
                <Form.Label>Servicio</Form.Label>
                <Form.Control className="borde-rad" id="fServicio"type="text" placeholder="Nombre" disabled="true" />
            </Form.Group>
            </div>
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-2 centrar" controlId="formCantidad">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control className="borde-rad w-50" id="fCantidad"type="number" placeholder="Cantidad" />
            </Form.Group>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-2 centrar" controlId="formPrecio">
                <Form.Label>Precio</Form.Label>
                <Form.Control className="borde-rad w-50" id="fPrecio"type="number" placeholder="Precio" disabled="true"/>
            </Form.Group>
            </div>
            <Button className="borde-rad" id="fAgregar"variant="success">Agregar Servicio</Button>{' '}
        </div>
    </Form>
    </div>
    );
}

export default Service;

