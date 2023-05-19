/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../Components/AuthProvider';
import Swal from 'sweetalert2'


const AddToys = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const handleAddDoll = (event) =>{
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

        const newToy = {dollName,sellerName,userEmail,subCategory,price,rating,quantity,photo,details}
        console.log(newToy)
         
        // send the data to the server
        fetch('http://localhost:5000/allToys',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {console.log(data);
         
             if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toys added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
             }
         })





        form.reset()
        
    }
    return (
        <div className='bg-[#F4F3F0] p-20'>
            <h1 className='text-3xl mb-8 text-center font-bold'>Add a Toy</h1>

            <form  onSubmit={handleAddDoll}>
                {/* 1st row */}
                <div className='md:flex gap-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Doll Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='dollName' placeholder="Doll Name" className="input input-bordered md:w-full" />
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
                            <input type="text" name='price' placeholder="Enter price" className="input input-bordered md:w-full" />
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
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                    
                   
                </div>
               
                <div className='mb-8'>

                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Available Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className='btn btn-block btn-primary' value="Add Toy" />
            </form>

        </div>
    );
};

export default AddToys;