import "./Contact.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Contact = () => {

    return (
        <main className="contact pb-5">
            
            <div className="container contact-container">
                <div className="row justify-content-center">
                  <div className="col col-sm-10 col-md-8 col-lg-5">
                    <div className="text-center">
                        <h1 className="contact-us-header-text">CONTACT US</h1>
                        <p className="text-start contact-us-text mt-5">
                                Questions, ideas, feedback — we want to hear it all. Drop us a line at <u>hi@meetresident.com</u> or complete the form below.
                        </p>
                        <p className="text-start contact-us-text">
                            For questions regarding an upcoming reservation, shoot us a note at <u>reservations@meetresident.com</u>.
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
                            <Form.Label>Your Message</Form.Label>
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

export default Contact