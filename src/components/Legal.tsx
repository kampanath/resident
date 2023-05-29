import "./Legal.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Legal = () => {

    return (
        <main className="legal pb-5">
            
            <div className="container legal-container">
                <div className="row justify-content-center">
                  <div className="col col-sm-10 col-md-8 col-lg-8">
                    <div className="text-center legal-text-container d-flex flex-column align-items-center justify-content-center">
                        <h1 className="contact-us-header-text">LEGAL</h1>
                        <p className="legal-text mt-5">
                        Click here for more information <Link className="legal-link" to="/policy">Privacy Policy</Link> | <Link className="legal-link" to="/term">Terms & Conditions</Link> | <Link className="legal-link" to="/access">Accessibility</Link>
                        </p>
    
                    </div>
                  </div>
                </div>
            </div>
        </main>
    );
}

export default Legal