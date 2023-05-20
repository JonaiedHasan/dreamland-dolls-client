/* eslint-disable no-unused-vars */
import React from 'react';
import { TbGenderFemale,TbPremiumRights ,TbTextSize , TbGenderAgender, TbGift, TbBrandPowershell} from "react-icons/tb";

const FeatureSection = () => {
    return (
        <div className='my-20'>
            <p className='text-center font-semibold text-5xl text-color my-5'>Discover Our Doll Features</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-2/3 mx-auto'>
                <div className='bg-pink-100 p-4 rounded-xl shadow-md'>
                    <div className='bg-blue-100 p-2 mb-4 w-10 rounded'><TbGenderFemale className=" mx-auto text-2xl " /></div>
                    <p className='font-semibold py-2'>Distinctive Doll Features</p>
                    <p className='font-md text-gray-600'> Highlighting Unique Traits</p>
                </div>
                <div className='bg-pink-100 p-4 rounded-xl shadow-md'>
                    <div className='bg-blue-100 p-2 mb-4 w-10 rounded'><TbPremiumRights className=" mx-auto text-2xl " /></div>
                    <p className='font-semibold py-2'>Premium Quality Dolls</p>
                    <p className='font-md text-gray-600'>Superior Craftsmanship Guaranteed</p>
                </div>
                <div className='bg-pink-100 p-4 rounded-xl shadow-md'>
                    <div className='bg-blue-100 p-2 mb-4 w-10 rounded'><TbTextSize className=" mx-auto text-2xl " /></div>
                    <p className='font-semibold py-2'>Sizing and Dimensions</p>
                    <p className='font-md text-gray-600'>Accurate Measurements Provided</p>
                </div>
                <div className='bg-pink-100 p-4 rounded-xl shadow-md'>
                    <div className='bg-blue-100 p-2 mb-4 w-10 rounded'><TbGenderAgender className=" mx-auto text-2xl " /></div>
                    <p className='font-semibold py-2'>Age-Appropriate Dolls</p>
                    <p className='font-md text-gray-600'>Suitable for All Ages</p>
                </div>
                <div className='bg-pink-100 p-4 rounded-xl shadow-md'>
                    <div className='bg-blue-100 p-2 mb-4 w-10 rounded'><TbGift className=" mx-auto text-2xl " /></div>
                    <p className='font-semibold py-2'>Special Doll Features</p>
                    <p className='font-md text-gray-600'> Exclusive Characteristics Showcased</p>
                </div>
                <div className='bg-pink-100 p-4 rounded-xl shadow-md'>
                    <div className='bg-blue-100 p-2 mb-4 w-10 rounded'><TbBrandPowershell className=" mx-auto text-2xl " /></div>
                    <p className='font-semibold py-2'>Warranty and Guarantee</p>
                    <p className='font-md text-gray-600'>Product Assurance Provided</p>
                </div>
               
            </div>
        </div>
    );
};

export default FeatureSection;