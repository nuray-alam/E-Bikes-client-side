import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch("https://immense-plateau-20554.herokuapp.com/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return '';   //Already has a spinner in home page
    }

    return (
        <div className="my-5 py-5 mx-auto w-75">
            <div className="text-center mb-5">
                <h1>Our <span className="text-warning">Blogs</span></h1>
            </div>
            <Row xs={1} md={2} lg={2} xl={3} className="g-5">
                {
                    blogs?.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                    ></Blog>)
                }
            </Row>
        </div>
    );
};

export default Blogs;