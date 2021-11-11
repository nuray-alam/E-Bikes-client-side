import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel variant="dark" fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/banner-v6-img.jpg?v=1584945859"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Enjoy Your Ride</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/HGVyqpH/bn.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Enjoy Your Ride</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/sHLZjXZ/bike-2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Enjoy Your Ride</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;