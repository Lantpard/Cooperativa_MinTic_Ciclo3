import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderEstadoV() {
    return (
        <div>
            <div className="d-inline-flex w-100 mb-3 gap-5 centrar" align="center">
                <Form.Group className="d-inline-flex w-25 mb-2 gap-4 centrar" controlId="formFactura">
                    <Form.Label>Factura</Form.Label>
                    <Form.Control type="number" placeholder="Factura"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-2 gap-4 centrar" controlId="formIdCliente">
                    <Form.Label>Id Cliente</Form.Label>
                    <Form.Control type="number" placeholder="IdCliente"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-2 gap-4 centrar" controlId="formNomCliente">
                    <Form.Label>Nombre Cliente</Form.Label>
                    <Form.Control type="text" placeholder="NomCliente"/>
                </Form.Group>
            </div>

            <div className="d-inline-flex w-100 mb-3 gap-5 centrar" align="center">
                <Form.Group className="d-inline-flex w-50 mb-2 gap-3" controlId="formIdVendedor">
                    <Form.Label>Id Vendedor</Form.Label>
                    <Form.Control className="d-inline-flex w-50 mb-2 gap-3" type="number" placeholder="Id Vendedor"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-50 mb-2 gap-3" controlId="formEstado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Entregado</option>
                        <option value="2">En progreso</option>
                        <option value="3">Cancelada</option>
                    </Form.Select>
                </Form.Group>
                
            </div>
        </div>
    );
}

export default HeaderEstadoV;

