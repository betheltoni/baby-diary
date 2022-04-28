import React from 'react';

import './App.scss';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Hero/>
    <Footer/>
    </div>
  );
}

export default App;
