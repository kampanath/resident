
import React, { useState } from 'react';
import "./Home.css";

interface FullName {
    firstName: string;
    lastName: string;
    onClickImgHome():void;
}


const Home = (props:FullName) => {
    const {firstName,lastName} = props;
    const [clickedButton, setClickedButton] = useState('');
    const buttonHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
    
        const button: HTMLAnchorElement = event.currentTarget;
        setClickedButton(button.name);
       props.onClickImgHome();
      };
    
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
        </div>
        <div className="bottom-container-home">
            <h5 className="text-center">
                FOLLOW OUR JOURNEY @<span><a href="https://www.instagram.com/meetresident/">MEETRESIDENT</a></span>
            </h5>

       
       

            <div className="container bottom-grid-home">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <a className="box" onClick={buttonHandler} href="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/1684679263622-YI55AG8D043SP8D3WS1Q/image-asset.jpeg">
                          <img src={require('../assets/images/AjeshFirstNightPS-11.jpg')} alt="..."/>
                        </a>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="box">'
                          <img src={require('../assets/images/img-home-1.jpg')} alt="..."/>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="box">'
                          <img src={require('../assets/images/img-home-1.jpg')} alt="..."/>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="box">'
                          <img src={require('../assets/images/img-home-1.jpg')} alt="..."/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="box">'
                          <img src={require('../assets/images/AjeshFirstNightPS-11.jpg')} alt="..."/>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="box">'
                          <img src={require('../assets/images/img-home-1.jpg')} alt="..."/>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="box">'
                          <img src={require('../assets/images/img-home-1.jpg')} alt="..."/>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="box">'
                          <img src={require('../assets/images/img-home-1.jpg')} alt="..."/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
           
          
       

       

        </>
    )
}


export default Home;