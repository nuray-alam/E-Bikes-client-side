import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //getting all bikes
    useEffect(() => {
        fetch('https://e-bikes-server-side.onrender.com/bikes')
            .then(res => res.json())
            .then(data => {
                setBikes(data.slice(0, 6))
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return <div className="d-flex w-75 mx-auto my-5 justify-content-center">
            <div className="me-3">
                <Spinner animation="border" variant="primary" />
            </div>
            <div><h4>Loading...</h4></div>
        </div>
    }

    return (
        <div className="bikes-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-dark mb-5">Our <span className="text-warning">Bikes</span></h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                }
            </Row>
        </div>
    );
};

export default Bikes;