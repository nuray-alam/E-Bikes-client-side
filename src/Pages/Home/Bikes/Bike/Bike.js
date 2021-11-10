import React from 'react';
import { Col } from 'react-bootstrap';
import './Bike.css';

const Bike = (props) => {

    const { name, imgUrl, price, description, _id } = props.bike;
    return (
        <Col>
            <div className="bike text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                <div>
                    <img src={imgUrl} className="img-fluid" alt="" />
                    <h4 className="text-dark mt-1">{name}</h4>
                    <p>$ {price}/-</p>
                    <p>{description}</p>
                </div>
                <div>
                    {/* <button onClick={() => handleOrderButton(_id)} className="btn btn-outline-success">Book Now</button> */}
                </div>
            </div>
        </Col>
    );
};

export default Bike;