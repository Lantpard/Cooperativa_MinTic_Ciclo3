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
import Singin from "pages/Singin";
import { AuthProvider ,auth,database,consultarDatabase,consultarDocumentoDatabase} from "firebase"
import PrivateLayout from 'Layouts/PrivateLayout';
import AuthLayout from 'Layouts/AuthLayout';
import PublicLayout from 'Layouts/PublicLayout';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { onAuthStateChanged } from "@firebase/auth"
import { Loading2 } from 'components/Loading2'
import { AppProvider,AppContext } from 'context/AppProvider';
import { UserContext } from 'context/userContext';
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

  let name1=''
  let email1=''
  

  useEffect(() => {
    setLoading(true)

    onAuthStateChanged(auth, (user) => {

        if (user) {
            const usuario = {
                id: user.uid,
                email: user.email
            }
            name1=user.displayName
            email1=user.email

            console.log(usuario);
            console.log(user);
            setFirebaseUser(usuario)
            console.log('El usuario logueado');
            consultarProducto(usuario.email)
            
            setProfileUid(user.uid)
            
            setProfileFoto(user.photoURL)
            setUserData(user)
            buscarDocumentOrCrearDocumento(user.email)
            



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
  setProfileName(productoTemp.nombre?productoTemp.nombre:productoTemp.email)
  setProfileMail(productoTemp.email)
  setLoading(false)
}


async function buscarDocumentOrCrearDocumento(idDocumento) {
  //crear referencia al documento
  const docuRef = doc(database, `Roles/${idDocumento}`);
  // buscar documento
  const consulta = await getDoc(docuRef);
  // revisar si existe
  if (consulta.exists()) {
    // si sí existe
    const infoDocu = consulta.data();
    return infoDocu.perfil;
  } else {
    // si no existe
    await setDoc(docuRef, { email:email1,
      estado: "Autorizado",
      id_vendedor: Number('000'),
      nombre: name1,
      perfil: "Vendedor"   
    });
    const consulta = await getDoc(docuRef);
    const infoDocu = consulta.data();
    return infoDocu.perfil;
  }
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
              

              <Route path={['/Login','/Singin']}>
              <AuthProvider>
                <AuthLayout>
                  <Switch>
                    <Route exact path='/Login' component={Login}/>
                    <Route exact path='/Singin' component={Singin}/>

                    
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
