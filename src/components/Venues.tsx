import { useEffect } from "react";
import "./Venues.css";

const Venues = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <>

        <main className="chefs pb-5 text-center" >
          <div className="container chefs-container text-center p-5 ">

           <div className="row">
            <div className="col">
               <h1 className="chefs-title">VENUES</h1>
            </div>
           </div>

           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6 ">
                <p className="chefs-text text-center">Our intimate venues offer privacy and customization impossible to 
                achieve in most private dining rooms. Make yourself at home in one of our luxury penthouses, townhouses, 
                or lofts, and enjoy a five-star dining experience for your next celebration. Whether you’re throwing a 
                corporate dinner party, or simply looking for an experiential, hidden speakeasy, we want to be your hosts.</p>

                <p className="chefs-text text-center">Each Resident venue is completely turnkey, outfitted with everything 
                you need to host a Michelin-level dining experience. From the tables and chairs, to the kitchen equipment,
                 art, and A/V, we’ll worry about the details so that you can focus on enjoying and entertaining. </p>

                <p className="chefs-text text-center">We’re ready for you.</p>
            </div>
           </div>

           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/venues1-1.jpg')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">BROOKLYN POINT</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/venues1-2.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CLUB 75</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/venues1-3.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHELSEA</figcaption>
              </figure>
            </div>
           </div>


           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/venues2-1.png')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">437 MADISON</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/venues2-2.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">JOLIE</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/venues2-3.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">MIDTOWN WEST</figcaption>
              </figure>
            </div>
           </div>

           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/venues3-1.png')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">ONE MANHATTAN SQUARE</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/venues3-2.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">SOHO LOFT</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/venues3-3.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">THE VANDEWATER</figcaption>
              </figure>
            </div>
           </div>

          </div>
        </main>
        </>
    );
}

export default Venues