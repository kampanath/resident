import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";



function App() {
  return ( 
   <>
      <Navbar/>
   
        <Home/>
        <Footer/>
    
  
  </>
  );
}

export default App;
