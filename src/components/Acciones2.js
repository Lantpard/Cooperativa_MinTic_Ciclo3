import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */

import "styles/style.css"
import {Form,Image,Table,InputGroup, Nav, Modal, Button} from "react-bootstrap"
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';
import Guardar from 'media/guardar.png';
import Cancelar from 'media/cancelar.png';

function Acciones2() {
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
    return (
        <div className= "d-inline-flex mx-2">
            <Nav.Link href=""style={{display:''}} onClick={handleShow} >
                <Image src={Modificar} rounded width="15" height="15"/> 
            </Nav.Link> 
            <Nav.Link href="" style={{display:''}} >
                <Image src= {Eliminar} rounded width="15" height="15"/>
            </Nav.Link> 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Editar Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-block w-100 mb-3 gap-3 mx-2 centrar ">
                    <div className="d-inline-flex w-100 mb-3 gap-3 centrar ">
                        <label className="mx-2 w-25" htmlFor="">email</label>
                        <input className="mx-2 w-50"type="text" name="" id="" />
                    </div>
                    <br />
                    <div className="d-inline-flex w-100 mb-3 gap-3 centrar ">
                    <label className="mx-2 w-25" htmlFor="">Nombre</label>
                    <input className="mx-2 w-50" type="text" name="" id="" />
                    </div>
                    <br />
                    <div className="d-inline-flex w-100 mb-3 gap-3 centrar ">
                    <Form.Group className="d-inline-flex w-100 mb-3 gap-3 mx-2 centrar" controlId="formNomCantidad">
                    <Form.Label className="w-25 mx-2">Perfil</Form.Label>
                    <Form.Select className= "mx-2 w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Administrador</option>
                        <option value="2">Vendedor</option>
                    </Form.Select>
                </Form.Group>
                    </div>
                    <br />
                    <div className="d-inline-flex w-100 mb-3 gap-3 centrar ">
                    <Form.Group className="d-inline-flex w-100 mb-3 gap-3 mx-2 centrar" controlId="formNomCantidad">
                    <Form.Label className="w-25 mx-2">Estado</Form.Label>
                    <Form.Select className= "mx-2 w-50" aria-label="Default select example">
                        <option>Selecciona</option>
                        <option value="1">Autorizado</option>
                        <option value="2">No Autorizado</option>
                    </Form.Select>
                </Form.Group>
                    </div>
                    </div>
                    
                    </Modal.Body>
                <Modal.Footer>
                    <label htmlFor="">Confirmar la Modificacion</label>
                <Button variant="primary" onClick={handleShow1}>
                    Si
                </Button>
                <Button variant="danger" onClick={handleShow2}>
                    No
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header>
                <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>Usuairo Actualizado con Exito</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href="/Roles" onClick={handleClose1}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header>
                <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>Operacion Cancelada</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href="/Roles" onClick={handleClose2}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Acciones2;

