import React from "react"
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
import Usuarios from 'media/usuarios.png';
import Entrada from 'media/entrada1.png';
import {FormControl,Image,Table,Button,Nav} from "react-bootstrap"


function Index() {
  return (
    <div className="container text-center d-block borde w-25 p-5 inicio">
      <h4>Sistema de Gestión de Ventas</h4> 
      <Image src={Usuarios} rounded width="50" height="50"/>
      <br />
      <Nav.Link href="/Login">
        <Button className="btn btn-outline-danger btn-border gap-3" variant="success"><Image src={Entrada} rounded width="20" height="20"/>Ingresar</Button>{' '}
      </Nav.Link> 
    </div>
  );
}

export default Index;