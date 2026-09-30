import mongoose from "mongoose";
// const mongoose =require('mongoose')


export async function connectDb(){
    try{
        await mongoose.connect(process.env.MONGO_URI)                      
        console.log("db is connected")
    }
    catch(e){
        console.log(e,'db is not connected')
    }
}