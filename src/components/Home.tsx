
import React, { useState } from 'react';
import "./Home.css";

interface imgPopup {

    onClickImgHome(imgName: string): void;
}


const Home = (props: imgPopup) => {


    const imgClickHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {

        event.preventDefault();
        const myAnchorElement: HTMLAnchorElement = event.currentTarget;
        props.onClickImgHome(myAnchorElement.href);
    };

    return (
        <>

            <div className="embed-responsive video-wrapper" style={{ overflow: "hidden" }}>

                <video loop autoPlay muted className="embed-responsive-item">
                    <source src={require('../assets/videos/Resident.mp4')} type="video/mp4" />
                </video>

            </div>


            <div className="background-container p-0 pt-5">
                <div className="card card-home mx-auto">
                    <div className="card-horizontal">
                        <div className="img-fluid" id="home-card-img">
                            <img src={require('../assets/images/AjeshFirstNightPS-11.jpg')} className="card-img-top" id="card-img-home" alt="..." />
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
            <div className="bottom-container-home pb-5">
                <h5 className="text-center">
                    FOLLOW OUR JOURNEY @<span><a href="https://www.instagram.com/meetresident/">MEETRESIDENT</a></span>
                </h5>

                <div className="container bottom-grid-home">
                    <div className="row mb-0 mb-md-5">
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-1.jpg">
                                <img src={require('../assets/images/img-home-1.jpg')} alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-2.jpg">
                                <img src={require('../assets/images/img-home-2.jpg')} alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-3.jpg">
                                <img src={require('../assets/images/img-home-3.jpg')} alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-4.jpg">
                                <img src={require('../assets/images/img-home-4.jpg')} alt="..." />
                            </a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-5.jpg">
                                <img src={require('../assets/images/img-home-5.jpg')} alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-6.jpg">
                                <img src={require('../assets/images/img-home-6.jpg')} alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-7.jpg">
                                <img src={require('../assets/images/img-home-7.jpg')} alt="..." />
                            </a>
                        </div>
                        <div className="col-6 col-md-3 mb-3 mb-md-0">
                            <a className="box" onClick={imgClickHandler} href="cut_this/img-home-8.jpg">
                                <img src={require('../assets/images/img-home-8.jpg')} alt="..." />
                            </a>
                        </div>
                    </div>

                </div>

            </div>






        </>
    )
}


export default Home;