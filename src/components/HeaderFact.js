import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderFact() {
    return (
    <Form>
        <div name="HeaderFact" className="d-block w-100 p-3 centrar">
            <Form.Group className="d-inline-flex gap-4 mb-4 mx-2 centrar sinlimites" controlId="formFecha">
                <Form.Label className="w-25 sinlimites mx-2">Fecha</Form.Label>
                <Form.Control className="borde-rad w-75 sinlimites mx-2" id="fFecha"type="date" placeholder="Fecha" />
            </Form.Group>
            
            <Form.Group className="d-inline-flex gap-4 mb-3 mx-2 centrar sinlimites" controlId="formFactura">
                <Form.Label className="w-50 sinlimites mx-2">Numero Factura</Form.Label>
                <Form.Control className="borde-rad w-50 sinlimites mx-2" id="fNfactura"type="number" placeholder="Factura" disabled="true"/>
            </Form.Group>
            
        </div>
    </Form>
    );
}

export default HeaderFact;

