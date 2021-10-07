import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const app =firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

export const auth = app.auth() 
export default app

export const database=firebase.firestore()

const proveedor = new firebase.auth.GoogleAuthProvider()


let usuarioActual;
let listaTareas = []

// Variables DOM
const NavLogin = document.getElementById('google')
const NavLogOut = document.getElementById('logout')

export async function signGooglePop(){
  try {
      const respuesta =  await auth.signInWithPopup(proveedor)
      console.log(respuesta.user.displayName);
      console.log(respuesta.user.email);
      console.log(respuesta.user.metadata);
      usuarioActual = respuesta.user
      registro()
      window.location.href = "/Home";


  } catch (error) {
      console.error(error)
      throw new Error(error)
  }
}



export async function registro(){
  const ingreso = {
      
      email : usuarioActual.email,
      user: usuarioActual.displayName
  }
  const respuesta = await guardarRegistro(ingreso)
  console.log(respuesta);
  
}


// Base de datos
export async function guardarRegistro(task){
  try{
     const respuesta = await database.collection('Ingreso').add(task)
     return respuesta
  }catch(error){
      console.error(error)
      throw new Error(error)
  }
} 

