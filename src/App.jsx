import React, { useEffect, useState, useRef }  from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Index from "pages/Index";
import NuevaVenta3 from "pages/NuevaVenta3";
import Home from "pages/Home";
import EstadoVentas1 from "pages/EstadoVentas1";
import ModificacionVenta1 from "pages/ModificacionVenta1";
import NuevoServicio1 from "pages/NuevoServicio1";
import Servicios1 from "pages/Servicios1";
import Roles1 from "pages/Roles1";
import Login from "pages/Login";
import { AuthProvider ,auth,database,consultarDatabase,consultarDocumentoDatabase} from "firebase"
import PrivateLayout from 'Layouts/PrivateLayout';
import AuthLayout from 'Layouts/AuthLayout';
import PublicLayout from 'Layouts/PublicLayout';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { onAuthStateChanged } from "@firebase/auth"

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false)
  
  const [rol, setRol] = useState([])
  const [perfil,setPerfil]=useState("Vendedor")
  

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {

        if (user) {
            const usuario = {
                id: user.uid,
                email: user.email
            }
            console.log(usuario);
            console.log(user);
            setFirebaseUser(usuario)
            console.log('El usuario logueado');
            consultarProducto(usuario.id)

        } else {
            console.log('El usuario ya no esta logueado');
            setFirebaseUser(null)
        }

    })


}, [setFirebaseUser])


const consultarProducto = async (task) => {
  
  const productoTemp = await consultarDocumentoDatabase('Roles', task)
  console.log(productoTemp)
  setPerfil(productoTemp.perfil)
  console.log("haber",perfil)
}


  return (
    <div className='App'>

<Router>
            <Switch>

             

              
              <Route path={['/Home', '/NuevaVenta3','/EstadoVentas1/:id', '/EstadoVentas1', '/ModificacionVenta1', '/NuevoServicio1', '/Roles1', '/Servicios1']}>
                <PrivateLayout perfil={perfil}>
                  <Switch>
                    <Route exact path='/Home' component={Home}/>
            
                    <Route exact path='/NuevaVenta3' component={NuevaVenta3}/>

                    <Route exact path='/EstadoVentas1/:idServicio' component={ModificacionVenta1}/>
                      
                    <Route exact path='/EstadoVentas1' component={EstadoVentas1}/>

                    {!!(perfil=="Administrador")
        
                        &&<Route exact path='/NuevoServicio1' component={NuevoServicio1}/>}

                        {!!(perfil=="Administrador")
        
                        &&<Route exact path='/Roles1' component={Roles1}/>}

                        {!!(perfil=="Administrador")
        
                        &&<Route exact path='/Servicios1' component={Servicios1}/>}

                    <Route path='*'>
                      <h1>404 Not found</h1>
                    </Route>

                  </Switch>
                </PrivateLayout>
              </Route>             


              <Route path={['/Login']}>
              <AuthProvider>
                <AuthLayout>
                  <Switch>
                    <Route exact path='/Login' component={Login}/>

                    
                  </Switch>
                </AuthLayout>
                </AuthProvider>
              </Route>


              <Route path={['/']}>
                <PublicLayout>
                  <Route path='/' component={Index}/>
                </PublicLayout>
              </Route>

            </Switch>
</Router>

    </div>
  );
}


export default App;
