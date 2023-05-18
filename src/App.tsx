import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { relative } from 'path';
import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';
import About from './components/About';


function App() {
  return ( 
   <>
    <main className="app-container" style={ { position:"relative" }}>
      <Navbar/>
      <div className="content-footer-container">
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </main>
  </>
  );
}

export default App;
