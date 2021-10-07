import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderFact() {
    return (
    <Form>
        <div name="FooterFact" class="d-block w-100 p-3 gap-3">
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3" controlId="formFecha">
                <Form.Label>Fecha</Form.Label>
                <Form.Control type="date" placeholder="Fecha"/>
            </Form.Group>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3" controlId="formFactura">
                <Form.Label>Numero Factura</Form.Label>
                <Form.Control type="text" placeholder="Factura" disabled="true"/>
            </Form.Group>
        </div>
    </Form>
    );
}

export default HeaderFact;

