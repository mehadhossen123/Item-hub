'use server'

import { authOptions } from "@/app/lib/AuthOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

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

export const addProduct=async(product)=>{
    const { user } =await getServerSession(authOptions);
    console.log("usr in the srver ",user);

    if(!user){
        return {success:false,message:"login required"}
    }
    // add product 
    const newProduct={
        ...product,createdAt:new Date().toISOString(),addedBy:user?.email
    }
    const result=await productCollection.insertOne(newProduct);
    return{
       success:true,result
    }
   

}