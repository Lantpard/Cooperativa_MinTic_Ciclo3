import React, { useEffect, useState, useRef }  from "react"
import {Card,CardGroup,Image,Table,Form,} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */

import TablaGs from "components/TablaGs";
import HeaderSer from "components/HeaderSer";
import { Tooltip } from '@material-ui/core'

import Logot3 from 'media/isotop.png';

import Acciones2 from "components/Acciones2";
import {eliminarDocumentoDatabase,upDatabase,database,consultarDatabase,guardarDatabase,consultarDocumentoDatabase,actualizarDocumentoDatabase} from 'firebase'
import swal from 'sweetalert'

import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'
import { ImCheckboxChecked } from 'react-icons/im'
import { nanoid } from 'nanoid';

import { getAuth } from "firebase/auth";
import { Loading } from 'components/Loading'


function Servicios1() {

    const [servicios, setServicios] = useState([]);
    const [loading, setLoading] = useState(false)
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true)



    //////////////////

//descargar info
useEffect(() => {
  setLoading(true)
  cargarDatos();
  if (ejecutarConsulta) {
    cargarDatos();
  }
  }, [ejecutarConsulta])
  
  const cargarDatos = async () => {
    // console.log('Entro..!');
    const listaTemporal1 = await consultarDatabase('Servicios')
    // console.log(listaTemporal);
    setServicios(listaTemporal1)
    setEjecutarConsulta(false)
    setLoading(false)
  }


    
//descargar filtrar
const [busqueda, setBusqueda] = useState('');
const [vehiculosFiltrados, setVehiculosFiltrados] = useState(servicios);

    useEffect(() => {
        console.log("busqueda",busqueda)
        console.log("sinfiltro",vehiculosFiltrados)

      setVehiculosFiltrados(
          servicios.filter((elemento) => {
              /* return elemento.Vendedor.includes(busqueda) */
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );

      console.log("con filtro",vehiculosFiltrados)
    }, [busqueda, servicios]);



    const handleEliminar = (id) => {
    
        // Filtrar los elementos que no tengan el id que recibimos por parametro o que sea diferente
       /*  const arregloTemporal = listaTarea.filter((elemento) => {
          return elemento.id !== id
          // return !(elemento.id === id)
        })
        setListaTarea(arregloTemporal) */
        
      }
    
      const handleEditar = (task) => {
        
        /* setTarea(task.tarea)
        setCodigo(task.codigo)
        setCantidad(task.cantidad)
        setEditar(true)
        setId(task.id)
        setPrecio(task.precio) */
        
      }

    const formSubmit=(e)=>{
      e.preventDefault();
    }

    return (
        <div>
            
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar fuente" align="center">
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Servicios</h1>
            </div>
            <br />
            <div className="d-block w-100 mb-3 gap-3 fuente3 centrar">
            
                <CardGroup className="centrar fuente3">
                
                    <Card className=" cardColor w-100text-white shablack">
                    <br />
                    <div className="d-inline-flex mb-3 centrar">
                    
                    <label className=" mx-2 fuente5" >Buscar: </label>
                    <br />
                    <input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        
                        placeholder="Busqueda Dinamica"/>
            
                
                    </div>
                    </Card>
                </CardGroup>
            </div>

            {
        loading
          ?
          <Loading />
          :
          <>
            <div className="d-block w-100 mb-3 gap-3 fuente3">
                <CardGroup className="centrar fuente3">
                    <Card className=" cardColor w-100 text-white shablack">
                        <div className="d-block centrar w-100 p-3 gap-3 ">
                          
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
              vehiculosFiltrados.sort((a,b)=>a.codigo-b.codigo).map((task,index) => 
              (
                <FilaServicio task={task} index={index} setEjecutarConsulta={setEjecutarConsulta}/>
              )
              
              




              )
              
            }
        </tbody>
    </Table>
    
        </div>
                    </Card>
                </CardGroup>
            </div>
            </>
      }
        </div>
    );
}

