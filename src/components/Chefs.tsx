import "./Chefs.css";

const Chefs = () => {

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
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/resident+photo+3.jpg')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF AARTHI SAMPATH</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/Screenshot+2023-04-19+at+4.40.10+PM+-+Abigail+Kirn.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ABIGAIL KIRN</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/img-home-7.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ADJI JALLOH</figcaption>
              </figure>
            </div>
           </div>


           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/resident+photo+4.jpg')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF ADOLFO GARCIA</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/resident+photo+5.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF AJESH DESHPANDE</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/Screen2B2022.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ALAN DELGADO</figcaption>
              </figure>
            </div>
           </div>

           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/Screen+Shot+4-1.png')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF ALMIRA SESSION</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/Screen+Shot+4-2.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ANDREW BOSI</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/Screen+Shot+4-3.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ASANKA LORENSU</figcaption>
              </figure>
            </div>
           </div>


           <div className="row mb-5 justify-content-center">
            <div className="col-12 col-sm-12 col-md-3 m-3">
             
                <figure className="figure chefs-figure ">
                        <img src={require('../assets/images/Screen+Shot+5-1.png')} className="figure-img  " alt="..."/>
                        <figcaption className="figure-caption">CHEF ALMIRA SESSION</figcaption>
                </figure>
              
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/Screen+Shot+5-2.png')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ANDREW BOSI</figcaption>
              </figure>
            </div>
            <div className="col-12 col-sm-12 col-md-3 m-3">
              <figure className="figure chefs-figure">
                    <img src={require('../assets/images/resident+photo+5-3.jpg')} className="figure-img" alt="..."/>
                    <figcaption className="figure-caption">CHEF ASANKA LORENSU</figcaption>
              </figure>
            </div>
           </div>

          
          

          </div>
        </main>
        </>
    );
}

export default Chefs