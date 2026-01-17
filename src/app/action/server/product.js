'use server'

const { connect, collections } = require("@/app/lib/dbConnect")

const productCollection= connect(collections.PRODUCTS);
 export const getAllProduct = async()=>{
    const product=await productCollection.find().toArray()
    return product;
}