import React from 'react';
import Navbar from 'components/BarNav';
/* import Footer from 'components/Footer'; */

const PrivateLayout = ({ children }) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <Navbar />
      <main className='h-full overflow-y-scroll bg-blue-400'>{children}</main>
      
    </div>
  );
};

export default PrivateLayout;