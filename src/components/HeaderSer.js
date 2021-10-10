import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button} from "react-bootstrap"
import "styles/style.css"

function HeaderSer() {
    return (
    <Form>
        <div name="HeaderSer" className="d-inline-flex w-100 p-3 centrar gap-5">
            
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3 centrar mx-2" controlId="formCodigo">
                    <Form.Label className="w-25">Codigo</Form.Label>
                    <Form.Control className="w-50" type="number" placeholder="Codigo"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3 centrar mx-2" controlId="formServicio">
                    <Form.Label className="w-25">Servicio</Form.Label>
                    <Form.Control className="w-50" type="text" placeholder="Servicio"/>
                </Form.Group>
                <Form.Group className="d-inline-flex w-25 mb-3 gap-3 mx-2 centrar" controlId="formNomCantidad">
                    <Form.Label className="w-25">Estado</Form.Label>
                    <Form.Select className= "w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Disponible</option>
                        <option value="2">No disponible</option>
                    </Form.Select>
                </Form.Group>
                <div className="d-inline-flex centrar fuente3 gap-3">
                <button
                    className="btn btn-warning btn-sm mx-2"
                  >Filtrar</button>
                
                  <button
                    className="btn btn-danger btn-sm mx-2"
                    
                  >Derhacer</button>

                <button
                    className="btn btn-success btn-sm mx-1"
                    
                  >Actualizar Servidor</button>
                </div>
                
        </div>
    </Form>
    );
}

export default HeaderSer;

