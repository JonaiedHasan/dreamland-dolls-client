/* eslint-disable no-unused-vars */
import React from 'react';
import { TbHeartFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ToysCard = ({toy}) => {
    console.log(toy);
    const {_id,toyName,sellerName, rating,photo,subCategory,description,price,quantity} = toy;
    return (
        <div>
             <div className="card border border-orange-400 card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="chef photo" className="w-52 h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl text-color  font-bold">{toyName}</h2>
          <div className='font-semibold flex flex-col gap-2'>
          <p className='text-lg font-semibold'>Seller: {sellerName}</p>
          <p>Sub-category: {subCategory}</p>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          </div>
          {/* <div className="flex items-center gap-2">
            <div>
              <TbHeartFilled className="text-blue-700"></TbHeartFilled>
            </div>
            <div>{rating}</div>
          </div> */}
          <div className="card-actions justify-end">
            <Link to={`/toysDetail/${_id}`}><button className="btn btn-outlined">View Details</button></Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ToysCard;