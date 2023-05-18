import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./Home";
import About from "./About";

let css_toggle_btn: any;
let bootStrap_toggle_btn: any;



const Navbar = () => {

    /* when click bootstrap toggle button, let css hamburger animation show */
    /* Bootstrap hamburger have 3 line, so we use custom css to have 2 line */
    const handleClick = () => {
        
        css_toggle_btn.classList.toggle('open');

    };

    /* when click nav link, make bootstrap toggle button do its click event*/
    const navClick = () => {
        
        /* [0] is width [1] is height   */
        if(windowSize[0] < 992) //do this only in small screen when toggle button enable
            bootStrap_toggle_btn.click();

    };

    let css_toggle_btn_Ref = useRef(null);
    let bootStrap_toggle_btn_Ref = useRef(null);


    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
      ]);

    useEffect(() => {
        css_toggle_btn = css_toggle_btn_Ref.current;
        bootStrap_toggle_btn = bootStrap_toggle_btn_Ref.current;

        //screen size
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
          //
      
    }, []);

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 p-lg-4" >
                <div className="container-fluid pe-0" >
                    <a className="navbar-brand" href="#">
                        <img className="logoBrand" src="//images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/79c01ba4-d8a0-4d53-9823-542e3ee90963/Resident_Logo.png?format=1500w
                            " alt="Resident"></img>
                    </a>

                    <div className="toggler-container">
                        <button className="navbar-toggler" type="button" ref={bootStrap_toggle_btn_Ref} onClick={handleClick} data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="menu-icon" ref={css_toggle_btn_Ref}></div>

                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarText">

                        <ul className="navbar-nav me-auto me-lg-0 mb-2 mb-lg-0">
                            <li className="nav-item my-auto">
                                <Link className="nav-link" aria-current="page" to="/about" onClick={navClick}>ABOUT</Link>
                            </li>
                            <li className="nav-item my-auto">
                                <Link className="nav-link" to="/" onClick={navClick}>CHEFS</Link>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">VENUES</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">PRIVATE EVENTS</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">PRESS</a>
                            </li>
                            <li className="nav-item my-auto">
                                <a className="nav-link" href="#">FAQS</a>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn btn-outline-dark" id="reserve-button">
                                    <div className="text-reserve-button">
                                        RESERVATIONS
                                    </div>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        
        </>
    );
};

export default Navbar;


