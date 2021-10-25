import React, { useEffect, useState, useRef }  from "react"
import { Link } from "react-router-dom"
/* import Index from "pages/index" */
import {logOutUsuario,usuario,consultarDatabase} from 'firebase'
import {Image,Nav,Dropdown,Card} from "react-bootstrap"
import { database,useAuth } from "firebase";
import Logot3 from 'media/logot3.png';
import "styles/style.css"
import { getAuth } from "firebase/auth";
import { Loading } from 'components/Loading'



function BarNav ({ children,perfil,profileName,profileUid,profileMail,profileFoto }) {
  
   

  const auth = getAuth();
  /* const auth = useAuth(); */
  const user = auth.currentUser;
  
  
  const [roles, setRoles] = useState([]);
  const [admin, setAdmin] = useState(false);

  

  


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
          
        <Link className=" btn btn-success linkColor gap-5 mx-2" activeClassName="active" to="/Home">Home</Link>
      
        <Link id="nVenta" className=" btn btn-success linkColor gap-5 mx-2" activeClassName="active" profileName={profileName}
        to="/NuevaVenta3"
        >Nueva Venta</Link>
      
        <Link className="btn btn-success linkColor gap-5 mx-2" activeClassName="active" to="/EstadoVentas1">Estado Ventas</Link>
      

        {!!(perfil=="Administrador")
        
        &&<Link className="btn btn-success linkColor gap-5 mx-2" activeClassName="active" to="/NuevoServicio1">Nuevo Servicio</Link>}


     
      {!!(perfil=="Administrador")
        
        &&<Link className="btn btn-success linkColor gap-5 mx-2" activeClassName="active" to="/Servicios1" 
        >Servicios</Link>}
      
      {!!(perfil=="Administrador")
        
        &&<Link className="btn btn-success linkColor gap-5 mx-2" activeClassName="active" to="/Roles1">Roles</Link>}
      
          <Dropdown activeClassName="active">
            <Dropdown.Toggle className="btn btn-success linkColor gap-5 mx-2"  activeClassName="active" variant="Secondary" id="dropdown-basic">
            <img src={profileFoto} width="30" className="mx-2">
              </img>{' '} {profileName}
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#">
              {perfil? perfil:"Vendedor"}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">{profileMail}</Dropdown.Item>
                           
              <Dropdown.Divider />
              <Dropdown.Item 
              onClick={()=>logOutUsuario()}
              
              
              href="/Index">Salir</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      
    </Nav>
  </Card.Header>
  
</Card>
      </>
  );
}
export default BarNav; 

