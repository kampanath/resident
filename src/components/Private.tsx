import "./Private.css";

const Private = () => {

    return (
        <>

            <main className="private pb-5 text-center" >
                {/* 
                <div className="img-fluid bg-warning" id="private-top-img-container">
                    <img src={require('../assets/images/faqs-top-img.jpg')} className="private-top-img" id="private-top-img" alt="..." />
                </div>
 */}
                <div className="carousel private-carousel-img" id="private-card-img" data-bs-ride="false">
                    <div className="carousel-inner">
                        <div className="carousel-item">

                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/23857119-14ed-42ed-9a6c-0387620fe2ad/6N0A7152+%281%29+%281%29.jpg" className="d-block private-carousel-img" alt="..." />
                        </div>
                        <div className="carousel-item active parivate-img-carousel-active-container">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/310eecf5-c377-4577-a7ca-d244a7d99663/Copy-of-Resident-SoHo-Venue-%28credit-Brin-Hanson_Sarvie-Studios%29.jpg" className="d-block  private-carousel-img-active" alt="..." />
                            <div className="parivate-img-centered-text">PRIVATE EVENTS</div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/091e90e4-7afe-49a1-9c5c-fe449f3aa2d1/Copy+of+6N0A2806+%282%29.jpg" className="d-block  private-carousel-img" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/ea5fd725-120d-48a1-828c-bcb5bc2a688b/6N0A5204.jpg" className="d-block private-carousel-img" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/ad0d75eb-2043-4367-ba96-ade36b259abb/6N0A9923-copy.jpg" className="d-block private-carousel-img-3" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/08c6253f-9e1e-4f86-a843-d2644f86e0d2/6N0A7101.jpg" className="d-block private-carousel-img" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#private-card-img" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#private-card-img" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container private-container text-center p-5 mt-5">

                    <div className="row ">
                        <div className="col">
                            <h1 className="private-title">WHERE EVERY TABLE IS THE CHEF’S TABLE.</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5 mb-5 private-row ">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-8 p-0 ">
                            <p className="card-text card-text-about px-2 px-md-5">There are dozens of private dining rooms in NYC;
                                diners choose Resident for the combination of a luxury, fully private venue and a world-class, experiential
                                dining experience. We combine the elegance of Michelin dining with the excitement of an intimate, speakeasy-style
                                dinner party.</p>

                            <p className="card-text card-text-about px-2 px-md-5">From milestone celebrations to corporate dinner parties, we provide a
                                personal chef, as well as all of the infrastructure and execution for exceptional culinary events. While many guests enjoy our
                                experiences as-is, we invite you to customize the menu and add decor, photo moments, entertainment, and experiential elements to
                                make the event your own.</p>
                            <div className="center-container mt-1 " style={ { height:"250px"}}>
                                <div className="center" style={ { width:"100%"}}>
                                    <button className="nav-link btn btn-outline-dark private-button mx-auto">
                                        <div className="text-reserve-button">
                                            SUBMIT A PRIVATE EVENT REQUEST
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

               

                   
                    <div className="row justify-content-center mt-5 mb-5 private-row  ">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 p-0">
                         <div className="card card-parivate mx-auto" id="card-parivate-id-0">
                                <div className="card-horizontal-private bg-warning ">
                                    <div className="img-fluid" id="private-card-img">
                                        <img src={require('../assets/images/Connor+Food+4+-+6.3.22+(1).jpg')} className="card-img-top" id="private-card-img" alt="..." />
                                    </div>
                                    <div className="card-body card-body-private">
                                        <h5 className="card-title card-title-private px-0 px-sm-5">BUILD YOUR EXPERIENCE</h5>
                                        <p className="card-text card-text-private px-0 px-sm-5"><span className="private-span-1">Our process is simple.</span> Each Resident meal is bespoke 
                                        in nature, giving you unlimited flexibility to design your perfect evening. From the number of courses,
                                         to specialty drinks, pre-dinner bites, cuisine style and menu customization, you are in complete 
                                         control of the format of the evening. </p>

                                         <p className="card-text card-text-private px-0 px-sm-5">Our signature event is a 5-course tasting menu with wine 
                                         pairing, with guests being greeted with a glass of sparkling wine on arrival, and one of our Michelin-trained 
                                         chefs having full creative control over the menu. </p>

                                         <p className="card-text card-text-private px-0 px-sm-5">The chef will cook in an open kitchen and personally introduce 
                                         each course, along with its inspiration, with a sommelier doing the same for each wine. </p>

                                        <p className="card-text card-text-private px-0 px-sm-5">Reserve your tickets below, or book a private
                                            event here.</p>
                                        <button className="btn btn-outline-dark m-5 mx-auto private-button">
                                            <div className="text-dinner-button ">
                                                SEE PACKAGES,
                                                PRICING, AND VENUES
                                            </div>
                                        </button>

                                    </div>
                                </div>
                          </div>

                          <div className="center-container mt-0" style={ { height:"50px"}}>
                               
                            </div>
                        </div>
                    </div>



                    <div className="row justify-content-center mt-5 mb-5 private-row  ">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 p-0 ">
                         <div className="card card-parivate mx-auto" id="card-parivate-id-1">
                                <div className="card-horizontal-private">
                                    <div className="img-fluid" id="private-card-img">
                                        <img src={require('../assets/images/venues3-2.jpg')} className="card-img-top" id="private-card-img" alt="..." />
                                    </div>
                                    <div className="card-body card-body-private">
                                        <h5 className="card-title card-title-private px-0 px-sm-5">SELECT YOUR VENUE</h5>
                                        <p className="card-text card-text-private px-0 px-sm-5">Whether you’re looking for an intimate dinner in a 
                                        multi-million dollar penthouse nestled in the Financial District or a reception-style experience 
                                        mingling in a members’-only club in Rockefeller Center, our luxury venues offer an intimate, 
                                        elevated backdrop for your experience.</p>

                                        
                                        <button className="btn btn-outline-dark m-5 mx-auto private-button" >
                                            <div className="text-dinner-button">
                                            EXPLORE RESIDENT VENUES
                                            </div>
                                        </button>

                                    </div>
                                </div>
                          </div>

                          <div className="center-container mt-0" style={ { height:0}}>
                               
                            </div>
                        </div>
                    </div>


                    <div className="row justify-content-center mt-5 mb-0 private-row  ">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 p-0 ">
                         <div className="card card-parivate mx-auto" id="card-parivate-id-2">
                                <div className="card-horizontal-private">
                                    <div className="img-fluid" id="private-card-img">
                                        <img src={require('../assets/images/Screen+Shot+2023-03-28+at+2.44.04+PM.png')} className="card-img-top" id="private-card-img" alt="..." />
                                    </div>
                                    <div className="card-body card-body-private">
                                        <h5 className="card-title card-title-private px-0 px-sm-5">GET MATCHED WITH A CHEF</h5>
                                        <p className="card-text card-text-private px-0 px-sm-5">With a roster of 60+ chefs from the elite kitchens 
                                        of Eleven Madison Park, Per Se, Le Bernardin, Alinea, Gramercy Tavern, Noma, and Crown Shy 
                                        (to name a few!) and expertise in 30+ cuisines, our guests have an opportunity to choose the 
                                        perfect chef to meet their cravings. Think everything including New-American, Classical French,
                                         Coastal Italian, Indian, Japanese, Haitian, Nordic, and Venezuelan - the options are endless. 
                                         Once you have a date in mind, we’ll confirm which of our chefs are available to host your event.</p>

                                       
                                        <button className="btn btn-outline-dark m-5 mx-auto private-button" >
                                            <div className="text-dinner-button">
                                            SEE RESIDENT’S CHEF ROSTER
                                            </div>
                                        </button>

                                    </div>
                                </div>
                          </div>

                          <div className="center-container mt-0 mb-0 bg-info" style={ { height:0}}>
                               
                          </div>
                        </div>
                    </div>


                    <div className="row justify-content-center mt-5 mb-5 private-row  ">
                        <div className="col-12 col-md-12 col-lg-10 col-xl-10 p-0 ">
                          <h5 className="card-title card-title-private px-0 px-sm-5">GET MATCHED WITH A CHEF</h5>
                          <button className="btn btn-outline-dark m-1 mx-auto private-button " >
                                <div className="text-dinner-button">
                                    SUBMIT A PRIVATE EVENT REQUEST
                                </div>
                         </button>
                        </div>
                    </div>

                    </div>




            </main>
        </>
    );
}

export default Private