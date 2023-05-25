import React, { useEffect, useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Joinus from "./components/Joinus";
import Legal from "./components/Legal";
import Newsletter from "./components/Newsletter";




import { relative } from 'path';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';

import 'bootstrap/dist/css/bootstrap.css'; 
import { Button, Modal } from 'bootstrap';
import home_image_1 from './assets/images/img-home-1.jpg';
import home_image_2 from './assets/images/img-home-2.jpg';

let app_modal: any;

let myBootStrapModal: bootstrap.Modal;

let myImg: any;

let imgLocationApp: string = "img-home-4.jpg";


function App() {

  const [imgLocState, setImgLocState] = useState('img-home-2.jpg');

  let modal_Ref = useRef(null);


  const onClickImg = (imgName: string) => {

    imgLocationApp = imgName.split("cut_this/")[1];

    setImgLocState(imgLocationApp);

    myBootStrapModal.show();


  }

  useEffect(() => {

    app_modal = modal_Ref.current;
    myBootStrapModal = new Modal(app_modal);


  }, [imgLocState]);

  return (
    <>

      <main className="app-container" style={{ position: "relative" }}>



        <Navbar />


        {/*  
        <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" ref={button_Ref}>
          Launch demo modal
        </button>
       */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true" ref={modal_Ref}>
          <div className="modal-dialog">
            <div className="img-fluid" id="app-modal-img">
              <img src={require(`./assets/images/${imgLocState}`)} alt="..." />
            </div>
          </div>
        </div>

        <div className="content-footer-container">

          <Routes>
            <Route path="/" element={<Home onClickImgHome={onClickImg} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/joinus" element={<Joinus />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/newsletter" element={<Newsletter />} />



          </Routes>

          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
