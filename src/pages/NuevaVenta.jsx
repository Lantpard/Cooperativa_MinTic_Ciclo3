import React from "react"
import {Container,Card,CardGroup,Button,Image} from "react-bootstrap"
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
import {database} from 'firebase'
import Logot3 from 'media/logot3.png';
import { getAuth } from "firebase/auth";
import Acciones from "components/Acciones";



var listaser = []

var uNombre=""
var uEmail=""


    let resultados=''
    const contenedor = document.getElementById('FtBody')
    //const modalItems = new bootstrap.Modal(document.getElementById('myModal')) 
    const fecha=document.getElementById('fFecha')
    const nFactura=document.getElementById('fNfactura')
    const total=document.getElementById('fTotal')
    const vendedor=document.getElementById('fVendedor')
    const descripcion = document.getElementById('fDescrip')
    const cedula=document.getElementById('fCcedula')
    const nombre=document.getElementById('fCnombre')
    const codigo=document.getElementById('fCodigo')
    const servicio=document.getElementById('fServicio')
    const cantidad=document.getElementById('fCantidad')
    const precio=document.getElementById('fPrecio')

   /*  fAgregar.addEventListener('click',()=>{
        servicio.value=""
        codigo.value=""
        cantidad.value=""
        precio.value=""
    })
 */
    async function AgregarServicios(){
        listaser.forEach(function(elemento, indice, array){
            resultados +=`  <tr>
                                <td>${indice+1}</td>
                                <td>${elemento.Codigo}</td>
                                <td>${elemento.Servicio}</td>
                                <td>${elemento.Cantidad}</td>
                                <td>${elemento.Precio}</td>
                                <td>
                                    ${<Acciones/>}
                                </td>
                            </tr>
                            `
        })
        contenedor.innerHTML=resultados 
    }



function NuevaVenta() {



    const contendorTarea = document.getElementById('table-body')

    async function listarServicios(){

        listaser= await leerServicios();
        listaser.forEach(function(elemento, indice, array){
            console.log(indice+1,elemento.Servicio, elemento.Precio);


                


            
        })


                const auth = getAuth();
                const user = auth.currentUser;
                uNombre=user.displayName
                uEmail=user.email
                console.log(uNombre);
                console.log(uEmail);
                vendedor.value=uNombre






    }
    

    async function leerServicios(){
        const Servicios = []
        const respuesta = await database.collection('Servicios').get()

        
        respuesta.forEach(function(item){
            //console.log(item.data());
            Servicios.push(item.data())
            /* console.log(Servicios)
            console.log(Servicios.length)  */

            /* for(var i=0;i<Servicios.length;++i){
                console.log(i+1,Servicios[i].Servicio, Servicios[i].Estado)
                
                
            } */

            



            /* console.log(Servicios[0].Codigo)
            console.log(Servicios[0].Estado)
            console.log(Servicios[0].Cantidad)
            console.log(Servicios[0].Servicio)
            console.log(Servicios[0].Precio) */
            
        })
        return Servicios

        
    }
    
    







    return (
        <div>
            <BarNav/>
            <br />
            <div className="d-inline-flex mb-3 gap-3 centrar">
                <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Nueva Venta</h1>
            </div>
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 fuente3">
                <div className="w-100 " >
                <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    
                    <Card.Body>
                    <HeaderFact/>
                    <TablaFac/>
                    <FooterFact/>
                    </Card.Body>
                </Card>
                </CardGroup>
                </div>
                <div className="d-block w-75 mb-3 gap-3">
                <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    <Client
                    
                    />
                    </Card>
                </CardGroup>
                    <br />
                    <br />
                    <CardGroup>
                <Card className=" cardColor w-100 text-white shablack">
                    <Service/>
                    </Card>
                </CardGroup>

                <Button className="mx-2 borde-rad " id="fActualizar" variant="success"
            onClick={()=>{document.getElementById('fActualizar').addEventListener("click",listarServicios())}}
            >Actualizar
            </Button>{' '}

            <Button className="mx-2 borde-rad " id="Agregar" variant="success"
            onClick={()=>{document.getElementById('Agregar').addEventListener("click",AgregarServicios())}}
            >Agregar
            </Button>{' '}

                </div>
                <br />
                
            </div>
            
        </div>
    );
}

export default NuevaVenta;