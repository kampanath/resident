import "./Joinus.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Joinus = () => {

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
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFooterEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formFooterPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text"  />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formFooterTextArea">
                            <Form.Label>Cover Letter</Form.Label>
                            <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            />
                        </Form.Group>

                        <button className="btn btn-outline-dark contact-send-btn" id="contact-send-btn">
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