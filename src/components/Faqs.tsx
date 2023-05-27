import "./Faqs.css";

const Faqs = () => {

    return (
        <>

            <main className="faqs pb-5 text-center" >

                <div className="img-fluid bg-warning" id="faqs-top-img-container">
                    <img src={require('../assets/images/faqs-top-img.jpg')} className="faqs-top-img" id="faqs-top-img" alt="..." />
                </div>

                <div className="container faqs-container text-center p-5 mt-5">

                    <div className="row ">
                        <div className="col">
                            <h1 className="faqs-title">FREQUENTLY ASKED QUESTIONS</h1>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-8 p-0">

                            <div className="faqs-collapse-container text-start">
                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" id="btn-faqs-collapse-first" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-1" aria-expanded="false" aria-controls="faqs-collapse-id-1">
                                    WHAT IS RESIDENT?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0 mt-2 mb-2" id="faqs-collapse-id-1">
                                        <div className="card card-body faqs-collapse-card p-0 m-0">
                                            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                                        </div>
                                    </div>
                                </button>

                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-2" aria-expanded="false" aria-controls="faqs-collapse-id-2">
                                WHERE ARE YOUR EVENTS?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-2">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        Rather than a traditional restaurant, we host our events in luxury residential spaces around NYC. 
                                        Current venues range from a penthouse in the Financial District to a lounge in Midtown West. The exact 
                                        address of each dinner is shared after ticket purchase.
                                        </div>
                                    </div>
                                </button>

                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-3" aria-expanded="false" aria-controls="faqs-collapse-id-3">
                                CAN I BOOK A PRIVATE EVENT?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-3">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        Yes! You can book us for team dinners, holiday parties, board lunches, celebrations, 
                                        and small-scale weddings.
                                        </div>
                                    </div>
                                </button>


                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-4" aria-expanded="false" aria-controls="faqs-collapse-id-4">
                                DO YOU REQUIRE VACCINATION PROOF AT YOUR DINNERS?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-4">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        In adherence with the updated city and state guidelines that have lifted vaccine policies, 
                                        we do not currently check vaccination status.
                                        </div>
                                    </div>
                                </button>


                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-5" aria-expanded="false" aria-controls="faqs-collapse-id-5">
                                WHAT'S INCLUDED WITH MY TICKET?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-5">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        Each dinner is a 5+ course tasting menu with wine pairing and gratuity. Tax is billed separately.
                                        </div>
                                    </div>
                                </button>

                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-6" aria-expanded="false" aria-controls="faqs-collapse-id-6">
                                DOES SOMEONE TELL ME ABOUT THE WINE?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-6">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        Yes, one of our sommeliers expertly pairs each dish and shares tasting notes with the group.
                                        </div>
                                    </div>
                                </button>

                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-7" aria-expanded="false" aria-controls="faqs-collapse-id-7">
                                HOW MANY PEOPLE ARE IN ATTENDANCE AT YOUR EVENTS?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-7">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        Our ticketed events range from 20-40 guests.
                                        </div>
                                    </div>
                                </button>

                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-8" aria-expanded="false" aria-controls="faqs-collapse-id-8">
                                WHAT IS YOUR CANCELLATION POLICY?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-8">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        Resident dinners are designed to be intimate and have limited availability. We are able to process full 
                                        refunds 14 days before your event - and can offer a gift card for a date change within 14 to 7 days of
                                         notice. Within one week of your event, we are unable to accommodate cancellation requests unless there 
                                         is a 'force majeure', such as restrictions set forth by local governments.
                                        </div>
                                    </div>
                                </button>

                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-9" aria-expanded="false" aria-controls="faqs-collapse-id-9">
                                HOW ARE GUESTS SEATED?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-9">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        All guests are seated only with members of their own party at socially distanttables. If you’d like to be seated with another party,
                                         make a note with your reservation or shoot us an email.
                                        </div>
                                    </div>
                                </button>

                                <button className="btn btn-faqs-collapse text-start p-0 pt-2 pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#faqs-collapse-id-10" aria-expanded="false" aria-controls="faqs-collapse-id-10">
                                WILL THE EVENT BE INDOORS OR OUTDOORS?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus faqs-plus-icon" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    <div className="collapse faqs-collapse text-start p-0 m-0" id="faqs-collapse-id-10">
                                        <div className="card card-body faqs-collapse-card p-0 m-0 mt-2 mb-2">
                                        Select events will have outdoor seating, weather permitting.
                                        </div>
                                    </div>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>




            </main>
        </>
    );
}

export default Faqs