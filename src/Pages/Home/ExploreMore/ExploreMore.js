import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Bike from '../Bikes/Bike/Bike';
import Navigation from '../../Shared/Navigation/Navigation'

const ExploreMore = () => {
    const [bikes, setBikes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //getting all the packages
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => {
                setBikes(data)
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
        <div>
             <Navigation></Navigation>
             <div className="bikes-section my-5 w-75 mx-auto">
            <h2 className="fw-bolder text-center text-success mb-5">Our All Bikes</h2>
            <h2>Total bikes: {bikes.length}</h2>
            <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                {
                    bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                }
            </Row>
        </div>
        </div>
      
    );
};

export default ExploreMore;