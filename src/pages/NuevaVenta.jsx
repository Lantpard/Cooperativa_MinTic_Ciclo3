import React from "react"
import { nanoid } from 'nanoid';
import {Container,Card,CardGroup,Button,Image} from "react-bootstrap"
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


    let resultados=''
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

   


function NuevaVenta() {

     //nueva tarea
     const [tarea, setTarea] = React.useState('')
     const [codigo, setCodigo] = React.useState('')
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

    const contendorTarea = document.getElementById('table-body')

    async function listarServicios(){

        listaser= await leerServicios();
        listaser.forEach(function(elemento, indice, array){
            console.log(indice+1,elemento.Servicio, elemento.Precio);

        })

                const auth = getAuth();
                const user = auth.currentUser;
                uNombre=user.displayName
                uEmail=user.email
                console.log(uNombre);
                console.log(uEmail);
                vendedor.value=uNombre

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
        setCode(e.target.value)
    }


    const handleFormulario = (e) => {
        e.preventDefault()

    // Validacion que el campo no esta vacio
    if (!tarea.trim()) {
      console.log('Debes ingresar una tarea...!-formulario')
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
        tarea,
        codigo
      }
    ])

    // Limpiar el estado
    setTarea('')
    setCodigo('')



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

  const handleGuardarEditar = (e) => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('Debes ingresar una tarea...!-guardar')
      return
    }

    const arregloTemporal = listaTarea.map((item) => {
      return item.id === id ? { id: id, codigo:codigo,tarea: tarea } : item
    })

    setListaTarea(arregloTemporal)

    // Limpiar el estado
    setTarea('')
    setCodigo('')
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
                    <HeaderFact/>
                    <TablaFac/>
                    <FooterFact/>
                    </Card.Body>
                </Card>
                </CardGroup>
                </div>
                <div className="d-block w-75 mb-3 gap-3">
                <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    <Client
                    
                    />
                    </Card>
                </CardGroup>
                    <br />
                    <br />
                    <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    <Service/>
                    </Card>
                </CardGroup>

                <button
                className="btn btn-primary btn-sm mx-5"
                onClick={() => console.log(leo)}>
                Buscar
            </button>
                </div>
                <br />
                
            </div>
            
        </div>
    );
}

export default NuevaVenta;