import React, { useEffect, useState, useRef }  from "react"
import { Route, Redirect } from 'react-router-dom';
import { usuario, useAuth } from 'firebase';
import { Link } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {

  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={() => (auth.user ? children : <Redirect to='/Login' />)}
    ></Route>
  )
};

export default PrivateRoute;