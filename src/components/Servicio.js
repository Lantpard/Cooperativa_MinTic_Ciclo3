import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function Service() {
    return (
    <Form>
        <div name="servicio" className="d-block w-100 p-3 gap-3 centrar">
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formCodigo">
                <Form.Label>Codigo</Form.Label>
                <Form.Control className="borde-rad" id="fCodigo"type="number" placeholder="Codigo" />
            </Form.Group>
            </div>
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formServicio">
                <Form.Label>Servicio</Form.Label>
                <Form.Control className="borde-rad" id="fServicio"type="text" placeholder="Nombre" disabled="true"/>
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
    );
}

export default Service;

