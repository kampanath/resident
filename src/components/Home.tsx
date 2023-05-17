
import React from 'react';
import "./Home.css";



const Home = () => {
    
    return ( 
        <>
        <div className="embed-responsive video-wrapper"  style= { { overflow:"hidden"}}>
           
                <video loop autoPlay muted className="embed-responsive-item">
                <source src={require('../assets/videos/Resident.mp4')} type="video/mp4" />
                </video>
          
        </div>
        <div className="testDiv">

        </div>

 {/*
        <div className="embed-responsive">
           <iframe className="embed-responsive-item" src="//player.vimeo.com/video/441017712?api=1&amp;background=1" 
           allowFullScreen style= { { position:"fixed", top:0 ,left:0 ,right:0 ,bottom:0 ,width:"100vw",height:"100vh",border:"none" ,margin:0 ,padding:0 ,overflow:"hidden"}}></iframe>
        </div>
 */}

        {/*
        <iframe width="854" height="480" src="https://www.youtube.com/embed/qN3OueBm9F4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <iframe  src="//player.vimeo.com/video/441017712?api=1&amp;background=1" style= { { position:"fixed", top:0 , left:0, bottom:0, right:0, width:"100%", height:"100%", border:"none", margin:0, padding:0, overflow:"hidden" }} allowFullScreen></iframe>
         */}
        </>
    )
}


export default Home;