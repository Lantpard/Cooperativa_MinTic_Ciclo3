import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form} from "react-bootstrap"
import "styles/style.css"

function Estado() {
    return (
    <Form>
        <div name="datos" class="d-block centrar w-100 p-3 gap-3">
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
    </Form>
    );
}

export default Estado;

