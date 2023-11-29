import express, { json } from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import route from './Routes/routes.js';
import cors from 'cors';
import productsSchema from "./database/ProductsSchema.js";
import defalutdata from './default.js';
import razorpay from "razorpay";
import path from 'path';

const __dirname=path.resolve();
dotenv.config();
const app=express();
export const instance = new razorpay({
    key_id: process.env.KEY,
    key_secret: process.env.SECRET,
  });
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use("/api",route)

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "frontend", "build")));
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });

app.get("/api/getkey",(req,res)=>{
    return res.status(200).json({key:process.env.KEY})
})
app.get("/products",async(req,res)=>{
try{
const data=await productsSchema.find({})
if(!data){
 return res.status(404).json({msg: "User data not found"});
}
res.status(200).json(data)
} catch(error){
    res.status(500).json({error: error});
}
}
)
const port=process.env.PORT||8000;
const Username=process.env.DB_Username;
const Password=process.env.DB_Password;
app.listen(port,()=>{
    console.log(`Server is running at the port ${port}`);
    connection(Username,Password);
})

