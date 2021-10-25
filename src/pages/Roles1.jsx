import React, { useEffect, useState, useRef }  from "react"
import {Form, Table, Card,CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import Acciones2 from "components/Acciones2";
import {upDatabase,database,consultarDatabase,guardarDatabase,consultarDocumentoDatabase,actualizarDocumentoDatabase} from 'firebase'
import { Tooltip } from '@material-ui/core'
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
  cargarDatos();
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
const [busqueda2, setBusqueda2] = useState('');
const [busqueda3, setBusqueda3] = useState('');
const [busqueda4, setBusqueda4] = useState('');
const [vehiculosFiltrados, setVehiculosFiltrados] = useState(roles);


    //////email
    useEffect(() => {
        console.log("busqueda",busqueda)
        console.log("sinfiltro",vehiculosFiltrados)

      setVehiculosFiltrados(
          roles.filter((elemento) => {
              /* return elemento.Vendedor.includes(busqueda) */
          return JSON.stringify(elemento.email).toLowerCase().includes(busqueda.toLowerCase());
        })
      );

      console.log("con filtro",vehiculosFiltrados)
    }, [busqueda, roles]);


    /// Nombre
    useEffect(() => {
      console.log("busqueda",busqueda)
      console.log("sinfiltro",vehiculosFiltrados)

    setVehiculosFiltrados(
        roles.filter((elemento) => {
            /* return elemento.Vendedor.includes(busqueda) */
        return JSON.stringify(elemento.nombre).toLowerCase().includes(busqueda2.toLowerCase());
      })
    );

    console.log("con filtro",vehiculosFiltrados)
  }, [busqueda2, roles]);



  /// Perfil
  useEffect(() => {
    console.log("busqueda",busqueda)
    console.log("sinfiltro",vehiculosFiltrados)

  setVehiculosFiltrados(
      roles.filter((elemento) => {
          /* return elemento.Vendedor.includes(busqueda) */
      return JSON.stringify(elemento.perfil).toLowerCase().includes(busqueda3.toLowerCase());
    })
  );

  console.log("con filtro",vehiculosFiltrados)
}, [busqueda3, roles]);


/// Estado
useEffect(() => {
  console.log("busqueda",busqueda)
  console.log("sinfiltro",vehiculosFiltrados)

setVehiculosFiltrados(
    roles.filter((elemento) => {
        /* return elemento.Vendedor.includes(busqueda) */
    return JSON.stringify(elemento.estado).toLowerCase().includes(busqueda4.toLowerCase());
  })
);

console.log("con filtro",vehiculosFiltrados)
}, [busqueda4, roles]);



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

    //Comparer Function    
function GetSortOrder(prop) {    
  return function(a, b) {    
      if (a[prop] > b[prop]) {    
          return 1;    
      } else if (a[prop] < b[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
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
                    <br />
                    <div className="d-inline-flex mb-3 centrar">
                    
                    <label className=" mx-2 fuente5" >Buscar: </label>
                    <br />
                    <input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        
                        placeholder="email"/>
            
                

                    <input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda2}
                        onChange={(e) => setBusqueda2(e.target.value)}
                        
                        placeholder="nombre"/>


                <input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda3}
                        onChange={(e) => setBusqueda3(e.target.value)}
                        
                        placeholder="perfil"/>


                  <input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda4}
                        onChange={(e) => setBusqueda4(e.target.value)}
                        
                        placeholder="estado"/>

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
              vehiculosFiltrados.sort(GetSortOrder("email")).map((task,index) => 
              (
                <FilaRol task={task} index={index} setEjecutarConsulta={setEjecutarConsulta}/>
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
    
    id_vendedor: task.id_vendedor,
    email: task.email,
    nombre: task.nombre,
    perfil: task.perfil,
    estado: task.estado
  });

  const ActualizarRol = async() => {
    

    await actualizarDocumentoDatabase ("Roles",task.id,editRol);
    
    
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
                  
                    {edit? 
                    <Tooltip title='Actualizar' arrow>
                    <a href="#"className="mx-2">
                    <ImCheckboxChecked className="text-success"  onClick={() => ActualizarRol()}/> 
                    </a>
                    </Tooltip>
                    :
                    <Tooltip title='Editar' arrow>
                      <a href="#"className="mx-2">
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
                    <>
                    {/* <Tooltip title='Eliminar' arrow>
                      <a href="#"className="mx-2">
                      <BsTrash className="text-danger" onClick={() => handleEliminar(task.id)}/> 
                      </a>
                    </Tooltip> */}
                        </>
                    }

                  </td>
                </tr>

  )
}

export default Roles1;