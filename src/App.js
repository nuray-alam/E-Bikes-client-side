import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AuthProvider from './context/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreMore from './Pages/Home/ExploreMore/ExploreMore';
import OrderNow from './Pages/OrderNow/OrderNow/OrderNow';
import OrderConfirmed from './Pages/OrderNow/OrderConfirmed/OrderConfirmed';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <PrivateRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/exploreMore">
              <ExploreMore></ExploreMore>
            </Route>
            <PrivateRoute path="/order/:id">
              <OrderNow></OrderNow>
            </PrivateRoute>
            <PrivateRoute path='/orderConfirmed'>
              <OrderConfirmed></OrderConfirmed>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
