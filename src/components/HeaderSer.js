import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderSer() {
    return (
    <Form>
        <div name="HeaderSer" class="d-block w-100 p-3 gap-5">
            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-4" controlId="formCodigo">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="number" placeholder="Codigo"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formServicio">
                    <Form.Label>Servicio</Form.Label>
                    <Form.Control type="text" placeholder="Servicio"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formNomCantidad">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Disponible</option>
                        <option value="2">No disponible</option>
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    </Form>
    );
}

export default HeaderSer;

