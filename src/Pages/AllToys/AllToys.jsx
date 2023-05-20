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


  //  console.log(searchText)
  // useEffect(() =>{
  //   fetch(`http://localhost:5000/dollName/${searchText}`)
  //    .then(res => res.json())
  //    .then(data =>{
  //     console.log(data);
  //    })

  //  },[])

  const handleSearch = event => {
    event.preventDefault();
     const name = event.target.dollName.value;
     fetch(`http://localhost:5000/dollName/${name}`)
     .then(res => res.json())
     .then(data =>{
      setToys(data);
     })
    

     event.target.reset()
  }
  return (
    <div>
      <p className='text-center font-semibold text-5xl text-color my-5'>All category toys</p>
      <form onSubmit={handleSearch}>
        <div className='my-5 w-1/2 mx-auto'>
          <label className="flex items-center mx-auto">
            <input  type="text" name='dollName' placeholder='Search' className="input rounded-full input-bordered md:w-full" />
            <input type="submit" className='btn btn-primary' value="Search" />
          </label>
        </div>
      </form>
      <div className="overflow-x-auto w-full shadow-xl my-5">
        <table className=" table w-full h">
          {/* head */}
          <thead>
            <tr>
              <th>
                index
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
              toys.map((toy, index) => <ToysCard
                key={toy._id}
                toy={toy}
                index={index}
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