import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import {Card,CardGroup} from "react-bootstrap"

import 'react-toastify/dist/ReactToastify.css';




const NuevaVenta1=()=> {

    const [codigo,setCodigo] = useState()
    const [servicio,setServicio] = useState()
    const [cantidad,setCantidad] = useState()
    const [precio,setPrecio] = useState()

    

    const enviarAlaTrabla=()=>{
      console.log("codigo: ",codigo,"servicio: ",servicio,"cantidad: ",cantidad,"precio: ",precio)
      toast.success("Wow so easy!")
      /* funcionAgregarServicios([
        ...ListaServicios, {codigo:codigo,servicio:servicio,cantidad:cantidad,precio:precio}
      ]); */
    }



  


    return (
        <div>
           
            {/* <br />
            <div className="w-100 d-inline-flex mb-3 gap-3 centrar">
                <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Nueva Venta</h1>
            </div>
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 fuente3">
                <div className="w-100 " >
                <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    
                    <Card.Body>



                                      <Form > 
                          <div name="HeaderFact" className="d-block w-100 p-3 centrar">
                              <Form.Group className="d-inline-flex gap-4 mb-4 mx-2 centrar sinlimites" >
                                  <Form.Label className="w-25 sinlimites mx-2">Fecha</Form.Label>
                                  <Form.Control className="borde-rad w-75 sinlimites mx-2" id="fFecha"type="date" placeholder="Fecha" />
                              </Form.Group>
                              
                              <Form.Group className="d-inline-flex gap-4 mb-3 mx-2 centrar sinlimites" >
                                  <Form.Label className="w-50 sinlimites mx-2">Numero Factura</Form.Label>
                                  <Form.Control className="borde-rad w-50 sinlimites mx-2" id="fNfactura"type="number" placeholder="Factura" disabled="true"/>
                              </Form.Group>
                              
                          </div>
                      </Form>



                      <Table striped bordered hover className="borde-rad centrar">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Codigo</th>
                <th scope="col">Servicio</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Subtotal</th>
            </tr>
        </thead>
        <tbody id="FtBody">
        
    </tbody>
    </Table>



    <Form>
        <div name="FooterFact" className="d-block w-100 p-3 gap-3 centrar">
            <div>
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" >
                <Form.Label>Total</Form.Label>
                <Form.Control className="borde-rad w-50" id="fTotal"type="number" placeholder="Total" disabled="true"/>
            </Form.Group>
            </div>
            <div>
            <Form.Group className="d-inline-flex w-20 mb-3 gap-3 centrar" >
                <Form.Label>Vendedor</Form.Label>
                <Form.Control className="borde-rad" id="fVendedor" type="text" placeholder="Vendedor" disabled="true"/>
            </Form.Group>{" "}
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" >
                <Form.Label className="mx-2">Descripcion</Form.Label>
                <Form.Control className="borde-rad" id="fDescrip" type="text" placeholder="Descripcion" />
            </Form.Group>
            </div>
            <br />
            <div>

            

            <Button className="mx-2 borde-rad " id="fGenerar" variant="success">Generar Factura</Button>{' '}
            
            
            
            
            <Button className="mx-2 borde-rad" id="fCancelar"variant="danger">Cancelar</Button>{' '}
            </div>

                    <Modal >
                <Modal.Header>
                <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>Factura Exitosa</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href="/EstadoVentas" >
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    </Form>
                    </Card.Body>
                </Card>
                </CardGroup>
                </div>


  <div className="d-block w-75 mb-3 gap-3">
    <CardGroup>
      <Card className=" cardColor w-100 text-white shablack">
        <Form>
          <div name="datos" className="d-block centrar w-100 p-3 gap-3 ">
            <div>
              <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" >
                <Form.Label>Cedula</Form.Label>
                <Form.Control className="borde-rad" id="fCcedula"type="number" placeholder="Cedula"/>
              </Form.Group>
            </div>
            <div>
              <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control className="borde-rad" id="fCnombre"type="text" placeholder="Nombre" />
              </Form.Group>
            </div>
          </div>
        </Form>
      </Card>
    </CardGroup>
    <br />
    <br />
 */}

          <ToastContainer
            position="bottom-center"
            autoClose={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            />


    <div>
    <CardGroup>
      <Card className=" cardColor w-100 text-white shablack">
        <br />
        <form className="d-block w-100 mb-3 gap-3 centrar" >
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" > 
            <label className="mx-2" >Codigo</label>
            <input className="borde-rad w-25 mx-3" id="fCodigo"type="number" placeholder="Codigo" 
              value={codigo}
              onChange={(e)=>{
                setCodigo(e.target.value);
              }}
            />
            
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar">
            <label>Servicio</label>
            <input className="borde-rad w-25" id="fServiciox"type="text" placeholder="Servicio"   
              value={servicio}
              onChange={(e)=>{
                setServicio(e.target.value);
              }}
            />
            <label>Cantidad</label>
            <input className="borde-rad w-25" id="fCantidad"type="number" placeholder="Cantidad"  
              value={cantidad}
              onChange={(e)=>{
                setCantidad(e.target.value);
              }}
            />
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" >
            <label>Precio</label>
            <input className="borde-rad w-25" id="fPrecio"type="number" placeholder="Precio" 
              value={precio}
              onChange={(e)=>{
                setPrecio(e.target.value);
              }}
            />


          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" >

          <button
              className="btn btn-primary w-25 btn-sm mx-3"
              onClick={()=>{enviarAlaTrabla()} }
              
              >
              Agregar
            </button>
            
            



          </div>
        </form>
        
      </Card>
    </CardGroup>

                
                </div>
                <br />
                
            </div>
            
        /* </div> */
    );
}

export default NuevaVenta1;