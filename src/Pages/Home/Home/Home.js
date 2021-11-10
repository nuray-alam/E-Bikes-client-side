import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import Bikes from '../Bikes/Bikes/Bikes';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>This is home page</h2>
            <Bikes></Bikes>
        </div>
    );
};

export default Home;