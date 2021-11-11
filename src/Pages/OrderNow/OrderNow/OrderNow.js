import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const OrderNow = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const [bikeInfo, setBikeInfo] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    //getting bike detail by id
    useEffect(() => {
        fetch(`https://immense-plateau-20554.herokuapp.com/bike/${id}`)
            .then(res => res.json())
            .then(data => {
                setBikeInfo(data);
            })
    }, [id])



    // handling form submit
    const onSubmit = data => {
        const order = data;
        order.bikeId = id;
        order.status = "pending";
        // positing the data to the server and db
        fetch('https://immense-plateau-20554.herokuapp.com/proceedOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    history.push('/orderConfirmed');
                }
            })
    }

    return (
        <div>
            <Navigation></Navigation>
            <Row xs={1} sm={1} md={2} lg={2} className="mx-auto">
                {/*Bike detail section */}
                <Col className="mx-auto">
                    <Card style={{ width: '18rem' }} className="w-75 mx-auto py-3">
                        <Card.Img variant="top" src={bikeInfo?.imgUrl} />
                        <Card.Body>
                            <Card.Title className="fs-2">{bikeInfo?.name}</Card.Title>
                            <Card.Text>
                                <span className="d-block fw-bold">$ {bikeInfo?.price}</span>
                                {bikeInfo?.description}

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="mx-auto">
                    <div className=" w-75 mx-auto my-5 border p-5">
                        <h2 className="text-dark text-center fw-bolder">Order Process</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                            <label className="text-dark fw-bold fs-5">Full Name:</label>
                            <input className="mb-3" defaultValue={user.displayName} {...register("name", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <label className="text-dark fw-bold fs-5">Email:</label>
                            <input className="mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <label className="text-dark fw-bold fs-5">Address:</label>
                            <input className="mb-3" {...register("address", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <label className="text-dark fw-bold fs-5">City:</label>
                            <input className="mb-3" {...register("city", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <label className="text-dark fw-bold fs-5">Phone:</label>
                            <input className="mb-3" {...register("phone", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <button className="mx-auto btn btn-dark" type="submit"  >Proceed to Order</button>
                        </form>
                    </div >
                </Col>

            </Row>
            <Footer></Footer>
        </div>


    );
};

export default OrderNow;