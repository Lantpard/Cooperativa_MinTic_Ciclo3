import React from "react"
import {Card,CardGroup,Image} from "react-bootstrap"
/* import { BrowserRouter as Router, Switch, Route } from "react-router-dom" */

import TablaGs from "components/TablaGs";
import HeaderSer from "components/HeaderSer";

import Logot3 from 'media/isotop.png';

import {database} from 'firebase'

import { getAuth } from "firebase/auth";



let listaser = []

var Nombre="";
var Correo="";

function Servicios() {


    const contendorTarea = document.getElementById('table-body')

    async function listarServicios(){

        listaser= await leerServicios();
        listaser.forEach(function(elemento, indice, id, array){
            console.log(indice+1,elemento.Servicio, elemento.Precio);


                


            
        })


                const auth = getAuth();
                const user = auth.currentUser;
                Nombre=user.displayName;
                Correo=user.email;
                console.log(Nombre, Correo);
                


        //inyeccion
        /* let contenidoHtml = "";
        listaser.forEach((t)=>{
            contenidoHtml += `
            <>
            <tr>
                <td></td>
                <td>${t.Codigo}</td>
                <td>${t.Servicio}</td>
                <td>${t.Precio}</td>
                <td>${t.Cantidad}</td>
                <td>${t.Estado}</td>
                <td></td>
            </tr>
            </>
            `
        })
        contendorTarea.innerHTML = contenidoHtml */





    }
    

    async function leerServicios(){
        const Servicios1 = []
        const respuesta = await database.collection('Servicios').get()

        
        respuesta.forEach(function(item){
            //console.log(item.data());
            Servicios1.push(item.data())
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
        return Servicios1

        
    }
    
    

    function pintar(Servicios1){
        // contendorTarea
        let contenidoHtml = "";
        Servicios1.forEach((t)=>{
            contenidoHtml += `
            <li>${t.Servicio}</li>
            `
        })
        contendorTarea.innerHTML = contenidoHtml

    }

    return (
        <div>
            
            <br />
            <div className="d-inline-flex w-100 mb-3 gap-3 centrar fuente" align="center">
            <Image src={Logot3} rounded  height="50"/> 
                <h1 className="fuente4">Servicios</h1>
            </div>
            <br />
            <div className="d-block w-100 mb-3 gap-3 fuente3 centrar">
                <CardGroup className="centrar fuente3">
                    <Card className=" cardColor w-100text-white shablack">
                        <HeaderSer/>
                    </Card>
                </CardGroup>
            </div>
            <div className="d-block w-100 mb-3 gap-3 fuente3">
                <CardGroup className="centrar fuente3">
                    <Card className=" cardColor w-100 text-white shablack">
                        <TablaGs/>
                    </Card>
                </CardGroup>
            </div>
            <button className="btn btn-primary btn-sm mx-5"
                onClick={() => listarServicios()}>
                Buscar
            </button>
        </div>
    );
}

export default Servicios;