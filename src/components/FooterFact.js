import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function FooterFact() {
    return (
    <Form>
        <div name="FooterFact" class="d-block w-100 p-3 gap-3">
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3" controlId="formTotal">
                <Form.Label>Total</Form.Label>
                <Form.Control type="number" placeholder="Total" disabled="true"/>
            </Form.Group>
            </div>
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3" controlId="formVendedor">
                <Form.Label>Vendedor</Form.Label>
                <Form.Control type="text" placeholder="Vendedor" disabled="true"/>
            </Form.Group>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3" controlId="formDescripcion">
                <Form.Label>Descripcion</Form.Label>
                <Form.Control type="text" placeholder="Descripcion" />
            </Form.Group>
            </div>
            <div>
            <Button variant="outline-secondary">Generar Factura</Button>{' '}
            <Button variant="danger">Cancelar</Button>{' '}
            </div>
            
        </div>
    </Form>
    );
}

export default FooterFact;

