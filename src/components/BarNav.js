import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Image,Nav,Dropdown,Card} from "react-bootstrap"
import Logot3 from 'media/logot3.png';
import "styles/style.css"

function BarNav() {
  

    
  return (
    <>
    <Card className="navColor centrar">
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
        <Nav.Link className="linkColor gap-5 mx-2" href="/NuevoServicio1">Nuevo Servicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="linkColor gap-5 mx-2" href="/Servicios1" 
        >Servicios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="linkColor gap-5 mx-2" href="/Roles1">Roles</Nav.Link>
      </Nav.Item>
      <Nav.Item >
          <Dropdown>
            <Dropdown.Toggle className="linkColor gap-5 mx-2"  variant="Secondary" id="dropdown-basic">
              Profile
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Settings</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Correo</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/Index">Salir</Dropdown.Item>
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
