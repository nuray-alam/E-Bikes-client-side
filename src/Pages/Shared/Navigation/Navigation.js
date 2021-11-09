import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css'

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <Navbar className="navbar" bg="dark" expand="lg" sticky="top">
            <Container className="">
                <Link to="/home" className="fw-bolder fs-2 me-5 text-decoration-none text-white"> <img src="https://cdn-icons-png.flaticon.com/128/2790/2790191.png" className="img-fluid brand-logo" alt="" /><small className="fw-lighter fs-5">E-Bikes</small></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fs-6">
                        <NavLink as={Link} to="/home" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">Home</NavLink>
                        {/* conditional rendering for nav links */}
                        {/* {user.email && <NavLink as={Link} to="/myOrders" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">My Orders</NavLink>}
                        {user.email && <NavLink as={Link} to="/manageOrders" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">Manage Orders</NavLink>}
                        {user.email && <NavLink as={Link} to="/addPackages" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">Add Packages</NavLink>} */}
                        {/* <NavLink as={Link} to="/contact" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">Contact Us</NavLink>
                        <NavLink as={Link} to="/about" activeStyle={{ color: "#91BFFF" }} className="text-decoration-none header-link me-3">About</NavLink> */}

                    </Nav>
                    {/* conditional rendering user name */}
                    {
                        user.email && <span className="user-name me-2 fs-6" style={{ color: "white" }}>{user.displayName ? user.displayName : ''}</span>
                    }
                    {/* conditional rendering for login and logout button */}
                    {user.email ? <button onClick={logOut} className="btn btn-outline-dark text-white">Log Out</button>
                        :
                        <NavLink as={Link} to="/Login" activeStyle={{ fontWeight: "bold", color: "#91BFFF", borderBottom: "1px solid #91BFFF" }} className="btn btn-primary text-decoration-none header-link me-3">Login</NavLink>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;