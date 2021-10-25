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
import { Loading2 } from 'components/Loading2'
import { AppProvider,AppContext } from 'context/AppProvider';
import { UserContext } from 'context/userContext';

function App() {
  const [firebaseUser, setFirebaseUser] = useState(false)
  const [loading, setLoading] = useState(false)
  const [rol, setRol] = useState([])
  const [perfil,setPerfil]=useState("Vendedor")
  const [profileName, setProfileName] = useState('');
  const [profileMail, setProfileMail] = useState('');
  const [profileFoto, setProfileFoto] = useState('');
  const [profileUid, setProfileUid] = useState('');
  const [userData, setUserData] = useState('')
  const holax='desde aPP'

  useEffect(() => {
    setLoading(true)

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
            setProfileName(user.displayName?user.displayName:user.email)
            setProfileUid(user.uid)
            setProfileMail(user.email)
            setProfileFoto(user.photoURL)
            setUserData(user)

            

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
  setLoading(false)
}


  return (
    /* <UserContext> */
    <div className='App'>

<Router>
            <Switch>

            

              
              <Route path={['/Home', '/NuevaVenta3','/EstadoVentas1/:id', '/EstadoVentas1', '/ModificacionVenta1', '/NuevoServicio1', '/Roles1', '/Servicios1']}>
                
              {
        loading
          ?
          <Loading2 />
          :
          <>

                
                <PrivateLayout perfil={perfil}
                profileName={profileName}
                profileUid={profileUid}
                profileMail={profileMail}
                profileFoto={profileFoto}
                
                >
                <UserContext.Provider value={{ perfil,profileName,profileUid,profileMail,profileFoto }}>
                <AppProvider value={holax}>
                  <Switch>
                    
                    <Route exact path='/Home' component={Home}/>
            
                    <Route exact path='/NuevaVenta3'  profileName={profileName} component={NuevaVenta3}/>

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

                  </AppProvider>
                  </UserContext.Provider>
                </PrivateLayout>
                

                </>
      }
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
    /* </UserContext> */
  );
}


export default App;
