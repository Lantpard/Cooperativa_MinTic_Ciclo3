import React, { useEffect, useState, useRef }  from "react"
import {Container,Button,Card,CardGroup,Image,Table,Form,Modal} from "react-bootstrap"

import Logot3 from 'media/isotop.png';

import swal from 'sweetalert'

import {database,consultarDatabase,guardarDatabase} from 'firebase'

import { ToastContainer, toast } from 'react-toastify';

import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';



function NuevoServicio1() {

    const [codigo, setCodigo] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [estado, setEstado] = useState('')
    const [precio, setPrecio] = useState('')
    const [servicio, setServicio] = useState('')
    
    
    const [listaTarea, setListaTarea] = useState([])

    

    // Estados de modificacion
    const [editar, setEditar] = useState(false)
      
    const [id, setId] = useState('')
    

const handleInput1 = (e) => {
  e.preventDefault()
    // console.log(e.target.value);
    // Asignacion al tarea
    //setTarea(e.target.value)
    setCodigo(e.target.value)
}

const handleInput2 = (e) => {
  e.preventDefault()
    // console.log(e.target.value);
    // Asignacion al tarea
    //setTarea(e.target.value)
    setServicio(e.target.value)
}

const handleInput3 = (e) => {
  e.preventDefault()
  
  setCantidad(e.target.value)
}

const handleInput4 = (e) => {
  e.preventDefault()
  
setPrecio(e.target.value)
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
    estado
  }
])



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
    estado
  }
])

// Limpiar el estado
setCodigo('')
setServicio('')
setCantidad('')
setPrecio('')
setEstado('')

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
setEstado(task.estado)

}

const handleGuardarEditar = (e) => {
e.preventDefault()

if (!codigo.trim() || !servicio.trim() || !cantidad.trim() ) {
  
  return
}

const arregloTemporal = listaTarea.map((item) => {
  return item.id === id ? { id: id, codigo:codigo,servicio: servicio,precio:precio,cantidad:cantidad, estado:estado } : item
})

setListaTarea(arregloTemporal)

// Limpiar el estado
setServicio('')
setCodigo('')
setCantidad('')
setPrecio('')
setEstado('')
setEditar(false)

}


const notify = () => {

if(servicio==""){
  toast.error("Servicio no valido");
}else{
toast.success("Servicio Agregado")
  };

    
}


const  GuardarFactura1= async()=>{
 
  const arregloTemporal5 =([
    
    
      
      // tarea: 'valor.... la variable'
      // tarea: tarea
    ...listaTarea
      
    
  ])

  /* setListaTarea([
    
    {
      
      // tarea: 'valor.... la variable'
      // tarea: tarea
      ...listaTarea
    }
  ]) */

  arregloTemporal5.forEach((servicio) => console.log(servicio))
  
  /* arregloTemporal5.forEach((servicio) => guardarDatabase('Servicios', servicio)) */
  
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


/* const notifyGuardar1 = () => {
      
    
     
  swal({
    title: "Deseas Sincronizar los Servicios?",
    text: "Se Agregaran los servicios a la base de servicios!",
    icon: "warning",
    buttons: ["Si", "No"],
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Operacion Cancelada!",{icon: "error"});
    } else {
      

      swal("Servicios Agregados!", {
        icon: "success",
      });

      GuardarFactura()
      setTimeout(function (){window.location.href="/Servicios1"},3000)
      
    }
  });

  } */

    return (
        <div>

            
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar fuente" align="center">
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Nuevo Servicio</h1>
            </div>

            <br />

            <div className="d-block w-100 mb-3 gap-3 centrar ">
            <CardGroup className="centrar fuente3">
                <Card className=" cardColor w-100 text-white shablack">
                

            <div>
                
                <form className="d-inline-flex w-100 mb-3 gap-3" controlId="formCodigo" onSubmit={editar ? handleGuardarEditar : handleFormulario}>
                    
                    <div>
                    <label>Codigo</label>
                    <input className="w-50" type="number" placeholder="Codigo" onChange={handleInput1} value={codigo}/>
                    
                
                    <label>Servicio</label>
                    <input className="w-50" type="text" placeholder="Servicio" onChange={handleInput2} value={servicio}/>
                    

                    <label>Cantidad</label>
                    <input className="w-50" type="number" placeholder="Cantidad" onChange={handleInput3} value={cantidad}/>
                    </div>

                    <div>
                    <label>Precio</label>
                    <input className="w-50" type="number" placeholder="Precio" onChange={handleInput4} value={precio}/>

                    <label >Estado</label>
                    <select className="w-50" aria-label="Default select example" onChange={(e)=>setEstado(e.target.value)} value={estado} required>
                        <option >Selecciona</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No disponible</option>
                    </select>

                    </div>
                    <div>
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
                  <>
                  <button
                  className="btn btn-success borde-rad" id="fAgregar" 
                  onClick={notify}
                  

                  >Agregar</button>

                <button 
                    className="btn btn-primary"
                    onClick={GuardarFactura1()}
                  >Sincronizar Servidor</button>

                  </>
                )
            }

                
                    </div>
                </form>
                

            </div>
        

        
                </Card>
                </CardGroup>
            </div>

            <div className=" w-100 gap-3 centrar" >
                
                <CardGroup>
                    <Card className=" cardColor w-100 text-white shablack centrar fuente3">
                    
                    <Table striped bordered hover className="borde-rad">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Codigo</th>
                <th scope="col">Servicio</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
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
                      {task.estado}
                  </td>
                  <td>
                  
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
    
                

        


                    </Card>
                </CardGroup>
                
                <ToastContainer
          position="bottom-center"
          autoClose={1000}
          
          
          />
            </div>
            
            
        </div>
    );
}

export default NuevoServicio1;