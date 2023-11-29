import mongoose from "mongoose";

const cart=new mongoose.Schema({
    id:{
        type:String,
        unique:false
    },
    url:{
        type:String,
        unique:false
        
    },
    detailUrl:{
        type:String,
        unique:false
    },
    title:{
     type:Object,
     unique:false
    },
    price:{
        type:Object,
        unique:false
    },
    quantity:{
        type:Number,
        unique:false
    },
    description:{
        type:String,
        unique:false
    },
    discount:{
        type:String,
        unique:false
    },
    tagline:{
        type:String,
        unique:false
    }

})

const cartSchema=mongoose.model('cart',cart);
export default cartSchema;