
import React from 'react';
import "./Home.css";



const Home = () => {
    
    return ( 
        <>
        
        <div className="embed-responsive video-wrapper"  style= { { overflow:"hidden"}}>
           
                <video loop autoPlay muted className="embed-responsive-item">
                <source src={require('../assets/videos/Resident.mp4')} type="video/mp4" />
                </video>
          
        </div>

        <div className="background-container p-0 pt-5">
                <div className="card card-home mx-auto">
                    <div className="card-horizontal">
                        <div className="img-fluid">
                           <img src={require('../assets/images/AjeshFirstNightPS-11.jpg')} className="card-img-top" id="card-img-home" alt="..."/>
                        </div>
                        <div className="card-body card-body-home">
                            <h5 className="card-title card-title-home px-5">CONNECT WITH THE FACES BEHIND YOUR FOOD.</h5>
                            <p className="card-text card-text-home px-5">Resident brings chefs from Michelin restaurants to
                             host speakeasy dinners in luxury penthouses, townhouses, 
                             and lofts around New York City.</p>
                             <p className="card-text card-text-home px-5">Reserve your tickets below, or <span className="book-private">book a private 
                             event here.</span></p>
                             <button className="btn btn-outline-dark m-5" id="up-coming-dinner-button">
                                    <div className="text-dinner-button">
                                        SEE UP COMING DINNERS
                                    </div>
                            </button>
                            
                        </div>
                    </div>
                </div>
           
            <div className="testDiv">

            </div>
        </div>
           
          
       

       

        </>
    )
}


export default Home;