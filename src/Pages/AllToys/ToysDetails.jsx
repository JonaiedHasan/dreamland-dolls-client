// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const ToysDetails = () => {

    const data = useLoaderData();
    // console.log(data)
    const { dollName, sellerName, userEmail, subCategory, price, rating, quantity, photo, details } = data;


    return (
        <div>
            <div className="my-container flex justify-center items-center">
                <div className="flex  card card-side bg-base-100 shadow-xl rounded-2xl">

                    <div className="w-2/3 ml-10 my-10 flex flex-col justify-center gap-6 mr-4">
                        <h2 className="card-title text-4xl text-color font-bold">{dollName}</h2>
                        <p className="text-slate-400">{details}</p>
                        <p className='font-bold text-lg'>Seller: {sellerName}</p>

                        <div className="font-semibold flex flex-col gap-7">
                            <p>Email: {userEmail}</p>
                            <div className='flex gap-28'>
                                <p>Price: ${price}</p>
                                <p>Available Quantity: {quantity}</p>
                            </div>
                            <p >Category:  {subCategory}</p>
                            {/* <p>{details}</p> */}
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                className="text-yellow-400 mt-6"
                                readOnly
                            />
                            <p>Rating: {rating}</p>
                        </div>
                    </div>
                    <figure className='w-1/3'>
                        <img src={photo} alt="Chef" className="p-6" />
                    </figure>
                </div>
            </div>
            {/* <LazyLoad>
                <div className="my-container grid sm:grid-cols-1 md:grid-cols-2  gap-6 justify-center items-center">
                    {recipe.map((dish) => (
                        <RecipeCard key={dish.name} dish={dish} />
                    ))}
                </div>
            </LazyLoad> */}
        </div>
    );
};

export default ToysDetails;