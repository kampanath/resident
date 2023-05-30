import { useEffect } from "react";
import "./Joinus.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface formSubmitData {

    onClickSubmitInterfaceJoinUs(name: string,email: string, phone: string, coverLetter: string): void;
}

let joinOurTeamInfo = {
    userName:"",
    userEmail:"",
    userPhone:"",
    coverLetter:"",
}

const Joinus = (props: formSubmitData) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const onClickSubmitContact = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      
        props.onClickSubmitInterfaceJoinUs(joinOurTeamInfo.userName, joinOurTeamInfo.userEmail, joinOurTeamInfo.userPhone, joinOurTeamInfo.coverLetter);
    };


    const onChangeNameINput = (event:React.ChangeEvent<HTMLInputElement>)=> {
        joinOurTeamInfo.userName = event.currentTarget.value;
        
    }

    const onChangeEmailINput = (event:React.ChangeEvent<HTMLInputElement>)=> {
        joinOurTeamInfo.userEmail = event.currentTarget.value;
        
    }

    const onChangePhoneINput = (event:React.ChangeEvent<HTMLInputElement>)=> {
        joinOurTeamInfo.userPhone = event.currentTarget.value;
        
    }

    const onChangeCoverINput = (event:React.ChangeEvent<HTMLInputElement>)=> {
        joinOurTeamInfo.coverLetter = event.currentTarget.value;
        
    }

    return (
        <main className="joinus pb-5">
            
            <div className="container contact-container">
                <div className="row justify-content-center">
                  <div className="col col-sm-10 col-md-8 col-lg-5">
                    <div className="text-center">
                        <h1 className="contact-us-header-text">JOIN OUR TEAM</h1>
                        <p className="text-start contact-us-text mt-5">
                            We’re always looking for go-getter food enthusiasts to join our events staff. Complete the form below or email staffing@meetresident.com with your resume to be considered.   
                        </p>
    
                    </div>

                    <Form>
                       <Form.Group className="mb-3" controlId="formFooterName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" onChange={onChangeNameINput}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFooterEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  onChange={onChangeEmailINput}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFooterPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text"  onChange={onChangePhoneINput}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFooterTextArea">
                            <Form.Label>Cover Letter</Form.Label>
                            <Form.Control
                            as="textarea"
                            style={{ height: '100px' }} onChange={onChangeCoverINput}
                            />
                        </Form.Group>

                        <button className="btn btn-outline-dark contact-send-btn" id="contact-send-btn" onClick={onClickSubmitContact}>
                                    <div className="text-reserve-button">
                                        SEND
                                    </div>
                        </button>
                    </Form>
                
                  </div>
                </div>
            </div>
        </main>
    );
}

export default Joinus