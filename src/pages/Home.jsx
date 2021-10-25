import React, { useEffect, useState, useRef }  from "react"
import { Spinner, Container,Image } from "react-bootstrap";
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import Logot3 from 'media/logot3.png';
import { database,guardarDatabase } from "firebase";
import { getAuth } from "firebase/auth";
import { Loading } from 'components/Loading'
import { usuarioActual,ingreso } from "firebase";
import { nanoid } from 'nanoid';

/* import {getLogin} from 'pages/Login' */

function Home() {


  /* const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("funcionando")
    console.log("usuarioActual", usuarioActual)
    setLoading(true)
    
    guardarDatos()

  }, [])

  const guardarDatos = async () => { */
    /* const task = {
        email:"lantpard@hotmail.com",
        usuario: "Leonardo"

    };

  

    console.log("vammos a loading")
    setTimeout(setLoading(false)
    setLoading(false)

   
  };

  /* window.onload = async function(){
    const auth = getAuth();
    const user = auth.currentUser; */

    /* console.log("usuario home",user) */
    /* await guardarDatabase("Ingreso",ingreso) */
    /* console.log(user.email);  */

/* }(); */

  return (
   

    <div>
      
      <br />
      
      <Container>
        <div
          className="d-block w-100 mb-3 gap-3 centrar text-center"
          align="center"
        >
          <br />
          <br />
          <h1  className="fuente">Sistema de Gestión de Ventas</h1>
          <br />
          <Image src={Logot3} rounded  height="200"/> 
          <br />

         
        </div>
      </Container>
    </div>
    
   
  
  );
}

export default Home;