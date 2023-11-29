import productsSchema from "./database/ProductsSchema.js";
import { products } from "./Products/products.js";

const defalutdata=async()=>{
try{
  await productsSchema.deleteMany({});
  await productsSchema.insertMany(products);
  console.log("data imported successfully")
}
catch(err){
    console.log("error while inserting data "+ err)
}
}
export default defalutdata;