import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { token } = useAuth();


    // getting all orders
    useEffect(() => {
        fetch('https://immense-plateau-20554.herokuapp.com/orders', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            })
    }, [token])

    //handle cancel order button
    const handleCancelOrder = id => {
        let isAgreeToCancel = window.confirm("Are you sure cancel the order?");
        if (isAgreeToCancel === true) {
            const url = `https://immense-plateau-20554.herokuapp.com/orders/${id}`;
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


    // Status handling
    const handleProceedShipButton = id => {
        const url = `https://immense-plateau-20554.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Order is approved successfully');

                    const updatedOrder = orders.find(ord => ord._id === id);
                    updatedOrder.status = 'shipped'
                    const remainingOrders = orders.filter(ord => ord._id !== id);
                    setOrders([...remainingOrders, updatedOrder])
                }
            })

    }



    if (isLoading) {
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
                        isAdmin={true}
                        handleProceedShipButton={handleProceedShipButton}
                        handleCancelOrder={handleCancelOrder}
                    ></Order>)
                }
            </Row>
        </div>
    );
};

export default ManageOrders;