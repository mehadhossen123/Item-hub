
import { getSingleProduct } from '@/app/action/server/product';
import React from 'react';

const SingleProductPage =async ({params}) => {
    const {id}=await params;
    const product=await getSingleProduct(id)
   console.log(product)
    return (
        <div className='mt-20'>
            <h1> Single product page </h1>
            
        </div>
    );
};

export default SingleProductPage;