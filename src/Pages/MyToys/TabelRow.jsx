/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TabelRow = ({ toy ,toys, setToys}) => {
   
    const { _id, dollName, sellerName, userEmail, subCategory, price, rating, quantity, photo, details } = toy;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-market-place-server-jonaiedhasan.vercel.app/myToys/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                     
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining)
                        }
                    })
            }

        })
    }

    return (

        <tr>
            <th>
                <button onClick={() => { handleDelete(_id) }} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{dollName}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/updateToy/${_id}`}>
                <button className=" transition duration-200 text-white shadow-md  md:mb-0  px-4 py-2 md:px-5 md:py-3   rounded-xl   bg-gradient-to-r from-pink-800 via-pink-500 to-pink-800 inline-block">Update</button>
                </Link>
              
              {/* <button className="btn btn-outline btn-ghost btn-xs">Update</button>
               */}

            </th>

        </tr>

    );
};

export default TabelRow;