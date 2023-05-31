import { Link } from "react-router-dom";
import "./ChefDetail.css";
import { useEffect } from "react";

const ChefDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>

        <main className="chefDetail pb-5">
            
           <div className="container-fluid chefDetail-background-container p-0 pt-0 pt-lg-5 ">
                <div className="card card-chefDetail mx-auto pt-0 pt-lg-5 ">
                    <div className="card-horizontal-chefDetail align-items-center">

                        {/* 
                        <div className="img-fluid" id="chefDetail-card-img">
                            <img src={require('../assets/images/AjeshFirstNightPS-11.jpg')} className="card-img-top" id="card-img-chefDetail" alt="..." />
                        </div>
                        */}
                        
                        <div className="img-fluid" id="chefDetail-card-img">
                            <img src={require('../assets/images/residentphoto3.jpg')} className="card-img-top" id="card-img-chefDetail" alt="..." />
                        </div>

                        <div className="card-body card-body-chefDetail ms-5 ">

                            <p className="card-title card-title-chefDetail text-start fs-6 fs-md-5">CHEF AARTHI SAMPATH</p>

                            <p className="card-text card-text-chefDetail text-start mt-4 px-1 px-sm-0">Chef Aarthi Sampath was born and raised in Mumbai, 
                            India. Her journey into culinary arts began in the libraries of her alma mater, where she spent countless hours 
                            studying French cooking techniques. After pursuing her culinary studies in some of the Taj hotels across India, 
                            she came to America to attend the prestigious Johnson and Wales Culinary University. Aarthi has since spent time 
                            in the kitchens of Junoon (1 Michelin Star), the iconic Breslin, and The Rainbow Room at Rockefeller Center. 
                            She has won numerous cooking shows including Chopped and Iron Chef, as well as served as a judge on MasterChef
                             Tamil and Beat Bobby Flay. She is currently a restaurant consultant in NYC and curates private dining experiences.</p>

                            <div className="d-flex flex-column flex-lg-row">
                                <Link  to="/chefs"  id="book-private-dinner-button">
                                    <div className="text-book-private-dinner-button">
                                    ← BACK TO ALL CHEFS
                                    </div>
                                </Link>

                
                            </div>
                          

                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default ChefDetail