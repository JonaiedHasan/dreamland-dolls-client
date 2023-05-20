/* eslint-disable no-unused-vars */
import React from 'react';
import { TbHeartFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ToysCard = ({ toy }) => {
  console.log(toy);
  const { _id, dollName, sellerName, rating, photo, subCategory, description, price, quantity } = toy;
  return (
    <tr>
      <th>
        
      </th>
      <td>{sellerName}</td>
      <td>{dollName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
      <Link to={`/toysDetail/${_id}`}><button className=" transition duration-200 text-white shadow-md  md:mb-0  px-4 py-2 md:px-5 md:py-3   rounded-xl   bg-gradient-to-r from-pink-800 via-pink-500 to-pink-800 inline-block">View Details</button></Link>
      </th>

    </tr>
  );
};

export default ToysCard;