import React, { useContext, useState, useEffect } from "react"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from 'firebase/app'
// Referencia a la base de datos
import { getFirestore } from 'firebase/firestore'
// Referencia al paquete de autenticacion
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
// Metodos de interaccion con la base de datos
import { addDoc, collection, getDocs, query, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'



const app = firebase.initializeApp({
  apiKey: "AIzaSyDQTVL5O_zaPV_yCIB7fWUl-1yKHIG6ZJY",
  authDomain: "lantpard-123a4.firebaseapp.com",
  databaseURL: "https://lantpard-123a4-default-rtdb.firebaseio.com",
  projectId: "lantpard-123a4",
  storageBucket: "lantpard-123a4.appspot.com",
  messagingSenderId: "998493205209",
  appId: "1:998493205209:web:df66bf73aa799000c744c8",
  measurementId: "G-SBZ3RY99QL",
});

export const auth = app.auth();
export default app;

export const database = firebase.firestore();

const AuthContext = React.createContext()




export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}



const proveedor = new firebase.auth.GoogleAuthProvider();

let usuarioActual;
let listaTareas = [];

// Variables DOM
const NavLogin = document.getElementById("google");
const NavLogOut = document.getElementById("logout");

export async function signGooglePop() {
  try {
    const respuesta = await auth.signInWithPopup(proveedor);
    console.log(respuesta.user.displayName);
    console.log(respuesta.user.email);
    console.log(respuesta.user.metadata);
    usuarioActual = respuesta.user;
    registro();
    window.location.href = "/Home";
    

  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

export async function registro() {
  const ingreso = {
    email: usuarioActual.email,
    user: usuarioActual.displayName,
  };
  const respuesta = await guardarRegistro(ingreso);
  console.log(respuesta);
}

// Base de datos
export async function guardarRegistro(task) {
  try {
    const respuesta = await firebase.firestore().collection("task").add(task);
    return respuesta;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}


// Consultar un documento
export const consultarDocumentoDatabase = async (nombreDatabase, id) => {
  try {
    const response = await getDoc(doc(database, nombreDatabase, id));
    const document = {
      id: response.id,
      ...response.data(),
    };
    return document;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Actualizacion de un documento
export const actualizarDocumentoDatabase = async (nombreColeccion, id, data) => {
  try {
    const respuesta = await updateDoc(doc(database, nombreColeccion, id), data)
    console.log("respuesta firebase",respuesta);
  } catch (e) {
    throw new Error(e)
  }
}

// Actualizacion de un documento2
export const upDatabase = async (nombreColeccion, id, data) => {
  try {
    const respuesta = 
    await  database.collection(nombreColeccion).doc(id).update(data)
    console.log("respuesta firebase",respuesta);
  } catch (e) {
    throw new Error(e)
  }
}

// Eliminacion de un documento
export const eliminarDocumentoDatabase = async (nombreColeccion, id) => {
  try {
    const respuesta = await deleteDoc(doc(database, nombreColeccion, id))
    console.log(respuesta);
  } catch (e) {
    throw new Error(e)
  }
}

export const guardarDatabase = async (nombreDatabase, data) => {
  try {
    const response = await addDoc(collection(database, nombreDatabase), data);
    console.log(response);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const consultarDatabase = async (nombreColeccion) => {
  try {
    const respuesta = await getDocs(query(collection(database, nombreColeccion)))
    // console.log(respuesta);

    const coleccionDatos = respuesta.docs.map((documento) => {
      // console.log(documento);
      // console.log(documento.data());
      const documentoTemporal = {
        id: documento.id,
        ...documento.data()
      }
      // console.log(documentoTemporal);
      return documentoTemporal
    })

    

    return coleccionDatos
  } catch (e) {
    throw new Error(e)
  }
}