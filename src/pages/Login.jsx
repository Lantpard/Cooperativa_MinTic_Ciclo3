import React, { useRef, useState } from "react"
import { Link, useHistory } from "react-router-dom"
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
import Usuarios from 'media/usuarios.png';
import Entrada from 'media/entrada1.png';
import Google from 'media/google.png';
import {Form,Image,Table,Button,Nav,Alert, Card} from "react-bootstrap"
import { signGooglePop,useAuth} from "firebase"



export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  /* const { signGoogle } =signInWithGooglePopUp() */
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/Home")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (

    <div className="container text-center d-block borde w-25 p-3 inicio">
      <h2>Login</h2> 
      {error && <Alert variant="danger">{error}</Alert>}
      <br />
      <Form onSubmit={handleSubmit}>
      <div>
        <Form.Group id="email" className="d-inline-flex w-75 mb-3 gap-3 centrar" controlId="formEmail">
          <Form.Label>@</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="email" required/>
        </Form.Group>
      </div>
      
      <div>
        <Form.Group id="password" className="d-inline-flex w-75 mb-3 gap-3 centrar" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="password" required/>
        </Form.Group>
      </div>
      
        <Button type="submit" className="btn btn-outline-danger btn-border gap-3" id="singin" disabled={loading} variant="primary">
          Sign In</Button>
      
      </Form>
      <br />
      <div class="d-inline-flex gap-3 centrar">
        <Nav.Link id="google" /* onClick= {GoogleIn()} */
        onClick={()=>{document.getElementById('google').addEventListener("click",signGooglePop())}}
        >
          <Image src={Google} rounded width="20" height="20"/>
          <h3 class="text-right textox">Registrate</h3>
        </Nav.Link>
      </div>
      
    </div>
  );
}
