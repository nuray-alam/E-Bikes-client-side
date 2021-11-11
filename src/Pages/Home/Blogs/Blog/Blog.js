import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css'
const Blog = (props) => {
    const { name, imgUrl, description } = props.blog;
    return (
        <Col>
            <div className="blog text-center py-2 px-3 rounded">
                <img src={imgUrl} className="img-fluid mb-3 mt-2" alt="" />
                <h4 className="text-warning">{name}</h4>
                <p className="">{description}</p>
            </div>
        </Col>
    );
};

export default Blog;