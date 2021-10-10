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
import tarif2 from 'media/logot3.png';
import {FormControl,Image,Table,Button,Nav} from "react-bootstrap"


function Index() {
  return (
    <div className="container text-center d-block borde w-25 p-5 inicio">
      <h4 className="fuente2">Sistema de Gestión de Ventas</h4> 
      <Image src={tarif2} rounded height="90"/>
      <br />

      <Image src={Usuarios} rounded width="50" height="50"/>
      <br />
      <Nav.Link href="/Login">
        <Button className="btn btn-outline b-color btn-border gap-3 fuente3 mx-2" variant="danger"><Image className="mx-2" src={Entrada} rounded width="20" height="20"/>{" "}Ingresar</Button>{' '}
      </Nav.Link> 
    </div>
  );
}

export default Index;