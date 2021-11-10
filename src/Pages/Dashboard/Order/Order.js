import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';

const Order = (props) => {
    const { handleCancelOrder } = props;
    const { _id,bikeId, status, name, email } = props.order;
    const [bikInfo, setBikeInfo] = useState({});
    let isApproved;



    // getting order's package full detail
    useEffect(() => {
        fetch(`http://localhost:5000/bike/${bikeId}`)
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
               
                    <p>Order Id: {_id}</p>

                </div>
                <div className="d-flex flex-column">
                    <button onClick={() => handleCancelOrder(_id)} className="btn btn-danger">Cancel Order</button>
                </div>
            </div>
        </Col>
    );
};

export default Order;