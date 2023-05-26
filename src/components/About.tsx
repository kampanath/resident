import "./About.css";

const About = () => {

    return (
        <>

        <main className="about pb-5">
            
           <div className="container-fluid about-background-container p-0 pt-5 ">
                <div className="card card-about mx-auto ">
                    <div className="card-horizontal-about ">

                        {/* 
                        <div className="img-fluid" id="about-card-img">
                            <img src={require('../assets/images/AjeshFirstNightPS-11.jpg')} className="card-img-top" id="card-img-about" alt="..." />
                        </div>
                        */}
                        <div className="carousel slide about-carousel-img" id="about-card-img" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                 <img src={require('../assets/images/Screen+Shot+2023-03-28+at+3.34.09+PM.png')} className="d-block about-carousel-img" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                 <img src={require('../assets/images/Screen+Shot+2023-03-28+at+3.33.56+PM.png')} className="d-block  about-carousel-img" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                 <img src={require('../assets/images/Connor+Food+4+-+6.3.22+(1).jpg')} className="d-block  about-carousel-img" alt="..."/>
                                </div>
                                <div className="carousel-item">
                                 <img src={require('../assets/images/6N0A2692+(1).jpg')} className="d-block about-carousel-img" alt="..."/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#about-card-img" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#about-card-img" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                        <div className="card-body card-body-about">

                            <h5 className="card-title card-title-about px-5">A NEW ERA OF HOSPITALITY</h5>

                            <p className="card-text card-text-about px-2 px-md-5">It’s Friday night; you’re en route to a much-needed evening out on the town. 
                            But instead of heading to a crowded restaurant, you find yourself in a candlelit Manhattan penthouse, surrounded by 
                            stunning contemporary art and furniture. A chef from Per Se is sharing the inspiration behind her taiyaki tiramisu, 
                            the sommelier is pouring the fifth wine pairing: a glass of Domaine de Montbourgeau cremant, and some R&B is playing 
                            quietly over the low hum of laughter. The vibe is *just right*.</p>

                            <p className="card-text card-text-about px-2 px-md-5">This is Resident. We partner with luxury real estate to create speakeasy dining experiences, 
                            featuring chefs from Michelin restaurants. Pull up a seat at the chef’s table, we can’t wait to host you. </p>

                            <div className="d-flex flex-column flex-lg-row">
                                <button className="btn btn-outline-dark m-3" id="book-private-dinner-button">
                                    <div className="text-book-private-dinner-button">
                                        BOOK A PRIVATE EVENT
                                    </div>
                                </button>

                                <button className="btn btn-outline-dark m-3" id="book-private-dinner-button">
                                    <div className="text-book-private-dinner-button">
                                        JOIN US FOR DINNER
                                    </div>
                                </button>
                            </div>
                          

                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default About