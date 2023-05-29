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
import Chefs from "./components/Chefs";
import Venues from "./components/Venues";
import Press from "./components/Press";
import Faqs from "./components/Faqs";
import Private from "./components/Private";
import Policy from "./components/Policy";
import Term from "./components/Term";
import Access from "./components/Access";





import { relative } from 'path';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About';

import 'bootstrap/dist/css/bootstrap.css'; 
import { Button, Modal } from 'bootstrap';
import home_image_1 from './assets/images/img-home-1.jpg';
import home_image_2 from './assets/images/img-home-2.jpg';

let app_modal: any;
let app_modal_newsLetter: any;
let app_modal_contact: any;
let app_modal_joinUs: any;



let myBootStrapModal: bootstrap.Modal;
let myBootStrapModal_newsLetter: bootstrap.Modal;
let myBootStrapModal_contact: bootstrap.Modal;
let myBootStrapModal_joinUs: bootstrap.Modal;



let myImg: any;

let imgLocationApp: string = "img-home-4.jpg";

function App() {

  const [imgLocState, setImgLocState] = useState('img-home-2.jpg');
  const [newsLetterSubmitProp, setNewsLetterSubmitProp] = useState({userName:'',useLastName:'',userEmail:''});
  const [contactSubmitProp, setContactSubmitProp] = useState({userName:'',userEmail:'',userPhone:'',userMessage:''});
  const [joinUsSubmitProp, setJoinUsSubmitProp] = useState({userName:'',userEmail:'',userPhone:'',coverLetter:''});




  let modal_Ref = useRef(null);

  let modal_newsLetter_Ref = useRef(null);
  let modal_contact_Ref = useRef(null);
  let modal_joinUs_Ref = useRef(null);





  const onClickImg = (imgName: string) => {

    imgLocationApp = imgName.split("cut_this/")[1];

    setImgLocState(imgLocationApp);

    myBootStrapModal.show();

  }

  const onClickSubmitNewsLetter_App = (name: string,lastName:string,email:string) => {

    setNewsLetterSubmitProp({ userName : name, useLastName:lastName ,userEmail:email  });
    
    myBootStrapModal_newsLetter.show();
    
  }

  const onClickSubmitContact_App = (name: string,email: string, phone: string, userMessage: string) => {

    setContactSubmitProp({ userName : name, userEmail:email ,userPhone:phone , userMessage: userMessage });

    myBootStrapModal_contact.show();
    
  }

  const onClickSubmitJoinUs_App = (name: string,email: string, phone: string, coverLetter: string) => {

    setJoinUsSubmitProp({ userName : name, userEmail:email ,userPhone:phone , coverLetter: coverLetter });

    myBootStrapModal_joinUs.show();
    
  }


  useEffect(() => {

    app_modal = modal_Ref.current;
    app_modal_newsLetter = modal_newsLetter_Ref.current;
    app_modal_contact = modal_contact_Ref.current;
    app_modal_joinUs = modal_joinUs_Ref.current;


   
    myBootStrapModal = new Modal(app_modal);
    myBootStrapModal_newsLetter = new Modal(app_modal_newsLetter);
    myBootStrapModal_contact = new Modal(app_modal_contact);
    myBootStrapModal_joinUs = new Modal(app_modal_joinUs);
  
  }, [imgLocState,newsLetterSubmitProp,contactSubmitProp,joinUsSubmitProp]);

  return (
    <>

      <main className="app-container" style={{ position: "relative" }}>



        <Navbar />

        
       {/* modal for image popup click  */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-hidden="true" ref={modal_Ref}>
          <div className="modal-dialog">
            <div className="img-fluid" id="app-modal-img">
              <img src={require(`./assets/images/${imgLocState}`)} alt="..." />
            </div>
          </div>
        </div>

       {/* modal for newsletter click submit  */}
      <div className="modal" tabIndex={-1} ref={modal_newsLetter_Ref}>
        <div className="modal-dialog bg-info">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thank you</h5>
           
            </div>
            <div className="modal-body">

              <p>Your information is </p>
              <p>name : {`${newsLetterSubmitProp.userName}` }  </p>
              <p>lastname : {`${newsLetterSubmitProp.useLastName}` }  </p>
              <p>email : {`${newsLetterSubmitProp.userEmail}` }  </p>
            </div>
          </div>
        </div>
      </div>

         {/* modal for contact click submit  */}
         <div className="modal" tabIndex={-1} ref={modal_contact_Ref}>
        <div className="modal-dialog bg-info">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thank you</h5>
           
            </div>
            <div className="modal-body">

              <p>Your information is </p>
              <p>name : {`${contactSubmitProp.userName}` }  </p>
              <p>email : {`${contactSubmitProp.userEmail}` }  </p>
              <p>phone number : {`${contactSubmitProp.userPhone}` }  </p>
              <p style={{ wordWrap:"break-word"}}>message : {`${contactSubmitProp.userMessage}` }  </p>
            </div>
          </div>
        </div>
      </div>

          {/* modal for join us click submit  */}
          <div className="modal" tabIndex={-1} ref={modal_joinUs_Ref}>
        <div className="modal-dialog bg-info">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thank you</h5>
           
            </div>
            <div className="modal-body">

              <p>Your information is </p>
              <p>name : {`${joinUsSubmitProp.userName}` }  </p>
              <p>email : {`${joinUsSubmitProp.userEmail}` }  </p>
              <p>phone number : {`${joinUsSubmitProp.userPhone}` }  </p>
              <p style={{ wordWrap:"break-word"}}>cover letter : {`${joinUsSubmitProp.coverLetter}` }  </p>
            </div>
          </div>
        </div>
      </div>

        <div className="content-footer-container">

          <Routes>
            <Route path="/" element={<Home onClickImgHome={onClickImg} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact onClickSubmitInterfaceCOntact={onClickSubmitContact_App} />} />
            <Route path="/joinus" element={<Joinus onClickSubmitInterfaceJoinUs={onClickSubmitJoinUs_App}/>} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/newsletter" element={<Newsletter onClickSubmitInterface={onClickSubmitNewsLetter_App}/>} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/press" element={<Press />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/private" element={<Private />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/term" element={<Term />} />
            <Route path="/access" element={<Access />} />











          </Routes>

          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
