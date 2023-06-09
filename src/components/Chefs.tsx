import { Link } from "react-router-dom";
import "./Chefs.css";
import { useEffect } from "react";

const Chefs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <>

        <main className="chefs pb-5 text-center" >
          <div className="container chefs-container text-center p-5">

           <div className="row ">
            <div className="col">
               <h1 className="chefs-title">CHEFS</h1>
            </div>
           </div>

           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 ">
                <p className="chefs-text text-start">Our chefs have trained in Michelin restaurants and are hitting their stride to 
                    become marquee names themselves. They’re the reason that each speakeasy event is 
                    unique: each dinner consists of a 5-course tasting menu that was curated specifically 
                    for that evening.  Click on each image to connect with the faces behind your food.</p>
            </div>
           </div>

           <div className="row mb-5 justify-content-center ">
            <div className="col-12 col-sm-12 col-md-3 m-3 ">

            <Link className="" role="button"  to="/chefDetail">
             <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/residentphoto3.jpg')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF AARTHI SAMPATH</figcaption>
              </figure>     
            </Link>
             
               
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/ScreenshotAbigailKirn.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ABIGAIL KIRN</figcaption>
              </figure>
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">

              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/img-home-7.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ADJI JALLOH</figcaption>
              </figure>
              </Link>
            </div>
           </div>


           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/residentphoto4.jpg')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF ADOLFO GARCIA</figcaption>
                </figure>
                </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">

              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/residentphoto5.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF AJESH DESHPANDE</figcaption>
              </figure>
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">

              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/Screen2B2022.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ALAN DELGADO</figcaption>
              </figure>
              </Link>
            </div>
           </div>

           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/ScreenShot41.png')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF ALMIRA SESSION</figcaption>
                </figure>
                </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">

              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/ScreenShot42.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ANDREW BOSI</figcaption>
              </figure>
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">

              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/ScreenShot43.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ASANKA LORENSU</figcaption>
              </figure>
              </Link>
            </div>
           </div>


           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/ScreenShot51.png')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF ALMIRA SESSION</figcaption>
                </figure>
                </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">

              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/ScreenShot52.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ANDREW BOSI</figcaption>
              </figure>
              </Link>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
            <Link className="" role="button"  to="/chefDetail">

              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/residentphoto53.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ASANKA LORENSU</figcaption>
              </figure>
              </Link>
            </div>
           </div>

          
          
           <div className="row mb-5 justify-content-center ">
            <div className="col-6 col-sm-5 col-md-4 ">
             <Link className="btn btn-outline-dark " role="button"  to="/joinus" id="text-apply-chef-button">
                  <div className="text-apply-chef-button ">
                     APPLY TO BE A RESIDENT CHEF
                  </div>
              </Link>
            </div>
          </div>

           

          </div>
        </main>
        </>
    );
}

export default Chefs