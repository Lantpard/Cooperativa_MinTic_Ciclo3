import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import Google from 'media/google.png';
import {Form,Image,Button,Nav,Alert} from "react-bootstrap"
import { signGooglePop,useAuth} from "firebase"
import tarif2 from 'media/logot3.png';
import { Loading } from 'components/Loading'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Singin() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  /* const { signGoogle } =signInWithGooglePopUp() */
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);
  

  const auth = getAuth();

  async function handleSubmit(e) {
    e.preventDefault()
    const correo = e.target.formBasicEmail.value;
    const pass = e.target.formBasicPassword.value;

    if (estaRegistrandose) {
      //si se registra

      try{
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        pass
      );
      toast.info("Usuario registrado");
      setTimeout(function (){window.location.href="/Login"},3000)
      /* history.push("/Login") */
    }catch {
      setError("User exists")
      toast.error("Usuario ya registrado");
      setTimeout(function (){window.location.href="/Login"},3000)
    }

    } else {
      // si está iniciando sesión
      
    }
   

   
  }

  return (

    <div className="container text-center d-block borde w-25 p-3 inicio">
      
      <h2 className="fuente4">SingIn</h2> 
      <Image src={tarif2} rounded height="90"/>
      <br />
      {error && <Alert ClassName="fuente3"variant="danger">{error}</Alert>}
      <br />
      <Form onSubmit={handleSubmit}>
      <div>
        <Form.Group id="email" className="d-inline-flex w-75 mb-3 gap-3 centrar fuente3" controlId="formBasicEmail">
          <Form.Label>@</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="email" required/>
        </Form.Group>
      </div>
      
      <div>
        <Form.Group id="password" className="d-inline-flex w-75 mb-3 gap-3 centrar fuente3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="password" required/>
        </Form.Group>
      </div>
      
        <Button type="submit" className="btn btn-outline b-color btn-border gap-3 fuente3" id="singin" variant="primary"
        onClick={() => setEstaRegistrandose(!estaRegistrandose)}
        >
          Submit</Button>
      
      </Form>
      <br />
      <div class="d-inline-flex gap-3 centrar">
      <div class="d-inline-flex gap-3 centrar">
        <Nav.Link id="google" href={"/Login"}
        
        >
          <h3 class="text-right textox fuente3">Regresar</h3>
        </Nav.Link>
      </div>

      <ToastContainer
          position="bottom-center"
          autoClose={2000}
          
          
          />
      </div>
      
    </div>
  );
}
