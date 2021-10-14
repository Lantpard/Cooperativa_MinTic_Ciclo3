import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form} from "react-bootstrap"
import "styles/style.css"

function HeaderRol() {
    return (
    <Form>
        <div name="HeaderRol" class="d-block w-100 p-3 gap-3">
            <div>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3 centrar mx-2" controlId="formId">
                    <Form.Label className="w-25 mx-2">Id</Form.Label>
                    <Form.Control className="w-50 mx-2" type="number" placeholder="Id"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3 mx-2 centrar" controlId="formNombre">
                    <Form.Label className="w-25 mx-2 ">Nombre</Form.Label>
                    <Form.Control className="w-50 mx-2" type="text" placeholder="Nombre"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3 mx-2 centrar" controlId="formPerfil">
                    <Form.Label className="w-25 mx-2 ">Perfil</Form.Label>
                    <Form.Select className="w-50 mx-2 " aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Vendedor</option>
                        <option value="2">Administrador</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3 mx-2 centrar" controlId="formEstado">
                    <Form.Label className="w-25 mx-2 ">Estado</Form.Label>
                    <Form.Select className= "w-50 mx-2 " aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Autorizado</option>
                        <option value="2">No autorizado</option>
                    </Form.Select>
                </Form.Group>
                <div className="d-inline-flex w-50 centrar fuente3 gap-3 mx-2 centrar">
                <button
                    className="btn btn-warning btn-sm mx-5"
                  >Filtrar</button>
                
                  <button
                    className="btn btn-danger btn-sm "
                    
                  >Derhacer</button>

                <button
                    className="btn btn-success btn-sm mx-5"
                    
                  >Actualizar Servidor</button>
                </div>

            </div>
        </div>
    </Form>
    );
}

export default HeaderRol;

