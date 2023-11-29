import mongoose from "mongoose";

const User=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        unique:false
    },
    Mobile:{
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
      type:String,
      required:true,
      unique:true
    }
})

const UserSchema=mongoose.model("Flipkart",User);
export default UserSchema;