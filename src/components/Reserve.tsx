import { useEffect } from "react";
import "./Reserve.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Reserve = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <>

            <main className="reserve pb-5 text-center" >

                <div className="container-fluid reserve-container text-center p-0 p-sm-5 mt-5  ">

                    <div className="row ">
                        <div className="col">
                            <h1 className="reserve-title">DINE AT THE CHEF’S TABLE</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-1 mt-sm-5 mb-5 px-3 reserve-row ">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-6 p-0 ">
                            <p className="card-text card-text-about px-2 px-md-5">We invite you to a Michelin-grade dining experience in an unforgettable
                                location.</p>

                            <p className="card-text card-text-about px-2 px-md-5">Our chefs come from the world's finest eateries, including
                                Eleven Madison Park, Per Se, Atomix, and Blanca. Each chef designs, executes, and introduces their own unique menu,
                                offering you bites and delights you can't find anywhere else. </p>

                            <p className="card-text card-text-about px-2 px-md-5">We look forward to hosting you!</p>

                        </div>
                    </div>

                     {/* row 1  */}
                    <div className="row justify-content-center mt-5 mb-0 reserve-row ">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/13.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">WEDNESDAY, MAY 31 | UPPER WEST SIDE</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5 ">Chef Dominick Lee presents a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/16.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">WEDNESDAY, MAY 31 | UPPER WEST SIDE</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5 ">Chef Camila Rinaldi presents a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/14.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">WEDNESDAY, MAY 31 | UPPER WEST SIDE</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5">Chef Camila Rinaldi presents a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>


                     {/* row 2  */}
                    <div className="row justify-content-center mt-5 mb-0 reserve-row ">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/15.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">SOLD OUT | SATURDAY, JUNE 3 | UPPER WEST SIDE</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5 "> Chef Ajesh Deshpande presents a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/17.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">WEDNESDAY, JUNE 7 | ROCKEFELLER PLAZA</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5 ">Chef Adji Jalloh presents a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/18.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">SOLD OUT | THURSDAY, JUNE 8 | SOHO</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5">Chef Connor Kaminski and Chef Owen L’Aquila present a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* row 3  */}
                    <div className="row justify-content-center mt-5 mb-0 reserve-row ">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/19.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">SOLD OUT | FRIDAY, JUNE 9 | SOHO</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5 "> Chef Connor Kaminski and Chef Owen L’Aquila present a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/20.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">SOLD OUT | WEDNESDAY, JUNE 14 | LOWER EAST SIDE</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5 ">Chef Justin Feliciano presents a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 p-2 ">
                            <div className="card card-parivate mx-auto bg-white">
                                <div className="card-horizontal-reserve ">

                                    <div className="img-fluid reserve-card-img">
                                        <img src={require('../assets/images/21.png')} className="card-img-top-reserve" alt="..." />
                                    </div>
                                    <div className="card-body card-body-reserve">
                                        <h6 className="card-title card-title-reserve px-0 px-lg-5">FRIDAY, JUNE 16 | MIDTOWN EAST</h6>
                                        <p className="card-text card-text-reserve px-0 px-lg-5">Chef Lane Karns presents a five-course tasting with wine pairing.</p>


                                        <Link className="btn btn-outline-dark my-5 mx-auto btn-link reserve-button" to="/viewMenu" >
                                            <div className="text-reserve-button">
                                                VIEW MENU AND BOOK
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </main>
        </>
    );
}

export default Reserve