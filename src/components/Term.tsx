import { useEffect } from "react";

const Term = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <>

        <main className="chefs pb-5 text-center" >
          <div className="container chefs-container text-center p-5">

           <div className="row ">
            <div className="col">
               <h1>TERMS & CONDITIONS</h1>
            </div>
           </div>

           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 ">
                <p className="chefs-text text-center">Resident Ventures, LLC (collectively, “the “Company”) produces 
                and arranges events, makes information, products and services available on Websites (each individually, 
                the “Site” and collectively, the “Sites”), subject to the following terms of use (the “Terms”). We may own
                 and operate multiple Sites. You can determine if a Site is owned and operated by the Company by referring 
                 to the Terms of Use link available to you on each Site we own and operate. These Terms apply to all of our Sites.</p>
            </div>
           </div>

           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 ">
                <p className="chefs-text text-center mt-0">PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE SITE. 
                BY ACCESSING THE SITE, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THE TERMS, PLEASE 
                DO NOT USE THE SITE.</p>
            </div>
           </div>


           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 ">
              
                <p className="chefs-text text-center mt-0">“You” or “your” means you personally (for example, the individual 
                who reads and agrees to be bound by these terms), and, if you access this Site on behalf of a corporation or other
                 legal entity, you and such corporation or other legal entity on whose behalf you access any of the Sites. The Company 
                 reserves the right to change the information, products, services, prices, and Promotions mentioned in any of the Sites, 
                 at any time, at its sole discretion.</p>
            </div>
           </div>


           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 ">
               
                <p className="chefs-text text-center mt-0">Your use of the Site and the licensing of certain products 
                made available through certain of our Sites are subject to additional terms and conditions provided by 
                the Company. Such additional terms and conditions include, but are not limited to, waivers to attend our events, 
                agreements applicable to our products, terms associated with any sponsorships or Promotions and our Privacy Policy
                 (collectively, the “Additional Terms”). If there is any conflict between the Additional Terms and these Terms, 
                 the Additional Terms shall prevail with respect to the subject matter of such Additional Terms.</p>
            </div>
           </div>


           <div className="row justify-content-center mt-3 mb-5">
            <div className="col-12 col-md-12 col-lg-10 col-xl-10 ">
               
                <p className="chefs-text text-center mt-0">The Company reserves the right to change these Terms, 
                and provide you with notice of such change by posting the revised draft of the Terms on the Site or by 
                other reasonable means selected by us. You can determine when these Terms were last revised by referring 
                to the “LAST UPDATED” line at the bottom of these Terms. Your continued use of the Site after any changes 
                to the Site will indicate your acceptance of the changes and Terms. The Company reserves the right to seek 
                all remedies available by law and in equity for any violation of the Terms. Any rights not expressly granted 
                herein are reserved by the Company. The Company may limit the Site’s availability, in whole or in part, to any
                 person, geographic area or jurisdiction the Company chooses, from time to time, and in the Company’s sole discretion.</p>
            </div>
           </div>

          </div>
        </main>
        </>
    );
}

export default Term