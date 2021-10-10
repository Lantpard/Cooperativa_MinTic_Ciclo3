import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderEstadoV() {
    return (
        <div className="d-block centrar w-100 p-3 gap-3 ">
            <div className="d-inline-flex w-100 mb-3 gap-4 centrar mx-5">
                
                <Form.Group className="d-inline-flex w-25 mb-2 gap-4 centrar mx-5" controlId="formFactura">
                    <Form.Label className="w-25">Factura</Form.Label>
                    <Form.Control className="borde-rad w-50" type="number" placeholder="Factura"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-2 gap-4 centrar" controlId="formIdCliente">
                    <Form.Label className="w-25">Id Cliente</Form.Label>
                    <Form.Control className="borde-rad w-50" type="number" placeholder="IdCliente"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-2 gap-4 centrar mx-5" controlId="formNomCliente">
                    <Form.Label className="w-25">Nombre Cliente</Form.Label>
                    <Form.Control className="borde-rad w-50" type="text" placeholder="NomCliente"/>
                </Form.Group>
            </div>

            <div className="d-inline-flex w-100 mb-3 gap-5 centrar mx-3" >
                <Form.Group className="d-inline-flex w-50 mb-2 gap-3 mx-5 centrar" controlId="formIdVendedor">
                    <Form.Label className="w-25">Id Vendedor</Form.Label>
                    <Form.Control className="d-inline-flex w-25 mb-2 gap-3 borde-rad" type="number" placeholder="Id Vendedor"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-50 mb-2 gap-3 centrar" controlId="formEstado">
                    <Form.Label className="w-25">Estado</Form.Label>
                    <Form.Select className= "w-25 borde-rad" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Entregado</option>
                        <option value="2">En progreso</option>
                        <option value="3">Cancelada</option>
                    </Form.Select>
                </Form.Group>
                
            </div>
            <div className="d-inline-flex w-50 centrar fuente3 gap-3 mx-2 centrar">
                <button
                    className="btn btn-warning btn-sm mx-5"
                  >Filtrar</button>
                
                  <button
                    className="btn btn-danger btn-sm "
                    
                  >Derhacer</button>

                <button
                    className="btn btn-success btn-sm mx-5"
                    
                  >Actualizar Servidor</button>
                </div>
        </div>
    );
}

export default HeaderEstadoV;

