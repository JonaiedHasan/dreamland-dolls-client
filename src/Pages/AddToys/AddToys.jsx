/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';

const AddToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h1 className='text-3xl text-center font-bold'>Add a Toy</h1>

            <form >
                {/* 1st row */}
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellerName'
                                defaultValue={user?.displayName}
                                placeholder="Seller Name" className="input input-bordered md:w-full" />
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
                                defaultValue={user?.email}
                                placeholder="seller email" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <label className="input-group">
                            <input type="taste" name='subCategory' placeholder="Sub Category" className="input input-bordered md:w-full" />
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
                            <input type="text" name='Price' placeholder="Enter price" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="Please rate us" className="input input-bordered md:w-full" />
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
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Photo URL" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    
                   
                </div>
                {/* photo */}
                <div className='mb-8'>

                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className='btn btn-block' value="Add Coffee" />
            </form>

        </div>
    );
};

export default AddToys;