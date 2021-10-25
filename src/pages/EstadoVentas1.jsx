import React, { useEffect, useState, useRef }  from "react"
import { Form,Nav,Table,Card, CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import { getAuth } from "firebase/auth";
import {database,consultarDatabase} from 'firebase'
import { Link } from 'react-router-dom'
import HeaderEstadoV from "components/HeaderEstadoV";
import TablaEstaV from "components/TablaEstaV";
import Modificar from 'media/modificar.png';
import Eliminar from 'media/eliminar.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { nanoid } from 'nanoid';
import { Loading } from 'components/Loading'
import Logot3 from 'media/isotop.png';
import { Tooltip } from '@material-ui/core'


var listafac = []

var uNombre=""
var uEmail=""


function EstadoVentas1() {

    const [ejecutarConsultax, setEjecutarConsultax] = useState(true);
    const [vendedor, setVendedor] = useState('')
    const [facturas, setFacturas] = useState([]);
    const [ejecutarConsulta1, setEjecutarConsulta1] = useState(true);
    const [vehiculos, setVehiculos] = useState([]);
    const [loading, setLoading] = useState(false)

    //descargar info
    useEffect(() => {
      setLoading(true)
        cargarDatos()
      }, [])
    
      const cargarDatos = async () => {
        // console.log('Entro..!');
        const listaTemporal = await consultarDatabase('Facturas')
        // console.log(listaTemporal);
        setFacturas(listaTemporal)
        console.log("estas son las facturas",listaTemporal)
        console.log(listaTemporal[0].id);

        setLoading(false)
      }


      //descargar filtrar
      const [busqueda, setBusqueda] = useState('');
      const [busqueda2, setBusqueda2] = useState('');
      const [busqueda3, setBusqueda3] = useState('');
      const [busqueda4, setBusqueda4] = useState('');
      const [busqueda5, setBusqueda5] = useState('');
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState(facturas);



      ////Factura
      useEffect(() => {
          console.log("busqueda",busqueda)
          console.log("sinfiltro",vehiculosFiltrados)

        setVehiculosFiltrados(
            facturas.filter((elemento) => {
                /* return elemento.Vendedor.includes(busqueda) */
            return JSON.stringify(elemento.factura).toLowerCase().includes(busqueda.toLowerCase());
          })
        );

        console.log("con filtro",vehiculosFiltrados)
      }, [busqueda, facturas]);


       ////id cliente
       useEffect(() => {
        console.log("busqueda",busqueda)
        console.log("sinfiltro",vehiculosFiltrados)

      setVehiculosFiltrados(
          facturas.filter((elemento) => {
              /* return elemento.Vendedor.includes(busqueda) */
          return JSON.stringify(elemento.id_cliente).toLowerCase().includes(busqueda2.toLowerCase());
        })
      );

      console.log("con filtro",vehiculosFiltrados)
    }, [busqueda2, facturas]);


     ////cliente
     useEffect(() => {
      console.log("busqueda",busqueda)
      console.log("sinfiltro",vehiculosFiltrados)

    setVehiculosFiltrados(
        facturas.filter((elemento) => {
            /* return elemento.Vendedor.includes(busqueda) */
        return JSON.stringify(elemento.nombre).toLowerCase().includes(busqueda3.toLowerCase());
      })
    );

    console.log("con filtro",vehiculosFiltrados)
  }, [busqueda3, facturas]);


   ////vendedor
   useEffect(() => {
    console.log("busqueda",busqueda)
    console.log("sinfiltro",vehiculosFiltrados)

  setVehiculosFiltrados(
      facturas.filter((elemento) => {
          /* return elemento.Vendedor.includes(busqueda) */
      return JSON.stringify(elemento.vendedor).toLowerCase().includes(busqueda4.toLowerCase());
    })
  );

  console.log("con filtro",vehiculosFiltrados)
}, [busqueda4, facturas]);



 ////estado
 useEffect(() => {
  console.log("busqueda",busqueda)
  console.log("sinfiltro",vehiculosFiltrados)

setVehiculosFiltrados(
    facturas.filter((elemento) => {
        /* return elemento.Vendedor.includes(busqueda) */
    return JSON.stringify(elemento.estado).toLowerCase().includes(busqueda5.toLowerCase());
  })
);

console.log("con filtro",vehiculosFiltrados)
}, [busqueda5, facturas]);


    

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
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar" align="center">
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Estado Ventas</h1>
            </div>
            <br />

            <CardGroup>
                

                <Card className=" cardColor shablack">
                    
                
                <br />
                <div className="d-inline-flex mb-3 centrar">
                    
                    <label className=" mx-2 fuente5" >Buscar: </label>
                    <br />
                    <input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        
                        placeholder="Factura"/>

<input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda2}
                        onChange={(e) => setBusqueda2(e.target.value)}
                        
                        placeholder="Id Cliente"/>

<input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda3}
                        onChange={(e) => setBusqueda3(e.target.value)}
                        
                        placeholder="Cliente"/>

<input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda4}
                        onChange={(e) => setBusqueda4(e.target.value)}
                        
                        placeholder="Vendedor"/>

<input 
                    
                    className=" centrar mx-2 " 
                    type="text" value={busqueda5}
                        onChange={(e) => setBusqueda5(e.target.value)}
                        
                        placeholder="Estado"/>

                
                    </div>
            


                </Card>
            </CardGroup>
            {
        loading
          ?
          <Loading />
          :
          <>      


            <CardGroup>
                <Card className=" cardColor w-100 text-white shablack fuente3">
                <div className="d-block centrar w-100 p-3 gap-3 ">
    <Table striped bordered hover className="borde-rad">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Numero Factura</th>
                <th scope="col">Id Cliente</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Total</th>
                <th scope="col">Vendedor</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
        {
              vehiculosFiltrados.sort(GetSortOrder("factura")).map((task,index) => 
              (
                <tr key={nanoid()}>
                  <td>
                    {index+1}
                  </td>
                  <td>
                    {task.factura}
                  </td>
                  <td>
                    {task.id_cliente}
                  </td>
                  <td>
                      {task.nombre}
                  </td>
                  <td>
                      {task.descripcion}
                  </td>
                  <td>
                      {task.total}
                  </td>
                  <td>
                  {task.vendedor}
                  </td>
                  <td>
                      {task.estado}
                  </td>
                  <td>
                  <Tooltip title='Editar' arrow>
                  <Link to={`/EstadoVentas1/${task.id}`} className="mx-2">
                  <BsPencilSquare className="text-primary"/>
                  </Link>
                  </Tooltip>
                  {/* <Link href="#" >
                  <BsTrash className="text-danger" onClick={() => handleEliminar(task.id)}/>
                  </Link> */}
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

            </>
      }
            
        </div>
    );
}



///FILA





export default EstadoVentas1;