/* eslint-disable no-unused-vars */
import React from 'react';

const OfferSection = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://m.media-amazon.com/images/I/41aepGE5VEL._AC_.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-center w-1/2'>
                        <p className="text-5xl font-bold text-color">Get to know the latest offers</p>
                        <p className="py-6">Subscribe and get notified at first on the latest update and offers!!</p>
                        <div className='my-5  mx-auto'>
                            <div className="flex items-center justify-center mx-auto">
                                <input type="text" name='dollName' placeholder='Email Address' className="input md:w-full bg-pink-200" />
                                <input type="submit" className='btn btn-primary' value="Send" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;