const FilaServicio=({setEjecutarConsulta,task,index})=>{

  const [precio1, setPrecio1] = useState('')
  const [cantidad1, setCantidad1] = useState(task.cantidad)
  const [estado1, setEstado1] = useState(task.estado)
  let precio2=task.precio
  let cantidad2=task.cantidad
  let estado2=task.estado

  const handleInput = (e) => {
    e.preventDefault()
    /* console.log(e) */
    /* setPrecio1(e.target.value) */
    /* setPrecio1(precio2) */
    precio2=(e.target.value)
    console.log(e.target.value)
}

const handleInput1 = (e) => {
  e.preventDefault();
  /* setCantidad(e.target.value) */
  cantidad2=(e.target.value)
}

const handleInput2 = (e) => {
  e.preventDefault();
  /* setEstado(e.target.value) */
  estado2=(e.target.value)
}

  const handleEliminar = (id) => {
    
    // Filtrar los elementos que no tengan el id que recibimos por parametro o que sea diferente
   /*  const arregloTemporal = listaTarea.filter((elemento) => {
      return elemento.id !== id
      // return !(elemento.id === id)
    })
    setListaTarea(arregloTemporal) */
    
  }

  const handleEditar = (task) => {
    
    /* setTarea(task.tarea)
    setCodigo(task.codigo)
    setCantidad(task.cantidad)
    setEditar(true)
    setId(task.id)
    setPrecio(task.precio) */
    
  }


  
  const [edit,setEdit]=useState(false)

  /* const [servicioMod, setServicioMod] = useState({
    
  }); */

  const actualizarServicio = async () => {

    const servicioMod ={
      id: task.id,
    codigo: task.codigo,
    servicio: task.servicio,
    precio: precio2,
    cantidad: cantidad2,
    estado: estado2 

    }
    
    await actualizarDocumentoDatabase ("Servicios",task.id,servicioMod)
    setEdit(false)
   
    setEjecutarConsulta(true);
  }


  const notifyEliminar = () => {
      
    
     
    swal({
      title: "Deseas Eliminar el Servicio?",
      text: "Se eliminara el servicio la base!",
      icon: "warning",
      buttons: ["Si", "No"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Operacion Cancelada!",{icon: "error"});
      } else {
        
  
        swal("Servicio Eliminado!", {
          icon: "success",
        });
  
        EliminacionItem()
        setTimeout(function (){window.location.href="/Servicios1"},3000)
        
      }
    });
  
    }

    const EliminacionItem= async()=>{
      eliminarDocumentoDatabase("Servicios",task.id)
    }

  return(

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
      {edit?
      
        <>
        
            <td>
              
            <input type="number" className="w-25" placeholder="precio" 
            defaultValue={precio2}
            onChange={handleInput}
            
            
            />
            
            </td>
            <td>
            <input type="number" className="w-25" placeholder="cantidad" 
            /* value={task.cantidad} */
            defaultValue={cantidad2}
            onChange={handleInput1}
            />
            </td>
            <td>
            <select className="w-50" aria-label="Default select example" 
            /* value={task.estado} */
            defaultValue={estado2}
            onChange={handleInput2}
            
            required>
                        <option >Selecciona</option>
                        <option value="Disponible">Disponible</option>
                        <option value="No Disponible">No Disponible</option>
                    </select>
            </td>
           

        </> 

        :
            <>
                  
                  <td>
                      {task.precio}
                  </td>
                  <td>
                      {task.cantidad}
                  </td>
                  <td>
                      {task.estado}
                  </td>
             </>     
    }
                  
                  
                  <td>
                  
                    {edit? 
                    
                    <Tooltip title='Actualizar' arrow>
                      <a href="#"className="mx-2">
                        <ImCheckboxChecked className="text-success"  onClick={() => actualizarServicio()}/> 
                        </a>
                    </Tooltip>
                    
                    :
                    
                    <Tooltip title='Editar' arrow>
                      <a href="#" className="mx-2">
                        <BsPencilSquare className="text-primary"  onClick={() => setEdit(!edit)}/>
                        </a>
                    </Tooltip>
                    
                    }
                    {edit? 
                    <Tooltip title='Cancelar' arrow>
                    <a href="#"className="mx-2">
                      <MdCancel className="text-warning" onClick={() => setEdit(!edit)}/>
                      </a>
                    </Tooltip>
                    :
                    <Tooltip title='Eliminar' arrow>
                      <a href="#"className="mx-2">
                      <BsTrash className="text-danger" onClick={() => notifyEliminar()}/>
                      </a>
                    </Tooltip>
                    }
                  
                  </td>
                </tr>

  )
}



export default Servicios1;