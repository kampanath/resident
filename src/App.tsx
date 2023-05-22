import React, { useEffect, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { relative } from 'path';
import { BrowserRouter as Router,Route,Routes, Link } from 'react-router-dom';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css';
import { Modal } from 'bootstrap';

let css_toggle_btn: any;
let  myModal: any;

function App() {
 

  let css_toggle_btn_Ref = useRef(null);

  const onClickImg = () => {
    console.log("image click");
    myModal.toggle();

  }

  
  useEffect(() => {
    css_toggle_btn = css_toggle_btn_Ref.current;
   myModal = new Modal(css_toggle_btn);



}, []);
  
  return ( 
   <>
   

    <main className="app-container" style={ { position:"relative" }}>
  
    
      
      <Navbar/>
     
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

     
      <div className="modal fade" id="exampleModal" tabIndex={-1}  aria-hidden="true" ref={css_toggle_btn_Ref}>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      
        <img src={require('./assets/images/img-home-1.jpg')}  alt="..."/>
  
        <div className="modal-dialog">
  
        </div>

      </div>
      <div className="content-footer-container">
        
        <Routes>
           <Route path="/" element={<Home onClickImgHome={onClickImg} firstName={''} lastName={''}/>} />
           <Route path="/about" element={<About />} />
        </Routes>
  
        <Footer/>
      </div>
    </main>
  </>
  );
}

export default App;
