'use server'

import { ObjectId } from "mongodb";

const { connect, collections } = require("@/app/lib/dbConnect")

const productCollection= connect(collections.PRODUCTS);
 export const getAllProduct = async()=>{
    const product=await productCollection.find().toArray()
    return product;
}


export const getSingleProduct=async(id)=>{
    if(id.length!==24){
        return{
            success:false
        }

    }
    const query={_id:new ObjectId(id)};
    const result=await productCollection.findOne(query);
    return result;
}