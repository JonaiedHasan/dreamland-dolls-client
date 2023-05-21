/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToys = () => {

    const toy = useLoaderData();
    console.log(toy);
    const { _id, dollName, sellerName, userEmail, subCategory, price, rating, quantity, photo, details } = toy;
    const handleUpdateDoll = (event) => {
        event.preventDefault();

        const form = event.target;
        const dollName = form.dollName.value;
        const sellerName = form.sellerName.value;
        const userEmail = form.userEmail.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const details = form.details.value;

        const newToy = { dollName, sellerName, userEmail, subCategory, price, rating, quantity, photo, details }
        console.log(newToy)

        // send the data to the server
        fetch(`https://toy-market-place-server-jonaiedhasan.vercel.app/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data. modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toys Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })





        form.reset()

    }
    return (
        <div className='bg-[#f6e0ec] py-3 px-20'>
            <h1 className='text-3xl text-center font-bold text-color'>Update Toy</h1>

            <form onSubmit={handleUpdateDoll}>
                {/* 1st row */}
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Doll Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='dollName' defaultValue={dollName} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellerName'
                                defaultValue={sellerName}className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* 2nd row */}
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='userEmail'
                                defaultValue={userEmail} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <label className="input-group">
                            <input type="taste" name='subCategory' defaultValue={subCategory} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* 3rd row */}
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' defaultValue={price} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' defaultValue={rating}  className="input input-bordered md:w-full" />
                        </label>
                    </div>

                </div>

                {/* 4rth row */}
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photo' defaultValue={photo}className="input input-bordered md:w-full" />
                        </label>
                    </div>


                </div>

                <div className='mb-8'>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details'defaultValue={details} className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className='btn btn-block btn-primary' value="Update Toy" />
            </form>

        </div>
    );
};

export default UpdateToys;