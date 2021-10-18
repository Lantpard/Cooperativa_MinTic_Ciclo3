import React, { useEffect, useState, useRef }  from "react"
import {Form, Table, Card,CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import Acciones2 from "components/Acciones2";
import {database,consultarDatabase} from 'firebase'
import Logot3 from 'media/isotop.png';

import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { nanoid } from 'nanoid';
import { Loading } from 'components/Loading'

function Roles1() {

    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(false)





    //////////////////

//descargar info
useEffect(() => {
  setLoading(true)
    cargarDatos()
    
  }, [])
  
  const cargarDatos = async () => {
    // console.log('Entro..!');
    const listaTemporal1 = await consultarDatabase('Roles')
    // console.log(listaTemporal);
    setRoles(listaTemporal1)
  
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
                <tr key={nanoid()}>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {task.id}
                  </td>
                  <td>
                    {task.email}
                  </td>
                  <td>
                      {task.nombre}
                  </td>
                  <td>
                      {task.perfil}
                  </td>
                  <td>
                      {task.estado}
                  </td>
                  <td>
                  <a href="#" className="mx-2">
                  <BsPencilSquare className="colori"  onClick={() => handleEditar(task)}/>
                  </a>
                  <a href="#" >
                  <BsTrash className="text-danger" onClick={() => handleEliminar(task.id)}/>
                  </a>
                  </td>
                </tr>
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

export default Roles1;