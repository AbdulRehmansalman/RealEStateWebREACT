import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/hero';
import Company from './Components/Company/company';
import Residencies from './Components/Residencies/Residencies';
import Values from './Components/Values/values';
import CONTACT from './Components/Conatct Us/CONTACT';
import Getstarted from './Components/getStarted/getstarted';
import Footer from './Components/Footer/footer';
const App = () => {
  return (
    <div className="App">
      <div className="gradient-text">
        <Navbar />
        <Hero />
      </div>
      <Company />
      <Residencies />
      <Values />
      <CONTACT />
      <Getstarted />
      <Footer />
    </div>
  );
};

export default App;
