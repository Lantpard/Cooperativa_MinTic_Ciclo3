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


  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log("funcionando")
    console.log("usuarioActual", usuarioActual)
    setLoading(true)
    
    guardarDatos()

  }, [])

  const guardarDatos = async () => {
    /* const task = {
        email:"lantpard@hotmail.com",
        usuario: "Leonardo"

    };

   
    

   
    const respuesta = await database.collection("ingreso").add(task);
    console.log(respuesta) */;

    console.log("vammos a loading")
    setTimeout(setLoading(false)/* function (){window.location.href="/EstadoVentas1"} */,5000)

    setLoading(false)

   
  };

  window.onload = async function(){
    const auth = getAuth();
    const user = auth.currentUser;

    /* console.log("usuario home",user) */
    /* await guardarDatabase("Ingreso",ingreso) */
    /* console.log(user.email);  */

}();

  return (
    <div>
    {
      loading
        ?
        <Loading />
        :
        <> 

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

          {/* <img src="https://lh3.googleusercontent.com/a-/AOh14Gj7sdOnld-J2sa9m9-UhTDoE40fDCuYgMpye8oP=s96-c" with="200">
              </img> */}
          {/* <button  onClick={() => guardarDatos()}
          
          onClick={() => {console.log(Nombre)}} >Click</button> */}
          {/* <a href="" className="btn text-primary"><i className="fas fa-pencil-alt">leo</i></a>
          <a href="" className="btn text-danger"><i className="far fa-trash-alt">an</i></a>

 */}
        </div>
      </Container>
    </div>
    
    </>
  }
  </div>
  );
}

export default Home;