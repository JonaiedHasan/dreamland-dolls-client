/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ToysCard from './ToysCard';

const AllToys = () => {
    const [toys, setToys] = useState([]);
    useEffect( ()=>{
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data => setToys(data))
    },[])
    return (
        <div>
          <p className='text-center font-semibold text-5xl text-color my-5'>All category toys</p>
        <div className='gap-4 grid grid-cols-1 md:grid-cols-2 my-container' >
        {
            toys.map(toy => <ToysCard key={toy._id}
            toy={toy}></ToysCard>)
          }
        </div>
        </div>
    );
};

export default AllToys;