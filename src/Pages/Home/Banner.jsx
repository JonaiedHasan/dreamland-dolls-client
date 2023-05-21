/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
  return (
    <div>

      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/JnHrwxd/HD-wallpaper-pink-barbie-doll-toy-barbie.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-7xl font-bold  text-pink-50">
              Dreamland <br />
              <span className="mx-16">Dolls</span> <br />
            </h2>
            <p className="text-2xl font-semibold  mt-12 mb-12 text-pink-50">
              Explore the Enchanting World of Dreamland Dolls
            </p>
            <button className="btn-primary ">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;