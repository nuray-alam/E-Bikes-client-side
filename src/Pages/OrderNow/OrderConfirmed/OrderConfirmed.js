import React from 'react';
import { useHistory } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const OrderConfirmed = () => {
    const history = useHistory();

    return (
      <div>
          <Navigation></Navigation>
            <div className="text-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthKvGGLVDGsYy8BkFwlrykq4BVQOdjx-Dxg&usqp=CAU" alt="" />
            <br />
            <button onClick={() => history.push('/home')} className="btn btn-dark">Back Home</button>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default OrderConfirmed;