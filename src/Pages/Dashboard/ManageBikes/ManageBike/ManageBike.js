import React from 'react';
import { Col } from 'react-bootstrap';

const ManageBike = (props) => {

    const { handleDeleteBike } = props;
    const { _id, name, price, description, imgUrl } = props.bike

    return (
        <Col className="">
            <div className="package text-center py-2 px-3 card h-100 d-flex flex-column justify-content-between">
                <div>
                    <img src={imgUrl} className="img-fluid" alt="" />
                    <h4 className="text-dark mt-1">{name}</h4>
                    <p>$ {price}/-</p>
                    <p>{description}</p>
                </div>
                <div className="d-flex flex-column">
                    <button onClick={() => handleDeleteBike(_id)} className="btn btn-danger">Delete Bike</button>
                </div>
            </div>
        </Col>
    );
};

export default ManageBike;