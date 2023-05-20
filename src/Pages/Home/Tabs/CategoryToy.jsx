/* eslint-disable no-unused-vars */
import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryToy = ({ toy }) => {
    const {_id, dollName,  rating, photo, price, } = toy;
    return (
        <div className="m-3 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='w-52 h-64' src={photo} alt="Doll" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {dollName}</h2>
                <p className='font-semibold'>Price: {price}</p>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    className="text-yellow-400 mt-6"
                    readOnly
                />
                <p className='font-semibold'>Rating: {rating}</p>
                <div className="card-actions justify-end">
                   <Link to={`/toysDetail/${_id}`}>
                   <button className="btn btn-primary">View Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryToy;