/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div>
      <div className=" md:flex justify-around items-center w-full">
        <div className="relative">
         <div className='max-h-max'>
         <img src="https://i.ibb.co/JnHrwxd/HD-wallpaper-pink-barbie-doll-toy-barbie.jpg" alt="" />
         </div>
         <div className='absolute top-0 text-white bg-gradient-to-r from-[#090909]  to-[rgba(21, 21, 21, 0)] h-full flex'>
        <div className='my-auto ml-20'>
        <h2 className="text-7xl font-bold  text-color">
        Dreamland <br />
            <span className="mx-16">Dolls</span> <br />
          </h2>
          <p className="text-2xl font-semibold  mt-12 mb-12">
          Discover the World`s Most Delicious Destinations
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
         </div>
        </div>
        {/* <div className="p-10">
          <h2 className="text-7xl font-bold  text-color">
          Chef`s <br />
            <span className="mx-16">Kitchen</span> <br />
          </h2>
          <p className="text-2xl font-semibold text-slate-600 mt-12 mb-12">
          Discover the World`s Most Delicious Destinations
          </p>
          <button className="btn-primary">Learn More</button>
        </div> */}
      </div>
    </div>
    );
};

export default Banner;