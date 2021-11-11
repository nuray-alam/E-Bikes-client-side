import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css'
import Rating from "react-rating";

const Review = (props) => {


    const { name, reviewText, starNumber } = props.review;


    return (
        <Col>
            <div className="review text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                <div>
                    <h4 className="text-dark mt-1">{name}</h4>
                    <p>{reviewText}</p>
                    <span>
                        <Rating
                            className="text-warning"
                            initialRating={starNumber}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly
                        ></Rating>
                        <strong> ({starNumber})</strong>
                    </span>

                </div>
            </div>
        </Col>
    );
};

export default Review;