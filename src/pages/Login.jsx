import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import Google from 'media/google.png';
import {Form,Image,Button,Nav,Alert} from "react-bootstrap"
import { signGooglePop,useAuth} from "firebase"
import tarif2 from 'media/logot3.png';
import { Loading } from 'components/Loading'


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
      
      <h2 className="fuente4">Login</h2> 
      <Image src={tarif2} rounded height="90"/>
      <br />
      {error && <Alert ClassName="fuente3"variant="danger">{error}</Alert>}
      <br />
      <Form onSubmit={handleSubmit}>
      <div>
        <Form.Group id="email" className="d-inline-flex w-75 mb-3 gap-3 centrar fuente3" controlId="formEmail">
          <Form.Label>@</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="email" required/>
        </Form.Group>
      </div>
      
      <div>
        <Form.Group id="password" className="d-inline-flex w-75 mb-3 gap-3 centrar fuente3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} placeholder="password" required/>
        </Form.Group>
      </div>
      
        <Button type="submit" className="btn btn-outline b-color btn-border gap-3 fuente3" id="singin" disabled={loading} variant="primary">
          Sign In</Button>
      
      </Form>
      <div class="d-inline-flex gap-3 centrar">
        <Nav.Link id="google" href={"/Singin"}
        
        >
          <h3 class="text-right textox fuente3">Registrate</h3>
        </Nav.Link>
      </div>
      <br />
      <div class="d-inline-flex gap-3 centrar">
        <Nav.Link id="google" /* onClick= {GoogleIn()} */
        onClick={()=>{document.getElementById('google').addEventListener("click",signGooglePop())}}
        >
          <Image src={Google} rounded width="20" height="20"/>
          <h3 class="text-right textox fuente3">SingIn with Google</h3>
        </Nav.Link>
      </div>
      
    </div>
  );
}
