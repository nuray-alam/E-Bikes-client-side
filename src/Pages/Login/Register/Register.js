import React from 'react';
import { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert("Your password did not matched");
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();

    }

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    return (

        <div>
            <Navigation></Navigation>
            <Row xs={1} sm={1} md={2} className="mx-auto px-2 my-5 w-75">
                <Col>
                    <h4>Register</h4>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <input type="text" name="name" onBlur={handleOnBlur} className="mb-3 form-control" placeholder="Your Name" />
                        <br />
                        <input type="email" name="email" onBlur={handleOnBlur} className="mb-3 form-control" placeholder="Your Email" />
                        <br />
                        <input type="password" name="password" onBlur={handleOnBlur} className="mb-3 form-control" placeholder="Your Password" />
                        <br />
                        <input type="password" name="password2" onBlur={handleOnBlur} className="mb-3 form-control" placeholder="Retype your password" />
                        <br />
                        <button className="btn btn-dark mb-3" type="submit" variant="contained">Register</button>
                        <br />
                        <Link style={{ width: "75%", textDecoration: "none" }} to="/login">Already Registered? Please Login</Link>
                    </form>}
                    {isLoading && <Spinner></Spinner>}
                    {user?.email && <span>User created successfully</span>}
                    {authError && <span>{authError}</span>}
                </Col>

                <Col item xs={12} md={6}>
                    <img src="https://www.hubspot.com/hubfs/how-to-create-user-accounts-and-profiles.jpeg" className="img-fluid" alt="" />
                </Col>

            </Row>
        </div>

    );
};

export default Register;