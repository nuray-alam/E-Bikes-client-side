import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
import AddBike from '../AddBike/AddBike';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import ManageBikes from '../ManageBikes/ManageBikes/ManageBikes';
import Footer from '../../Shared/Footer/Footer';
import AddReview from '../AddReview/AddReview/AddReview.js'

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="">
            <Toolbar className="bg-dark" ><span className="text-white fs-5">E-Bikes</span></Toolbar>
            <Divider />
            <Link className="text-decoration-none text-dark" to="/home"> <Button color="inherit">Home</Button></Link>
            <Divider />
            <Link className="text-decoration-none text-dark" to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
            <Divider />
            {admin ? <Link className="text-decoration-none text-dark" to={`${url}/addBike`}><Button color="inherit">Add a New Bike</Button></Link> : <Link className="text-decoration-none text-dark" to={`${url}`}><Button color="inherit">My Orders</Button></Link>}
            <Divider />
            {admin && <Link className="text-decoration-none text-dark" to={`${url}/manageBikes`}><Button color="inherit">Manage All Bikes</Button></Link>}
            <Divider />
            {!admin && <Link className="text-decoration-none text-dark" to={`${url}/addReview`}><Button color="inherit">Add Review</Button></Link>}
            <Divider />
            {admin ? <Link className="text-decoration-none text-dark" to={`${url}/manageOrders`}><Button color="inherit">Manage All Orders</Button></Link> : <Link className="text-decoration-none text-dark" to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>}
            <Divider />

            {admin && <Box>
                <Link className="text-decoration-none text-dark" to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
            </Box>}
            <Divider />
            <button onClick={logOut} className="btn btn-dark my-3">Log Out</button>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <div className="">
            <div>
                <Box sx={{ display: 'flex' }}>

                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        sx={{
                            width: { sm: `calc(100% - ${drawerWidth}px)` },
                            ml: { sm: `${drawerWidth}px` },
                            backgroundColor: "#212529"
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div">
                                Dashboard
                            </Typography>

                        </Toolbar>
                    </AppBar>
                    <Box
                        component="nav"
                        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                        aria-label="mailbox folders"
                    >
                        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                        <Drawer
                            container={container}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                            sx={{
                                display: { xs: 'block', sm: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                        >
                            {drawer}
                        </Drawer>
                        <Drawer
                            variant="permanent"
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                    >
                        <Toolbar />
                            {/* Nested Routes */}
                        <Switch>
                            {admin ? <Route exact path={path}>
                                <ManageOrders></ManageOrders>
                            </Route> :
                                <Route exact path={path}>
                                    <MyOrders></MyOrders>
                                </Route>
                            }
                            <Route path={`${url}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${url}/addReview`}>
                                <AddReview></AddReview>
                            </Route>
                            <AdminRoute path={`${path}/addBike`}>
                                <AddBike></AddBike>
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageBikes`}>
                                <ManageBikes></ManageBikes>
                            </AdminRoute>
                        </Switch>

                    </Box>
                </Box>

            </div>
            <Footer></Footer>
        </div>

    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;
