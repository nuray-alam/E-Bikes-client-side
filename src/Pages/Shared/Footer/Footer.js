import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container text-white mt-5'>
            <Row xs={1} md={3} className="w-75 mx-auto p-3">
                <Col>
                    <ul>
                        <li className="fs-5 border-bottom pb-1 border-info">Company</li>
                        <li className='pt-3'>About us</li>
                        <li>Our Service</li>
                        <li>Privacy Policy</li>
                        <li>Affiliated Program</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li className="fs-5 border-bottom pb-1 border-info">Get Help</li>
                        <li className='pt-3'>FAQ</li>
                        <li>Returns</li>
                        <li>Support Center</li>
                        <li>Payment Options</li>
                    </ul>
                </Col>
                <Col>
                    <ul>
                        <li className='border-bottom pb-1 fs-5 border-info'>Follow Us</li>
                        <li className='pt-3'>
                            <i className="fab fa-facebook fs-5 pe-3"></i>
                            <i className="fab fa-instagram fs-5 pe-3"></i>
                            <i className="fab fa-twitter fs-5 pe-3"></i>
                            <i className="fab fa-linkedin fs-5 pe-3"></i>
                        </li>
                        <li className="pt-3">1/1,West Dhanmondi, Dhaka-1205</li>
                        <li>Phone: +880 177908800</li>
                    </ul>


                </Col>
            </Row>
        </div>
    );
};

export default Footer;