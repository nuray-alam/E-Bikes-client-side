import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation'
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes/Bikes';
import Reviews from '../Reviews/Reviews/Reviews';
import Blogs from '../Blogs/Blogs/Blogs';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Bikes></Bikes>
            <Reviews></Reviews>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home;