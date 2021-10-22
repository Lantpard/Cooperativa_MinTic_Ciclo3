import React, { useEffect, useState, useRef }  from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {logOutUsuario,usuario,consultarDatabase} from 'firebase'
import {Image,Nav,Dropdown,Card} from "react-bootstrap"
import { database,useAuth } from "firebase";
import Logot3 from 'media/logot3.png';
import "styles/style.css"
import { getAuth } from "firebase/auth";
import { Loading } from 'components/Loading'


function BarNav ({perfil}) {

  console.log("el perfil del usuario es x: ",perfil)

  

  const auth = getAuth();
  /* const auth = useAuth(); */
  const user = auth.currentUser;
  
  const [profilename, setProfileName] = useState('');
  const [profilemail, setProfileMail] = useState('');
  const [profilefoto, setProfileFoto] = useState('');
  const [profileuid, setProfileUid] = useState('');
  const [roles, setRoles] = useState([]);
  const [admin, setAdmin] = useState(false);

  

  useEffect(() => {
    /* cargarDatos() */
  setProfileName(user.displayName)
  setProfileUid(user.uid)
  setProfileMail(user.email)
  setProfileFoto(user.photoURL)
    }, [])


   /*  const cargarDatos = async () => {
      // console.log('Entro..!');
      const listaTemporal = await consultarDatabase('Roles')
      // console.log(listaTemporal);
      setRoles(listaTemporal)
      console.log("estas son los Roles",listaTemporal)

      for(var i=0; i<listaTemporal.length;++i){
        console.log('ingreso',profileuid)
        if(listaTemporal[i].id==profileuid){
          return console.log("el perfil es",listaTemporal[i].perfil);
        }

      }
      

      
    } */
  
  /* setProfileMail(perfilemail)
  setProfileName(perfilename) */
  /* const [loading, setLoading] = useState(false)

  

  useEffect(() => {

    setLoading(true)
    guardarDatos()

  


  }, [])

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


   
    const respuesta = await database.collection("ingreso").add(task);
    console.log(respuesta);

    setLoading(false)

   
  }; */

  

  /* if(perfil=="Administrador"){
      setAdmin(true)
  }else{
    setAdmin(false)
  } */

  /* if(perfil=="Administrador"){
    return setAdmin(true)
}else{
  return setAdmin(false)
} */

    
  return (
    <>
    <Card className="navColor centrar ">
      <Card.Header >
          <Nav className=" centrar gap-4 mx-2" variant="tabs"  defaultActiveKey="/Home">
            <Image src={Logot3} rounded height="40"/> 
          <Nav.Item>
        <Nav.Link className="linkColor gap-5 mx-2" href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="nVenta" className="linkColor gap-5 mx-2" 
        href="/NuevaVenta3"
        >Nueva Venta</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="linkColor gap-5 mx-2" href="/EstadoVentas1">Estado Ventas</Nav.Link>
      </Nav.Item>
      <Nav.Item>

        {!!(perfil=="Administrador")
        
        &&<Nav.Link className="linkColor gap-5 mx-2" href="/NuevoServicio1">Nuevo Servicio</Nav.Link>}


      </Nav.Item>
      <Nav.Item>
      {!!(perfil=="Administrador")
        
        &&<Nav.Link className="linkColor gap-5 mx-2" href="/Servicios1" 
        >Servicios</Nav.Link>}
      </Nav.Item>
      <Nav.Item>
      {!!(perfil=="Administrador")
        
        &&<Nav.Link className="linkColor gap-5 mx-2" href="/Roles1">Roles</Nav.Link>}
      </Nav.Item>
      <Nav.Item >
          <Dropdown>
            <Dropdown.Toggle className="linkColor gap-5 mx-2"  variant="Secondary" id="dropdown-basic">
            <img src={profilefoto} width="30" className="mx-2">
              </img>{' '} {profilename}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">
              {perfil? perfil:"general"}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">{profilemail}</Dropdown.Item>
                           
              <Dropdown.Divider />
              <Dropdown.Item 
              onClick={()=>logOutUsuario()}
              
              
              href="/Index">Salir</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Nav.Item>
    </Nav>
  </Card.Header>
  
</Card>
      </>
  );
}
export default BarNav; 

