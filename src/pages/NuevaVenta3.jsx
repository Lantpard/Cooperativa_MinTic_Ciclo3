import React, { useEffect, useState, useRef }  from "react"
import { nanoid } from 'nanoid';
import {Card,CardGroup,Button,Image,Modal,Form,Table} from "react-bootstrap"


import Logot3 from 'media/isotop.png';
import { getAuth } from "firebase/auth";

import {database,consultarDatabase,guardarDatabase} from 'firebase'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { Loading } from 'components/Loading'

export let leo="hola";
/* export {handleFormulario,editar,handleGuardarEditar, handleDeshacer}; */


var listaser = []

var uNombre=""
var uEmail=""



function NuevaVenta1() {

     //nueva tarea
     const [servicio, setServicio] = useState('')
     const [codigo, setCodigo] = useState('')
     const [cantidad, setCantidad] = useState('')
     const [precio, setPrecio] = useState('')
     const [total, setTotal] = useState('')
     const [vendedor, setVendedor] = useState('')
     const [nFactura, setNfactura] = useState('')
     const [nombre, setNombre] = useState('')
     const [cedula, setCedula] = useState('')
     const [descripcion, setDescripcion] = useState('')
     const [fecha, setFecha] = useState('')
     const [loading, setLoading] = useState(false)

     const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
     const [servicios, setServicios] = useState([]);
     const [facturas, setFacturas] = useState([]);
     const [clientes, setClientes] = useState([]);

    const [listaTarea, setListaTarea] = useState([])
    const [FacturaLista, setFacturaLista] = useState([]);
    const [rege, setRege] = useState([])
    
    
   
 
      // Estados de modificacion
      const [editar, setEditar] = useState(false)
      
      const [id, setId] = useState('')
      

      const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [show2, setShow2] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => 
  {
    handleClose()
  GuardarFactura()
  setShow1(true)
  
  }

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);




//////////////////

//descargar info
useEffect(() => {
  setLoading(true)
  cargarDatos()
}, [Loading])

const cargarDatos = async () => {
  // console.log('Entro..!');
  const listaTemporal1 = await consultarDatabase('Facturas')
  // console.log(listaTemporal);
  setFacturas(listaTemporal1)

  const listaTemporal2 = await consultarDatabase('Servicios')
  // console.log(listaTemporal);
  setServicios(listaTemporal2)

  const listaTemporal3 = await consultarDatabase('Clientes')
  // console.log(listaTemporal);
  setClientes(listaTemporal3)

  const auth = await getAuth();
  const user = auth.currentUser;
  uNombre=user.displayName
  uEmail=user.email
  console.log(uNombre)

  setVendedor(uNombre) 
  setNfactura((listaTemporal1.length)+1)
  setLoading(false)

}





///////////////
      /* useEffect(() => {
        
        if (ejecutarConsulta) {
          
          ///////
          listarServicios()


          setEjecutarConsulta(false);
        }
        
        console.log(listaser)

      }, [ejecutarConsulta]); */
////////////

    
   /*  async function listarServicios(){
        
        listaser= await leerServicios();
        

                const auth = getAuth();
                const user = auth.currentUser;
                 uNombre=user.displayName
                uEmail=user.email
                
                setVendedor(uNombre) 
                setNfactura("00001")
                

                for(var i=0;i<listaser.length;++i){
                  
                  if(listaser[i].codigo===Number(codigo)){
                    setTarea(listaser[i].servicio)
                    setPrecio(listaser[i].precio)
                    break;
                  }else{
                    setTarea("")
                    setPrecio("")
                  }
                }

    }
    

    async function leerServicios(){
        const servicex=[]
        const respuesta = await database.collection('Servicios').get()

        
        respuesta.forEach(function(item){
            //console.log(item.data());
            servicex.push(item.data())
            
        })
        setServicios(servicex)
        console.log(servicex);
        return servicex
        

        
    }
     */


    const handleInput = (e) => {
        // console.log(e.target.value);
        // Asignacion al tarea
        setServicio(e.target.value)
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
      
      setPrecio(e.target.value)
  }

  const handleInput4 = (e) => {
      
    setFecha(e.target.value)
}

const handleInput5 = (e) => {
      
  setDescripcion(e.target.value)
}

const handleInput6 = (e) => {
      
  setCedula(e.target.value)
}

