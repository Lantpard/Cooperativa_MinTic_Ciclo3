import React from "react"
import { nanoid } from 'nanoid';
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Table} from "react-bootstrap"
import "styles/style.css"

function TablaNs() {

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

    // Prueba nanoid autogenerador de id
    // Instalar npm i nanoid -> no olvidar hacer la importacion
    // console.log('ID: ',nanoid(10));

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
    );
}

export default TablaNs;
