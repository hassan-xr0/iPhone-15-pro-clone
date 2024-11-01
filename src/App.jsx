import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highligths from './components/Highligths';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {

  return (
    <main>
      <Navbar/>
      <Hero/>
      <Highligths/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default App
