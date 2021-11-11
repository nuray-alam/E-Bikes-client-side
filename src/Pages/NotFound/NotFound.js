import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import './NotFound.css'

const NotFound = () => {
    let history = useHistory();
    const handleGoHomeButton = () => {
        history.push('/home')
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>
                                </div>
                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Look like you're lost
                                    </h3>
                                    <p>the page you are looking for not available!</p>
                                    <button className="btn btn-dark" onClick={handleGoHomeButton}>Go to Home</button>
                                    {/* <a href="" className="link_404">Go to Home</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;