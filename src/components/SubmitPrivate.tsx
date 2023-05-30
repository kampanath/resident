import { useEffect } from "react";
import "./SubmitPrivate.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface formSubmitData {

    onClickSubmitInterface(name: string,email: string,phone: string
        ,company: string,desiredVenue: string,eventDate: string
        ,startTime: string,endTime: string,typeOfEvent: string
        ,numberOfpeople: string,additionInfo: string): void;
}

let contactUsPrivateEvents = {
    name:"",
    email:"",
    phone:"",
    company:"",
    desiredVenue:"",
    eventDate:"",
    startTime:"",
    endTime:"",
    typeOfEvent:"",
    numberOfpeople:"",
    additionInfo:""

}

const SubmitPrivate = (props: formSubmitData) => {

    const onClickSubmitNewsLetter = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
       

        props.onClickSubmitInterface(contactUsPrivateEvents.name, contactUsPrivateEvents.email, contactUsPrivateEvents.phone,
            contactUsPrivateEvents.company, contactUsPrivateEvents.desiredVenue, contactUsPrivateEvents.eventDate,
            contactUsPrivateEvents.startTime, contactUsPrivateEvents.endTime, contactUsPrivateEvents.typeOfEvent, 
            contactUsPrivateEvents.numberOfpeople, contactUsPrivateEvents.additionInfo );
    };


    const onChangeName = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.name = event.currentTarget.value;
       
        
    }

    const onChangeEmailt = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.email = event.currentTarget.value;
        
    }

    const onChangeEmail = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.phone = event.currentTarget.value;
    }

    const onChangePhone = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.phone = event.currentTarget.value;
    }

    const onChangeCompany = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.company = event.currentTarget.value;
    }

    const onChangeDesiredVenue = (event:React.ChangeEvent<HTMLSelectElement>)=> {
        contactUsPrivateEvents.desiredVenue = event.currentTarget.value;
    }

    const onChangeEventDate = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.eventDate = event.currentTarget.value;
    }

    const onChangeStartTime = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.startTime = event.currentTarget.value;
    }

    const onChangeEndTime = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.endTime = event.currentTarget.value;
    }

    const onChangeTypeOfEvent = (event:React.ChangeEvent<HTMLSelectElement>)=> {
        contactUsPrivateEvents.typeOfEvent = event.currentTarget.value;
    }

    const onChangeNumberOfpeople = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.numberOfpeople = event.currentTarget.value;
    }

    const onChangeAdditionInfo = (event:React.ChangeEvent<HTMLInputElement>)=> {
        contactUsPrivateEvents.additionInfo = event.currentTarget.value;
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <main className="submitPrivate pb-5">
            
            <div className="container submitPrivate-container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-10 col-md-9 col-lg-7 col-xl-6 pt-1">
                    <div className="text-center submitPrivate-text-container pt-5  d-flex flex-column align-items-center justify-content-start">
                        <h1 className="submitPrivate-header-text">CONTACT US ABOUT <br></br>
                            YOUR PRIVATE EVENT</h1>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5 pt-2 ">
                   
                    <Form className=" d-flex flex-column align-items-start">
                       <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterName">
                            <Form.Label>First and Last Name</Form.Label>
                            <Form.Control type="text" placeholder="" onChange={onChangeName} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  placeholder="" onChange={onChangeEmail} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text"  placeholder="" onChange={onChangePhone} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text"  placeholder="" onChange={onChangeCompany} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Desired Space/Venue</Form.Label>
                            <Form.Select aria-label="Default select example"  onChange={onChangeDesiredVenue} style={{ height: '70px' }}>
                                <option></option>
                                <option value="Financial District">Financial District</option>
                                <option value="Upper West Side">Upper West Side</option>
                                <option value="Rockefeller Center">Rockefeller Center</option>
                                <option value="Lower East Side">Lower East Side</option>
                                <option value="Downtown Brooklyn">Downtown Brooklyn</option>
                                <option value="Midtown West">Midtown West</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type="text"  placeholder="" onChange={onChangeEventDate} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="text"  placeholder="" onChange={onChangeStartTime} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="text"  placeholder="" onChange={onChangeEndTime} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Type of Event</Form.Label>
                            <Form.Select aria-label="Default select example" onChange={onChangeTypeOfEvent} style={{ height: '70px' }}>
                                <option></option>
                                <option value="Alumni">Alumni</option>
                                <option value="Bachelor/Bachelorette">Bachelor/Bachelorette</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Cocktail Reception">Cocktail Reception</option>
                                <option value="Corporate Lunch">Corporate Lunch</option>
                                <option value="Engagement">Engagement</option>
                                <option value="Funcdraiser">Funcdraiser</option>
                                <option value="Graduation">Graduation</option>
                                <option value="Holiday">Holiday</option>
                                <option value="Meeting/Presentation">Meeting/Presentation</option>
                                <option value="Photo/Film Shoots">Photo/Film Shoots</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Number of People</Form.Label>
                            <Form.Control type="text"  placeholder="" onChange={onChangeNumberOfpeople} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 submitPrivate-formgroup" controlId="formNewsletterLastName">
                            <Form.Label>Addition Information</Form.Label>
                            <Form.Control type="text"  placeholder="" onChange={onChangeAdditionInfo} style={{ height: '70px' }}/>
                        </Form.Group>
                     
                        <button className="btn btn-outline-dark submitPrivate-send-btn align-middle" id="submitPrivate-send-btn" onClick={onClickSubmitNewsLetter}>
                                    <div className="text-submitPrivate-button fs-6">
                                        SUBMIT
                                    </div>
                        </button>

                    </Form>

                  </div>

                  
                </div>
            </div>
        </main>
    );
}

export default SubmitPrivate