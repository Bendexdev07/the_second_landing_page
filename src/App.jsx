import React from 'react';
import './App.css';
import Navbar from "/src/componets/navbar/navbar.jsx";
import HeroSection from "/src/componets/heroSection/herosection.jsx";

export default function App() { 
  return (
    <>
    <div>
      <Navbar />
      <HeroSection />

    </div>
   

    </>
  );
}