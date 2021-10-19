import React, { useEffect, useState, useRef }  from "react"
import {Form, Table, Card,CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import Acciones2 from "components/Acciones2";
import {upDatabase,database,consultarDatabase,guardarDatabase,consultarDocumentoDatabase,actualizarDocumentoDatabase} from 'firebase'

import Logot3 from 'media/isotop.png';

import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'
import { ImCheckboxChecked } from 'react-icons/im'
import { nanoid } from 'nanoid';
import { Loading } from 'components/Loading'



function Roles1() {

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false)
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true)





    //////////////////

//descargar info
useEffect(() => {
  setLoading(true)
    cargarDatos()

    if (ejecutarConsulta) {
      cargarDatos();
    }
    
  }, [ejecutarConsulta])
  
  const cargarDatos = async () => {
    // console.log('Entro..!');
    const listaTemporal1 = await consultarDatabase('Roles')
    // console.log(listaTemporal);
    setRoles(listaTemporal1)
    setEjecutarConsulta(false)
    setLoading(false)
  }


    
//descargar filtrar
const [busqueda, setBusqueda] = useState('');
const [vehiculosFiltrados, setVehiculosFiltrados] = useState(roles);

    useEffect(() => {
        console.log("busqueda",busqueda)
        console.log("sinfiltro",vehiculosFiltrados)

      setVehiculosFiltrados(
          roles.filter((elemento) => {
              /* return elemento.Vendedor.includes(busqueda) */
          return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
        })
      );

      console.log("con filtro",vehiculosFiltrados)
    }, [busqueda, roles]);



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

    


    return (

      <div>
        <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar" >
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Roles Usuarios</h1>
            </div>
            <br />
            <div className="d-block w-100 mb-3 gap-3">
            <CardGroup className="centrar fuente3">
                    <Card className=" cardColor w-100text-white shablack">
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


        <div>
            
            
            <div className="d-block w-100 mb-3 gap-3">
            <CardGroup className="centrar fuente3">
                    <Card className=" cardColor w-100text-white shablack">
                    <div className="d-block centrar w-100 p-3 gap-3 ">
    <Table striped bordered hover className="borde-rad">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Perfil</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
        {
              vehiculosFiltrados.map((task,index) => 
              (
                <FilaRol task={task} index={index}/>
              )
              
              




              )
              
            }
    </tbody>
    </Table>
    </div>
                </Card>
                </CardGroup>
            </div>
        </div>


        </>
      }


    </div>
    );
}

const FilaRol=({setEjecutarConsulta,task,index})=>{


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

  const [editRol, setEditRol] = useState({
    id:task.id,
    id_vendedor: task.id_vendedor,
    email: task.email,
    nombre: task.nombre,
    perfil: task.perfil,
    estado: task.estado
  });

  const ActualizarRol = /* async */() => {
    

    /* await actualizarDocumentoDatabase ("Roles",task.id,editRol); */
    
    
    setEdit(false);

    
    setEjecutarConsulta(true);
    
    
  }

  


  return(

    <tr key={nanoid()}>

                  <td>
                    {index+1}
                  </td>
                  <td>
                    {task.id_vendedor}
                  </td>
                  <td>
                    {task.email}
                    
                  </td>
                  <td>
                      {task.nombre}
                      
                  </td>
      {edit?
      
        <>
            
            <td>
            <select className="w-50" aria-label="Default select example" defaultValue={editRol.perfil} 
            onChange={(e) => setEditRol({ ...editRol, perfil: e.target.value })}
            required>
                        <option >Selecciona</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Vendedor">Vendedor</option>
                    </select>
            </td>
            <td>
            <select className="w-50" aria-label="Default select example" defaultValue={editRol.estado} 
            onChange={(e) => setEditRol({ ...editRol, estado: e.target.value })}
            required>
                        <option >Selecciona</option>
                        <option value="Autorizado">Autorizado</option>
                        <option value="No Autorizado">No Autorizado</option>
                    </select>
            </td>

        </> 

        :
            <>
                  
                  <td>
                      {task.perfil}
                      
                  </td>
                  <td>
                      {task.estado}
                      
                  </td>
             </>     
    }
                  
                  
                  <td>
                  <a href="#" className="mx-2">
                    {edit? <ImCheckboxChecked className="text-success"  onClick={() => ActualizarRol()}/> 
                    :
                    <BsPencilSquare className="text-primary"  onClick={() => setEdit(!edit)}/>}
                  
                  </a>
                  <a href="#" >
                    {edit? <MdCancel className="text-warning" onClick={() => handleEliminar(task.id)}/>
                    :
                    <BsTrash className="text-danger" onClick={() => handleEliminar(task.id)}/>
                    }
                  
                  </a>
                  </td>
                </tr>

  )
}

export default Roles1;