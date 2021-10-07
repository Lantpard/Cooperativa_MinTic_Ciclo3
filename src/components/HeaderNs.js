import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderNs() {
    return (
    <Form>
        <div name="HeaderEstadoV" class="d-block w-100 p-3 gap-3">
            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formFecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control type="date" placeholder="Fecha"/>
                </Form.Group>
            </div>

            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formCodigo">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="number" placeholder="Codigo"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formServicio">
                    <Form.Label>Servicio</Form.Label>
                    <Form.Control type="text" placeholder="Servicio"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formNomCantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="number" placeholder="Cantidad"/>
                </Form.Group>
            </div>

            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Precio"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formEstado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Disponible</option>
                        <option value="2">No disponible</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success">Agregar Servicio</Button>{' '}
            </div>
        </div>
    </Form>
    );
}

export default HeaderNs;

