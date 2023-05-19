/* eslint-disable no-unused-vars */
import React from 'react';

const Pic = () => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="aspect-w-1 aspect-h-1">
                    <img src="path_to_image1.jpg" alt="Image 1" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                    <img src="path_to_image2.jpg" alt="Image 2" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                    <img src="path_to_image3.jpg" alt="Image 3" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                    <img src="path_to_image4.jpg" alt="Image 4" className="object-cover w-full h-full" />
                </div>
                <div className="aspect-w-1 aspect-h-1">
                    <img src="path_to_image5.jpg" alt="Image 5" className="object-cover w-full h-full" />
                </div>
                {/* Add more grid items for additional images */}
            </div>

        </div>
    );
};

export default Pic;