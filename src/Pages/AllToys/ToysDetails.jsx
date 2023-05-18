// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
    
    const data = useLoaderData();
    console.log(data)
    
    return (
        <div>
            
        </div>
    );
};

export default ToysDetails;