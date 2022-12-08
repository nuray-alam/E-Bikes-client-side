import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const Order = (props) => {
    const { handleCancelOrder, handleProceedShipButton, isAdmin } = props;
    const { _id, bikeId, name, email, status } = props.order;
    const [bikInfo, setBikeInfo] = useState({});

    let isShipped;

    // setting the status state
    if (status === 'shipped') {
        isShipped = true;
    }
    else {
        isShipped = false;
    }
    // getting bike's full detail
    useEffect(() => {
        fetch(`https://e-bikes-server-side.onrender.com/bike/${bikeId}`)
            .then(res => res.json())
            .then(data => {
                setBikeInfo(data);
            })
    }, [bikeId])



    return (
        <Col className="">
            <div className="package text-center py-2 px-3 card h-100 d-flex flex-column justify-content-between">
                <div>
                    <img src={bikInfo?.imgUrl} className="img-fluid" alt="" />
                    <h4 className="mt-1">{bikInfo?.name}</h4>
                    <h5 className="">Name: {name}</h5>
                    <h5 className="">Email: {email}</h5>

                    <h4 className="">Status: <span className={isShipped ? "text-success" : "text-danger"}>{status}</span></h4>
                    <p>Order Id: {_id}</p>

                </div>
                <div className="d-flex flex-column">
                    {isAdmin && <button onClick={() => handleProceedShipButton(_id)} className={isShipped ? " btn btn-outline-dark mb-2 disabled" : "btn btn-success mb-2"}>{isShipped ? "Shipped" : "Approve to Ship"}</button>}
                    <button onClick={() => handleCancelOrder(_id)} className="btn btn-danger">Cancel Order</button>
                </div>
            </div>
        </Col>
    );
};

export default Order;