import React from 'react';
import BarNav from 'components/BarNav';
import { getAuth } from "firebase/auth"
import PrivateRoute from 'components/PrivateRoute'

/* import Footer from 'components/Footer'; */

const PrivateLayout = ({ children }) => {
  
  const auth = getAuth();
const user = auth.currentUser;



if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);

    
  });
}

  /* const {isLoading,isAuthenticated}=useAuth() */


  return (
    <div className='flex flex-col justify-between h-screen'>
    <PrivateRoute>
    <div className='flex flex-col justify-between h-screen'>
      <BarNav   />
      <main className='h-full overflow-y-scroll bg-blue-400'>
        {children}
        </main>
      
    </div>
     </PrivateRoute>
    </div>
  );
};

export default PrivateLayout;