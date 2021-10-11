import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button,Modal} from "react-bootstrap"
import "styles/style.css"

function HeaderNs() {

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
                <Button variant="success" onClick={handleShow} >Agregar Servicio</Button>{' '}
                <Button variant="primary"  >Actualizar Servidor</Button>{' '}
               


            </div>
        </div>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Nuevo Servicio</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseas agregar el nuevo servicio?</Modal.Body>
                <Modal.Footer>
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
                <Modal.Body>Nuevo Servicio Agregado con Exito</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href="/NuevoServicio" onClick={handleClose1}>
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
                <Button variant="primary" href="/NuevoServicio" onClick={handleClose2}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>

    </Form>
    
    );
}

export default HeaderNs;

