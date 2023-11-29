import { Router } from "express";
import User from "../database/UserSchema.js";
import productsSchema from "../database/ProductsSchema.js";
import cartSchema from "../database/CartSchema.js";
import { checkout,paymentVerification } from "../controllers/paymentController.js";

const route=Router();

route.post('/login',async(req,res)=>{
 const {Mobile,Password}=req.body;
 const value=await User.findOne({Mobile:Mobile})
 if(value){
    if(value.Password===Password){
    res.json(value);
    }
    else{
        res.json("Wrong password"); 
    }
 }
 else{
    res.json("User doesn't exit");
 }
})
route.post("/signup",async(req,res)=>{
    const data= await new User(req.body);
    const{Mobile,Email}=data;
    const exist=await User.findOne({Mobile:Mobile}&&{Email:Email})
    if(!exist){
        data.save();
        res.json({
            status:"Sucess",
            data
        })}
    else{
       res.json("User exist");
}})

route.get("/product/:id",async(req,res)=>{
const {id}=req.params;
const data=await productsSchema.findOne({'id':id})
res.status(200).json(data)
})
route.post("/cart",async(req,res)=>{
    try{
    const data = await new cartSchema(req.body);
    data.save();
    res.status(200).json({data});
    }
    catch(err){
        console.log(err);
    }
    
})

route.delete("/remove/:id",async(req,res)=>{
    const {id}=req.params;
    const data=await cartSchema.deleteOne({"id":id})
    res.status(200).json(data)
})

route.post("/checkout",checkout);

route.post("/paymentverification",paymentVerification)

 export default route;
