import React, { useEffect, useState, useRef }  from "react"
import { Route, Redirect } from 'react-router-dom';
import { usuario, useAuth } from 'firebase';
import { getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';
import {logOutUsuario,consultarDatabase,consultarDocumentoDatabase} from 'firebase'
import { Loading } from 'components/Loading'

const PrivateRoute = ({ children, ...rest }) => {
  
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={() => (auth.user ? 
        children
        
        
        : <Redirect to='/Login' />)}
    ></Route>
  )
};

export default PrivateRoute;