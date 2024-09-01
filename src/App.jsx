import React, { useState, useEffect } from 'react';
import { Navbar, Hero, HowItWorks, Footer } from './components';

function App() {
  const [Mobile, setMobile] = useState(false);

  const checkMobile = () => {

    setMobile(window.innerWidth <= 600);
  };

  useEffect(() => {

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []); 

  return (
    <>
      <Navbar Mobile={Mobile}/>
      <Hero />
      <HowItWorks />
      <Footer />
    </>
  );
}

export default App;