const handleInput7 = (e) => {
      
  setNombre(e.target.value)
}




    const handleFormulario = (e) => {
        e.preventDefault()

    // Validacion que el campo no esta vacio
    if (!codigo.trim() || !cantidad.trim() || !servicio.trim()) {
      
      return
    }

    const arregloTemporal5 =([
      ...listaTarea,
      {
        id:nanoid(),
        // tarea: 'valor.... la variable'
        // tarea: tarea
        codigo,
        servicio,
        cantidad,
        precio,
      }
    ])
    console.log("arreglo temporal5",arregloTemporal5)
    let suma=0
  
        for(var i=0;i<arregloTemporal5.length;++i){
          suma+=( Number(arregloTemporal5[i].cantidad)*arregloTemporal5[i].precio)
        }
          
        setTotal(suma)
    



    

    

    setListaTarea([
      ...listaTarea,
      {
        id:nanoid(),
        // tarea: 'valor.... la variable'
        // tarea: tarea
        codigo,
        servicio,
        cantidad,
        precio,
      }
    ])

     


    // Limpiar el estado
    setCodigo('')
    setServicio('')
    setCantidad('')
    setPrecio('')

  }

  const handleEliminar = (id) => {
    
    // Filtrar los elementos que no tengan el id que recibimos por parametro o que sea diferente
    const arregloTemporal = listaTarea.filter((elemento) => {
      return elemento.id !== id
      // return !(elemento.id === id)
    })
    setListaTarea(arregloTemporal)
    
  }

  const handleEditar = (task) => {
    
    setServicio(task.servicio)
    setCodigo(task.codigo)
    setCantidad(task.cantidad)
    setEditar(true)
    setId(task.id)
    setPrecio(task.precio)
    
  }

  const handleGuardarEditar = (e) => {
    e.preventDefault()
    
    if (!codigo.trim() || !servicio.trim() || !cantidad.trim() ) {
      
      return
    }

    const arregloTemporal = listaTarea.map((item) => {
      return item.id === id ? { id: id, codigo:codigo,servicio: servicio,precio:precio,cantidad:cantidad } : item
    })
    
    setListaTarea(arregloTemporal)

    //// suma
    let suma=0
  
    for(var i=0;i<arregloTemporal.length;++i){
      suma+=( Number(arregloTemporal[i].cantidad)*arregloTemporal[i].precio)
    }
      
    setTotal(suma)

    ///

    console.log("arreglo temporal editar",arregloTemporal)
    // Limpiar el estado
    setServicio('')
    setCodigo('')
    setCantidad('')
    setPrecio('')
    setEditar(false)

  }


    const notify = () => {
    
      
    
    if(servicio==""){
      toast.error("Cogido no valido");
    }else{
    toast.success("Servicio Agregado")
      };

        
    }
    

    


    const AgregarCliente =()=>{

      const arregloTemporal2 =([{
        
        cedula:Number(cedula),
        nombre
      }
      ])

      for(var i=0;i<clientes.length;++i){
                  
        if(clientes[i].cedula!==Number(cedula)){
          arregloTemporal2.forEach((cliente) => guardarDatabase('Clientes', cliente))
          break;
        }
    }
  }

    const  GuardarFactura= async()=>{
      
      setLoading(true)

      
        
        console.log("primera antes de guardar",listaTarea);

      const arregloTemporal5 =([
        
        {
          
          // tarea: 'valor.... la variable'
          // tarea: tarea
          id_cliente:cedula,
          factura:nFactura,
          descripcion,
          fecha,
          nombre,
          total,
          estado:"En proceso",
          vendedor,
          servicios:[...listaTarea]
          
        }
      ])

      setFacturaLista([
        
        {
          
          // tarea: 'valor.... la variable'
          // tarea: tarea
          id_cliente:cedula,
          factura:nFactura,
          descripcion,
          fecha,
          listaTarea,
          nombre,
          vendedor
        }
      ])

      console.log("segunda",FacturaLista);
      console.log("final",arregloTemporal5);

      arregloTemporal5.forEach((factura) => guardarDatabase('Facturas', factura))


      AgregarCliente()

      setLoading(false)
      /* guardarDatabase(arregloTemporal5,"Facturas") */

        /* setCedula("")
        setNombre("")
        setNfactura("")
        setFecha("")
        setDescripcion("")
        setTotal("")
        setVendedor("")
        handleShow() */
        
      

      

    }

    const buscarServicio=()=>{

      for(var i=0;i<servicios.length;++i){
                  
        if(servicios[i].codigo===Number(codigo)){
          setServicio(servicios[i].servicio)
          setPrecio(servicios[i].precio)
          break;
        }else{
          setServicio("")
          setPrecio("")
        }
      }

     
    }

    const buscarCliente=()=>{
      
      for(var i=0;i<clientes.length;++i){
                  
        if(clientes[i].cedula===Number(cedula)){
          setNombre(clientes[i].nombre)
          
          break;
        }else{
          setNombre("")
          
      }

     
    }
  }


    return (
        <div>
           
            <br />
            <div className="w-100 d-inline-flex mb-3 gap-3 centrar">
                <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Nueva Venta</h1>
            </div>
            <br />

            {
        loading
          ?
          <Loading />
          :
          <>
            <div className="d-inline-flex w-100 mb-3 gap-3 fuente3">
                <div className="w-100 " >
                <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    
                    <Card.Body>



                                      <Form > 
                          <div name="HeaderFact" className="d-block w-100 p-3 centrar">
                              <Form.Group className="d-inline-flex gap-4 mb-4 mx-2 centrar sinlimites" >
                                  <Form.Label className="w-25 sinlimites mx-2">Fecha</Form.Label>
                                  <Form.Control className="borde-rad w-75 sinlimites mx-2" id="fFecha"type="date" onChange={handleInput4} value={fecha}/>
                              </Form.Group>
                              
                              <Form.Group className="d-inline-flex gap-4 mb-3 mx-2 centrar sinlimites" >
                                  <Form.Label className="w-50 sinlimites mx-2">Numero Factura</Form.Label>
                                  <Form.Control className="borde-rad w-50 sinlimites mx-2" id="nFactura"type="number"  disabled="true" onChange={handleInput5} value={nFactura}/>
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
                <tr key={nanoid()}>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {task.codigo}
                  </td>
                  <td>
                      {task.servicio}
                  </td>
                  <td>
                      {task.precio}
                  </td>
                  <td>
                      {task.cantidad}
                  </td>
                  <td>
                  {task.cantidad*task.precio}
                  {/* <button
                    className="btn btn-outline-danger btn-sm mx-2"
                    onClick={() => handleEliminar(task.id)}
                  >
                    Eliminar
                  </button> */}
                  <a href="#" className="mx-2">
                  <BsPencilSquare className="colori"  onClick={() => handleEditar(task)}/>
                  </a>
                  <a href="#" >
                  <BsTrash className="text-danger" onClick={() => handleEliminar(task.id)}/>
                  </a>
                  {/* <button
                    className="btn btn-outline-warning btn-sm"
                    onClick={() => handleEditar(task)}
                  >
                    Modificar
                  </button> */}
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
                <Form.Control className="borde-rad w-50" id="fTotal"type="number" disabled value={total}/>
            </Form.Group>
            </div>
            <div>
            <Form.Group className="d-inline-flex w-20 mb-3 gap-3 centrar" >
                <Form.Label>Vendedor</Form.Label>
                <Form.Control className="borde-rad" id="fVendedor" type="text"  disabled value={vendedor}/>
            </Form.Group>{" "}
            <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" >
                <Form.Label className="mx-2">Descripcion</Form.Label>
                <Form.Control className="borde-rad" id="fDescrip" type="text" onChange={handleInput5} value={descripcion}/>
            </Form.Group>
            </div>
            <br />
            <div>

            

            <Button className="mx-2 borde-rad " id="fGenerar" variant="success" onClick={() =>   handleShow ()} >Generar Factura</Button>{' '}
            
            
            
            
            <Button className="mx-2 borde-rad" id="fCancelar"variant="danger">Cancelar</Button>{' '}
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                <Modal.Title>Nueva Factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>Deseas generar la Factura?</Modal.Body>
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
                <Modal.Body>Nueva Factura Generada con exito</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" href="/EstadoVentas1" onClick={handleClose1}>
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
            
        </div>
    </Form>
                    </Card.Body>
                </Card>
                </CardGroup>
                </div>


  <div className="d-block w-75 mb-3 gap-3">
    <CardGroup>
      <Card className=" cardColor w-100 text-white shablack">
        <>
          <div name="datos" className="d-block centrar w-100 p-3 gap-3 ">
            <div>
              <form className="d-inline-flex w-50 mb-3 gap-3 centrar" >
                <label>Cedula</label>
                <input className="borde-rad" id="fCcedula"type="number" onChange={handleInput6} value={cedula}/>
              </form>
              <button
              className="btn btn-primary w-25 btn-sm mx-3"
              onClick={() => buscarCliente()}
              
              >

                
              Buscar
            </button>
            </div>
            <div>
              <Form.Group className="d-inline-flex w-50 mb-3 gap-3 centrar" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control className="borde-rad" id="fCnombre"type="text"  onChange={handleInput7} value={nombre}/>
              </Form.Group>
            </div>
          </div>
        </>
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
            <input className="borde-rad w-25 mx-3" id="fCodigo"type="number"  onChange={handleInput1} value={codigo}/>
            <button
              className="btn btn-primary w-25 btn-sm mx-3"
              onClick={() => buscarServicio()}
              
              >

                
              Buscar
            </button>
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar">
            <label>Servicio</label>
            <input className="borde-rad w-25" id="fServiciox"type="text"   onChange={handleInput} disabled value={servicio}/>
            <label>Cantidad</label>
            <input className="borde-rad w-25" id="fCantidad"type="number"  onChange={handleInput2} value={cantidad} />
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" >
            <label>Precio</label>
            <input className="borde-rad w-25" id="fPreciox"type="number"  onChange={handleInput3} disabled value={precio}/>
          </div>
          <div className="d-inline-flex w-100 mb-3 gap-2 centrar" >

          {
              editar ?
                (
                  <button
                    className="btn btn-outline-primary"
                    onClick={notify}
                  >Actualizar</button>
                )
                :
                (
                  <button
                  className="btn btn-success borde-rad" id="fAgregar" 
                  onClick={notify}
                  

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
                <ToastContainer
          position="bottom-center"
          autoClose={1000}
          
          
          />

</>
      }



        </div>
    );
}

export default NuevaVenta1;