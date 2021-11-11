import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import ManageBike from '../ManageBike/ManageBike';

const ManageBikes = () => {
    const [bikes, setBikes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // getting all orders
    useEffect(() => {
        fetch('https://immense-plateau-20554.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                setBikes(data);
                setIsLoading(false);
            })
    }, [])

    // handle delete bike
    const handleDeleteBike = id => {
        let isAgreeToCancel = window.confirm("Are you sure to delete the bike?");
        if (isAgreeToCancel === true) {
            const url = `https://immense-plateau-20554.herokuapp.com/bike/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount > 0) {
                        alert("Deleted successfully");
                        const remainingBikes = bikes?.filter(bike => bike._id !== id);
                        setBikes(remainingBikes);
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
            <h2 className="fw-bolder text-center text-dark mb-5">All Orders</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    bikes.map(bike => <ManageBike
                        key={bike._id}
                        bike={bike}
                        handleDeleteBike={handleDeleteBike}
                    ></ManageBike>)
                }
            </Row>
        </div>
    );
};

export default ManageBikes;