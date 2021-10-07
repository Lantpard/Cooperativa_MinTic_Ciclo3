import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form} from "react-bootstrap"
import "styles/style.css"

function Client() {
    return (
    <Form>
        <div name="datos" class="d-block centrar w-100 p-3 gap-3 borde">
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formCedula">
                <Form.Label>Cedula</Form.Label>
                <Form.Control type="number" placeholder="Cedula" />
            </Form.Group>
            </div>
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
            </Form.Group>
            </div>
        </div>
    </Form>
    );
}

export default Client;

