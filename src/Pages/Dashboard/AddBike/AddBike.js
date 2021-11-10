import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddBike = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {token} = useAuth();

    // onSubmit event handler
    const onSubmit = data => {
        const newBike = data;
        console.log("newBike", newBike)
        const url = 'http://localhost:5000/bikes';
        fetch(url, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBike)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {

                    alert("New Bike uploaded successfully");
                    reset();

                }
            })
    };

    return (
        <div className="addBike w-75 mx-auto my-5 border p-5">
            <h2 className="text-success text-center fw-bolder">Add a New Bike</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <label className="text-success fw-bold fs-5">Name:</label>
                <input className="mb-3" {...register("name", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">Description:</label>
                <textarea className="mb-3"  {...register("description", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}


                <label className="text-success fw-bold fs-5">price:</label>
                <input className="mb-3" type="number" {...register("price", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="text-success fw-bold fs-5">Image Url:</label>
                <input className="mb-3" {...register("imgUrl", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <button className="mx-auto btn btn-outline-success" type="submit"  >Submit</button>
            </form>
        </div >
    );
};

export default AddBike;