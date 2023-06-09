import { useEffect } from "react";
import "./Newsletter.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface formSubmitData {

    onClickSubmitInterface(name: string,lastName: string,email: string): void;
}

let UserNewsLetterInfo = {
    userName:"",
    userLastName:"",
    userEmail:""
}

const Newsletter = (props: formSubmitData) => {

    const onClickSubmitNewsLetter = (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();
        console.log('Clicj');

        console.log(UserNewsLetterInfo.userName);

        props.onClickSubmitInterface(UserNewsLetterInfo.userName, UserNewsLetterInfo.userLastName, UserNewsLetterInfo.userEmail);
    };


    const onChangeNameINput = (event:React.ChangeEvent<HTMLInputElement>)=> {
        UserNewsLetterInfo.userName = event.currentTarget.value;
        console.log(UserNewsLetterInfo.userName);
        
    }

    const onChangeLastNameINput = (event:React.ChangeEvent<HTMLInputElement>)=> {
        UserNewsLetterInfo.userLastName = event.currentTarget.value;
        
    }

    const onChangeEmailINput = (event:React.ChangeEvent<HTMLInputElement>)=> {
        UserNewsLetterInfo.userEmail = event.currentTarget.value;
        
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <main className="newsletter pb-5">
            
            <div className="container newsletter-container">
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-10 col-md-9 col-lg-7 col-xl-6 pt-1">
                    <div className="text-center newsletter-text-container pt-5  d-flex flex-column align-items-center justify-content-start">
                        <h1 className="newsletter-header-text">NEWSLETTER SIGNUP</h1>
                        <p className="newsletter-text mt-5">
                        What comes with signing up (newsletter, event updates etc.)
                        </p>
    
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 pt-2">
                   
                    <Form className=" d-flex flex-column align-items-center">
                       <Form.Group className="mb-3 newsletter-formgroup" controlId="formNewsletterName">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="First Name" onChange={onChangeNameINput} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-3 newsletter-formgroup" controlId="formNewsletterLastName">
                            <Form.Label></Form.Label>
                            <Form.Control type="text"  placeholder="Last Name" onChange={onChangeLastNameINput} style={{ height: '70px' }}/>
                        </Form.Group>
                        <Form.Group className="mb-5 newsletter-formgroup" controlId="formNewsletterEmail">
                            <Form.Label></Form.Label>
                            <Form.Control type="email"  placeholder="Email Address" onChange={onChangeEmailINput} style={{ height: '70px' }}/>
                        </Form.Group>

                        <button className="btn btn-outline-dark newsletter-send-btn" id="newsletter-send-btn" onClick={onClickSubmitNewsLetter}>
                                    <div className="text-reserve-button">
                                        SIGN UP
                                    </div>
                        </button>

                    </Form>

                  </div>

                  
                </div>
            </div>
        </main>
    );
}

export default Newsletter