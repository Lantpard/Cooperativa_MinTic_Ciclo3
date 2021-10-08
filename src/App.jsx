import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Index from "pages/Index";
import NuevaVenta from "pages/NuevaVenta";
import Home from "pages/Home";
import EstadoVentas from "pages/EstadoVentas";
import ModificacionVenta from "pages/ModificacionVenta";
import NuevoServicio from "pages/NuevoServicio";
import Servicios from "pages/Servicios";
import Roles from "pages/Roles";
import Login from "pages/Login";
import { AuthProvider } from "firebase"


function App() {
  return (
    <div className='App'>
      <Router>
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
      </Router>
    </div>
  );
}


export default App;
