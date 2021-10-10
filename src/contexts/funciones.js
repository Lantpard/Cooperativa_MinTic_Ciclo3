import { nanoid } from 'nanoid';
import React from 'react'



    const [tarea, setTarea] = React.useState('')
    const [listaTarea, setListaTarea] = React.useState([])

  // Estados de modificacion
    const [editar, setEditar] = React.useState(false)
    const [id, setId] = React.useState('')

    const handleInput = (e) => {
    // console.log(e.target.value);
    // Asignacion al tarea
    setTarea(e.target.value)
    }

    const handleFormulario = (e) => {
    e.preventDefault()

    // Prueba nanoid autogenerador de id
    // Instalar npm i nanoid -> no olvidar hacer la importacion
    // console.log('ID: ',nanoid(10));

    // Validacion que el campo no esta vacio
    if (!tarea.trim()) {
        console.log('Debes ingresar una tarea...!')
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
        tarea
        }
    ])

    // Limpiar el estado
    setTarea('')



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
    setEditar(true)
    setId(task.id)

    }

    const handleGuardarEditar = (e) => {
    e.preventDefault()

    if (!tarea.trim()) {
        console.log('Debes ingresar una tarea...!')
        return
    }

    const arregloTemporal = listaTarea.map((item) => {
        return item.id === id ? { id: id, tarea: tarea } : item
    })

    setListaTarea(arregloTemporal)

    // Limpiar el estado
    setTarea('')
    }


