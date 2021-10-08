import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Container,Navbar,Nav,Dropdown,Card} from "react-bootstrap"
import "styles/style.css"

function BarNav() {
  return (

    <>
    <Card >
  <Card.Header >
    <Nav className="primary gap-5" variant="tabs"  defaultActiveKey="/Home">
      <Nav.Link href="#disabled" disabled>
          Tarif
        </Nav.Link>
      <Nav.Item>
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/NuevaVenta">Nueva Venta</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/EstadoVentas">Estado Ventas</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/NuevoServicio">Nuevo Servicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Servicios">Servicios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/Roles">Roles</Nav.Link>
      </Nav.Item>
      <Nav.Item >
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
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
