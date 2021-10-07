import React from "react"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */
/* import Index from "pages/index" */
import {Container,Navbar,Nav,NavDropdown} from "react-bootstrap"
import "styles/style.css"

function BarNav() {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">L</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-4 navegar">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/NuevaVenta">Nueva Venta</Nav.Link>
          <Nav.Link href="/EstadoVentas">Estado Ventas</Nav.Link>
          <Nav.Link href="/NuevoServicio">Nuevo Servicio</Nav.Link>
          <Nav.Link href="/Servicios">Servicios</Nav.Link>
          <Nav.Link href="/Roles">Roles</Nav.Link>
          <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item id="logout" href="/Index">Salir</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarNav;
