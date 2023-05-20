/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ToysCard from './ToysCard';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/allToys')
      // fetch('toys.json')
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])
  return (
    <div>
      <p className='text-center font-semibold text-5xl text-color my-5'>All category toys</p>
      <div className="overflow-x-auto w-full shadow-xl my-5">
        <table className=" table w-full h">
          {/* head */}
          <thead>
            <tr>
              <th>

              </th>
              <th>SELLER</th>
              <th>Toy</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody className=''>
            {/* row 1 */}

            {
              toys.map(toy => <ToysCard
                key={toy._id}
                toy={toy}
                toys={toys}
                setToys={setToys}
              ></ToysCard>)
            }
          </tbody>


        </table>

      </div>
    </div>
  );
};

export default AllToys;