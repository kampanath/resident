import { useEffect } from "react";
import "./ViewMenu.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const ViewMenu = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <>

            <main className="viewMenu pb-5 text-center" >

                <div className="container viewMenu-container text-center p-0 p-xl-5 mt-5">

                    {/* row title show only on below md  */}
                    <div className="row justify-content-center mt-1 mb-5 viewMenu-row viewMenu-row-title-small d-block d-md-none">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 pt-3 ">
                            <h1 className="viewMenu-title fs-3 mb-0 text-start d">PROGRESSIVE CREOLE TASTING</h1>
                        </div>
                    </div>

                    {/* row 1  */}
                    <div className="row justify-content-center mt-1 mb-5 viewMenu-row ">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 pt-3  ">
                            <div className="card-container-viewMenu pt-4 pb-5">
                                <p className="card-text card-text-viewMenu px-2 px-md-5 fw-bold">CHEF DOMINICK LEE PRESENTS:</p>

                                <p className="card-text card-text-viewMenu px-2 px-md-4 text-start"><span className="fw-bold">Sidney’s Cornbread</span>
                                    <br></br>Heirloom Cornmeal, Duck Fat, Pepper Jelly</p>

                                <p className="card-text card-text-viewMenu px-2 px-md-4 text-start"><span className="fw-bold">Oyster in Brochette</span>
                                    <br></br>Thick Cut Bacon, Foraged Mushrooms, Sauce Meuniere</p>

                                <p className="card-text card-text-viewMenu px-2 px-md-4 text-start"><span className="fw-bold">Aunt Helen’s Stewed Okra</span>
                                    <br></br>Bacon Drippings, Cherry Tomatoes, Smoky Sausage</p>

                                <p className="card-text card-text-viewMenu px-2 px-md-4 text-start"><span className="fw-bold">Austin’s Shrimp & Mirliton</span>
                                    <br></br>Pithvier, Creole Mustard Sauce, Fines Herbes</p>

                                <p className="card-text card-text-viewMenu px-2 px-md-4 text-start"><span className="fw-bold">Ruby’s Bread Pudding</span>
                                    <br></br>Slightly Toasted, Charred Pineapple Creme Anglaise, Rum Caramel</p>

                                <p className="card-text card-text-viewMenu px-2 px-md-4 text-start">
                                    <br></br>*Please note that menu is subject to change due to market availability.</p>


                            </div>

                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5 p-md-1">

                            <h1 className="viewMenu-title mb-5 text-start d-none d-md-block">PROGRESSIVE CREOLE TASTING</h1>

                            <p className="card-text card-text-about  fw-bold text-start">T5 courses, each with a wine pairing.
                                <br></br><br></br>
                                $195 per ticket
                                <br></br><br></br>
                                Wednesday, May 31, 2023
                                <br></br>
                                7:00 PM – 10:00 PM
                                <br></br><br></br> </p>
                            <p className="card-text card-text-about  text-start">The Vandewater Dining Room <br></br>  543 W 122nd St
                                <br></br>
                                New York, NY 10027</p>

                            <div className="mt-5">
                                <a className="nav-link btn btn-outline-dark viewMenu-button ms-0 " target="_blank"  rel="noopener" href="https://www.exploretock.com/resident/experience/397664/wednesday-may-31-chef-dominick-lee?date=2023-05-31&size=2&time=19%3A00">
                                    <div className="text-reserve-button ">
                                        GET TICKETS
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>


                    {/* row 2  */}
                    <div className="row justify-content-center mt-1 mb-5 viewMenu-row ">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 px-5 pt-3  ">
                            <div className="card-container-viewMenu pt-4 pb-5 bg-transparent">
                                <div className="img-fluid" id="viewMenu-chef-img-div">
                                    <img src={require('../assets/images/chefsportrait2.jpg')} className="card-img-top" id="viewMenu-chef-img" alt="..." />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5 p-md-1">


                            <div className="card-container-viewMenu pt-4 pb-5">
                                <h1 className="viewMenu-title-chef mb-4 text-center">CHEF DOMINICK LEE</h1>

                                <p className="card-text card-text-viewMenu-chef text-start px-4">Growing up in New Orleans,
                                    Dominick fell in love with food by watching his mother cook.  While studying for his Bachelors
                                    in Culinary Management at the Art Institute of Houston, he had the great fortune to stage at some
                                    of the most highly acclaimed restaurants in the country, including Alinea (3 Michelin Stars), Next
                                    (1 Michelin Star), and Blue Hill at Stone Barns (2 Michelin Stars).  He also worked as an Executive
                                    Sous Chef for Kiran's, one of the best Indian restaurants in Houston.  After graduating, Dominick took
                                    on the Executive Chef role at Poitin, where he received nominations for Rising Star Chef from CultureMap
                                    Houston and Eater Houston.  Because he wanted to learn more about his Italian roots, he moved to Italy and
                                    became the Head Chef at Villa Lena Agriturismo in Tuscany.  Now that Dominick is in New York, he is focusing
                                    on his new elevated Creole restaurant, Alligator Pear, which is slated to open in Spring 2023.
                                </p>

                            </div>

                        </div>
                    </div>





                </div>

                <div className="carousel viewMenu-carousel-img" id="viewMenu-card-img" data-bs-ride="false">
                    <div className="carousel-inner">
                        <div className="carousel-item">

                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/95305886-dfee-4821-b71f-89d6818097a9/Vandewater_Arrival_1000x600-1+%281%29.jpg" className="d-block viewMenu-carousel-img" alt="..." />
                        </div>
                        <div className="carousel-item active parivate-img-carousel-active-container">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/94bc2cc8-b8df-4109-9462-ac3ee242703b/Screen+Shot+2023-01-12+at+1.50.39+PM.png" className="d-block  viewMenu-carousel-img-active" alt="..." />
                           
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/b6cef98a-d92d-4a3a-a1ae-40086267ed89/427016938+%281%29.jpg" className="d-block  viewMenu-carousel-img" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://images.squarespace-cdn.com/content/v1/632c1d421b2c5c03369902ee/20d63824-0707-43e2-ae5d-90f28772e57f/6N0A5716.jpg" className="d-block viewMenu-carousel-img" alt="..." />
                        </div>
                      
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#viewMenu-card-img" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#viewMenu-card-img" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="container">
                 <div className="d-flex vewMenu-map-container flex-column flex-sm-row t align-items-center ">
                    <div className="viewMenu-map mt-5 ">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.750585912154!2d-73.95972809999999!3d40.8114743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f64004e49ceb%3A0xfe75bbe3516f052f!2s543%20W%20122nd%20St%2C%20New%20York%2C%20NY%2010027%2C%20USA!5e0!3m2!1sen!2sth!4v1685431475100!5m2!1sen!2sth" width="100%" height="100%" style={ {border:"0"}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                    
                    </div>
                    <div className="viewMenu-map-link p-0 p-sm-5 mt-0 mt-sm-5 ">
                     <a href="https://www.google.com/maps/place/543+W+122nd+St,+New+York,+NY+10027/@40.8114743,-73.9619221,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f64004e49ceb:0xfe75bbe3516f052f!8m2!3d40.8114743!4d-73.9597281" target="_blank"  rel="noopener">The Vandewater
                       <br></br> 543 W 122nd St <br></br>
                        New York, NY 10027</a>
                        </div>
                 </div>
                </div>

             
               

      
             




            </main>
        </>
    );
}

export default ViewMenu