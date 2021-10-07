import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderRol() {
    return (
    <Form>
        <div name="HeaderRol" class="d-block w-100 p-3 gap-3">
            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formId">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="number" placeholder="Id"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formPerfil">
                    <Form.Label>Perfil</Form.Label>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Vendedor</option>
                        <option value="2">Administrador</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3" controlId="formEstado">
                    <Form.Label>Estado</Form.Label>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Autorizado</option>
                        <option value="2">No autorizado</option>
                    </Form.Select>
                </Form.Group>
            </div>
        </div>
    </Form>
    );
}

export default HeaderRol;

