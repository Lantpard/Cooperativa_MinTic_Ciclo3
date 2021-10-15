import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Index from "pages/Index";

import NuevaVenta3 from "pages/NuevaVenta3";
import Home from "pages/Home";
import EstadoVentas from "pages/EstadoVentas";
import ModificacionVenta from "pages/ModificacionVenta";
import NuevoServicio from "pages/NuevoServicio";
import Servicios from "pages/Servicios";
import Roles from "pages/Roles";
import Login from "pages/Login";
import { AuthProvider } from "firebase"

import PrivateLayout from 'Layouts/PrivateLayout';
import PrivateLayout2 from 'Layouts/PrivateLayout2';


/* import PublicLayout from 'layouts/PublicLayout';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Vehiculos from 'pages/admin/Vehiculos';
import Login from 'pages/auth/Login';
import Test from 'pages/test';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Registro from 'pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import { DarkModeContext } from 'context/darkMode';
import { Auth0Provider } from '@auth0/auth0-react'; */


function App() {
  return (
    <div className='App'>

<Router>
            <Switch>

              {/* Ruta Administrador */}
              <Route path={['/Home', '/NuevaVenta3', '/EstadoVentas', '/ModificacionVenta', '/NuevoServicio', '/Roles', '/Servicios']}>
                <PrivateLayout>
                  <Switch>
                    <Route path='/Home'>
                      <Home />
                    </Route>

                    <Route path='/NuevaVenta3'>
                      <NuevaVenta3 />
                    </Route>

                    <Route path='/EstadoVentas'>
                      <EstadoVentas />
                    </Route>

                    <Route path='/ModificacionVenta'>
                      <ModificacionVenta />
                    </Route>

                    <Route path='/NuevoServicio'>
                      <NuevoServicio />
                    </Route>

                    <Route path='/Roles'>
                      <Roles />
                    </Route>

                    <Route path='/Servicios'>
                      <Servicios />
                    </Route>

                    <Route path='*'>
                      <h1>404 Not found</h1>
                    </Route>

                  </Switch>
                </PrivateLayout>
              </Route>

              <Route path={['/Login']}>
              <AuthProvider>
                {/* <AuthLayout> */}
                  <Switch>
                    <Route path='/Login'>
                      <Login />
                    </Route>
                    {/* <Route path='/Index'>
                      <Registro />
                    </Route> */}
                  </Switch>
                {/* </AuthLayout> */}
                </AuthProvider>
              </Route>


              <Route path={['/']}>
                {/* <PublicLayout> */}
                  <Route path='/'>
                    <Index />
                  </Route>
                {/* </PublicLayout> */}
              </Route>



            </Switch>
</Router>
{/* Ruta Vendedor */}
{/* <Router>
            <Switch>
              
              <Route path={['/Home', '/NuevaVenta3', '/EstadoVentas', '/ModificacionVenta']}>
                <PrivateLayout2>
                  <Switch>
                    <Route path='/Home'>
                      <Home />
                    </Route>

                    <Route path='/NuevaVenta3'>
                      <NuevaVenta3 />
                    </Route>

                    <Route path='/EstadoVentas'>
                      <EstadoVentas />
                    </Route>

                    <Route path='/ModificacionVenta'>
                      <ModificacionVenta />
                    </Route>

                    <Route path='/NuevoServicio'>
                      <NuevoServicio />
                    </Route>

                    <Route path='/Roles'>
                      <Roles />
                    </Route>

                    <Route path='/Servicios'>
                      <Servicios />
                    </Route>

                    <Route path='*'>
                      <h1>404 Not found</h1>
                    </Route>

                  </Switch>
                </PrivateLayout2>
              </Route>


              <Route path={['/Login']}>
              <AuthProvider>
                
                  <Switch>
                    <Route path='/Login'>
                      <Login />
                    </Route>
                    
                  </Switch>
                
                </AuthProvider>
              </Route>


              <Route path={['/']}>
                
                  <Route path='/'>
                    <Index />
                  </Route>
                
              </Route>

            </Switch>
</Router>
 */}


      {/* <Router>
      <AuthProvider>
          <Switch>
            <Route path='/Index'>
              <Index />
            </Route>
            <Route path='/Login' pages={Login} >
              <Login />
            </Route>
            <Route path='/NuevaVenta'>
              <NuevaVenta />
            </Route>
            <Route path='/NuevaVenta1'>
              <NuevaVenta1 />
            </Route>
            <Route path='/EstadoVentas'>
              <EstadoVentas />
            </Route>
            <Route path='/ModificacionVenta'>
              <ModificacionVenta />
            </Route>
            <Route path='/NuevoServicio'>
              <NuevoServicio />
            </Route>
            <Route path='/Servicios'>
              <Servicios />
            </Route>
            <Route path='/Roles'>
              <Roles />
            </Route>
            <Route path='/Home'>
              <Home />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
          </AuthProvider>
      </Router> */}
    </div>
  );
}


export default App;
