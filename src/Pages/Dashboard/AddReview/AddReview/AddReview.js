import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, isLoading } = useAuth();

    // handling form submit
    const onSubmit = data => {
        const review = data;
        console.log("review", review)
        // positing the data to the server and db
        fetch('https://immense-plateau-20554.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    reset();
                    alert("Review has posted")
                }
            })
    }

    if (isLoading) {
        return <div className="d-flex w-75 mx-auto my-5 justify-content-center">
            <div className="me-3">
                <Spinner animation="border" variant="primary" />
            </div>
            <div><h4>Loading...</h4></div>
        </div>
    }

    return (

        <div className=" w-75 mx-auto my-5 border p-5">
            <h2 className="text-dark text-center fw-bolder">Review Process</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <label className="text-dark fw-bold fs-5">Full Name:</label>
                <input className="mb-3" defaultValue={user.displayName} {...register("name", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-dark fw-bold fs-5">Email:</label>
                <input className="mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}



                <label className="$text-dark fw-bold fs-5">Write You Review:</label>
                <textarea className="mb-3"  {...register("reviewText", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <label className="$text-dark fw-bold fs-5">Give us Star (0-5):</label>
                <input className="mb-3" type="number" min="0" max="5" step="0.1" {...register("starNumber", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}


                <button className="mx-auto btn btn-dark" type="submit"  >Confirm Review</button>
            </form>
        </div >

    );
};

export default AddReview;