import React from "react"
import { nanoid } from 'nanoid';
import {Container,Card,CardGroup,Button,Image,Modal,Form,Table} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import BarNav from "components/BarNav";
import Client from "components/Cliente";
import Service from "components/Servicio";
import TablaFac from "components/TablaFac";
import FooterFact from "components/FooterFact";
import HeaderFact from "components/HeaderFact";
import HeaderEstadoV from "components/HeaderEstadoV";
import TablaEstaV from "components/TablaEstaV";
import HeaderNs from "components/HeaderNs";
import TablaNs from "components/TablaNs";
import HeaderSer from "components/HeaderSer";
import HeaderRol from "components/HeaderRol";
import TablaRol from "components/TablaRol";
import {database} from 'firebase'
import Logot3 from 'media/isotop.png';
import { getAuth } from "firebase/auth";
import Acciones from "components/Acciones";

export let leo="hola";
/* export {handleFormulario,editar,handleGuardarEditar, handleDeshacer}; */


var listaser = []



var uNombre=""
var uEmail=""


    /* let resultados=''
    const contenedor = document.getElementById('FtBody')
    //const modalItems = new bootstrap.Modal(document.getElementById('myModal')) 
    const fecha=document.getElementById('fFecha')
    const nFactura=document.getElementById('fNfactura')
    const total=document.getElementById('fTotal')
    const vendedor=document.getElementById('fVendedor')
    const descripcion = document.getElementById('fDescrip')
    const cedula=document.getElementById('fCcedula')
    const nombre=document.getElementById('fCnombre')
    const codigox=document.getElementById('fCodigo')
    const servicio=document.getElementById('fServicio')
    const cantidad=document.getElementById('fCantidad')
    const precio=document.getElementById('fPrecio')
 */
    const vendedor=document.getElementById('fVendedor')


