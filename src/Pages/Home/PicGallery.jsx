/* eslint-disable no-unused-vars */
import React from 'react';

const PicGallery = () => {
    return (
        <div className='my-10'>
             <p className='text-center font-semibold text-5xl text-color my-5'>The Finest Dolls Gallery</p>
           
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-1/2 mx-auto">
                    <div className="aspect-w-1 aspect-h-1 border-pink-200  border-8 shadow-xl">
                        <img src="https://m.media-amazon.com/images/I/815MWn31kIL._SX569_.jpg" alt="Image 1" className="object-cover w-full h-full" />
                    </div>
                    <div>

                    </div>
                    <div className="aspect-w-1 aspect-h-1 border-pink-200  border-8 shadow-xl">
                        <img src="https://m.media-amazon.com/images/I/71JdlF7JKIL._SX466_.jpg" alt="Image 2" className="object-cover w-full h-full" />
                    </div>
                    <div></div>
                    <div className="aspect-w-1 aspect-h-1 h-[100%] border-pink-200  border-8 shadow-xl">
                        <img src="https://m.media-amazon.com/images/I/81neK+AeGhL._AC_UF894,1000_QL80_.jpg" alt="Image 3" className="object-cover w-full h-full" />
                    </div>
                    <div></div>
                    <div className="aspect-w-1 aspect-h-1 h-[80%] border-pink-200  border-8 shadow-xl">
                        <img src="https://m.media-amazon.com/images/I/810GK68cbYL._SL1500_.jpg" alt="Image 4" className="object-cover w-full h-full" />
                    </div>
                    <div className=' h-[80%] aspect-h-1 '></div>
                    <div className="aspect-w-1 h-[80%] aspect-h-1 border-pink-200  border-8 shadow-xl">
                        <img src="https://images.unsplash.com/photo-1632456960235-4b72d18fbecd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRvbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="Image 5" className="object-cover w-full h-full " />
                    </div>
                    {/* Add more grid items for additional images */}
                </div>

            </div>
        </div>
    );
};

export default PicGallery;