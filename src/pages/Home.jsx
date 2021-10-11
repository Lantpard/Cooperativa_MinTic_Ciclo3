import React from "react";
import { Container,Image } from "react-bootstrap";
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
import Logot3 from 'media/logot3.png';
import { guardarRegistro, firebase, database } from "firebase";
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
      <BarNav />
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
          {/* <button  onClick={() => guardarDatos()}
          
          onClick={() => {console.log(Nombre)}} >Click</button> */}
          
          


        </div>
      </Container>
    </div>
  );
}

export default Home;