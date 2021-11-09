import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Col, Row, Spinner } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation'
const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();

    }

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }


    return (
<div>
    <Navigation></Navigation>
<Row xs={1} md={2} className="w-75 mx-auto my-5">
            <Col>
                <h4>Login</h4>
                <form onSubmit={handleLoginSubmit}>
                    <input type="email" name="email" onChange={handleOnChange} className="mb-3" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" onChange={handleOnChange} className="mb-3" placeholder="Your Password" />
                    <br />
                    {/* <TextField sx={{ width: "75%", m: 1 }} name="email" type="email" onChange={handleOnChange} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField sx={{ width: "75%", m: 1 }} name="password" onChange={handleOnChange} id="standard-basic" label="Your Password" type="password" variant="standard" /> */}
                    <button type="submit" className="btn btn-primary">Login</button>
                    <br />
                    <Link style={{ width: "75%", textDecoration: "none" }} to="/register">New User? Please Register</Link>
                </form>
                <p>-------------------------------------------</p>
                <button className="btn btn-primary ms-3" onClick={handleGoogleSignIn}>Google Sign In</button>
                {isLoading && <Spinner animation="border" variant="primary" />}
                {user?.email && <span>Logged in successfully</span>}
                {authError && <span>{authError}</span>}
            </Col>

            <Col>
                <img src="https://www.hubspot.com/hubfs/how-to-create-user-accounts-and-profiles.jpeg" style={{ width: "100%" }} alt="" />
            </Col>

        </Row>
</div>
       
    );
};

export default Login;