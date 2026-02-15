import React from 'react';
import './App.css';
import Navbar from "/src/componets/navbar/navbar.jsx";
import HeroSection from "/src/componets/heroSection/herosection.jsx";
import BrandMessage from "/src/componets/brandMessage/brandMessage.jsx";
import OurTeam from "/src/componets/our-team/ourTeam.jsx"; 
import OurServices from './componets/ourServices/ourservices';

export default function App() { 
  return (
    <>
    <div>
      <Navbar />
      <HeroSection />
      <BrandMessage />
      <OurTeam />
      <OurServices/>

    </div>
   

    </>
  );
}