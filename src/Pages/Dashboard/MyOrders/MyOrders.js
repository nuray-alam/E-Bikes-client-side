import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';

const MyOrders = () => {

    const { user, token } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    //getting orders
    useEffect(() => {
        fetch(`https://e-bikes-server-side.onrender.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => {

                setMyOrders(data);
                setIsLoading(false);

            })
    }, [user.email, token])



    //handle cancel order button
    const handleCancelOrder = id => {
        let isAgreeToCancel = window.confirm("Are you sure cancel the order?");
        if (isAgreeToCancel === true) {
            const url = `https://e-bikes-server-side.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingOrders = myOrders?.filter(ord => ord._id !== id);
                        setMyOrders(remainingOrders);
                    }
                })
        }

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
            <h2 className="fw-bolder text-center mb-5">My <span className="text-warning">Orders</span></h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    myOrders?.map(order => <Order
                        key={order._id}
                        isAdmin={false}
                        order={order}
                        handleCancelOrder={handleCancelOrder}></Order>)
                }
            </Row>
        </div>
    );
};

export default MyOrders;