function NuevaVenta1() {

     //nueva tarea
     const [tarea, setTarea] = React.useState('')
     const [codigo, setCodigo] = React.useState('')
     const [cantidad, setCantidad] = React.useState('')
     const [precio, setPrecio] = React.useState('')
     var [listaTarea, setListaTarea] = React.useState([])
     var [listaTarea1, setListaTarea1] = React.useState([])
     var [firstClick, setFirstClick] = React.useState('')
     const buttonx=document.getElementById("filtrar")
     firstClick=false
 
      // Estados de modificacion
      const [editar, setEditar] = React.useState(false)
      const [filtrar, setFiltrar] = React.useState(false)
      const [id, setId] = React.useState('')
      const [code, setCode] = React.useState('')

      const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const contendorTarea = document.getElementById('table-body')

    async function listarServicios(){
        
        listaser= await leerServicios();
        listaser.forEach(function(elemento, indice, array){
            console.log(indice+1,elemento.Servicio, elemento.Precio,elemento.Codigo);
            
        })

                const auth = getAuth();
                const user = auth.currentUser;
                /* uNombre=user.displayName
                uEmail=user.email
                console.log(uNombre);
                console.log(uEmail);
                vendedor.value=uNombre */
                console.log(listaser)

                for(var i=0;i<listaser.length;++i){
                  console.log(listaser[i].Codigo,Number(codigo))
                  if(listaser[i].Codigo===Number(codigo)){
                    document.getElementById('fServiciox').value=listaser[i].Servicio
                    break;
                  }else{
                    document.getElementById('fServiciox').value="Servicio no existe"
                  }
                }

    }
    

    async function leerServicios(){
        const Servicios = []
        const respuesta = await database.collection('Servicios').get()

        
        respuesta.forEach(function(item){
            //console.log(item.data());
            Servicios.push(item.data())
            
        })
        return Servicios

        
    }
    
    
    
  

   
    

    const handleInput = (e) => {
        // console.log(e.target.value);
        // Asignacion al tarea
        setTarea(e.target.value)
        //setCodigo(e.target.value)
    }
    const handleInput1 = (e) => {
        // console.log(e.target.value);
        // Asignacion al tarea
        //setTarea(e.target.value)
        setCodigo(e.target.value)
    }

    const handleInput2 = (e) => {
        // console.log(e.target.value);
        // Asignacion al tarea
        //setTarea(e.target.value)
        setCantidad(e.target.value)
    }

    const handleInput3 = (e) => {
      // console.log(e.target.value);
      // Asignacion al tarea
      //setTarea(e.target.value)
      setPrecio(e.target.value)
  }

    const handleFormulario = (e) => {
        e.preventDefault()

    // Validacion que el campo no esta vacio
    if (!codigo.trim() || !tarea.trim() || !precio.trim() || !cantidad.trim() ) {
      console.log('Debes ingresar un codigo')
      return
    }

    

    // console.log(tarea)

    // Asignacion y creacion del nuevo elemento
    setListaTarea([
      ...listaTarea,
      {
        id: nanoid(),
        // tarea: 'valor.... la variable'
        // tarea: tarea
        codigo,
        tarea,
        cantidad,
        precio,
      }
    ])

    // Limpiar el estado
    setCodigo('')
    setTarea('')
    setCantidad('')
    setPrecio('')



    console.log('Entro');
    
  }


  const handleEliminar = (id) => {
    console.log(id);

    // Filtrar los elementos que no tengan el id que recibimos por parametro o que sea diferente
    const arregloTemporal = listaTarea.filter((elemento) => {
      return elemento.id !== id
      // return !(elemento.id === id)
    })
    setListaTarea(arregloTemporal)
    
  }

  const handleEditar = (task) => {
    console.log(task)

    setTarea(task.tarea)
    setCodigo(task.codigo)
    setCantidad(task.cantidad)
    setEditar(true)
    setId(task.id)

  }

  
  //document.getElementById("filtro").value

  const handleFiltrar = (code) => {
    
      
      if(!code.trim()){

      if(listaTarea.length<listaTarea1.length){
        /* setListaTarea(listaTarea1) */
        console.log('entra a lista1')
      }else{
        console.log('entra a lista')
      setListaTarea(listaTarea)
      console.log('filtro 0')
      console.log('listaTarea',listaTarea)
      console.log('listaTarea1',listaTarea1)
      console.log('el valord e fistClick es:',firstClick)}


    }else
    {
      console.log('ingreso al else');
      console.log('el valord e fistClick es:',firstClick)
      if(firstClick ==false){
        console.log(code);
        console.log("ingreso al click");
        // Filtrar los elementos que no tengan el id que recibimos por parametro o que sea diferente
        const arregloTemporal = listaTarea.filter((elemento) => {
          
          setListaTarea1(listaTarea)
          if(elemento.codigo==code){
          return elemento;
          }
        
          
          buttonx.disabled=true
          
          // return !(elemento.id === id)
        })

       
        
        setListaTarea(arregloTemporal)
        console.log('filtro con valor')
        console.log('listaTarea',listaTarea)
        console.log('listaTarea1',listaTarea1)
        
      
        setFirstClick(true)
    }
  }
    

  }


  const handleDeshacer = () => {
    if(code==""){}else{
    setCode('')
    setListaTarea(listaTarea1)
    setFirstClick(false)
    buttonx.disabled=false
    }
  }

  const handleGuardarEditar = () => {
    
    console.log(listaTarea)
    if (!codigo.trim() || !tarea.trim() || !precio.trim() || !cantidad.trim() ) {
      console.log('Debes ingresar un codigo')
      return
    }

    const arregloTemporal = listaTarea.map((item) => {
      return item.id === id ? { id: id, codigo:codigo,tarea: tarea,precio:precio,cantidad:cantidad } : item
    })

    console.log(arregloTemporal)
    setListaTarea(arregloTemporal)

    // Limpiar el estado
    setTarea('')
    setCodigo('')
    setCantidad('')
    setPrecio('')

    setEditar(false)
    console.log("Filtrando")
  
  }


  



    return (
        <div>
            <BarNav/>
            <br />
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
        {
              listaTarea.map((task,index) => (
                <tr>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {task.codigo}
                  </td>
                  <td>
                      {task.tarea}
                  </td>
                  <td>
                      {task.precio}
                  </td>
                  <td>
                      {task.cantidad}
                  </td>
                  <td>
                  {task.cantidad*task.precio}
                  <button
                    className="btn btn-outline-danger btn-sm mx-2"
                    onClick={() => handleEliminar(task.id)}
                  >
                    Eliminar
                  </button>

                  <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => handleEditar(task)}
                  >
                    Modificar
                  </button>
                  </td>
                </tr>
              )
              
              
              )
              
            }
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

            

            <Button className="mx-2 borde-rad " id="fGenerar" variant="success" onClick={handleShow}>Generar Factura</Button>{' '}
            
            
            
            
            <Button className="mx-2 borde-rad" id="fCancelar"variant="danger">Cancelar</Button>{' '}
            </div>

                    <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>Factura Exitosa</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href="/EstadoVentas" onClick={handleClose}>
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


    <CardGroup>
      <Card className=" cardColor w-100 text-white shablack">
        <br />
        <form className="d-block w-100 mb-3 gap-3 centrar" onSubmit={editar ? handleGuardarEditar : handleFormulario}>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" > 
            <label className="mx-2" >Codigo</label>
            <input className="borde-rad w-25 mx-3" id="fCodigo"type="number" placeholder="Codigo" onChange={handleInput1} value={codigo}/>
            <button
              className="btn btn-primary w-25 btn-sm mx-3"
              onClick={() => listarServicios()}>
              Buscar
            </button>
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar">
            <label>Servicio</label>
            <input className="borde-rad w-25" id="fServiciox"type="text" placeholder="Servicio"  onChange={handleInput} value={tarea} />
            <label>Cantidad</label>
            <input className="borde-rad w-25" id="fCantidad"type="number" placeholder="Cantidad" onChange={handleInput2} value={cantidad} />
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" >
            <label>Precio</label>
            <input className="borde-rad w-25" id="fPrecio"type="number" placeholder="Precio" onChange={handleInput3} value={precio} />
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" >

          {
              editar ?
                (
                  <button
                    className="btn btn-outline-primary"
                  >Actualizar</button>
                )
                :
                (
                  <button
                  className="btn btn-success borde-rad" id="fAgregar" 
                  >Agregar</button>
                )
            }




          </div>
        </form>
      </Card>
    </CardGroup>

                
                </div>
                <br />
                
            </div>
            
        </div>
    );
}

export default NuevaVenta1;