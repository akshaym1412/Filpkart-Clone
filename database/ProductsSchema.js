import mongoose from "mongoose";

const products=new mongoose.Schema({
    id:{
        type:String,
    },
    img:{
        type:String,
        
    },
    title:{
        type:String
    },
    reviews:{
     type:String
    },
    prevPrice:{
        type:Number
    },
    newPrice:{
        type:Number
    },
    discount:{
        type:String
    },
    company:{
       type:String
    },
    color:{
        type:String
     },
     quantity:{
        type:Number
     },
    category:{
        type:String
    },
    subcategory:{
        type:String
    },
    tagline:{
        type:String
    }

})

const productsSchema=mongoose.model('Product',products);
export default productsSchema;