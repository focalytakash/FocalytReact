import React from 'react'
import FrontHeader from './FrontHeader';
import FrontFooter from './FrontFooter';

const FrontLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <FrontHeader />
      <main className="">
        {children}
      </main>
      <FrontFooter />
    </div>
    
  );
};

export default FrontLayout
