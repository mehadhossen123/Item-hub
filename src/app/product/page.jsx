import React from 'react';
import { getAllProduct } from '../action/server/product';

const ProductPage =async () => {
    const products=await getAllProduct();
    console.log(products)
    return (
        <div className='mt-20'> 
            <h1>This is product page </h1>
            
        </div>
    );
};

export default ProductPage;