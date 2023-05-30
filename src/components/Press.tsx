import { useEffect } from "react";
import "./Press.css";

const Press = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    return (
        <>

        <main className="press pb-5 text-center" >
          <div className="container press-container text-center p-5">

           <div className="row ">
            <div className="col">
               <h1 className="press-title">PRESS</h1>
            </div>
           </div>

           <div className="row mt-5 mb-5 justify-content-center ">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure press-figure ">
                        <img src={require('../assets/images/logo-01.png')} className="figure-img" alt="..."/>
                        <figcaption className="figure-caption">"Resident, the dinner series that takes place in 
                        empty luxury apartments throughout the city, showcases up-and-coming chefs."</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-10.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"Customers...get to dine in $5 million penthouses with 
                    views of the city that they might not otherwise ever get to see."</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-02.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"Is This The Most Exclusive Dining Experience 
                    In All Of New York?"</figcaption>
              </figure>
            </div>
           </div>


           <div className="row mt-1 mb-5 justify-content-center ">
            <div className="col-12 col-sm-12 col-md-3 m-3 ">
             
                <figure className="figure press-figure ">
                        <img src={require('../assets/images/logo-2-1.png')} className="figure-img" alt="..."/>
                        <figcaption className="figure-caption">"The combo of gastronomy and real estate 
                        is peak New York."</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-2-2.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"Resident’s rotating chef series brings top NYC 
                    chefs to unique private settings"</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-2-3.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"New startup brings gourmet dining experience 
                    to luxury apartment balconies"</figcaption>
              </figure>
            </div>
           </div>



           <div className="row mt-1 mb-5 justify-content-center ">
            <div className="col-12 col-sm-12 col-md-3 m-3 ">
             
                <figure className="figure press-figure ">
                        <img src={require('../assets/images/logo-3-1.png')} className="figure-img" alt="..."/>
                        <figcaption className="figure-caption">"Taking an intimate spin on the NYC dining experience
                         is Resident"</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-3-2.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"This Brooklyn Building Comes with a Live-in Chef"</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-3-3.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"10 Totally Hidden Restaurants and Bars for Secret Sushi and 
                    Clandestine Cocktails"</figcaption>
              </figure>
            </div>
           </div>



           <div className="row mt-1 mb-5 justify-content-center ">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure press-figure">
                        <img src={require('../assets/images/logo-4-1.png')} className="figure-img" alt="..."/>
                        <figcaption className="figure-caption">"The business is two years old, but seems custom-made for 
                        a pandemic, and the post-pandemic dining landscape."</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-4-2.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"Why the Allure of Private Dining Will Remain After the Pandemic"</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure press-figure">
                    <img src={require('../assets/images/logo-4-3.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">"Dine al fresco at the historic Broad Exchange Building's massive 
                    penthouse balcony"</figcaption>
              </figure>
            </div>
           </div>


          </div>
        </main>
        </>
    );
}

export default Press