
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='container-fluid' style={{ backgroundColor: '#313438', padding: '30px 0px', marginTop: '80px', marginBottom: '20px' }}>
      <h3 style={{ color: 'white' }}>Contact Us</h3>
      <div className='container' style={{ width: '40%' }}>
        <Form >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ color: 'white' }} >Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: 'white' }} >Type here</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

        </Form>

        <button className="btn btn-warning">Send</button>
      </div>


    </div>
  );
};

export default Contact;