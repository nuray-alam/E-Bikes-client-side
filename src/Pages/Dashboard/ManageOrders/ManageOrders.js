import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Order from '../Order/Order';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
const [isLoading, setIsLoading] = useState(true);

    // getting all orders
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            })
    }, [])

    //handle cancel order button
    const handleCancelOrder = id => {
        let isAgreeToCancel = window.confirm("Are you sure cancel the order?");
        if (isAgreeToCancel === true) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrders = orders?.filter(ord => ord._id !== id);
                        setOrders(remainingOrders);
                    }
                })
        }

    }

   

    if(isLoading){
        return <div className="d-flex w-75 mx-auto my-5 justify-content-center">
            <div className="me-3">
                <Spinner animation="border" variant="primary" />
            </div>
            <div><h4>Loading...</h4></div>
        </div>
    }
    return (
        <div className="packages-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-dark mb-5">All Orders</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                        handleCancelOrder={handleCancelOrder}
                    ></Order>)
                }
            </Row>
        </div>
    );
};

export default ManageOrders;