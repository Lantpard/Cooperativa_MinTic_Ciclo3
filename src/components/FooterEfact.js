import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Form,Button,Modal} from "react-bootstrap"
import "styles/style.css"

function FooterEfact() {

    const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
    <Form>
        <div name="FooterFact" className="d-block w-100 p-3 gap-3 centrar">
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formTotal">
                <Form.Label>Total</Form.Label>
                <Form.Control className="borde-rad w-50" id="fTotal"type="number" placeholder="Total" disabled="true"/>
            </Form.Group>
            </div>
            <div>
            <Form.Group className="d-inline-flex w-20 mb-3 gap-3 centrar" controlId="formVendedor">
                <Form.Label>Vendedor</Form.Label>
                <Form.Control className="borde-rad" id="fVendedor" type="text" placeholder="Vendedor" disabled="true"/>
            </Form.Group>{" "}
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" controlId="formDescripcion">
                <Form.Label className="mx-2">Descripcion</Form.Label>
                <Form.Control className="borde-rad" id="fDescrip" type="text" placeholder="Descripcion" />
            </Form.Group>
            </div>
            <br />
            <div>

            

            <Button className="mx-2 borde-rad " id="fGenerar" variant="success" onClick={handleShow}>Actualizar Factura</Button>{' '}
            
            
            
            
            <Button className="mx-2 borde-rad" id="fCancelar"variant="danger">Cancelar</Button>{' '}
            </div>

                    <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modificacion Exitosa</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href="/EstadoVentas" onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    </Form>
    );
}

export default FooterEfact;

