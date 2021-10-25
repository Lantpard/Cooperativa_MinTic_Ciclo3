import React, { useEffect, useState}  from "react"
import BarNav from 'components/BarNav';

import { useAuth } from 'firebase';
import PrivateRoute from 'components/PrivateRoute'


import {consultarDocumentoDatabase} from 'firebase'
import { Loading } from 'components/Loading'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'



const PrivateLayout = ({ children,perfil,profileName,profileUid,profileMail,profileFoto }) => {
  
  const auth = getAuth();
const user = auth.currentUser;



  return (
    <div className='flex flex-col justify-between h-screen'>
    <PrivateRoute>
    <div className='flex flex-col justify-between h-screen'>
      <BarNav   perfil={perfil}
      
      profileName={profileName}
      profileUid={profileUid}
      profileMail={profileMail}
      profileFoto={profileFoto}
      
      />
      <main className='h-full overflow-y-scroll bg-blue-400'>
        {children}
        </main>
      
    </div>
     </PrivateRoute>
    </div>
  );
};

export default PrivateLayout;