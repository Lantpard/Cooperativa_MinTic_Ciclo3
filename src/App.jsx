import React from "react"
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
import { AuthProvider } from "firebase"
/* import { AuthProvider } from "contexts/AuthContext" */

import PrivateLayout from 'Layouts/PrivateLayout';
import PrivateLayout2 from 'Layouts/PrivateLayout2';
import AuthLayout from 'Layouts/AuthLayout';
import PublicLayout from 'Layouts/PublicLayout';
import PrivateRoute from 'components/PrivateRoute';
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

              
              <Route path={['/Home', '/NuevaVenta3','/EstadoVentas1/:id', '/EstadoVentas1', '/ModificacionVenta1', '/NuevoServicio1', '/Roles1', '/Servicios1']}>
                <PrivateLayout>
                  <Switch>
                    <Route exact path='/Home' component={Home}/>
            
                    <Route exact path='/NuevaVenta3' component={NuevaVenta3}/>

                    <Route exact path='/EstadoVentas1/:idServicio' component={ModificacionVenta1}/>
                      
                    <Route exact path='/EstadoVentas1' component={EstadoVentas1}/>

                    <Route exact path='/NuevoServicio1' component={NuevoServicio1}/>

                    <Route exact path='/Roles1' component={Roles1}/>

                    <Route exact path='/Servicios1' component={Servicios1}/>

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

                    {/* <Route path='/Index'>
                      <Registro />
                    </Route> */}
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
{/* Ruta Vendedor */}
{/* <Router>
            <Switch>
              
              <Route path={['/Home', '/NuevaVenta3', '/EstadoVentas1', '/ModificacionVenta']}>
                <PrivateLayout2>
                  <Switch>
                    <Route path='/Home'>
                      <Home />
                    </Route>

                    <Route path='/NuevaVenta3'>
                      <NuevaVenta3 />
                    </Route>

                    <Route path='/EstadoVentas1'>
                      <EstadoVentas1 />
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
</Router> */}



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
