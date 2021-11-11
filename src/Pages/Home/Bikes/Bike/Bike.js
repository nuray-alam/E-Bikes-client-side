import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Bike.css';

const Bike = (props) => {
    const { name, imgUrl, price, description, _id } = props.bike;
    let history = useHistory();

    //Order button event handler
    const handleOrderButton = id => {
        const url = `/order/${id}`;
        history.push(url);

    }
    return (
        <Col>
            <div className="bike text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                <div>
                    <img src={imgUrl} className="img-fluid" alt="" />
                    <h4 className="text-dark mt-1">{name}</h4>
                    <h5>Price: $ {price}/-</h5>
                    <p>{description}</p>
                </div>
                <div>
                    <button onClick={() => handleOrderButton(_id)} className="btn btn-dark">Buy Now</button>
                </div>
            </div>
        </Col>
    );
};

export default Bike;