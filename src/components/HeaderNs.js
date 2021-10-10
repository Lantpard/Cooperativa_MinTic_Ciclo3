import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderNs() {
    return (
    <Form className="centrar">
        <div name="HeaderEstadoV" className="d-block w-100 p-3 gap-3 centrar">
            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formFecha">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control className="w-50" type="date" placeholder="Fecha"/>
                </Form.Group>
            </div>

            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formCodigo">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control className="w-50" type="number" placeholder="Codigo"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formServicio">
                    <Form.Label>Servicio</Form.Label>
                    <Form.Control className="w-50" type="text" placeholder="Servicio"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formNomCantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control className="w-50" type="number" placeholder="Cantidad"/>
                </Form.Group>
            </div>

            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formPrecio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control className="w-50" type="number" placeholder="Precio"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formEstado">
                    <Form.Label >Estado</Form.Label>
                    <Form.Select className="w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Disponible</option>
                        <option value="2">No disponible</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success">Agregar Servicio</Button>{' '}
                <button
                    className="btn btn-primary btn-sm mx-5"
                    
                  >Actualizar Servidor</button>
            </div>
        </div>
    </Form>
    );
}

export default HeaderNs;

