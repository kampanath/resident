import React, { useEffect, useRef } from "react";
import "./Navbar.css";

let btn:any;

const handleClick = () => {
    console.log('this is:');
    btn.classList.toggle('open');
   
  };

const Navbar = () => {

    let btnRef = useRef(null);

    useEffect(() => {
       btn = btnRef.current;
      console.log(btn);
    }, []);
    
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 p-lg-4" >
            <div className="container-fluid bg-info" >
                <a className="navbar-brand bg-danger" href="#">
                    <img className="logoBrand" src="//images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/79c01ba4-d8a0-4d53-9823-542e3ee90963/Resident_Logo.png?format=1500w
                            " alt="Resident"></img>
                </a>

                {/* 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                */}

                <div>
                    <button className="navbar-toggler"  type="button" onClick={handleClick} data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="menu-icon" ref={btnRef}></div>
                    
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarText"> 
                 
                    <ul className="navbar-nav me-auto me-lg-0 mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">ABOUT</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#" >CHEFS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">VENUES</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">PRIVATE</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">EVENTS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">PRESS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">FAQS</a>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn btn-primary">RESERVATIONS</button>
                        </li>
                    </ul>
                 
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;