import React from "react";
import { Spinner, Container,Image } from "react-bootstrap";
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
import Logot3 from 'media/logot3.png';
import { database } from "firebase";
import { getAuth } from "firebase/auth";

function Home() {
  const guardarDatos = async () => {
    const task = {
        email:"lantpard@hotmail.com",
        usuario: "Leonardo"

    };

    window.onload = async function(){
      const auth = getAuth();
      const user = auth.currentUser;
  
      console.log(user.displayName);
      console.log(user.email);

  }();


    // Usando Firebase
    // const respuesta = await firebase.firestore().collection("tareas").add(task);
    // console.log(respuesta);

    // Usando variables global declarada
    const respuesta = await database.collection("ingreso").add(task);
    console.log(respuesta);

    // Usando Funcion implmentada
    // const response = await guardarRegistro(task);
    // console.log(response);
  };

  return (
    <div>
      
      <br />
      {/* <Spinner animation="border" role="status" variant="primary" >
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
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
          {/* <button  onClick={() => guardarDatos()}
          
          onClick={() => {console.log(Nombre)}} >Click</button> */}
          {/* <a href="" className="btn text-primary"><i className="fas fa-pencil-alt">leo</i></a>
          <a href="" className="btn text-danger"><i className="far fa-trash-alt">an</i></a>

 */}
        </div>
      </Container>
    </div>
  );
}

export default Home;