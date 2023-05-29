import { useEffect } from "react";

const Access = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>

        <main className="chefs pb-5 text-center" >
          <div className="container chefs-container text-center p-5">

           <div className="row ">
            <div className="col">
               <h1>ACCESSIBILITY</h1>
            </div>
           </div>

           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 ">
                <p className="chefs-text text-center">Resident Ventures ("Resident Ventures" is committed to ensuring that its Web site,
                 www.meetresident.com is accessible for all people with disabilities. Resident will implement relevant portions of the 
                 WCAG 2.0 AA as its web accessibility program in order to meet Section 508 Web Accessibility Standards developed by the
                  United States Access Board (Section 508).</p>
            </div>

           </div>

           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 ">
                <p className="chefs-text text-center mt-0">Please be aware that our efforts are ongoing. If you have specific accessibility
                questions about our Website, please contact us at hi@meetresident.com. If you do encounter an accessibility issue, please be 
                sure to specify the Web page in your email, and we will make all reasonable efforts to make that page accessible for you.</p>
            </div>

           </div>

          </div>
        </main>
        </>
    );
}

export default Access